'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { languages } from '@/database/languages'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export const Languages = () => {
  const { language } = useLanguage()

  return (
    <section id='languages' className='scroll-mt-28'>
      <Container>
        <InfoText
          textCz='Užij si svoje hodiny individuálně, ve dvojici nebo v malé skupince
              s max. 4 dalšími studenty. Nemusíš se nám upisovat na celé
              pololetí, rezervuj si klidně jenom 10 lekcí. Na osobní schůzce,
              online callu nebo telefonátu před zahájením kurzu spolu doladíme
              detaily. Všechny naše skupinové kurzy s volným místem pro tebe
              máme přehledně vypsané'
          textEn="Enjoy your classes either individually, in pairs or in small
              groups of no more than 5 students. You don't have to sign up for
              the whole semester immediately, but to start off you may book just
              10 lessons. We work out the details at a face-to-face meeting or
              during an online call or a phone call before the course begins. We
              have all our available group courses for you listed"
          textDe='Gestalte dir deine Stunden entweder individuell, zu zweit oder
              auch in der Kleingruppe mit nicht mehr als vier Lernenden. Du
              musst dich bei uns nicht gleich für ein ganzes Semester
              einschreiben, buche ruhig erst einmal nur zehn Lektionen. Die
              Details können wir persönlich vor Kursbeginn besprechen, gerne
              auch per Videoanruf oder telefonisch. Alle unsere Gruppenkurse, in
              denen noch ein freier Platz für dich ist, haben wir hier
              übersichtlich'
          textUa='Насолоджуйся своїми уроками індивідуально, в парах або в невеликій
              групі, котра складається з максимально з 4 учасників. Тобі не
              потрібно записуватись до нас на весь семестр, просто забронюй 10
              уроків. Ми разом узгодимо деталі під час особистої зустрічі,
              онлайн-дзвінка або телефонного дзвінка перед початком курсу. Усі
              наші групові курси з вільним місцем чітко перераховані'
          href='https://linktr.ee/rozmluv.se'
          linkCz='tady ←'
          linkEn='here ←'
          linkDe='aufgelistet ←'
          linkUa='тут ←'
        />

        <div className='grid lg:grid-cols-3 gap-8 mt-14'>
          {languages.map(item => (
            <Link
              key={item.labelCz}
              href={item.disabled ? '' : '/form'}
              style={{ background: item.color }}
              className={cn(
                'text-center text-3xl lg:text-4xl rounded-3xl py-16 lg:py-24 font-black',
                item.disabled && 'cursor-not-allowed',
                !item.disabled && 'ffs-12-hover'
              )}
            >
              {language === 'cz' && item.labelCz}
              {language === 'en' && item.labelEn}
              {language === 'de' && item.labelDe}
              {language === 'ua' && item.labelUa}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
