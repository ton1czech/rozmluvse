'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface LanguageStore {
  language: string
  setLanguage: (value: string) => void
}

export const useLanguage = create(
  persist<LanguageStore>(
    set => ({
      language:
        typeof localStorage !== 'undefined'
          ? localStorage.getItem('language-storage') || 'cz'
          : 'cz',
      setLanguage: value => {
        set({ language: value })
      },
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
