'use client'

import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export const Lector = ({ lector }: { lector: any }) => {
  const { language } = useLanguage()

  return (
    <main className='absolute top-0 left-0 w-full h-full z-[2000] bg-white'>
      <Link href='/#about' className='absolute right-5 top-5'>
        <img src='/icons/x.svg' alt='close button' />
      </Link>

      <div className='flex flex-col xl:flex-row gap-4 xl:gap-32 h-full w-full py-10 px-10'>
        <img
          src={urlForImage(lector.altImage)}
          className='absolute rounded-3xl'
        />
        <div className='grid place-content-center'>
          <h3 className='text-xl xl:text-4xl mb-2 xl:mb-6'>{lector.name}</h3>
          <p className='font-stabil text-lg xl:text-3xl'>
            {language === 'cz' && lector.bioCz}
            {language === 'en' && lector.bioEn}
            {language === 'de' && lector.bioDe}
            {language === 'ua' && lector.bioUa}
          </p>
        </div>
      </div>
    </main>
  )
}
