'use client'

import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'Pro Lektor*ky | rozmluv se'
        : language === 'en'
        ? 'For Lectors | rozmluv se'
        : language === 'de'
        ? 'Für Lektoren | rozmluv se'
        : language === 'ua'
        ? 'для викладачів | rozmluv se'
        : ''
  }, [language])

  return <>{children}</>
}
