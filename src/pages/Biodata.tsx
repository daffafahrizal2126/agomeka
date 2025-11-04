import Page from '@/layouts/Page'

export default function Biodata() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col justify-center items-center px-6 py-10">
      <div className="max-w-5xl w-full bg-white text-gray-800">
        <h1 className="text-3xl font-bold text-center text-[var(--color-agmBlue)] mb-5">
          Biodata Pengembang
        </h1>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {/* Kolom kiri: teks biodata */}
          <div className="p-6 flex flex-col justify-center">
            <div className="space-y-3 text-base leading-relaxed">
              <p>
                <strong>Nama:</strong> Daffa Fahrizal
              </p>
              <p>
                <strong>Universitas:</strong> Universitas Muria Kudus
              </p>
              <p>
                <strong>Meteri:</strong> Kalimat Efektif & SPOK — Fase B SD
              </p>
              <p>
                <strong>Kontak:</strong> (-)
              </p>
            </div>
          </div>

          {/* Kolom kanan: gambar besar */}
          <div className="flex items-center justify-center">
            <img
              src="/assets/char3.png"
              alt="Ilustrasi karakter"
              className="h-[70vh] w-auto object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
