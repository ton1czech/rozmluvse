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

export const Pricelist = () => {
  const { language } = useLanguage()

  return (
    <section id='pricelist' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Ceník'
            titleEn='Pricelist'
            titleDe='Preisliste'
            titleUa='прайслист'
          />

          <div>
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

            <div className='grid-cols-2 gap-8 mt-14 hidden lg:grid'>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {pricelist.slice(0, 2).map(item => (
                  <AccordionItem
                    key={item.labelCz + item.option1Cz}
                    value={item.value}
                    style={{ backgroundColor: item.color }}
                    className='rounded-2xl h-min'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.labelCz}
                        {language === 'en' && item.labelEn}
                        {language === 'de' && item.labelDe}
                        {language === 'ua' && item.labelUa}
                      </span>
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
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {pricelist.slice(2, 4).map(item => (
                  <AccordionItem
                    key={item.labelCz + item.option1Cz}
                    value={item.value}
                    style={{ backgroundColor: item.color }}
                    className='rounded-2xl h-min'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.labelCz}
                        {language === 'en' && item.labelEn}
                        {language === 'de' && item.labelDe}
                        {language === 'ua' && item.labelUa}
                      </span>
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
            </div>
          </div>
        </Cols>

        <div className='grid sm:grid-cols-2 gap-4 mt-14 lg:hidden'>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {pricelist.slice(0, 2).map(item => (
              <AccordionItem
                key={item.labelCz + item.option1Cz}
                value={item.value}
                style={{ backgroundColor: item.color }}
                className='rounded-2xl h-min'
              >
                <AccordionTrigger className='text-2xl font-black'>
                  <span className='line-clamp-1 text-left'>
                    {language === 'cz' && item.labelCz}
                    {language === 'en' && item.labelEn}
                    {language === 'de' && item.labelDe}
                    {language === 'ua' && item.labelUa}
                  </span>
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
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {pricelist.slice(2, 4).map(item => (
              <AccordionItem
                key={item.labelCz + item.option1Cz}
                value={item.value}
                style={{ backgroundColor: item.color }}
                className='rounded-2xl h-min'
              >
                <AccordionTrigger className='text-2xl font-black'>
                  <span className='line-clamp-1 text-left'>
                    {language === 'cz' && item.labelCz}
                    {language === 'en' && item.labelEn}
                    {language === 'de' && item.labelDe}
                    {language === 'ua' && item.labelUa}
                  </span>
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
        </div>
      </Container>
    </section>
  )
}
