import Link from 'next/link'
import LanguageSelector from './language-selector'
import { Menu } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center gap-2 py-4 mx-4'>
      <LanguageSelector />
      <Link href='/' className='ffs-12 text-3xl'>
        rozmluv se
      </Link>
      <Menu className='font-bold' />
    </nav>
  )
}
