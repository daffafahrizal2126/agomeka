import Page from '@/layouts/Page'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function MateriKalimatEfektif() {
  return (
    <Page>
      {/* wrapper relatif + svh agar stabil di mobile */}
      <div className="relative overflow-hidden min-h-[65svh]">
        <h1 className="text-3xl font-bold text-center text-[var(--color-agmBlue)] mb-3 lg:mb-10">
          Kalimat Efektif
        </h1>

        {/* grid dijadikan relative agar overlay img bisa disejajarkan dengan artikel */}
        <div className="grid md:grid-cols-[45%_1fr] gap-8 items-start relative z-10">
          {/* Artikel utama */}
          <article
            className="
              card w-full self-start
              max-h-[50vh] lg:max-h-[70svh] overflow-auto text-sm
              bg-white/90 backdrop-blur-sm

              /* padding bawah ekstra hanya di mobile agar tidak nempel/tidak ketutup tombol */
              pb-20 sm:pb-24 md:pb-0
            "
          >
            <p className="text-base">
              <b>Kalimat efektif</b> adalah kalimat yang mudah dipahami, ringkas, dan menggunakan
              kata baku.
            </p>

            <h3 className="mt-3 font-semibold">Ciri Kalimat Efektif</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <b className="text-blue-600">Ringkas</b>: tidak bertele-tele.
              </li>
              <li>
                <b className="text-green-600">Jelas</b>: ada subjek dan predikat yang tegas.
              </li>
              <li>
                <b className="text-purple-600">Baku</b>: memakai ejaan dan kata yang benar.
              </li>
            </ul>

            <h3 className="mt-3 font-semibold">Contoh Benar</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <b className="text-green-600">Saya</b> (S) <b className="text-blue-600">makan</b>{' '}
                (P)
                <b className="text-orange-600"> nasi</b> (O){' '}
                <b className="text-purple-600">di rumah</b> (K). ✅
              </li>
              <li>
                <b className="text-green-600">Guru</b> (S) <b className="text-blue-600">mengajar</b>{' '}
                (P)
                <b className="text-orange-600"> siswa</b> (O){' '}
                <b className="text-purple-600">dengan sabar</b> (K). ✅
              </li>
            </ul>

            <h3 className="mt-3 font-semibold">Contoh Salah & Perbaikan</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Salah: <i>Naik ke atas tangga.</i> ❌ (kata <i>ke atas</i> mubazir)
                <br />
                Benar: <b className="text-blue-600">Naik tangga.</b> ✅
              </li>
              <li>
                Salah: <i>Saya yang belajar di sekolah setiap hari selalu.</i> ❌ (kata tidak
                teratur)
                <br />
                Benar: <b className="text-green-600">Saya</b>{' '}
                <b className="text-blue-600">belajar</b>{' '}
                <b className="text-purple-600">setiap hari di sekolah.</b> ✅
              </li>
              <li>
                Salah: <i>Terimakasih atas perhatiannya bapak ibu guru.</i> ❌ (tidak baku)
                <br />
                Benar:{' '}
                <b className="text-purple-600">Terima kasih atas perhatian Bapak Ibu Guru.</b> ✅
              </li>
            </ul>
          </article>

          {/* Overlay gambar: absolute menempel grid, sejajar dengan atas artikel */}
          <div className="pointer-events-none">
            <img
              src="/assets/char3.png"
              alt="Ilustrasi anak belajar kalimat efektif"
              className="
                object-contain select-none opacity-95
                transition-all duration-500 ease-in-out

                /* ukuran adaptif: besar di desktop, aman di HP (portrait & landscape) */
                w-[clamp(320px,50vw,900px)]
                md:w-[clamp(420px,48vw,980px)]
                max-h-[clamp(220px,62svh,780px)]

                /* sedikit geser kanan agar tidak menabrak teks */
                translate-x-2 md:translate-x-6
              "
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>

        {/* Tombol kiri bawah - kembali ke SPOK */}
        <Link
          to="/materi-kalimat-spok"
          aria-label="Materi Kalimat SPOK"
          className="
            fixed z-50 inline-flex items-center gap-2 rounded-full
            bg-[var(--color-agmBlue)] text-white shadow-lg border border-agmRed
            px-4 py-2 hover:bg-[var(--color-agmBlue)]/90
            focus:outline-none focus:ring-2 focus:ring-white/40
            left-[max(12px,env(safe-area-inset-left))]
            bottom-[max(12px,env(safe-area-inset-bottom))]
          "
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-semibold hidden sm:inline">Materi Kalimat SPOK</span>
        </Link>

        {/* Tombol kanan bawah - Kerjakan Soal */}
        <Link
          to="/soal"
          title="Menuju ke halaman soal"
          aria-label="Menuju ke halaman soal"
          className="
            fixed z-50 inline-flex items-center gap-2 rounded-full
            bg-green-600 text-white shadow-lg border border-green-800
            px-4 py-2 hover:brightness-110 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white/40
            right-[max(12px,env(safe-area-inset-right))]
            bottom-[max(12px,env(safe-area-inset-bottom))]
            transition-all duration-200
          "
        >
          <span className="text-sm font-semibold hidden sm:inline">Kerjakan Soal 🎯</span>
        </Link>
      </div>
    </Page>
  )
}
