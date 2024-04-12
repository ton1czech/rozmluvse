'use client'

import { useCookies } from '@/store/use-cookies'
import { GoogleAnalytics } from '@next/third-parties/google'

export const GoogleAnalyticsProvider = () => {
  const { analyticsEnabled } = useCookies()

  return <>{analyticsEnabled && <GoogleAnalytics gaId='G-K6EC52CP3Q' />}</>
}
