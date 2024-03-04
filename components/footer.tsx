'use client'

import Link from 'next/link'
import { Container } from './container'
import { Cols } from './cols'
import { links } from '@/database/links'
import { useLanguage } from '@/store/use-language'
import { Button } from './ui/button'
import { useNewsletter } from '@/store/use-newsletter'

export const Footer = () => {
  const { language } = useLanguage()
  const { openNewsletter } = useNewsletter()

  return (
    <footer className='font-stabil text-[8px] sm:text-[10px] mt-6 bg-[#D9D9D9] py-4'>
      <Container className='space-y-8'>
        <Link
          href='/#home'
          className='text-lg md:text-xl lg:text-2xl ffs-12 font-labil'
        >
          rozmluv se
        </Link>
        <Cols>
          <div />
          <div className='grid md:grid-cols-2 gap-x-20 gap-y-10'>
            <ul className='grid grid-cols-2 gap-x-4 font-labil text-base'>
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {language === 'cz' && link.labelCz}
                    {language === 'en' && link.labelEn}
                    {language === 'de' && link.labelDe}
                    {language === 'ua' && link.labelUa}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='grid grid-cols-2 gap-x-4 text-base'>
              <div>
                <li>
                  <Link
                    href='https://www.facebook.com/rozmluv.se'
                    target='_blank'
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.instagram.com/rozmluv.se/'
                    target='_blank'
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.linkedin.com/company/rozmluv-se/?originalSubdomain=cz'
                    target='_blank'
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.tiktok.com/@rozmluv.se'
                    target='_blank'
                  >
                    TikTok
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li>
                  <Button
                    variant='ghost'
                    onClick={() => openNewsletter()}
                    className='hover:bg-transparent p-0 m-0 h-auto w-auto hover:text-zinc-200 !text-base'
                  >
                    Newsletter
                  </Button>
                </li>
              </div>
            </ul>
          </div>
        </Cols>

        <div className='flex w-full justify-between items-center'>
          <p>
            &copy; rozmluv se - {new Date().getFullYear()}
            <span>
              . Created by{' '}
              <Link
                href='https://baudys.dev'
                target='_blank'
                className='underline'
              >
                Daniel Anthony Baudyš
              </Link>
            </span>
          </p>
          <Link href='/personal-data'>Imprint & Privacy Policy</Link>
        </div>
      </Container>
    </footer>
  )
}
