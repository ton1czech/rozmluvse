'use client'

import { RichText } from '@/components/rich-text'
import { useLanguage } from '@/store/use-language'
import { PortableText } from '@portabletext/react'

interface Props {
  data: any
}

export const Payment = ({ data }: Props) => {
  const { language } = useLanguage()

  return (
    <>
      {language === 'cz' && (
        <PortableText value={data[0].bodyCs} components={RichText} />
      )}
      {language === 'en' && (
        <PortableText value={data[0].bodyEn} components={RichText} />
      )}
      {language === 'de' && (
        <PortableText value={data[0].bodyDe} components={RichText} />
      )}
      {language === 'ua' && (
        <PortableText value={data[0].bodyUa} components={RichText} />
      )}
    </>
  )
}
