import { Categories } from '@/containers/categories'
import { cachedClient } from '@/sanity/lib/client'
import { CategoriesQuery } from '@/sanity/lib/queries'

export default async function Page() {
  const categories = await cachedClient(CategoriesQuery)

  return (
    <main className='mt-32 xl:mt-24 mb-8'>
      <Categories categories={categories} />
    </main>
  )
}
