import { useEffect, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function ScoreBadge() {
  const [score, setScore] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScore = (e: Event) => {
      const val = (e as CustomEvent<number>).detail ?? 0
      setScore(val)
      // animasi kecil saat skor berubah
      if (ref.current) {
        ref.current.animate(
          [
            { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0,0,0,0)' },
            { transform: 'scale(1.06)', boxShadow: '0 6px 18px rgba(0,0,0,.12)' },
            { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0,0,0,0)' },
          ],
          { duration: 350, easing: 'ease-out' }
        )
      }
    }
    window.addEventListener('agm-score', onScore as any)
    return () => window.removeEventListener('agm-score', onScore as any)
  }, [])

  return (
    <div
      ref={ref}
      title="Skor batch saat ini"
      className="inline-flex items-center gap-1 rounded-full border border-white/30
                 bg-white/20 backdrop-blur px-2.5 py-1 text-xs font-semibold text-white"
    >
      <Sparkles size={14} className="opacity-90" />
      <span className="opacity-80">Skor:</span>
      <span className="px-1.5 rounded-md bg-white/30 text-[11px]">{score}</span>
    </div>
  )
}
