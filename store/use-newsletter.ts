'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface NewsletterStore {
  isOpen: boolean
  openNewsletter: () => void
  closeNewsletter: () => void
  closeNewsletterPermanently: () => void
}

export const useNewsletter = create(
  persist<NewsletterStore>(
    set => ({
      isOpen: false,
      openNewsletter: () => set({ isOpen: true }),
      closeNewsletter: () => set({ isOpen: false }),
      closeNewsletterPermanently: () => {
        set({ isOpen: false })
        document.cookie =
          'newsletterClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
    }),
    {
      name: 'newsletter-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
