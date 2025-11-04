import ScoreBadge from '@/components/ScoreBadge'
import FullscreenToggle from './FullscreenToggle'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      {/* Navbar fixed di atas */}
      <header className="fixed top-0 left-0 w-full bg-[var(--color-agmRed)] text-white shadow-md z-50">
        <div
          className="
            mx-auto flex items-center justify-between gap-2 sm:gap-3 md:gap-4 
            px-3 sm:px-4 md:px-6 
            py-1.5 sm:py-2 md:py-3
            max-w-6xl
          "
        >
          <div className="flex items-center gap-3">
            <Link
              to="/"
              title="Kembali ke Beranda"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
            >
              <Home size={20} />
            </Link>
            <span className="font-railey text-xl md:text-2xl select-none">AGOMEKA</span>
          </div>

          {/* Skor + fullscreen */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ScoreBadge />
            <FullscreenToggle />
          </div>
        </div>
      </header>

      {/* Spacer supaya konten tidak ketutupan navbar */}
      <div className="h-[42px] sm:h-[52px] md:h-[64px]" />
    </>
  )
}
