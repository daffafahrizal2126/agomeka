import Page from '@/layouts/Page'
import QuizEngine from '@/components/QuizEngine'
import { batches } from '@/lib/questions'

export default function Soal() {
  return (
    <Page>
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-[var(--color-agmBlue)] mb-3 lg:my-10">
        Soal Kalimat SPOK dan Efektif
      </h1>

      {/* Penting: min-h-0 agar child fleksibel; grid sendiri tidak perlu overflow */}
      <div className="grid md:grid-cols-[45%_1fr] gap-8 items-start min-h-0">
        {/* Kolom kiri: beri tinggi eksplisit supaya area scroll ada batasnya */}
        <div className="min-h-0 max-h-[60vh] lg:h-fit md:h-[72svh]">
          <QuizEngine batches={batches} compact hideMeta />
        </div>

        {/* Kolom kanan - Ilustrasi */}
        <div className="relative min-h-0 flex items-end justify-end">
          <img
            src="/assets/char3.png"
            alt="Ilustrasi anak belajar"
            draggable={false}
            loading="lazy"
            className="
              pointer-events-none select-none opacity-95
              object-contain transition-all duration-500 ease-in-out
              w-[clamp(320px,50vw,900px)] md:w-[clamp(420px,48vw,980px)]
              max-h-[62svh]
              translate-x-2 md:translate-x-6
            "
          />
        </div>
      </div>
    </Page>
  )
}
