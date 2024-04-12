'use client'

import { useLanguage } from '@/store/use-language'
import { useNewsletter } from '@/store/use-newsletter'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

export const Newsletter = () => {
  const pathname = usePathname()

  const { language } = useLanguage()

  const {
    closeNewsletter,
    closeNewsletterPermanently,
    openNewsletter,
    isOpen,
  } = useNewsletter()

  const [lang, setLang] = useState('cz')

  useEffect(() => {
    const newsletterTimeout = setTimeout(() => {
      if (!document.cookie.includes('newsletterClosed')) {
        openNewsletter()
      }
    }, 10000)

    return () => clearTimeout(newsletterTimeout)
  }, [openNewsletter])

  const studio = pathname.includes('/studio')

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='newsletter background'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'w-screen h-screen top-0 left-0 grid place-content-center z-[1005] bg-black/60 backdrop-blur-sm',
              studio ? 'hidden' : 'fixed'
            )}
          >
            <motion.div
              key='newsletter'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className='relative max-w-[500px] max-h-[500px] aspect-square mx-4 bg-[#9F6ACD] p-4 rounded-3xl'
            >
              <Button
                onClick={() => closeNewsletter()}
                variant='ghost'
                className='hover:bg-transparent absolute top-4 right-4 p-0 m-0 w-min h-min'
              >
                <X className='text-zinc-200' />
              </Button>

              <form
                method='post'
                action={process.env.NEXT_PUBLIC_ECOMAIL}
                onSubmit={() => closeNewsletterPermanently}
                className='w-[65%] mx-auto mt-12'
              >
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
                  name='email'
                  className='mt-8 mb-2 bg-transparent border border-zinc-200 w-full placeholder:text-white text-center font-stabil text-lg rounded-3xl py-1 text-white'
                  placeholder='tvuj@email.com'
                />
                <input
                  type='text'
                  name='name'
                  className='mb-2 bg-transparent border border-zinc-200 w-full placeholder:text-white text-center font-stabil text-lg rounded-3xl py-1 text-white'
                  placeholder='Tvoje jméno'
                />
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex gap-2'>
                    <input
                      type='radio'
                      name='lang'
                      id='lang'
                      value='cz'
                      defaultChecked
                      onChange={e => setLang(e.currentTarget.value)}
                    />
                    <h3 className='font-stabil text-white items-center'>
                      {language === 'cz' && 'v češtině'}
                      {language === 'en' && ''}
                      {language === 'de' && ''}
                      {language === 'ua' && ''}
                    </h3>
                  </div>
                  <div className='flex gap-2'>
                    <input
                      type='radio'
                      name='lang'
                      id='lang'
                      value='en'
                      onChange={e => setLang(e.currentTarget.value)}
                    />
                    <h3 className='font-stabil text-white items-center'>
                      {language === 'cz' && 'v angličtině'}
                      {language === 'en' && ''}
                      {language === 'de' && ''}
                      {language === 'ua' && ''}
                    </h3>
                  </div>
                  <input
                    type='text'
                    name='custom_fields[language]'
                    id='custom_fields[language]'
                    className='hidden'
                    value={lang}
                  />
                </div>
                <div className='flex flex-col gap-4'>
                  <Button
                    type='submit'
                    className='bg-white rounded-full py-5 text-xl text-black hover:bg-zinc-50 ffs-12-hover font-labil font-black'
                  >
                    {language === 'cz' && 'odebírej'}
                    {language === 'en' && 'subscribe'}
                    {language === 'de' && 'abonnieren'}
                    {language === 'ua' && 'слідкуй'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
