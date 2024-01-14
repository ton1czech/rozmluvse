'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { Button } from '@/components/ui/button'

export const About = ({ lectors }: { lectors: any }) => {
  const { language } = useLanguage()

  const offer = {
    titleCz: 'Chceš se stát součástí lektorského týmu?',
    titleEn: "Would you like to join the lecturers' team?",
    titleDe: 'Willst du Teil unseres Lektor*innenteams werden?',
    titleUa: '',
    buttonCz: 'To teda',
    buttonEn: 'Hell yeah',
    buttonDe: 'Aber sowas von!',
    buttonUa: '',
    color: '#FD828C',
  }

  const lectorsWithOffer = [...lectors, offer]

  return (
    <section id='about' className='scroll-mt-28'>
      <Container>
        <InfoText
          textCz='S naším lektorským týmem zajišťujeme ty nejlepší podmínky k tomu, abys měl*a možnost se co nejdříve rozmluvit. Máme pozitivní zkušenost s individuálními lekcemi nebo kurzy ve skupinách s opravdu nízkým počtem osob. Dostaneš se tak ke slovu dostatečně často, jazyk tě bude bavit a prostě se rozmluvíš. Více o tom, jak vzniklo naše studio se dozvíš'
          textEn="Our team is providing the best conditions to get you talking fluently as soon as possible. We have a positive experience with both individual lessons or small group courses. At our studio, you'll get a word often enough and you will enjoy the language along. So, learn more about how our studio was established"
          textDe='Mit unserem Dozententeam bieten wir dir die optimale Umgebung, damit du dich so schnell wie möglich in der fremden Sprache verständigen kannst. Wir haben positive Erfahrungen mit Einzelunterricht oder mit Gruppenkursen mit einer wirklich kleinen Anzahl an Teilnehmern. So kommst Du oft genug zu Wort, hast Spaß an der Sprache und redest dich einfach frei. Mehr darüber, wie unser Studio entstanden ist, erfährst du'
          textUa='З нашою командою викладачів ми забезпечуємо найкращі умови, щоб ви мали можливість якнайшвидше розговоритися. У нас є позитивний досвід індивідуальних занять або курсів у групах з дійсно невеликою кількістю людей. Таким чином, ти зможеш говорити досить часто, тобі сподобається мова і ти просто будеш спілкуватися. Детальніше про те, як створювалася наша студія, можна дізнатися'
          href='/story'
          linkCz='zde ←'
          linkEn='here ←'
          linkDe='hier ←'
          linkUa='тут ←'
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
          {lectorsWithOffer.map((lector: any) => (
            <SwiperSlide key={lector.name} className='rounded-3xl'>
              {lector.name ? (
                <Link
                  href={`/lectors/${lector.slug.current}`}
                  className='grid place-content-center'
                >
                  <img
                    src={urlForImage(lector.image)}
                    alt={lector.name}
                    className='mb-4 w-full rounded-3xl'
                  />
                  <h3 className='text-xl lg:text-2xl text-center font-black'>
                    {lector.name}
                  </h3>
                  <p className='font-stabil text-lg lg:text-xl text-center'>
                    {language === 'cz' && lector.roleCz}
                    {language === 'en' && lector.roleEn}
                    {language === 'de' && lector.roleDe}
                    {language === 'ua' && lector.roleUa}
                  </p>
                </Link>
              ) : (
                <div
                  style={{ background: lector.color }}
                  className='grid place-content-center rounded-3xl px-8 py-52 sm:py-96 md:py-48 lg:py-72 2xl:py-64 text-center !min-h-full'
                >
                  <h2 className='text-xl sm:text-3xl mb-8'>
                    {language === 'cz' && lector.titleCz}
                    {language === 'en' && lector.titleEn}
                    {language === 'de' && lector.titleDe}
                    {language === 'ua' && lector.titleUa}
                  </h2>
                  <Link href='/for-lectors'>
                    <Button
                      className='rounded-full bg-white hover:bg-zinc-100 text-lg sm:text-xl py-6 px-10'
                      size='lg'
                    >
                      {language === 'cz' && lector.buttonCz}
                      {language === 'en' && lector.buttonEn}
                      {language === 'de' && lector.buttonDe}
                      {language === 'ua' && lector.buttonUa}
                    </Button>
                  </Link>
                </div>
              )}
            </SwiperSlide>
          ))}

          <div className='swiper-pagination w-full space-x-2 !bottom-0' />
        </Swiper>
      </Container>
    </section>
  )
}
