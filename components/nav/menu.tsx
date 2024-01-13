'use client'

import { links } from '@/database/links'
import { useLanguage } from '@/store/use-language'
import { useMenu } from '@/store/use-menu'
import Link from 'next/link'

export const Menu = () => {
  const { language } = useLanguage()
  const { closeMenu } = useMenu()

  return (
    <div className='fixed right-0 top-0 h-full w-full lg:w-1/3 bg-primary grid place-content-center'>
      <img
        src='/icons/x.svg'
        alt='close button'
        className='absolute top-6 right-6 cursor-pointer'
        onClick={() => closeMenu()}
      />
      <ul className='flex flex-col gap-8'>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => closeMenu()}
            className='text-3xl font-black text-center capitalize'
          >
            {language === 'cz' && link.labelCz}
            {language === 'en' && link.labelEn}
            {language === 'de' && link.labelDe}
            {language === 'ua' && link.labelUa}
          </Link>
        ))}
      </ul>
      <div className='flex justify-between absolute bottom-6 left-0 w-full px-36'>
        <Link href='https://www.facebook.com/rozmluv.se' target='_blank'>
          <img src='/social/facebook.webp' alt='facebook' />
        </Link>
        <Link href='https://www.instagram.com/rozmluv.se/' target='_blank'>
          <img src='/social/instagram.webp' alt='instagram' />
        </Link>
        <Link href='https://www.tiktok.com/@rozmluv.se' target='_blank'>
          <img src='/social/tiktok.webp' alt='tiktok' />
        </Link>
        <Link
          href='https://www.linkedin.com/company/rozmluv-se/?originalSubdomain=cz'
          target='_blank'
        >
          <img src='/social/linkedin.webp' alt='linkedin' />
        </Link>
      </div>
    </div>
  )
}
