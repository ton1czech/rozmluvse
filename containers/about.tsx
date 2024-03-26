'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import { SectionTitle } from '@/components/section-title'

export const About = ({ lectors }: { lectors: any }) => {
  const { language } = useLanguage()

  return (
    <section id='about' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='O nás'
            titleEn='About us'
            titleDe='Über uns'
            titleUa='про нас'
          />
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
        </Cols>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14'>
          {lectors.map((lector: any) => (
            <Link
              key={lector.name}
              href={`/lectors/${lector.slug.current}`}
              className='rounded-2xl'
            >
              <img
                src={urlForImage(lector.image)}
                alt={lector.name}
                className='mb-4 w-full rounded-3xl'
              />
              <h3 className='font-stabil'>{lector.name}</h3>
              <p className='font-stabil'>
                {language === 'cz' && lector.roleCz}
                {language === 'en' && lector.roleEn}
                {language === 'de' && lector.roleDe}
                {language === 'ua' && lector.roleUa}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
