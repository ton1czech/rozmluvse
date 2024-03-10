'use client'

import Link from 'next/link'
import LanguageSelector from './language-selector'
import { Menu } from './menu'
import { useMenu } from '@/store/use-menu'
import { Container } from '../container'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { useLanguage } from '@/store/use-language'
import { useState } from 'react'
import { Cols } from '../cols'

export const Navbar = () => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { isMenuOpen, openMenu } = useMenu()

  const [searchOpen, setSearchOpen] = useState(false)

  const blog = pathname.includes('/blog')

  return (
    <nav className='fixed top-0 w-full py-4 bg-white z-[1000]'>
      <Container>
        <div className='flex justify-between items-center'>
          <Link
            href='/#home'
            className='text-2xl md:text-3xl lg:text-4xl place-self-center ffs-12'
          >
            rozmluv se
          </Link>
          <div className='flex items-center gap-3 md:gap-6'>
            {blog ? (
              <button
                className='font-stabil inline-flex gap-1 items-center'
                onClick={() => setSearchOpen(prev => !prev)}
              >
                <Search size={15} />
                {language === 'cz' && 'Hledat'}
                {language === 'en' && 'Search'}
                {language === 'de' && '!TEXT!'}
                {language === 'ua' && '!TEXT!'}
              </button>
            ) : (
              <>
                <Link
                  href='https://linktr.ee/rozmluv.se'
                  target='_blank'
                  className='font-stabil'
                >
                  Aktuality
                </Link>
                <Link href='/shop' className='font-stabil'>
                  Shop
                </Link>
              </>
            )}
            <LanguageSelector color='black' />
            <Button
              variant='ghost'
              onClick={() => openMenu()}
              className='font-stabil hover:bg-transparent p-0 m-0'
            >
              Menu
            </Button>
          </div>
        </div>

        {isMenuOpen && <Menu />}

        {searchOpen && (
          <div className='fixed top-32 xl:top-16 w-full left-0 bg-white pb-4'>
            <Container>
              <Cols>
                <div />
                <input
                  type='text'
                  placeholder={
                    language === 'cz'
                      ? 'Hledat...'
                      : language === 'en'
                      ? 'Search...'
                      : language === 'de'
                      ? ''
                      : language === 'ua'
                      ? ''
                      : ''
                  }
                  className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl p-0 m-0 h-min placeholder:text-black placeholder:p-0 placeholder:m-0 placeholder:h-min focus-within:outline-none border-b-2 border-b-black'
                />
              </Cols>
            </Container>
          </div>
        )}
      </Container>
    </nav>
  )
}
