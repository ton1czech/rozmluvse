'use client'

import { useCookies } from '@/store/use-cookies'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export const GoogleAnalyticsProvider = () => {
  const { analyticsEnabled } = useCookies()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  return (
    <>
      {mounted && (
        <>
          {analyticsEnabled ||
            (window &&
              window?.localStorage
                .getItem('cookies-storage')
                ?.includes('"analyticsEnabled":true') && (
                <>
                  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG!} />
                  <Script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-K6EC52CP3Q'
                  />
                  <Script>
                    {`
                window.dataLayer = window.dataLayer || []; 
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date()); 
                gtag('config', 'G-K6EC52CP3Q');`}
                  </Script>
                </>
              ))}
        </>
      )}
    </>
  )
}
