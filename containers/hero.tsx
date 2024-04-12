'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <section id='home' className='scroll-mt-44'>
      <Container>
        <Cols>
          <div />
          <div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl'>
              {language === 'cz' && (
                <>Jazykové studio, ve kterém se nebudeš bát dělat chyby.</>
              )}
              {language === 'en' && (
                <>
                  A language studio where you are not afraid of making mistakes.
                </>
              )}
              {language === 'de' && (
                <>Das Sprachstudio, wo du keine Angst vor Fehlern hast.</>
              )}
              {language === 'ua' && (
                <>Мовні курси, де ти не будеш боятись помилитись.</>
              )}
            </h1>
            <p className='font-stabil text-lg mt-8 xl:text-2xl'>
              {language === 'cz' && (
                <>
                  Dopřej si lingvistický wellness a nauč se anglicky, německy
                  nebo klidně čínsky.
                </>
              )}
              {language === 'en' && (
                <>
                  Indulge in linguistic wellness and study English, German or
                  even Chinese.
                </>
              )}
              {language === 'de' && (
                <>
                  Gönne Dir linguistische Entspannung und lerne Englisch,
                  Deutsch oder auch Chinesisch.
                </>
              )}
              {language === 'ua' && (
                <>
                  Зроби собі "гарне лінгвістичне самопочуття" і вивчи
                  англійську, німецьку або навіть китайську.
                </>
              )}
            </p>
          </div>
        </Cols>
      </Container>
    </section>
  )
}
