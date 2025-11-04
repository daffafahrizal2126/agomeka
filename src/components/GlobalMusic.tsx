import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function GlobalMusic() {
  const RAW_SRC = "/audio/[no copyright music] 'One Thing' cute background music.mp3"
  const SRC = encodeURI(RAW_SRC)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [on, setOn] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('music:on')
      return saved ? saved === '1' : true
    } catch {
      return true
    }
  })
  const [playing, setPlaying] = useState(false)
  const [awaitingGesture, setAwaitingGesture] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('music:on', on ? '1' : '0')
    } catch {}
  }, [on])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnd = () => setPlaying(false)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('ended', onEnd)
    }
  }, [])

  const ensurePlay = async () => {
    const a = audioRef.current
    if (!a) return
    try {
      a.muted = false
      a.volume = 0.6
      await a.play()
      setAwaitingGesture(false)
    } catch {
      setAwaitingGesture(true)
    }
  }

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    if (on) {
      a.volume = 0.6
      a.muted = true
      a.play()
        .then(() => {
          ensurePlay()
        })
        .catch(() => {
          setAwaitingGesture(true)
        })
    } else {
      a.pause()
      a.currentTime = 0
    }
  }, [on])

  useEffect(() => {
    const handler = () => {
      if (on && (awaitingGesture || audioRef.current?.paused)) ensurePlay()
    }
    const events: (keyof DocumentEventMap | keyof WindowEventMap)[] = [
      'pointerdown',
      'touchstart',
      'keydown',
      'click',
      'visibilitychange',
      'fullscreenchange',
    ]
    events.forEach((ev) =>
      document.addEventListener(ev as any, handler as any, { passive: true } as any)
    )
    window.addEventListener('focus', handler as any)
    return () => {
      events.forEach((ev) => document.removeEventListener(ev as any, handler as any))
      window.removeEventListener('focus', handler as any)
    }
  }, [on, awaitingGesture])

  const onToggle = async () => {
    const a = audioRef.current
    if (!a) return
    if (on) {
      if (!playing) {
        await ensurePlay()
      } else {
        a.pause()
        setOn(false)
      }
    } else {
      setOn(true)
      await ensurePlay()
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={SRC}
        loop
        preload="auto"
        playsInline
        crossOrigin="anonymous"
        className="hidden"
      />
      <button
        onClick={onToggle}
        title={on ? (playing ? 'Matikan musik' : 'Mulai musik') : 'Nyalakan musik'}
        className="fixed bottom-3 right-3 z-50 inline-flex items-center gap-2 rounded-full
                   bg-[var(--color-agmBlue)]/90 text-white shadow-lg px-3 py-2
                   hover:bg-[var(--color-agmBlue)] focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span className="text-xs font-semibold hidden sm:inline">
          {on ? (playing ? 'Musik ON' : 'Mulai musik') : 'Musik OFF'}
        </span>
      </button>
    </>
  )
}
