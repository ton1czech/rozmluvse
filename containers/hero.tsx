import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section>
      <Container>
        <h1 className='text-6xl ffs-12'>
          Jazykové studio, ve kterém se nebudeš bát dělat chyby.
        </h1>
        <p className='font-stabil text-xl mt-8'>
          Dopřej si lingvistický wellness a nauč se anglicky, německy nebo
          klidně čínsky.
        </p>
        <Link href='https://linktr.ee/rozmluv.se' target='_blank'>
          <Button className='rounded-full text-xl w-full text-black py-6 mt-10 ffs-2-hover'>
            aktuálně
          </Button>
        </Link>
      </Container>
    </section>
  )
}
