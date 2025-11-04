import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useMemo, useState } from 'react'

export type Question = {
  prompt: string
  choices: string[]
  answerIndex: number
  explanation?: string
}

type Props = {
  batches: Question[][]
  compact?: boolean
  hideMeta?: boolean
}

export default function QuizEngine({ batches, compact = false, hideMeta = false }: Props) {
  const [batchIndex, setBatchIndex] = useState(0)
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showExplain, setShowExplain] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [batchScore, setBatchScore] = useState(0)
  const [openFinish, setOpenFinish] = useState(false)

  const currentBatch = useMemo(() => batches[batchIndex] ?? [], [batches, batchIndex])
  const current = currentBatch[qIndex]

  useEffect(() => {
    try {
      window.dispatchEvent(new CustomEvent('agm-score', { detail: batchScore }))
    } catch {}
  }, [batchScore])

  if (!current)
    return <div className="card text-sm text-gray-600">Tidak ada soal pada batch ini.</div>

  const nextQuestion = () => {
    if (qIndex + 1 < currentBatch.length) {
      setQIndex((i) => i + 1)
      setSelected(null)
      setShowExplain(false)
    } else setOpenFinish(true)
  }

  const handleSelect = (i: number) => {
    if (selected != null || animating) return
    setSelected(i)
    const correct = i === current.answerIndex
    if (correct) {
      setBatchScore((s) => s + 10)
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
        nextQuestion()
      }, 1200)
    } else setShowExplain(true)
  }

  const restartSameBatch = () => {
    setOpenFinish(false)
    setQIndex(0)
    setSelected(null)
    setShowExplain(false)
    setBatchScore(0)
  }
  const goNextBatch = () => {
    setOpenFinish(false)
    setBatchScore(0)
    setSelected(null)
    setShowExplain(false)
    setQIndex(0)
    setBatchIndex((b) => (b + 1 < batches.length ? b + 1 : 0))
  }

  const tPrompt = compact ? 'text-base' : 'text-lg'
  const tMeta = compact ? 'text-[11px]' : 'text-xs'
  const tChoice = compact ? 'px-3 py-2 text-[13px]' : 'px-4 py-3'

  return (
    <div className="h-full min-h-0 flex flex-col">
      <div
        className="
        card flex-1 min-h-0 overflow-y-auto overscroll-y-contain touch-pan-y
        pr-2 -mr-2
        pb-[max(88px,env(safe-area-inset-bottom))] md:pb-6
      "
      >
        {/* Sticky header: nomor soal selalu terlihat */}
        <div className="-mx-4 px-4 py-2 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          {!hideMeta && (
            <div className="mb-1 text-xs text-gray-600">
              Batch {batchIndex + 1} • Skor: {batchScore}
            </div>
          )}
          <div className={`${tMeta} text-gray-600`}>
            Soal {qIndex + 1} dari {currentBatch.length}
          </div>
          <h3 className={`${tPrompt} font-semibold mt-1`}>{current.prompt}</h3>
        </div>

        {/* Pilihan jawaban */}
        <div className={`${compact ? 'space-y-2' : 'space-y-3'} mt-3`}>
          {current.choices.map((c, i) => {
            const isSel = selected === i
            const isCorrect = selected != null && i === current.answerIndex
            const isWrong = selected != null && isSel && !isCorrect
            const stateClass = isCorrect ? 'answer-correct' : isWrong ? 'answer-wrong' : ''
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected != null || animating}
                className={`w-full text-left rounded-xl border bg-white hover:bg-gray-50 transition ${tChoice} ${stateClass} ${isCorrect ? 'correct-pop' : ''}`}
              >
                <span className="font-medium lowercase mr-1">{String.fromCharCode(97 + i)}.</span>
                {c}
              </button>
            )
          })}
        </div>

        {/* Penjelasan + CTA sticky bawah agar selalu terlihat */}
        {showExplain && (
          <>
            <div className="mt-3 text-sm text-gray-700">
              <b>Catatan:</b> {current.explanation || 'Perhatikan kembali konsep di materi ya.'}
            </div>
            <div className="z-10 -mx-4 px-4 pt-3 pb-2 bg-gradient-to-t from-white/95 to-white/0 backdrop-blur">
              <button onClick={nextQuestion} className="btn btn-ghost w-full sm:w-auto">
                Lanjut
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal Selesai */}
      <Dialog.Root open={openFinish} onOpenChange={setOpenFinish}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,520px)] rounded-2xl bg-white p-5 shadow-lg">
            <Dialog.Title className="text-xl font-bold text-[var(--color-agmBlue)] mb-1">
              🎉 Selesai Batch {batchIndex + 1}!
            </Dialog.Title>
            <p className="text-sm">
              Skor kamu: <b>{batchScore}</b> / {currentBatch.length * 10}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button onClick={restartSameBatch} className="btn btn-primary">
                Main lagi
              </button>
              <button onClick={goNextBatch} className="btn btn-ghost">
                Batch berikut
              </button>
            </div>
            <Dialog.Close className="absolute top-2 right-3 text-gray-500 hover:text-gray-700">
              ✕
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
