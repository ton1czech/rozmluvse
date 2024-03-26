'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'

export const ForLectors = ({ lookingFor }: { lookingFor: any }) => {
  const { language } = useLanguage()

  return (
    <Container className='font-stabil text-lg lg:text-3xl'>
      <h2 className='font-labil text-2xl font-black mb-8 lg:text-5xl'>
        {language === 'cz' && 'Rozmluv spolu s námi další studenty!'}
        {language === 'en' && 'Get other students talk and fluent with us!'}
        {language === 'de' && 'Motiviere mit uns neue Studenten zum Sprechen!'}
        {language === 'ua' && 'Розговори разом з нами студентів!'}
      </h2>
      <h3 className='mb-2'>
        {language === 'cz' && 'Než si plácnem, napiš nám:'}
        {language === 'en' && 'Before we shake hands, write to us:'}
        {language === 'de' && 'Bevor wir ins Geschäft kommen, schreib uns:'}
        {language === 'ua' && 'Перш ніж домовимось, напиши нам:'}
      </h3>
      <ul className='list-disc mb-6 lg:mb-12 space-y-2 list-inside'>
        <li>
          {language === 'cz' && 'kdo jsi a co umíš'}
          {language === 'en' && 'who you are and what you can do'}
          {language === 'de' && 'wer du bist und was du kannst'}
          {language === 'ua' && 'Хто ти і які твої вміння?'}
        </li>
        <li>
          {language === 'cz' && 'proč chceš učit zrovna u nás'}
          {language === 'en' &&
            'why do you want to become one of the lecturers at our studio'}
          {language === 'de' &&
            'warum du ausgerechnet bei uns mitmachen möchtest'}
          {language === 'ua' && 'Чому хочеш викладати саме у нас?'}
        </li>
        <li>
          {language === 'cz' && 'jestli bylo dřív vejce, nebo slepice'}
          {language === 'en' && 'which came first: the chicken or the egg'}
          {language === 'de' && 'was war zuerst, die Henne oder das Ei'}
          {language === 'ua' && 'Що було раніше, яйце чи курка?'}
        </li>
      </ul>
      <a
        href='mailto:ciao@rozmluv.se'
        className='font-labil font-black ffs-12-hover'
      >
        ciao@rozmluv.se
      </a>

      <h3 className='uppercase mt-12 lg:mt-28 font-labil text-xl lg:text-4xl mb-2'>
        {language === 'cz' && 'právě hledáme:'}
        {language === 'en' && 'current job vacancies:'}
        {language === 'de' && 'wir suchen gerade:'}
        {language === 'ua' && 'ми шукаємо: '}
      </h3>
      {lookingFor.map((item: any) => (
        <ul key={item.textCz} className='list-disc list-inside space-y-2'>
          {item.textCz && item.textEn && item.textDe && item.textUa && (
            <li>
              {language === 'cz' && item.textCz}
              {language === 'en' && item.textEn}
              {language === 'de' && item.textDe}
              {language === 'ua' && item.textUa}
            </li>
          )}
        </ul>
      ))}
    </Container>
  )
}
