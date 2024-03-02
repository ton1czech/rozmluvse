'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { pricelist } from '@/database/pricelist'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionTitle } from '@/components/section-title'
import { reviews } from '@/database/reviews'
import Link from 'next/link'

export const Reviews = () => {
  const { language } = useLanguage()

  return (
    <section id='pricelist' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Reference'
            titleEn='References'
            titleDe='Referenzen'
            titleUa='довідка'
          />

          <div>
            <InfoText
              textCz='Těšíme se z každého spokojeného studenta. Těšíme se z každého snu, který sis mohl díky jazyku splnit. Těšíme se z každé reference, kterou nám můžeš poslat i ty, a to přímo'
              textEn='We rejoice in every satisfied student. We rejoice in every dream you could make come true by getting you language skills improved. We rejoice in every reference you can send us right'
              textDe='Wir freuen uns über jede zufriedene Schülerin und jeden zufriedenen Schüler. Wir freuen uns über jeden Traum, den du dir durch die Sprache erfüllen konntest. Wir freuen uns über jede Referenz, die auch du uns schicken kannst, und zwar gleich'
              textUa='Ми з нетерпінням чекаємо на кожного задоволеного студента. Ми радіємо кожній мрії, яка збувається завдяки оволодінню мовою. Ми чекаємо на кожний відгук чи пораду, яке ти можеш надіслати нам прямо'
              href='/feedback-form'
              linkCz='sem ←'
              linkEn='here ←'
              linkDe='hier ←'
              linkUa='сюди ←'
            />

            <Accordion
              type='multiple'
              className='grid-cols-2 gap-8 mt-14 hidden lg:grid'
            >
              {reviews.map(review => (
                <AccordionItem
                  value={review.textCz}
                  style={{ backgroundColor: review.color }}
                  className='rounded-2xl'
                >
                  <AccordionTrigger>
                    {language === 'cz' && review.nameCz}
                    {language === 'en' && review.nameEn}
                    {language === 'de' && review.nameDe}
                    {language === 'ua' && review.nameUa}
                  </AccordionTrigger>
                  <AccordionContent>
                    "{language === 'cz' && review.textCz}
                    {language === 'en' && review.textEn}
                    {language === 'de' && review.textDe}
                    {language === 'ua' && review.textUa}
                    "
                    <br />
                    <div className='text-right mt-4 text-xs'>
                      <Link href='/personal-info'>
                        Imprint & Privacy Policy
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Cols>

        <Accordion
          type='multiple'
          className='grid grid-cols-2 gap-8 mt-14 lg:hidden'
        >
          {pricelist.map(item => (
            <AccordionItem
              value={item.value}
              style={{ backgroundColor: item.color }}
              className='rounded-2xl'
            >
              <AccordionTrigger className='text-2xl font-black'>
                {language === 'cz' && item.labelCz}
                {language === 'en' && item.labelEn}
                {language === 'de' && item.labelDe}
                {language === 'ua' && item.labelUa}
              </AccordionTrigger>
              <AccordionContent>
                {item.option1Cz && (
                  <>
                    {language === 'cz' && item.option1Cz}
                    {language === 'en' && item.option1En}
                    {language === 'de' && item.option1De}
                    {language === 'ua' && item.option1Ua}
                  </>
                )}
                <br />
                {item.option2Cz && (
                  <>
                    {language === 'cz' && item.option2Cz}
                    {language === 'en' && item.option2En}
                    {language === 'de' && item.option2De}
                    {language === 'ua' && item.option2Ua}
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
