import Link from 'next/link'
import { Container } from './container'

export const Footer = () => {
  return (
    <footer className='font-stabil text-[10px] py-4 mt-10'>
      <Container className='flex flex-col lg:hidden items-center justify-between gap-6'>
        <p>
          provozovatel a odpovědná osoba: Rozmluv se, s. r. o., IČO: 19647964,
          Pavlíkova 7, 339 01 Klatovy, ciao@rozmluv.se, +420 734 675 810
        </p>
        <div className='flex w-full justify-between items-center'>
          <p>&copy; rozmluv se - {new Date().getFullYear()}</p>
          <p>
            created by{' '}
            <Link href='https://github.com/ton1czech' className='underline'>
              Daniel Anthony Baudyš
            </Link>
          </p>
        </div>
      </Container>
      <Container className='hidden lg:flex items-center justify-between gap-2'>
        <p>&copy; rozmluv se - {new Date().getFullYear()}</p>
        <p>
          provozovatel a odpovědná osoba: Rozmluv se, s. r. o., IČO: 19647964,
          Pavlíkova 7, 339 01 Klatovy, ciao@rozmluv.se, +420 734 675 810
        </p>
        <p>
          created by{' '}
          <Link href='https://github.com/ton1czech' className='underline'>
            Daniel Anthony Baudyš
          </Link>
        </p>
      </Container>
    </footer>
  )
}
