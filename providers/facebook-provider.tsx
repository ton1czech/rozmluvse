'use client'

import { useCookies } from '@/store/use-cookies'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export const GoogleAnalyticsProvider = () => {
  const { analyticsEnabled } = useCookies()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <>
          {(analyticsEnabled ||
            window?.localStorage
              .getItem('cookies-storage')
              ?.includes('"analyticsEnabled":true')) && (
            <>
              <Script id='facebook-pixel' strategy='afterInteractive'>
                {`
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL}');
                  fbq('track', 'PageView');
                `}
              </Script>
              <noscript>
                <img
                  height='1'
                  width='1'
                  style={{ display: 'none' }}
                  src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL}&ev=PageView&noscript=1`}
                />
              </noscript>
            </>
          )}
        </>
      )}
    </>
  )
}
