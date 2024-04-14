'use client'

import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'Blog | rozmluv se'
        : language === 'en'
        ? 'Blog | rozmluv se'
        : language === 'de'
        ? 'Blog | rozmluv se'
        : language === 'ua'
        ? 'блог | rozmluv se'
        : ''
  }, [language])

  return <>{children}</>
}
