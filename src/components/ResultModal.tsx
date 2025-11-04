import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type Props = {
  open: boolean
  score: number
  onReplay: () => void
  onNextBatch: () => void
  lastBatch?: boolean
}

export default function ResultModal({ open, score, onReplay, onNextBatch, lastBatch }: Props) {
  return (
    <Dialog open={open}>
      <DialogContent>
        <h3 className="text-2xl font-black text-agmBlue text-center">Selesai!</h3>
        <p className="mt-2 text-center">
          Skor kamu: <b>{score}</b>
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button variant="secondary" onClick={onReplay}>
            Main Lagi
          </Button>
          <Button onClick={onNextBatch}>{lastBatch ? 'Kembali ke Beranda' : 'Soal Baru'}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
