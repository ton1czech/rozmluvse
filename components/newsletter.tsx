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
                language === 'cz'
                  ? 'Novinky ve výuce, tipy na učení i pohled do zákulisí ti pošleme v newsletteru na'
                  : language === 'en'
                  ? 'Our newsletter covers teaching news, learning tips or a backstage insight. Do not miss it and let us send it to you at'
                  : language === 'de'
                  ? 'Neuigkeiten aus dem Lernbereich, Lerntipps und auch Blicke hinter die Kulissen senden wir dir gerne in unserem Newsletter unter'
                  : language === 'ua'
                  ? 'Навчальні новинки, поради та погляд за лаштунки - все надішлемо у інформаційному листі'
                  : ''
              )}
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
                {language === 'en' && 'subscribe'}
                {language === 'de' && 'abonnieren'}
                {language === 'ua' && 'слідкуй'}
              </Button>
              <Button
                onClick={() => closeNewsletter()}
                variant='ghost'
                className='text-xl hover:bg-transparent'
              >
                {language === 'cz' && 'zpět'}
                {language === 'en' && 'back'}
                {language === 'de' && 'zurück'}
                {language === 'ua' && 'назад'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
