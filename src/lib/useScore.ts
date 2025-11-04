import { create } from 'zustand'

type ScoreState = {
  current: number
  add: (n: number) => void
  reset: () => void
}

const useScore = create<ScoreState>((set) => ({
  current: 0,
  add: (n) => set((s) => ({ current: s.current + n })),
  reset: () => set({ current: 0 }),
}))

export default useScore
