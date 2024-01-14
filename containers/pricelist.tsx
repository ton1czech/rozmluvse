'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { pricelist } from '@/database/pricelist'
import { useLanguage } from '@/store/use-language'

export const Pricelist = () => {
  const { language } = useLanguage()
  return (
    <section id='pricelist' className='scroll-mt-28'>
      <Container>
        <InfoText
          textCz='Online i offline lekce stojí stejně. Jak se přihlásíš, zaplatíš a vystornuješ, najdeš'
          textEn='Both online and offline lessons cost the same. To log in, to pay or to cancel your lesson, please click'
          textDe='Online- und Offline-Unterricht kosten das Gleiche. Um herauszufinden, wie du dich anmeldest, bezahlst und stornierst, klicke'
          textUa='Онлайн і офлайн уроки коштують однаково. Під час реєстрації, оплати та скасування ви побачите'
          href='/payment'
          linkCz='tadydle ←'
          linkEn='here ←'
          linkDe='hier ←'
          linkUa='це ←'
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
          className='mt-14 !pb-10 !select-none'
        >
          {pricelist.map(item => (
            <SwiperSlide
              key={item.color}
              className='rounded-3xl min-h-[450px] md:min-h-[520px]'
              style={{ background: item.color }}
            >
              <div className='grid place-content-center p-10 min-h-[450px] md:min-h-[520px] text-center'>
                <h3 className='text-3xl lg:text-4xl text-center font-black'>
                  {language === 'cz' && item.labelCz}
                  {language === 'en' && item.labelEn}
                  {language === 'de' && item.labelDe}
                  {language === 'ua' && item.labelUa}
                </h3>
                <h3 className='text-3xl lg:text-4xl text-center mb-8 font-black'>
                  {language === 'cz' && item.peopleCz}
                  {language === 'en' && item.peopleEn}
                  {language === 'de' && item.peopleDe}
                  {language === 'ua' && item.peopleUa}
                </h3>
                {item.option1 && (
                  <p className='text-xl lg:text-3xl font-stabil'>
                    {item.option1}
                  </p>
                )}
                {item.per1Cz && (
                  <p className='text-xl lg:text-3xl font-stabil'>
                    {language === 'cz' && item.per1Cz}
                    {language === 'en' && item.per1En}
                    {language === 'de' && item.per1De}
                    {language === 'ua' && item.per1Ua}
                  </p>
                )}
                {item.option2 && (
                  <p className='text-xl lg:text-3xl font-stabil mt-3 lg:mt-6'>
                    {item.option2}
                  </p>
                )}
                {item.per2Cz && (
                  <p className='text-xl lg:text-3xl font-stabil'>
                    {language === 'cz' && item.per2Cz}
                    {language === 'en' && item.per2En}
                    {language === 'de' && item.per2De}
                    {language === 'ua' && item.per2Ua}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}

          <div className='swiper-pagination w-full space-x-2 !bottom-0' />
        </Swiper>
      </Container>
    </section>
  )
}
