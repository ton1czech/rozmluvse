'use client'

import Link from 'next/link'
import LanguageSelector from './language-selector'
import { Menu } from './menu'
import { useMenu } from '@/store/use-menu'
import { Container } from '../container'

export const Navbar = () => {
  const { isMenuOpen, openMenu } = useMenu()

  return (
    <nav className='fixed top-0 w-full py-4 bg-white z-[1000]'>
      <Container>
        <div className='grid grid-cols-[1fr_2fr_1fr] justify-center items-center'>
          <div className='place-self-start'>
            <LanguageSelector />
          </div>
          <Link
            href='/#home'
            className='ffs-12 text-2xl md:text-3xl lg:text-4xl place-self-center'
          >
            rozmluv se
          </Link>
          <div className='justify-self-end'>
            <img
              src='/icons/menu.svg'
              alt='menu button'
              className='font-bold cursor-pointer w-[18px]'
              onClick={() => openMenu()}
            />
          </div>
        </div>

        {isMenuOpen && <Menu />}
      </Container>
    </nav>
  )
}
