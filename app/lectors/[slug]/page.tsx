import { Lector } from '@/containers/lector'
import { cachedClient } from '@/sanity/lib/client'
import { LectorQuery, LectorsPathsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const lectors = await cachedClient(LectorsPathsQuery)

  return lectors
}

export default async function Page({ params }: { params: any }) {
  const lector = await cachedClient(LectorQuery, params, {
    next: { revalidate },
  })

  return <Lector lector={lector} />
}
