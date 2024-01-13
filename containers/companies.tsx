'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { companies } from '@/database/companies'
import { useLanguage } from '@/store/use-language'

export const Companies = () => {
  const { language } = useLanguage()

  return (
    <section id='companies' className='scroll-mt-28'>
      <Container>
        <InfoText
          textCz='Firemní výuku máme v malíčku. Pendlery rozmluvíme německy, cizince česky a kohokoli anglicky nebo čínsky. Sejít se můžeme v klatovské učebně, u vás ve firmě i online odkudkoli na světě.'
          textEn='A corporate education? To us a piece of cake. We help people who commute to work to Germany with their spoken German, we help foreigners to start speaking Czech and we help anyone with their spoken English or Chinese. We can meet you in the Klatovy classroom, at your company or even online from anywhere in the world.'
          textDe='Weiterbildung für Unternehmen ist unsere Kernkompetenz! Pendlerinnen und Pendler machen sich bei uns fit in Deutsch, Ausländerinnen und Ausländer lernen Tschechisch und für jeden haben wir Englisch oder Chinesisch im Angebot. Wir können die Schulungsräume in Klattau nutzen, zu Ihnen in die Firma kommen oder uns irgendwo auf der Welt online zusammenschalten.'
          textUa='Ми вміємо залучати до корпоративної роботи. Міжнародних працівників навчимо німецької, іноземців чеської та будь-кого англійської або китайської. Ми можемо зустрітись у класі Klatovy, у вашій компанії або онлайн з будь-якої точки світу.'
        />

        <Swiper
          modules={[Pagination]}
          spaceBetween={70}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          className='mt-14 !pb-10 2xl:!pb-0 !select-none'
        >
          {companies.map(item => (
            <SwiperSlide
              key={item.img}
              className='rounded-3xl min-h-[450px] md:min-h-[520px] 2xl:min-h-[600px]'
              style={{ background: item.color }}
            >
              <div className='grid place-content-center p-10 min-h-[450px] md:min-h-[520px] 2xl:min-h-[600px] gap-12'>
                <img
                  src={item.img}
                  alt={
                    language === 'cz'
                      ? item.textCz
                      : language === 'en'
                      ? item.textEn
                      : language === 'de'
                      ? item.textDe
                      : language === 'ua'
                      ? item.textUa
                      : ''
                  }
                  className='mx-auto max-h-24'
                />
                <p className='text-xl lg:text-3xl text-center'>
                  {language === 'cz' && item.textCz}
                  {language === 'en' && item.textEn}
                  {language === 'de' && item.textDe}
                  {language === 'ua' && item.textUa}
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div className='swiper-pagination w-full space-x-2 !bottom-0' />
        </Swiper>
      </Container>
    </section>
  )
}
