import Link from 'next/link'
import { Container } from './container'

export const Footer = () => {
  return (
    <footer className='font-stabil text-[10px] mt-6 bg-[#D9D9D9] py-4'>
      <Container className='flex flex-col items-center justify-between gap-6'>
        <div className='flex w-full justify-between items-center'>
          <p>
            &copy; rozmluv se - {new Date().getFullYear()}
            <span>
              . Created by{' '}
              <Link
                href='https://baudys.dev'
                target='_blank'
                className='underline'
              >
                Daniel Anthony Baudyš
              </Link>
            </span>
          </p>
          <Link href='/personal-data'>Imprint & Privacy Policy</Link>
        </div>
      </Container>
    </footer>
  )
}
