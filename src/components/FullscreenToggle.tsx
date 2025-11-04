import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Maximize, Minimize } from 'lucide-react'

function isInFullscreen() {
  const d: any = document
  return !!(d.fullscreenElement || d.webkitFullscreenElement || d.msFullscreenElement)
}

async function requestFs(el: HTMLElement) {
  const anyEl: any = el
  if (anyEl.requestFullscreen) return anyEl.requestFullscreen()
  if (anyEl.webkitRequestFullscreen) return anyEl.webkitRequestFullscreen()
  if (anyEl.msRequestFullscreen) return anyEl.msRequestFullscreen()
}

async function exitFs() {
  const d: any = document
  if (d.exitFullscreen) return d.exitFullscreen()
  if (d.webkitExitFullscreen) return d.webkitExitFullscreen()
  if (d.msExitFullscreen) return d.msExitFullscreen()
}

async function lockLandscapeIfSupported() {
  const anyScreen: any = screen
  try {
    if (anyScreen.orientation?.lock) {
      await anyScreen.orientation.lock('landscape')
    }
  } catch {
    // Abaikan: tidak semua browser mengizinkan lock
  }
}

async function unlockOrientationIfSupported() {
  const anyScreen: any = screen
  try {
    if (anyScreen.orientation?.unlock) {
      anyScreen.orientation.unlock()
    }
  } catch {}
}

export default function FullscreenToggle() {
  const [isFs, setIsFs] = useState<boolean>(isInFullscreen())

  useEffect(() => {
    const onChange = () => setIsFs(isInFullscreen())

    document.addEventListener('fullscreenchange', onChange)
    // Prefix untuk kompatibilitas Safari/legacy
    document.addEventListener('webkitfullscreenchange' as any, onChange)
    document.addEventListener('msfullscreenchange' as any, onChange)

    // Sinkronkan state awal jika komponen mount setelah FS aktif
    setIsFs(isInFullscreen())

    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      document.removeEventListener('webkitfullscreenchange' as any, onChange)
      document.removeEventListener('msfullscreenchange' as any, onChange)
    }
  }, [])

  async function enter() {
    try {
      await requestFs(document.documentElement)
      await lockLandscapeIfSupported()
      // Tidak perlu setIsFs(true); event fullscreenchange akan menyinkronkan
    } catch {
      // diamkan
    }
  }

  async function exit() {
    try {
      await exitFs()
      await unlockOrientationIfSupported()
      // Event fullscreenchange akan menyinkronkan ke false
    } catch {
      // diamkan
    }
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={isFs ? exit : enter}
      title={isFs ? 'Keluar Fullscreen' : 'Masuk Fullscreen'}
      aria-pressed={isFs}
    >
      {isFs ? <Minimize size={16} /> : <Maximize size={16} />}
      {isFs ? 'Keluar' : 'Fullscreen'}
    </Button>
  )
}
