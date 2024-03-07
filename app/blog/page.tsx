import { Categories } from '@/containers/categories'
import { cachedClient } from '@/sanity/lib/client'
import { CategoriesQuery, PostsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const posts = await cachedClient(PostsQuery)
  const categories = await cachedClient(CategoriesQuery)

  return (
    <main className='mt-32 xl:mt-16'>
      <Categories categories={categories} />
    </main>
  )
}
