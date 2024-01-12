'use client'

import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <section>
      <Container>
        <h1 className='text-6xl ffs-12 font-black'>
          {language === 'cz' &&
            'Jazykové studio, ve kterém se nebudeš bát dělat chyby.'}
          {language === 'en' &&
            'A language studio where you are not afraid of making mistakes.'}
          {language === 'de' &&
            'Das Sprachstudio, wo du keine Angst vor Fehlern hast'}
          {language === 'ua' &&
            'Мовні курси, де ти не будеш боятись помилитись.'}
        </h1>
        <p className='font-stabil text-xl mt-8'>
          {language === 'cz' &&
            'Dopřej si lingvistický wellness a nauč se anglicky, německy nebo klidně čínsky.'}
          {language === 'en' &&
            'Indulge in linguistic wellness and study English, German or even Chinese.'}
          {language === 'de' &&
            'Gönne Dir linguistische Entspannung und lerne Englisch, Deutsch oder auch Chinesisch'}
          {language === 'ua' &&
            'Зроби собі "гарне лінгвістичне самопочуття" і вивчи англійську, німецьку або навіть китайську.'}
        </p>
        <Link href='https://linktr.ee/rozmluv.se' target='_blank'>
          <Button className='rounded-full text-xl w-full text-black py-6 mt-10 ffs-2-hover font-black'>
            {language === 'cz' && 'Aktuálně'}
            {language === 'en' && 'Currently'}
            {language === 'de' && 'Aktuell'}
            {language === 'ua' && 'Течія'}
          </Button>
        </Link>
      </Container>
    </section>
  )
}
