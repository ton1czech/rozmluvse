import { Posts } from '@/containers/posts'
import { cachedClient, client } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'

export default async function Page() {
  const posts = await client.fetch(PostsQuery)

  return (
    <main className='mt-32 xl:mt-16 mb-8'>
      <Posts posts={posts} />
    </main>
  )
}
