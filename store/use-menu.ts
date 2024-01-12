import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface MenuStore {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
}

export const useMenu = create<MenuStore>(set => ({
  isMenuOpen: false,
  openMenu: () => {
    set({ isMenuOpen: true })
  },
  closeMenu: () => {
    set({ isMenuOpen: false })
  },
}))
