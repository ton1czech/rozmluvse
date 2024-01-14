'use client'

import { useCookies } from '@/store/use-cookies'
import { useLanguage } from '@/store/use-language'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export const Cookies = () => {
  const { language } = useLanguage()
  const {
    closeCookies,
    openCookies,
    isOpen,
    setAnalyticsEnabled,
    closeCookiesPermanently,
  } = useCookies()

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!document.cookie.includes('cookiesClosed')) {
      openCookies()
    }
  }, [openCookies])

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
  }

  return (
    <>
      {isOpen && (
        <div className='bg-[#00ABD3] fixed w-screen min-h-1/4 left-0 bottom-0 py-4 lg:py-12 px-4 lg:px-96 flex flex-col lg:flex-row gap-8 lg:gap-20 z-[999]'>
          <h3 className='text-xl max-w-prose'>
            {language === 'cz' &&
              'Máš chuť na cookies, bánh quy nebo 饼干? Ve všech třech případech jde o sušenky. Ty naše naštěstí nedrobí a ani po nich nepřibereš. Ťukni na „v pořádku“ a my soubory cookies využijeme pro účely personalizace a analýzy.'}
            {language === 'en' &&
              "Would you like some cookies, banh quy or ...? In all three cases those are sweets. Luckily, ours don't crumble or make one put on weight. Tap on 'all right' so we may use the cookie files for personalisation and analysis purposes."}
            {language === 'de' &&
              'Hast du Bock auf Cookies, bánh quy oder 饼干? In allen drei Fällen geht es um - Kekse. Die unseren bröseln zum Glück nicht und machen auch nicht dick. Klicke einfach auf „Akzeptieren“ und wir verwenden die cookie-Dateien für Personalisierungs- und Analysezwecke.'}
            {language === 'ua' && ''}
          </h3>
          <div className='flex lg:flex-col gap-4 max-lg:justify-between'>
            <Button
              onClick={handleSettings}
              className='bg-white rounded-full py-7 text-xl text-black hover:bg-zinc-50 w-full lg:min-w-64 ffs-12-hover'
            >
              {language === 'cz' && 'nastavení'}
              {language === 'en' && 'setting'}
              {language === 'de' && 'einstellungen'}
              {language === 'ua' && ''}
            </Button>
            <Button
              onClick={handleSubmit}
              className='bg-white rounded-full py-7 text-xl text-black hover:bg-zinc-50 w-full lg:min-w-64 ffs-12-hover'
            >
              {language === 'cz' && 'v pořádku'}
              {language === 'en' && 'all right'}
              {language === 'de' && 'einstellungen'}
              {language === 'ua' && ''}
            </Button>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className='bg-[#00AB3E] fixed w-screen lg:w-1/4 h-screen left-0 top-0 pt-56 lg:pt-32 px-12'>
          <h2 className='text-3xl lg:text-4xl mb-6'>
            {language === 'cz' && 'Vyber si podle chuti:'}
            {language === 'en' && 'Choose up to your taste:'}
            {language === 'de' && 'Wähle nach Belieben aus:'}
            {language === 'ua' && ''}
          </h2>

          <h3 className='flex gap-2 text-2xl font-stabil items-center mb-3 lg:text-3xl'>
            <ArrowRight />
            {language === 'cz' && 'funkční cookies'}
            {language === 'en' && 'functional cookies'}
            {language === 'de' && 'Funktions-Cookies'}
            {language === 'ua' && ''}
          </h3>
          <p className='font-stabil text-xl'>
            {language === 'cz' &&
              'Zajišťují správné a bezpečné fungování webu, bez nich by žádné internetové stránky nefungovaly. Nejdou vypnout, promiň.'}
            {language === 'en' &&
              "They enable the web to work correctly and safely, without them any website wouldn't work. They can't be turned off, sorry."}
            {language === 'de' &&
              'Die gewährleisten das korrekte und sichere Funktionieren unserer Webseite. Ohne sie könnte keine Internetseite laufen. Kann nicht ausgeschaltet werden, sorry.'}
            {language === 'ua' && ''}
          </p>

          <div className='flex justify-between mt-10'>
            <h3 className='flex gap-2 text-2xl items-center mb-3 lg:text-3xl'>
              <ArrowRight />
              {language === 'cz' && 'analytické cookies'}
              {language === 'en' && 'analytical cookies'}
              {language === 'de' && 'Analytische Cookies'}
              {language === 'ua' && ''}
            </h3>
            <input type='checkbox' name='' id='' />
          </div>
          <p className='font-stabil text-xl'>
            {language === 'cz' &&
              'Sledují, jak se na našem webu pohybuješ. Přeloženo do češtiny - vidíme, kam klikáš a příště ti nabídneme obsah, který tě zajímá nejvíc.'}
            {language === 'en' &&
              'They watch how you move along our website. In other words - we can see where you click and next time can offer you the content you are interested in most.'}
            {language === 'de' &&
              'Die verfolgen, wo du dich auf unseren Seitern herumtreibst. Oder auf Deutsch - wir sehen, worauf du klickst und das nächste Mal präsentieren wir Dir genau das, was dich am meisten interessiert. '}
            {language === 'ua' && ''}
          </p>

          <Button
            onClick={confirmSettings}
            className='bg-white rounded-full py-7 text-xl text-black hover:bg-zinc-50 w-full mt-6 ffs-12-hover'
          >
            {language === 'cz' && 'uložit a sníst'}
            {language === 'en' && ''}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </Button>
        </div>
      )}
    </>
  )
}
