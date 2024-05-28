import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'

export default async function Page() {
  const posts = await cachedClient(PostsQuery)

  return (
    <main className='mt-32 xl:mt-16 mb-8'>
      {posts.map((post: any) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </main>
  )
}
