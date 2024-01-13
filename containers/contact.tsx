'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import { useNewsletter } from '@/store/use-newsletter'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { companies } from '@/database/companies'
import { contact } from '@/database/contact'

export const Contact = () => {
  const { language } = useLanguage()
  const { openNewsletter } = useNewsletter()

  return (
    <section id='contact' className='scroll-mt-28'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-40 xl:gap-60'>
          <InfoText
            textCz='Do učebny v 1. patře se dostaneš buď z Pavlíkovy ulice, nebo zadním vchodem z Hostašových sadů. Auto můžeš při troše štěstí nechat v ulicích Jiráskova a Dobrovského, v nouzi přímo na náměstí Míru.'
            textEn='You can get to the classroom on the 1st floor either from Pavlíkova Street or by the rear entrance from Hostašovy sady. With a bit of luck, you can leave your car in the streets of Jiráskova and Dobrovského, at a pinch right on the Mír Square (náměstí Míru).'
            textDe='Die Lehrräume im 1. Stock sind entweder von der Pavlíkova Straße oder durch den Hintereingang vom Hostašovy-Park aus zugänglich. Wenn du etwas Glück hast, kannst du dein Auto in den Straßen Jiráskova und Dobrovského oder im Notfall direkt am Náměstí Míru (Hauptplatz) abstellen.'
            textUa='Ти можеш потрапити до класу на 1-му поверсі або з вулиці Pavlíkova, або через чорний вхід з Hostašové sady. Якщо пощастить, ви можете залишити машину на вулицях Jiráskova та Dobrovského, або в екстреному випадку прямо на Náměstí Míru.'
          />
          <div className='font-stabil text-xl lg:text-3xl flex flex-col flex-nowrap whitespace-nowrap w-[101%]'>
            <p>Pavlíkova 7, Klatovy</p>
            <p>Křížová 162, Klatovy</p>
            <a href='mailto:ciao@rozmluv.se'>ciao@rozmluv.se</a>
            <a href='tel:+420734675810'>+420 734 675 810</a>
            <button
              className='font-labil font-black mt-2 place-self-start ffs-12-hover'
              onClick={() => openNewsletter()}
            >
              {language === 'cz' && 'Odběr newsletteru ←'}
              {language === 'en' && 'newsletter subscription ←'}
              {language === 'de' && 'Newsletter abonnieren ←'}
              {language === 'ua' && 'Слідкувати за нашими новинами ←'}
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={70}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className='mt-14 !pb-10 xl:!pb-0'
        >
          {contact.map(item => (
            <SwiperSlide
              key={item}
              className='rounded-3xl min-h-[450px] md:min-h-[520px] lg:min-h-[600px]'
            >
              <img
                src={item}
                alt='contact photo'
                className='rounded-3xl w-full h-full'
              />
            </SwiperSlide>
          ))}

          <div className='swiper-pagination w-full space-x-2 !bottom-0' />
        </Swiper>
      </Container>
    </section>
  )
}
