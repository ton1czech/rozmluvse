import { Posts } from '@/containers/posts'
import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Page() {
  const posts = await cachedClient(PostsQuery)

  return (
    <main className='mt-32 xl:mt-16'>
      <Posts posts={posts} />
    </main>
  )
}
