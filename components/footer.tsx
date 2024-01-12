import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex items-center justify-between font-stabil text-[10px] mx-4 py-4 gap-2'>
      <p>&copy; rozmluv se - {new Date().getFullYear()}</p>
      <p>
        created by{' '}
        <Link href='https://github.com/ton1czech' className='underline'>
          Daniel Anthony Baudyš
        </Link>
      </p>
    </footer>
  )
}
