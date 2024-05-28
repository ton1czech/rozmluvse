import { Posts } from '@/containers/posts'
import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

export default async function Page() {
  const posts = await cachedClient(PostsQuery)

  return (
    <main className='mt-32 xl:mt-16 mb-8'>
      <Suspense fallback={<Loader2 className='animate-spin' />}>
        <Posts posts={posts} />
      </Suspense>
    </main>
  )
}
