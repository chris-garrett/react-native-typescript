import create from 'zustand'
import {devtools, persist} from 'zustand/middleware'

export interface IStackState {
  counter: number,
  increase: () => void
  reset: () => void
}

export const useStackStore = create<IStackState>()(
  (set) => ({
    counter: 0,
    increase: () => set((state) => ({counter: state.counter + 1})),
    reset: () => set((state) => ({counter: 0}))
  }),
)