import { About } from '@/containers/about'
import { Companies } from '@/containers/companies'
import { Contact } from '@/containers/contact'
import { Hero } from '@/containers/hero'
import { Languages } from '@/containers/languages'
import { Pricelist } from '@/containers/pricelist'
import { cachedClient } from '@/sanity/lib/client'
import { LectorsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const lectors = await cachedClient(LectorsQuery)

  return (
    <main className='mt-28 md:mt-32 lg:mt-40 space-y-40 lg:space-y-72'>
      <Hero />
      <Languages />
      <Companies />
      <About lectors={lectors} />
      <Pricelist />
      <Contact />
    </main>
  )
}
