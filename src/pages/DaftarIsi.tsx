import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Home, BookOpen, PlayCircle, IdCard, ChevronRight,LucideProps } from 'lucide-react'

type Item = {
  to: string
  title: string
  desc: string
  icon: React.ComponentType<LucideProps>
  grad: string
}

export default function DaftarIsi() {
  const items: Item[] = [
    {
      to: '/',
      title: 'Beranda',
      desc: '',
      icon: Home,
      grad: 'from-rose-400 to-red-500',
    },
    {
      to: '/materi-kalimat-SPOK',
      title: 'Materi',
      desc: 'Apa itu kalimat SPOK & efektif?',
      icon: BookOpen,
      grad: 'from-amber-400 to-orange-500',
    },
    {
      to: '/soal',
      title: 'Mulai (Soal)',
      desc: 'Latihan & evaluasi',
      icon: PlayCircle,
      grad: 'from-emerald-400 to-teal-500',
    },
    {
      to: '/biodata',
      title: 'Biodata Pengembang',
      desc: 'Profil & kontak',
      icon: IdCard,
      grad: 'from-sky-400 to-indigo-500',
    },
  ]

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-white/60 h-full">
      <CardHeader className="pb-2 text-center">
        <h2 className="text-2xl font-black text-[var(--color-agmBlue)]">Daftar Isi Game</h2>
      </CardHeader>

      <CardContent>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(({ to, title, desc, icon: Icon, grad }) => (
            <li key={to}>
              <Link
                to={to}
                className="group block rounded-2xl border border-zinc-100/70 bg-white/80 shadow-md ring-1 ring-black/5
                           hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none
                           focus-visible:ring-2 focus-visible:ring-[var(--color-agmBlue)]"
              >
                <div className="p-4 flex items-center gap-4">
                  <div
                    className={`shrink-0 rounded-xl p-3 text-white shadow ${`bg-gradient-to-br ${grad}`} group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-zinc-900 truncate">{title}</div>
                    <p className="text-sm text-zinc-600 truncate">{desc}</p>
                  </div>

                  <ChevronRight className="size-5 text-zinc-400 group-hover:text-zinc-600 transition" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
