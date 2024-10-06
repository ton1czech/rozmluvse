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
            <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>
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
          </div>
        </Cols>
      </Container>
    </section>
  )
}
