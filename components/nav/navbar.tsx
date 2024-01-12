import Link from 'next/link'
import LanguageSelector from './language-selector'
import { Menu } from 'lucide-react'

export const Navbar = () => {
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
          <Menu className='font-bold cursor-pointer' />
        </div>
      </div>
    </nav>
  )
}
