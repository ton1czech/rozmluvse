'use client'

import Link from 'next/link'
import LanguageSelector from './language-selector'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { Menu } from './menu'
import { useMenu } from '@/store/use-menu'

export const Navbar = () => {
  const { isMenuOpen, openMenu } = useMenu()

  return (
    <nav className='fixed top-0 w-full py-4 bg-white'>
      <div className='mx-4 grid grid-cols-3 justify-center items-center'>
        <div className='place-self-start'>
          <LanguageSelector />
        </div>
        <Link
          href='/'
          className='ffs-12 text-3xl lg:text-4xl place-self-center'
        >
          rozmluv se
        </Link>
        <div className='place-self-end'>
          <MenuIcon
            className='font-bold cursor-pointer'
            onClick={() => openMenu()}
          />
        </div>
      </div>

      {isMenuOpen && <Menu />}
    </nav>
  )
}
