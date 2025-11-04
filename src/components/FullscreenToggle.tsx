import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Maximize, Minimize } from 'lucide-react'
export default function FullscreenToggle() {
  const [isFs, setIsFs] = useState(false)
  useEffect(() => {
    const onChange = () => setIsFs(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])
  async function enter() {
    try {
      await document.documentElement.requestFullscreen()
    } catch {}
  }
  async function exit() {
    try {
      await document.exitFullscreen()
    } catch {}
  }
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={isFs ? exit : enter}
      title={isFs ? 'Keluar Fullscreen' : 'Masuk Fullscreen'}
    >
      {isFs ? <Minimize size={16} /> : <Maximize size={16} />}
      {isFs ? 'Keluar' : 'Fullscreen'}
    </Button>
  )
}
