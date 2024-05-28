import { cachedClient } from '@/sanity/lib/client'
import { PostQuery, PostsPathsQuery } from '@/sanity/lib/queries'

export async function generateStaticParams() {
  const posts = await cachedClient(PostsPathsQuery)

  return posts
}

export default async function Page({ params }: { params: any }) {
  const post = await cachedClient(PostQuery, params)

  return (
    <main className='mt-32 xl:mt-24 mb-8'>
      <h1>{post.title}</h1>
      <p>{post.writtenby.name}</p>
      <p>{post.categories[0].title}</p>
    </main>
  )
}
