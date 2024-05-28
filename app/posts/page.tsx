import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'
import Link from 'next/link'

export default async function Page() {
  const posts = await cachedClient(PostsQuery)

  return (
    <main className='mt-32 xl:mt-16 mb-8 flex flex-col'>
      {posts.map((post: any) => (
        <Link key={post.slug} href={`/posts/${post.slug.current}`}>
          {post.title}
        </Link>
      ))}
    </main>
  )
}
