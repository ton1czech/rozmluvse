'use client'

import { Companies } from '@/containers/companies'
import { Hero } from '@/containers/hero'
import { Languages } from '@/containers/languages'
import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Page() {
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

  return (
    <>
      <main className='mt-28 md:mt-32 lg:mt-40 space-y-40 lg:space-y-72'>
        <Hero />
        <Languages />
        <Companies />
      </main>
    </>
  )
}
