import './globals.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/nav/navbar'
import { Newsletter } from '@/components/newsletter'
import { RemoveOneLetterWords } from '@/providers/remove-one-letter-words'
import { Cookies } from '@/components/cookies'
import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'

const stabil = localFont({
  src: '../fonts/StabilGrotesk-Regular.otf',
  variable: '--font-stabil',
})

const labil = localFont({
  src: '../fonts/LabilGrotesk-Bold.otf',
  variable: '--font-labil',
})

export const revalidate = 60

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = await cachedClient(PostsQuery)

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('font-labil', stabil.variable, labil.variable)}>
        <Navbar posts={posts} />
        {children}
        <Footer />

        <Newsletter />
        <Cookies />

        <RemoveOneLetterWords />
      </body>
    </html>
  )
}
