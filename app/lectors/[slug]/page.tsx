import { Lector } from '@/containers/lector'
import { cachedClient } from '@/sanity/lib/client'
import { LectorQuery, LectorsPathsQuery } from '@/sanity/lib/queries'

export async function generateStaticParams() {
  const lectors = await cachedClient(LectorsPathsQuery)

  return lectors
}

export default async function Page({ params }: { params: any }) {
  const lector = await cachedClient(LectorQuery, params)

  return <Lector lector={lector} />
}
