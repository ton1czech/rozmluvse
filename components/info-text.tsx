'use client'

import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  textCz: string
  textEn: string
  textDe: string
  textUa: string
  href?: string
  linkCz?: string
  linkEn?: string
  linkDe?: string
  linkUa?: string
}

export const InfoText: FC<Props> = ({
  textCz,
  textEn,
  textDe,
  textUa,
  href,
  linkCz,
  linkEn,
  linkDe,
  linkUa,
}) => {
  const { language } = useLanguage()

  return (
    <span className='font-stabil text-xl lg:text-3xl'>
      <>
        {language === 'cz' && textCz}
        {language === 'en' && textEn}
        {language === 'de' && textDe}
        {language === 'ua' && textUa}
      </>{' '}
      {href && (
        <Link
          href={href}
          target='_blank'
          className='font-labil font-black ffs-12-hover'
        >
          {language === 'cz' && linkCz}
          {language === 'en' && linkEn}
          {language === 'de' && linkDe}
          {language === 'ua' && linkUa}
        </Link>
      )}
    </span>
  )
}
