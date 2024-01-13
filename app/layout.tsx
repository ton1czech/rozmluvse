import './globals.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/nav/navbar'
import { Newsletter } from '@/components/newsletter'
import { RemoveOneLetterWords } from '@/providers/remove-one-letter-words'

const stabil = localFont({
  src: '../fonts/StabilGrotesk-Regular.otf',
  variable: '--font-stabil',
})

const labil = localFont({
  src: '../fonts/LabilGrotesk-Bold.otf',
  variable: '--font-labil',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('font-labil', stabil.variable, labil.variable)}>
        <Navbar />
        {children}
        <Footer />

        <Newsletter />

        <RemoveOneLetterWords />
      </body>
    </html>
  )
}
