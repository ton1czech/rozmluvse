'use client'

import Link from 'next/link'
import LanguageSelector from './language-selector'
import { Menu } from './menu'
import { useMenu } from '@/store/use-menu'
import { Container } from '../container'
import { Button } from '../ui/button'

export const Navbar = () => {
  const { isMenuOpen, openMenu } = useMenu()

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
          <div className='flex items-center gap-1'>
            <LanguageSelector color='black' />
            <Button
              variant='ghost'
              onClick={() => openMenu()}
              className='font-stabil hover:bg-transparent'
            >
              Menu
            </Button>
          </div>
        </div>

        {isMenuOpen && <Menu />}
      </Container>
    </nav>
  )
}
