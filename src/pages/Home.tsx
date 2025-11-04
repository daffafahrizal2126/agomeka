import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* dekor pojok */}
      <img
        src="/assets/obj.png"
        alt=""
        className="pointer-events-none select-none opacity-20 absolute -left-10 -bottom-10 w-64 rotate-6"
      />
      <img
        src="/assets/obj.png"
        alt=""
        className="pointer-events-none select-none opacity-20 absolute -right-10 -top-10 w-72 -rotate-6"
      />

      {/* judul + subjudul + tombol */}
      <div className="absolute left-40 top-1/2 -translate-y-1/2">
        <h1 className="text-agmRed leading-none font-railey text-7xl font-bold">AGOMEKA</h1>
        <p className="mt-4 text-2xl font-bold text-agmBlue">
          AKU JAGO MENYUSUN KALIMAT
          <br />
          BERBASIS KEARIFAN LOKAL
        </p>
        <div className="mt-8">
          <Link to="/daftar-isi">
            <Button size="lg">Mulai</Button>
          </Link>
        </div>
      </div>

      {/* karakter kanan besar */}
      <img
        src="/assets/char1.png"
        alt="Karakter"
        className="absolute bottom-0 right-8 h-[92%] object-contain"
      />
    </div>
  )
}
