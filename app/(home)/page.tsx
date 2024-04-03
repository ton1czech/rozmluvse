import { About } from '@/containers/about'
import { Companies } from '@/containers/companies'
import { Contact } from '@/containers/contact'
import { Hero } from '@/containers/hero'
import { Languages } from '@/containers/languages'
import { Pricelist } from '@/containers/pricelist'
import { Reviews } from '@/containers/reviews'
import { cachedClient } from '@/sanity/lib/client'
import {
  CompaniesQuery,
  LanguagesQuery,
  LectorsQuery,
} from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const lectors = await cachedClient(LectorsQuery)
  const languages = await cachedClient(LanguagesQuery)
  const companies = await cachedClient(CompaniesQuery)

  return (
    <main className='mt-32 xl:mt-24 space-y-16 xl:space-y-24'>
      <Hero />
      <Languages languages={languages} />
      <Pricelist />
      <Reviews />
      <About lectors={lectors} />
      <Companies companies={companies} />
      <Contact />
    </main>
  )
}
