'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface CookiesStore {
  isOpen: boolean
  openCookies: () => void

  closeCookies: () => void
  closeCookiesPermanently: () => void

  analyticsEnabled: boolean
  setAnalyticsEnabled: () => void
  setAnalyticsDisabled: () => void

  functionalEnabled: boolean
  setFunctionalEnabled: () => void
  setFunctionalDisabled: () => void
}

export const useCookies = create(
  persist<CookiesStore>(
    set => ({
      isOpen: false,
      openCookies: () => {
        set({ isOpen: true })
      },
      closeCookies: () => {
        set({ isOpen: false })
      },
      closeCookiesPermanently: () => {
        set({ isOpen: false })
        document.cookie =
          'cookiesClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
      analyticsEnabled: false,
      setAnalyticsEnabled: () => {
        set({ analyticsEnabled: true })
        document.cookie =
          'analyticsEnabled=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
      setAnalyticsDisabled: () => {
        set({ analyticsEnabled: false })
        document.cookie =
          'analyticsEnabled=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },

      functionalEnabled: false,
      setFunctionalEnabled: () => {
        set({ functionalEnabled: true })
        document.cookie =
          'functionalEnabled=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
      setFunctionalDisabled: () => {
        set({ functionalEnabled: false })
        document.cookie =
          'functionalEnabled=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
    }),
    {
      name: 'cookies-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
