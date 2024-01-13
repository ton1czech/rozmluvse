'use client'

import { useLanguage } from '@/store/use-language'
import { useNewsletter } from '@/store/use-newsletter'
import { Button } from './ui/button'
import { removeOneLetterWords } from '@/lib/utils'
import { useEffect } from 'react'

export const Newsletter = () => {
  const { language } = useLanguage()
  const {
    closeNewsletter,
    closeNewsletterPermanently,
    openNewsletter,
    isOpen,
  } = useNewsletter()

  useEffect(() => {
    const newsletterTimeout = setTimeout(() => {
      if (!document.cookie.includes('newsletterClosed')) {
        openNewsletter()
      }
    }, 10000)

    return () => clearTimeout(newsletterTimeout)
  }, [openNewsletter])

  return (
    <>
      {isOpen && (
        <div className='absolute w-screen h-screen top-0 left-0 bg-[#9F6ACD] grid place-content-center'>
          <div className=' max-w-[450px] mx-4'>
            <h2 className='text-3xl text-center'>
              {removeOneLetterWords(
                'Novinky ve výuce, tipy na učení i pohled do zákulisí ti pošleme v newsletteru na'
              )}
              {language === 'cz' && ''}
              {language === 'en' && ''}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </h2>
            <input
              type='text'
              className='mt-6 mb-4 bg-transparent border-b border-b-black w-full placeholder:text-black text-center font-stabil text-lg'
              placeholder='tvuj@email.com'
            />
            <div className='flex flex-col gap-4'>
              <Button
                onClick={() => closeNewsletterPermanently()}
                className='bg-white rounded-full py-7 text-xl text-black hover:bg-zinc-50'
              >
                {language === 'cz' && 'odebírej'}
                {language === 'en' && ''}
                {language === 'de' && ''}
                {language === 'ua' && ''}
              </Button>
              <Button
                onClick={() => closeNewsletter()}
                variant='ghost'
                className='text-xl hover:bg-transparent'
              >
                {language === 'cz' && 'zpět'}
                {language === 'en' && ''}
                {language === 'de' && ''}
                {language === 'ua' && ''}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
