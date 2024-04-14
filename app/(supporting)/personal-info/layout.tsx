'use client'

import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'Zpracování Osobních Údajů | rozmluv se'
        : language === 'en'
        ? 'Processing of personal data | rozmluv se'
        : language === 'de'
        ? 'Verarbeitung von personenbezogenen Daten | rozmluv se'
        : language === 'ua'
        ? 'Обробка персональних даних | rozmluv se'
        : ''
  }, [language])

  return <>{children}</>
}
