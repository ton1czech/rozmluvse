'use client'

import { links } from '@/database/links'
import { useLanguage } from '@/store/use-language'
import { useMenu } from '@/store/use-menu'
import Link from 'next/link'
import { Container } from '../container'
import LanguageSelector from './language-selector'
import { Button } from '../ui/button'
import { useNewsletter } from '@/store/use-newsletter'
import { AnimatePresence, motion } from 'framer-motion'

export const Menu = () => {
  const { language } = useLanguage()
  const { closeMenu } = useMenu()
  const { openNewsletter } = useNewsletter()

  return (
    <motion.div
      key='menu background'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm'
    >
      <motion.div
        key='menu'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
        className='fixed right-0 top-0 w-full h-full xl:h-1/2 bg-[#9C6ACA] py-4 z-10'
      >
        <Container className='w-full'>
          <div className='flex justify-between items-center w-full'>
            <Link
              href='/#home'
              className='text-2xl md:text-3xl lg:text-4xl place-self-center text-white ffs-12'
            >
              rozmluv se
            </Link>
            <div className='flex items-center gap-3 md:gap-6 pt-1'>
              <Link
                href='https://linktr.ee/rozmluv.se'
                target='_blank'
                className='font-stabil text-white'
              >
                Aktuality
              </Link>
              <Link href='/shop' className='font-stabil text-white'>
                Shop
              </Link>
              <LanguageSelector color='white' />
              <Button
                variant='ghost'
                onClick={() => closeMenu()}
                className='font-stabil hover:bg-transparent text-white hover:text-white m-0 p-0 text-base'
              >
                {language === 'cz' && 'Zavřít'}
                {language === 'en' && 'Close'}
                {language === 'de' && '!text!'}
                {language === 'ua' && '!text!'}
              </Button>
            </div>
          </div>

          <div className='grid xl:grid-cols-2 gap-10 pt-10 sm:pt-16'>
            <ul className='grid sm:grid-cols-2 gap-4'>
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : '_parent'}
                  onClick={() => closeMenu()}
                  className='text-3xl font-black ffs-12-hover text-white'
                >
                  {language === 'cz' && link.labelCz}
                  {language === 'en' && link.labelEn}
                  {language === 'de' && link.labelDe}
                  {language === 'ua' && link.labelUa}
                </Link>
              ))}
            </ul>

            <div className='flex gap-20 text-base text-white font-stabil'>
              <div className='flex flex-col gap-4'>
                <Link
                  href='https://www.facebook.com/rozmluv.se'
                  target='_blank'
                >
                  Facebook
                </Link>
                <Link
                  href='https://www.instagram.com/rozmluv.se/'
                  target='_blank'
                >
                  Instagram
                </Link>
                <Link
                  href='https://www.linkedin.com/company/rozmluv-se/?originalSubdomain=cz'
                  target='_blank'
                >
                  Linkedin
                </Link>
                <Link href='https://www.tiktok.com/@rozmluv.se' target='_blank'>
                  TikTok
                </Link>
              </div>
              <div className='flex flex-col gap-4'>
                <Link href='/blog' onClick={() => closeMenu()}>
                  Blog
                </Link>
                <Button
                  variant='ghost'
                  onClick={() => openNewsletter()}
                  className='hover:bg-transparent p-0 m-0 h-auto w-auto text-base hover:text-white'
                >
                  Newsletter
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </motion.div>
  )
}
