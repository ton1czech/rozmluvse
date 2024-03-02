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
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl xl:text-7xl'>
              {language === 'cz' && (
                <>
                  Jazykové studio, <br className='sm:hidden' /> ve kterém <br />{' '}
                  se nebudeš bát <br className='sm:hidden' /> dělat chyby.
                </>
              )}
              {language === 'en' && (
                <>
                  A language studio <br className='sm:hidden' /> where you{' '}
                  <br /> are not afraid <br className='sm:hidden' /> of making
                  mistakes.
                </>
              )}
              {language === 'de' && (
                <>
                  Das Sprachstudio, <br className='sm:hidden' /> wo du keine
                  <br /> Angst vor <br className='sm:hidden' /> Fehlern hast.
                </>
              )}
              {language === 'ua' && (
                <>
                  Мовні курси, <br className='sm:hidden' /> де ти не <br />{' '}
                  будеш боятись <br className='sm:hidden' /> помилитись.
                </>
              )}
            </h1>
            <p className='font-stabil text-lg mt-8 xl:text-2xl'>
              {language === 'cz' && (
                <>
                  Dopřej si lingvistický wellness a nauč se anglicky,{' '}
                  <br className='hidden xl:block' /> německy nebo klidně čínsky.
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
