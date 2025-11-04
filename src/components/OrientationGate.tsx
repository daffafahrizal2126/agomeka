import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

export default function OrientationGate({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();                              // <-- Pindah ke atas (selalu dipanggil)
  const [ready, setReady] = useState(!isMobile)
  const [error, setError] = useState<string | null>(null)

  // Dengarkan keluar/masuk fullscreen SELALU (di HP saja)
  useEffect(() => {
    if (!isMobile) return
    const onFs = () => {
      const fs = !!document.fullscreenElement
      if (!fs) {
        setReady(false)
        try { (screen.orientation as any)?.unlock?.() } catch {}
        navigate('/', { replace: false })
      }
    }
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [navigate])

  // Saat belum siap di HP: tunggu satu gesture untuk minta fullscreen + lock landscape
  useEffect(() => {
    if (!isMobile || ready) return

    const handler = async () => {
      try {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen()
        }
        const anyScreen: any = screen
        if (anyScreen.orientation?.lock) {
          try { await anyScreen.orientation.lock('landscape') } catch {}
        }
      } catch (e: any) {
        setError(e?.message || 'Gagal masuk fullscreen.')
      } finally {
        setReady(true)
      }
    }

    window.addEventListener('click', handler, { once: true })
    window.addEventListener('touchend', handler, { once: true })
    return () => {
      window.removeEventListener('click', handler)
      window.removeEventListener('touchend', handler)
    }
  }, [ready])

  // UI
  if (ready) return <>{children}</>

  return (
    <div className="fullscreen-gate">
      <div className="card max-w-md">
        <h2 className="text-xl font-bold text-agmBlue">Masuk Fullscreen</h2>
        <p className="mt-2 text-sm">
          Sentuh/klik sekali untuk masuk <b>fullscreen</b>. Di HP akan mencoba mengunci <b>landscape</b> (jika didukung).
        </p>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  )
}
