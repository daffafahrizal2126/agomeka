import { ReactNode } from 'react'

type Props = { children: ReactNode; className?: string }

export default function Page({ children, className = '' }: Props) {
  return (
    <div
      className={`min-h-screen w-full flex justify-center items-stretch ${className}`}
      style={{
        backgroundImage: "url('/assets/bg3.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Tambah flex-col + min-h-0 supaya child (grid) bisa mengelola tinggi sendiri */}
      <div className="w-[min(90vw,1280px)] h-full px-10 py-5 flex flex-col min-h-0">{children}</div>
    </div>
  )
}
