import { Post } from '@/containers/post'
import { cachedClient } from '@/sanity/lib/client'
import { PostQuery, PostsPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await cachedClient(PostsPathsQuery)

  return posts
}

export default async function Page({ params }: { params: any }) {
  const post = await cachedClient(PostQuery, params, {
    next: { revalidate },
  })

  return (
    <main className='mt-32 xl:mt-16 mb-8'>
      <Post post={post} />
    </main>
  )
}
