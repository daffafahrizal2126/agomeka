import Page from '@/layouts/Page'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function MateriKalimatSPOK() {
  return (
    <Page>
      <div className="relative overflow-hidden min-h-[65svh]">
        <h1 className="text-3xl font-bold text-center text-[var(--color-agmBlue)] mb-3 lg:mb-10">
          Kalimat SPOK
        </h1>

        <div className="grid md:grid-cols-[45%_1fr] gap-8 items-start">
          {/* Kolom kiri: artikel */}
          <article
            className="
              card w-full self-start
              max-h-[50vh] lg:max-h-[70svh] overflow-auto text-sm
              bg-white/90 backdrop-blur-sm
              pb-24 md:pb-0
            "
          >
            {/* PENGERTIAN */}
            <p className="text-base">
              <b>Kalimat SPOK</b> adalah kalimat yang disusun berurutan:{' '}
              <b className="text-green-600">S</b>ubjek,
              <b className="text-blue-600"> P</b>redikat, <b className="text-orange-600">O</b>bjek,
              lalu <b className="text-purple-600">K</b>eterangan. Susunan ini membantu kalimat
              menjadi jelas dan mudah dipahami.
            </p>

            {/* SUSUNAN */}
            <h3 className="mt-3 font-semibold">Susunan</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b className="text-green-600">Subjek (S)</b>
                <div className="pl-2">
                  <div>
                    <b>Definisi:</b> siapa/apa yang dibicarakan.
                  </div>
                  <div>
                    <b>Contoh:</b> <span className="text-green-600">Rina</span> makan roti.
                  </div>
                </div>
              </li>
              <li>
                <b className="text-blue-600">Predikat (P)</b>
                <div className="pl-2">
                  <div>
                    <b>Definisi:</b> tindakan/keadaan yang dilakukan subjek.
                  </div>
                  <div>
                    <b>Contoh:</b> Rina <span className="text-blue-600">makan</span> roti.
                  </div>
                </div>
              </li>
              <li>
                <b className="text-orange-600">Objek (O)</b>
                <div className="pl-2">
                  <div>
                    <b>Definisi:</b> yang dikenai pekerjaan.
                  </div>
                  <div>
                    <b>Contoh:</b> Rina makan <span className="text-orange-600">roti</span>.
                  </div>
                </div>
              </li>
              <li>
                <b className="text-purple-600">Keterangan (K)</b>
                <div className="pl-2">
                  <div>
                    <b>Definisi:</b> informasi tambahan: waktu, tempat, cara, alat, dsb.
                  </div>
                  <div>
                    <b>Contoh:</b> Rina makan roti <span className="text-purple-600">di dapur</span>
                    .
                  </div>
                </div>
              </li>
            </ul>

            {/* CONTOH BENAR */}
            <h3 className="mt-3 font-semibold">Contoh Benar</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <b className="text-green-600">Rina</b> (S) <b className="text-blue-600">makan</b>{' '}
                (P)
                <b className="text-orange-600"> roti</b> (O){' '}
                <b className="text-purple-600">di dapur</b> (K). ✅
              </li>
              <li>
                <b className="text-green-600">Ayah</b> (S){' '}
                <b className="text-blue-600">memperbaiki</b> (P)
                <b className="text-orange-600"> sepeda</b> (O){' '}
                <b className="text-purple-600">di garasi</b> (K). ✅
              </li>
              <li>
                <b className="text-green-600">Siswa</b> (S) <b className="text-blue-600">membaca</b>{' '}
                (P)
                <b className="text-orange-600"> buku cerita</b> (O){' '}
                <b className="text-purple-600">di perpustakaan</b> (K). ✅
              </li>
            </ul>

            {/* CONTOH SALAH */}
            <h3 className="mt-3 font-semibold">Contoh Salah</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <i>Di sekolah membaca buku siswa.</i> ❌ (Urutan K–P–O–S, tidak sesuai SPOK)
              </li>
              <li>
                <i>Membeli pensil di toko.</i> ❌ (Tanpa Subjek)
              </li>
              <li>
                <i>Rina makan di kantin nasi.</i> ❌ (Objek dan Keterangan tertukar)
              </li>
              <li>
                <i>
                  Adik bermain bola kasti kemarin sore di lapangan bersama teman-teman kelas empat
                  A.
                </i>{' '}
                ❌ (Keterangan terlalu panjang; buat ringkas)
              </li>
            </ul>
          </article>

          {/* Overlay gambar: absolute menempel grid, sejajar dengan atas artikel */}
          <div className="pointer-events-none">
            <img
              src="/assets/char4.png"
              alt="Ilustrasi anak belajar kalimat SPOK"
              className="
                object-contain select-none opacity-95
                transition-all duration-500 ease-in-out
                w-[clamp(320px,50vw,900px)]
                md:w-[clamp(420px,48vw,980px)]
                max-h-[clamp(220px,62svh,780px)]
                translate-x-2 md:translate-x-6
              "
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>

        {/* Tombol kiri bawah - kembali ke Kalimat Efektif */}
        <Link
          to="/materi-kalimat-efektif"
          aria-label="Materi Kalimat Efektif"
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
          <span className="text-sm font-semibold hidden sm:inline">Kalimat Efektif</span>
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
