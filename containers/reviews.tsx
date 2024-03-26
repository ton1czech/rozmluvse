'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
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

export const Reviews = () => {
  const { language } = useLanguage()

  return (
    <section id='references' className='scroll-mt-28'>
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

            <div className='grid-cols-2 gap-8 mt-14 hidden lg:grid'>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {reviews.slice(0, 2).map(review => (
                  <AccordionItem
                    key={review.textCz + review.nameCz}
                    value={review.textCz}
                    style={{ backgroundColor: review.color }}
                    className='rounded-2xl'
                  >
                    <AccordionTrigger>
                      <div className='flex gap-2 items-center truncate'>
                        <img
                          src={review.avatar}
                          alt={review.nameCz}
                          className='rounded-full w-10 h-10'
                        />
                        <span className='line-clamp-1 text-left'>
                          {language === 'cz' && review.nameCz}
                          {language === 'en' && review.nameEn}
                          {language === 'de' && review.nameDe}
                          {language === 'ua' && review.nameUa}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      "{language === 'cz' && review.textCz}
                      {language === 'en' && review.textEn}
                      {language === 'de' && review.textDe}
                      {language === 'ua' && review.textUa}
                      "
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {reviews.slice(2, 3).map(review => (
                  <AccordionItem
                    key={review.textCz + review.nameCz}
                    value={review.textCz}
                    style={{ backgroundColor: review.color }}
                    className='rounded-2xl h-min'
                  >
                    <AccordionTrigger>
                      <div className='flex gap-2 items-center'>
                        <img
                          src={review.avatar}
                          alt={review.nameCz}
                          className='rounded-full w-10 h-10'
                        />
                        <span className='line-clamp-1 text-left'>
                          {language === 'cz' && review.nameCz}
                          {language === 'en' && review.nameEn}
                          {language === 'de' && review.nameDe}
                          {language === 'ua' && review.nameUa}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      "{language === 'cz' && review.textCz}
                      {language === 'en' && review.textEn}
                      {language === 'de' && review.textDe}
                      {language === 'ua' && review.textUa}
                      "
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Cols>

        <div className='grid sm:grid-cols-2 gap-4 mt-14 lg:hidden'>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {reviews.slice(0, 2).map(review => (
              <AccordionItem
                key={review.textCz + review.nameCz}
                value={review.textCz}
                style={{ backgroundColor: review.color }}
                className='rounded-2xl h-min'
              >
                <AccordionTrigger>
                  <div className='flex gap-2 items-center'>
                    <img
                      src={review.avatar}
                      alt={review.nameCz}
                      className='rounded-full w-10 h-10'
                    />
                    <span className='line-clamp-1 text-left'>
                      {language === 'cz' && review.nameCz}
                      {language === 'en' && review.nameEn}
                      {language === 'de' && review.nameDe}
                      {language === 'ua' && review.nameUa}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  "{language === 'cz' && review.textCz}
                  {language === 'en' && review.textEn}
                  {language === 'de' && review.textDe}
                  {language === 'ua' && review.textUa}
                  "
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {reviews.slice(2, 3).map(review => (
              <AccordionItem
                key={review.textCz + review.nameCz}
                value={review.textCz}
                style={{ backgroundColor: review.color }}
                className='rounded-2xl h-min'
              >
                <AccordionTrigger>
                  <div className='flex gap-2 items-center'>
                    <img
                      src={review.avatar}
                      alt={review.nameCz}
                      className='rounded-full w-10 h-10'
                    />
                    <span className='line-clamp-1 text-left'>
                      {language === 'cz' && review.nameCz}
                      {language === 'en' && review.nameEn}
                      {language === 'de' && review.nameDe}
                      {language === 'ua' && review.nameUa}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  "{language === 'cz' && review.textCz}
                  {language === 'en' && review.textEn}
                  {language === 'de' && review.textDe}
                  {language === 'ua' && review.textUa}
                  "
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
