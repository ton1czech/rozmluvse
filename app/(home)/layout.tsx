'use client'

import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'Jazykové studio | rozmluv se'
        : language === 'en'
        ? 'Language studio | rozmluv se'
        : language === 'de'
        ? 'Sprachstudio | rozmluv se'
        : language === 'ua'
        ? 'мовна студія | rozmluv se'
        : ''
  }, [language])

  return <>{children}</>
}
