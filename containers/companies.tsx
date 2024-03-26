'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { companies } from '@/database/companies'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { Cols } from '@/components/cols'
import { SectionTitle } from '@/components/section-title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Companies = () => {
  const { language } = useLanguage()

  return (
    <section id='companies' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Zapoj firmu'
            titleEn='Involve your company'
            titleDe='Firma einbeziehen'
            titleUa='приєднати фірму'
          />

          <div>
            <InfoText
              textCz='Firemní výuku máme v malíčku. Pendlery rozmluvíme německy, cizince česky a kohokoli anglicky nebo čínsky. Sejít se můžeme v klatovské učebně, u vás ve firmě i online odkudkoli na světě.'
              textEn='A corporate education? To us a piece of cake. We help people who commute to work to Germany with their spoken German, we help foreigners to start speaking Czech and we help anyone with their spoken English or Chinese. We can meet you in the Klatovy classroom, at your company or even online from anywhere in the world.'
              textDe='Weiterbildung für Unternehmen ist unsere Kernkompetenz! Pendlerinnen und Pendler machen sich bei uns fit in Deutsch, Ausländerinnen und Ausländer lernen Tschechisch und für jeden haben wir Englisch oder Chinesisch im Angebot. Wir können die Schulungsräume in Klattau nutzen, zu Ihnen in die Firma kommen oder uns irgendwo auf der Welt online zusammenschalten.'
              textUa='Ми вміємо залучати до корпоративної роботи. Міжнародних працівників навчимо німецької, іноземців чеської та будь-кого англійської або китайської. Ми можемо зустрітись у класі Klatovy, у вашій компанії або онлайн з будь-якої точки світу.'
            />

            <div className='grid-cols-2 gap-8 mt-14 hidden lg:grid'>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {companies.slice(0, 2).map(company => (
                  <AccordionItem
                key={company.link}
                    value={company.textCz}
                    style={{ backgroundColor: company.color }}
                    className='rounded-2xl h-min'
                  >
                    <AccordionTrigger>{company.title}</AccordionTrigger>
                    <AccordionContent>
                      {language === 'cz' && company.textCz}
                      {language === 'en' && company.textEn}
                      {language === 'de' && company.textDe}
                      {language === 'ua' && company.textUa}

                      <br />
                      <div className='flex justify-between mt-4 text-xs'>
                        <Link href={company.link}>{company.link}</Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {companies.slice(2, 3).map(company => (
                  <AccordionItem
                key={company.link}
                    value={company.textCz}
                    style={{ backgroundColor: company.color }}
                    className='rounded-2xl h-min'
                  >
                    <AccordionTrigger>{company.title}</AccordionTrigger>
                    <AccordionContent>
                      {language === 'cz' && company.textCz}
                      {language === 'en' && company.textEn}
                      {language === 'de' && company.textDe}
                      {language === 'ua' && company.textUa}

                      <br />
                      <div className='flex justify-between mt-4 text-xs'>
                        <Link href={company.link}>{company.link}</Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Cols>

        <div className='grid sm:grid-cols-2 gap-4 mt-14 lg:hidden'>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {companies.slice(0, 2).map(company => (
              <AccordionItem
                key={company.link}
                value={company.textCz}
                style={{ backgroundColor: company.color }}
                className='rounded-2xl h-min'
              >
                <AccordionTrigger>{company.title}</AccordionTrigger>
                <AccordionContent>
                  {language === 'cz' && company.textCz}
                  {language === 'en' && company.textEn}
                  {language === 'de' && company.textDe}
                  {language === 'ua' && company.textUa}

                  <br />
                  <div className='flex justify-between mt-4 text-xs'>
                    <Link href={company.link}>{company.link}</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {companies.slice(2, 3).map(company => (
              <AccordionItem
                key={company.link}
                value={company.textCz}
                style={{ backgroundColor: company.color }}
                className='rounded-2xl h-min'
              >
                <AccordionTrigger>{company.title}</AccordionTrigger>
                <AccordionContent>
                  {language === 'cz' && company.textCz}
                  {language === 'en' && company.textEn}
                  {language === 'de' && company.textDe}
                  {language === 'ua' && company.textUa}

                  <br />
                  <div className='flex justify-between mt-4 text-xs'>
                    <Link href={company.link}>{company.link}</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
