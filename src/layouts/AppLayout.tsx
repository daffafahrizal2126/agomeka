import { Outlet, useLocation } from 'react-router-dom'
import OrientationGate from '@/components/OrientationGate'
import Navbar from '@/components/Navbar'
import ScoreBadge from '@/components/ScoreBadge'
import FullscreenToggle from '@/components/FullscreenToggle'
import GlobalMusic from '@/components/GlobalMusic'

export default function AppLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isDaftarIsi = pathname === '/daftar-isi'

  return (
    <OrientationGate>
      <div className="app-shell">
        {/* Header hanya muncul kalau bukan halaman beranda */}
        {!isHome && (
          <header className="fixed inset-x-0 top-0 h-10 bg-[var(--color-agmRed)] text-white z-50">
            <div className="h-full px-2 flex items-center gap-2">
              <Navbar />
              <div className="ml-auto flex items-center gap-2">
                <ScoreBadge />
                <FullscreenToggle />
              </div>
            </div>
          </header>
        )}

        {/* Gunakan background berbeda untuk home & halaman lain */}
        <main
          className={`absolute inset-x-0 ${isHome ? 'top-0' : 'top-10'} bottom-0 overflow-hidden`}
          style={{
            backgroundImage: "url('/assets/bg1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Outlet />
        </main>

        {/* GlobalMusic hanya aktif jika berada di halaman /daftar-isi */}
        <div className={`${isDaftarIsi ? 'block' : 'hidden'}`}>
          <GlobalMusic />
        </div>
      </div>
    </OrientationGate>
  )
}
