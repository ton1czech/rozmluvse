'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Props {
  posts: any
}

export const Posts = ({ posts }: Props) => {
  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const color = searchParams.get('color')

  const filteredPosts = posts.filter((post: any) =>
    post.categories.some((cat: any) => cat.title === category)
  )

  return (
    <section className='scroll-mt-28'>
      <Container>
        <Cols>
          <div />
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl'>
            {category} <br /> <br />
          </h1>
        </Cols>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 mt-14'>
          {filteredPosts.map((post: any) => (
            <Link
              key={post.slug.current}
              href={`/blog/posts/${post.slug.current}`}
              className=''
            >
              <div
                className='aspect-square overflow-hidden rounded-3xl p-6'
                style={{ background: `#${color}` }}
              >
                <div className='relative w-full h-full'>
                  <img
                    src={urlForImage(post.mainImage)}
                    alt={post.title}
                    className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition rounded-xl'
                  />
                </div>
              </div>
              <h3 className='text-xl sm:text-2xl'>{post.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
