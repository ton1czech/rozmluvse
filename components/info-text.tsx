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
  external?: boolean
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
  external,
  linkCz,
  linkEn,
  linkDe,
  linkUa,
}) => {
  const { language } = useLanguage()

  return (
    <span className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
      <>
        {language === 'cz' && textCz}
        {language === 'en' && textEn}
        {language === 'de' && textDe}
        {language === 'ua' && textUa}
      </>{' '}
      {href && (
        <Link
          href={href}
          target={external ? '_blank' : ''}
          className='font-labil font-black ffs-12-hover inline-flex'
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
