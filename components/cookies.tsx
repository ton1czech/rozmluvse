'use client'

import { useCookies } from '@/store/use-cookies'
import { useLanguage } from '@/store/use-language'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { Container } from './container'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

export const Cookies = () => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const {
    closeCookies,
    openCookies,
    isOpen,
    analyticsEnabled,
    setAnalyticsEnabled,
    setAnalyticsDisabled,
    functionalEnabled,
    setFunctionalEnabled,
    setFunctionalDisabled,
    closeCookiesPermanently,
  } = useCookies()

  const studio = pathname.includes('/studio')

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
  const [analyticsOn, setAnalyticsOn] = useState<boolean>(false)
  const [functionalOn, setFunctionalOn] = useState<boolean>(false)

  const handleAnalyticsCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnalyticsOn(event.target.checked)
  }

  const handleFunctionalCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunctionalOn(event.target.checked)
  }

  const handleSettings = () => {
    setIsSettingsOpen(true)
    closeCookies()
  }

  const handleSubmit = () => {
    setAnalyticsEnabled()
    closeCookiesPermanently()
  }

  const confirmSettings = () => {
    closeCookiesPermanently()
    setIsSettingsOpen(false)

    if (analyticsOn) setAnalyticsEnabled()
    if (!analyticsOn) setAnalyticsDisabled()
    if (functionalOn) setFunctionalEnabled()
    if (!functionalOn) setFunctionalDisabled()
  }

  useEffect(() => {
    if (!document.cookie.includes('cookiesClosed')) {
      openCookies()
    }
  }, [openCookies])

  return (
    <>
      {!studio && isOpen && (
        <div className='bg-[#00ABD3] fixed w-screen left-0 bottom-0 z-[999]'>
          <Container className='relative flex flex-col sm:grid sm:grid-cols-2 gap-8 lg:gap-20 py-4 lg:py-12'>
            <X
              className='absolute right-5 top-3 cursor-pointer'
              onClick={closeCookies}
            />
            <h3>
              {language === 'cz' &&
                'Máš chuť na cookies, bánh quy nebo 饼干? Ve všech třech případech jde o sušenky. Ty naše naštěstí nedrobí a ani po nich nepřibereš. Ťukni na „v pořádku“ a my soubory cookies využijeme pro účely personalizace a analýzy.'}
              {language === 'en' &&
                "Would you like some cookies, banh quy or ...? In all three cases those are sweets. Luckily, ours don't crumble or make one put on weight. Tap on 'all right' so we may use the cookie files for personalisation and analysis purposes."}
              {language === 'de' &&
                'Hast du Bock auf Cookies, bánh quy oder 饼干? In allen drei Fällen geht es um - Kekse. Die unseren bröseln zum Glück nicht und machen auch nicht dick. Klicke einfach auf „Akzeptieren“ und wir verwenden die cookie-Dateien für Personalisierungs- und Analysezwecke.'}
              {language === 'ua' && '!text!'}
            </h3>
            <div className='flex flex-col sm:flex-row gap-4 sm:self-end'>
              <Button
                onClick={handleSettings}
                className='bg-white rounded-full py-7 sm:py-6 text-2xl sm:text-lg text-black hover:bg-zinc-50 w-full ffs-12-hover'
              >
                {language === 'cz' && 'nastavení'}
                {language === 'en' && 'setting'}
                {language === 'de' && 'einstellungen'}
                {language === 'ua' && ''}
              </Button>
              <Button
                onClick={handleSubmit}
                className='bg-white rounded-full py-7 sm:py-6 text-2xl sm:text-lg text-black hover:bg-zinc-50 w-full ffs-12-hover'
              >
                {language === 'cz' && 'v pořádku'}
                {language === 'en' && 'all right'}
                {language === 'de' && 'einstellungen'}
                {language === 'ua' && ''}
              </Button>
            </div>
          </Container>
        </div>
      )}

      {!studio && isSettingsOpen && (
        <div className='bg-[#00AB3E] fixed w-screen left-0 bottom-0'>
          <Container>
            <h2 className='text-2xl mb-6 mt-4'>
              {language === 'cz' && 'Vyber si podle chuti:'}
              {language === 'en' && 'Choose up to your taste:'}
              {language === 'de' && 'Wähle nach Belieben aus:'}
              {language === 'ua' && '!text!'}
            </h2>

            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-12 max-w-[66%]'>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                  <input
                    type='checkbox'
                    name='func-cookies'
                    id='func-cookies'
                    defaultChecked={functionalEnabled}
                    onChange={handleFunctionalCheckboxChange}
                  />
                  <h3 className='font-stabil items-center'>
                    {language === 'cz' && 'funkční cookies'}
                    {language === 'en' && 'functional cookies'}
                    {language === 'de' && 'Funktions-Cookies'}
                    {language === 'ua' && '!text!'}
                  </h3>
                </div>
                <p className='font-stabil'>
                  {language === 'cz' &&
                    'Zajišťují správné a bezpečné fungování webu, bez nich by žádné internetové stránky nefungovaly. Nejdou vypnout, promiň.'}
                  {language === 'en' &&
                    "They enable the web to work correctly and safely, without them any website wouldn't work. They can't be turned off, sorry."}
                  {language === 'de' &&
                    'Die gewährleisten das korrekte und sichere Funktionieren unserer Webseite. Ohne sie könnte keine Internetseite laufen. Kann nicht ausgeschaltet werden, sorry.'}
                  {language === 'ua' && '!text!'}
                </p>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                  <input
                    type='checkbox'
                    name='analytic-cookies'
                    id='analytic-cookies'
                    defaultChecked={analyticsEnabled}
                    onChange={handleAnalyticsCheckboxChange}
                  />
                  <h3 className='font-stabil items-center'>
                    {language === 'cz' && 'analytické cookies'}
                    {language === 'en' && 'analytical cookies'}
                    {language === 'de' && 'Analytische Cookies'}
                    {language === 'ua' && '!text!'}
                  </h3>
                </div>
                <p className='font-stabil'>
                  {language === 'cz' &&
                    'Sledují, jak se na našem webu pohybuješ. Přeloženo do češtiny - vidíme, kam klikáš a příště ti nabídneme obsah, který tě zajímá nejvíc.'}
                  {language === 'en' &&
                    'They watch how you move along our website. In other words - we can see where you click and next time can offer you the content you are interested in most.'}
                  {language === 'de' &&
                    'Die verfolgen, wo du dich auf unseren Seitern herumtreibst. Oder auf Deutsch - wir sehen, worauf du klickst und das nächste Mal präsentieren wir Dir genau das, was dich am meisten interessiert. '}
                  {language === 'ua' && '!text!'}
                </p>
              </div>
            </div>

            <div className='flex justify-end'>
              <Button
                onClick={confirmSettings}
                className='bg-white rounded-full py-7 sm:py-6 text-2xl sm:text-lg text-black hover:bg-zinc-50 w-full md:w-1/2 xl:w-1/4 ffs-12-hover mt-10 mb-4'
              >
                {language === 'cz' && 'uložit a sníst'}
                {language === 'en' && '!text!'}
                {language === 'de' && '!text!'}
                {language === 'ua' && '!text!'}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}
