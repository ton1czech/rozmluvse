'use client'

import { useLanguage } from '@/store/use-language'
import { useNewsletter } from '@/store/use-newsletter'
import { Button } from './ui/button'
import { useEffect } from 'react'
import { X } from 'lucide-react'

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
        <div className='fixed w-screen h-screen top-0 left-0 grid place-content-center z-[1005] bg-black/60 backdrop-blur-sm'>
          <div className='relative max-w-[500px] max-h-[500px] aspect-square mx-4 bg-[#9F6ACD] p-4 rounded-3xl'>
            <Button
              onClick={() => closeNewsletter()}
              variant='ghost'
              className='hover:bg-transparent absolute top-4 right-4 p-0 m-0 w-min h-min'
            >
              <X className='text-zinc-200' />
            </Button>

            <div className='w-[65%] mx-auto mt-12'>
              <h2 className='text-3xl text-center text-white'>
                {language === 'cz' &&
                  'Novinky ve výuce, tipy na učení i pohled do zákulisí ti pošleme v newsletteru na'}
                {language === 'en' &&
                  'Our newsletter covers teaching news, learning tips or a backstage insight. Do not miss it and let us send it to you at'}
                {language === 'de' &&
                  'Neuigkeiten aus dem Lernbereich, Lerntipps und auch Blicke hinter die Kulissen senden wir dir gerne in unserem Newsletter unter'}
                {language === 'ua' &&
                  'Навчальні новинки, поради та погляд за лаштунки - все надішлемо у інформаційному листі'}
              </h2>
              <input
                type='email'
                className='mt-8 mb-2 bg-transparent border border-zinc-200 w-full placeholder:text-white text-center font-stabil text-lg rounded-3xl py-1 text-white'
                placeholder='tvuj@email.com'
              />
              <input
                type='text'
                className='mb-2 bg-transparent border border-zinc-200 w-full placeholder:text-white text-center font-stabil text-lg rounded-3xl py-1 text-white'
                placeholder='Tvoje jméno'
              />
              <div className='flex items-center justify-between mb-6'>
                <div className='flex gap-2'>
                  <input type='radio' name='lang' id='lang' />
                  <h3 className='font-stabil text-white items-center'>
                    {language === 'cz' && 'v češtině'}
                    {language === 'en' && ''}
                    {language === 'de' && ''}
                    {language === 'ua' && ''}
                  </h3>
                </div>
                <div className='flex gap-2'>
                  <input type='radio' name='lang' id='lang' />
                  <h3 className='font-stabil text-white items-center'>
                    {language === 'cz' && 'v angličtině'}
                    {language === 'en' && ''}
                    {language === 'de' && ''}
                    {language === 'ua' && ''}
                  </h3>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <Button
                  onClick={() => closeNewsletterPermanently()}
                  className='bg-white rounded-full py-5 text-xl text-black hover:bg-zinc-50 ffs-12-hover font-labil font-black'
                >
                  {language === 'cz' && 'odebírej'}
                  {language === 'en' && 'subscribe'}
                  {language === 'de' && 'abonnieren'}
                  {language === 'ua' && 'слідкуй'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
