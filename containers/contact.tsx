'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import { useNewsletter } from '@/store/use-newsletter'
import { contact } from '@/database/contact'
import { Cols } from '@/components/cols'
import { SectionTitle } from '@/components/section-title'

export const Contact = () => {
  const { language } = useLanguage()
  const { openNewsletter } = useNewsletter()

  return (
    <section id='contact' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Kontakt'
            titleEn='Contact'
            titleDe='Kontakt'
            titleUa='контакт'
          />

          <div className='hidden xl:block'>
            <div className='font-stabil text-lg xl:text-2xl grid grid-cols-[1fr_2.5fr] gap-y-10 gap-x-24'>
              <div className='grid'>
                <p>Pavlíkova 7, Klatovy</p>
                <p>Křížová 162, Klatovy</p>
                <a href='mailto:ciao@rozmluv.se'>ciao@rozmluv.se</a>
                <a href='tel:+420734675810'>+420 734 675 810</a>
                <button
                  className='font-labil font-black place-self-start ffs-12-hover'
                  onClick={() => openNewsletter()}
                >
                  {language === 'cz' && 'Odběr newsletteru ←'}
                  {language === 'en' && 'newsletter subscription ←'}
                  {language === 'de' && 'Newsletter abonnieren ←'}
                  {language === 'ua' && 'Слідкувати за нашими новинами ←'}
                </button>
              </div>
              <p>
                {language === 'cz' &&
                  'Do učebny v 1. patře se dostaneš buď z Pavlíkovy ulice, nebo zadním vchodem z Hostašových sadů. Auto můžeš při troše štěstí nechat v ulicích Jiráskova a Dobrovského, v nouzi přímo na náměstí Míru.'}
                {language === 'en' &&
                  'You can get to the classroom on the 1st floor either from Pavlíkova Street or by the rear entrance from Hostašovy sady. With a bit of luck, you can leave your car in the streets of Jiráskova and Dobrovského, at a pinch right on the Mír Square (náměstí Míru).'}
                {language === 'de' &&
                  'Die Lehrräume im 1. Stock sind entweder von der Pavlíkova Straße oder durch den Hintereingang vom Hostašovy-Park aus zugänglich. Wenn du etwas Glück hast, kannst du dein Auto in den Straßen Jiráskova und Dobrovského oder im Notfall direkt am Náměstí Míru (Hauptplatz) abstellen.'}
                {language === 'ua' &&
                  'Ти можеш потрапити до класу на 1-му поверсі або з вулиці Pavlíkova, або через чорний вхід з Hostašové sady. Якщо пощастить, ви можете залишити машину на вулицях Jiráskova та Dobrovského, або в екстреному випадку прямо на Náměstí Míru.'}
              </p>
              <div className='grid'>
                <p>Fakturační údaje:</p>
                <p>rozmluv se s. r. o.</p>
                <p>Pavlíkova 7, Klatovy</p>
                <p>IČO: 19647964</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-8 mt-10'>
              <img src='/contact/1.webp' alt='cedule' className='rounded-2xl' />
              <img src='/contact/3.webp' alt='učebna' className='rounded-2xl' />
            </div>
          </div>

          <div className='xl:hidden'>
            <div className='font-stabil text-lg xl:text-2xl grid gap-y-10'>
              <div className='grid'>
                <p>Pavlíkova 7, Klatovy</p>
                <p>Křížová 162, Klatovy</p>
                <a href='mailto:ciao@rozmluv.se'>ciao@rozmluv.se</a>
                <a href='tel:+420734675810'>+420 734 675 810</a>
                <button
                  className='font-labil font-black place-self-start ffs-12-hover'
                  onClick={() => openNewsletter()}
                >
                  {language === 'cz' && 'Odběr newsletteru ←'}
                  {language === 'en' && 'newsletter subscription ←'}
                  {language === 'de' && 'Newsletter abonnieren ←'}
                  {language === 'ua' && 'Слідкувати за нашими новинами ←'}
                </button>
              </div>
              <p>
                {language === 'cz' &&
                  'Do učebny v 1. patře se dostaneš buď z Pavlíkovy ulice, nebo zadním vchodem z Hostašových sadů. Auto můžeš při troše štěstí nechat v ulicích Jiráskova a Dobrovského, v nouzi přímo na náměstí Míru.'}
                {language === 'en' &&
                  'You can get to the classroom on the 1st floor either from Pavlíkova Street or by the rear entrance from Hostašovy sady. With a bit of luck, you can leave your car in the streets of Jiráskova and Dobrovského, at a pinch right on the Mír Square (náměstí Míru).'}
                {language === 'de' &&
                  'Die Lehrräume im 1. Stock sind entweder von der Pavlíkova Straße oder durch den Hintereingang vom Hostašovy-Park aus zugänglich. Wenn du etwas Glück hast, kannst du dein Auto in den Straßen Jiráskova und Dobrovského oder im Notfall direkt am Náměstí Míru (Hauptplatz) abstellen.'}
                {language === 'ua' &&
                  'Ти можеш потрапити до класу на 1-му поверсі або з вулиці Pavlíkova, або через чорний вхід з Hostašové sady. Якщо пощастить, ви можете залишити машину на вулицях Jiráskova та Dobrovského, або в екстреному випадку прямо на Náměstí Míru.'}
              </p>
              <div className='grid'>
                <p>Fakturační údaje:</p>
                <p>rozmluv se s. r. o.</p>
                <p>Pavlíkova 7, Klatovy</p>
                <p>IČO: 19647964</p>
              </div>
            </div>
          </div>
        </Cols>

        <div className='grid grid-cols-2 gap-8 mt-10 xl:hidden'>
          <img src='/contact/1.webp' alt='cedule' className='rounded-2xl' />
          <img src='/contact/3.webp' alt='učebna' className='rounded-2xl' />
        </div>
      </Container>
    </section>
  )
}
