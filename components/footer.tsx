import Link from 'next/link'
import { Container } from './container'

export const Footer = () => {
  return (
    <footer>
      <Container className='flex items-center justify-between font-stabil text-[10px] py-4 gap-2'>
        <p>&copy; rozmluv se - {new Date().getFullYear()}</p>
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
