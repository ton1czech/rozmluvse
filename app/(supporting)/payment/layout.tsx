'use client'

import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'PLATBA  A STORNO | rozmluv se'
        : language === 'en'
        ? 'PAYMENT & CANCELLATION | rozmluv se'
        : language === 'de'
        ? 'ZAHLUNGSWEISE UND STORNO | rozmluv se'
        : language === 'ua'
        ? 'ОПЛАТА ТА СКАСУВАННЯ | rozmluv se'
        : ''
  }, [language])

  return <>{children}</>
}
