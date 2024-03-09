import { create } from 'zustand'

interface BlogStore {
  category: string
  setCategory: (category: string) => void
  color: string
  setColor: (color: string) => void
}

export const useBlog = create<BlogStore>(set => ({
  category: '',
  setCategory: category => set({ category }),
  color: '',
  setColor: color => set({ color }),
}))
