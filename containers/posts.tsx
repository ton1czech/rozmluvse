'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { usePosts } from '@/store/use-posts'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Props {
  posts: any
}

export const Posts = ({ posts }: Props) => {
  const { language } = useLanguage()
  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const search = searchParams.get('search')

  function filterPostsByCategory(posts: any, category: string): any {
    if (search === '' || search === null || search === undefined) {
      return posts.filter((post: any) =>
        post.categories.some((cat: any) => cat.title === category)
      )
    } else {
      return posts.filter((post: any) => post.title.includes(search))
    }
  }

  const filteredPosts = filterPostsByCategory(posts, category!)

  return (
    <section className='scroll-mt-28'>
      <Container>
        <Cols>
          <div />
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl'>
            {search === '' || search === undefined || search === null ? (
              <>
                {category} <br /> <br />
              </>
            ) : (
              <>
                {search} <br /> <br />
              </>
            )}
          </h1>
        </Cols>

        {filteredPosts.length === 0 ? (
          <div className='mt-14'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl text-center min-h-[50vh]'>
              {language === 'cz' && <>Žádné Výsledky</>}
              {language === 'en' && <>No Results</>}
              {language === 'de' && <>No Results</>}
              {language === 'ua' && <>No Results</>}
            </h1>
          </div>
        ) : (
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 mt-14'>
            {filteredPosts.map((post: any) => (
              <Link
                key={post.slug.current}
                href={`/blog/posts/${post.slug.current}`}
                className=''
              >
                <div
                  className='aspect-square overflow-hidden rounded-3xl p-6'
                  style={{ background: `#${post.categories[0].color}` }}
                >
                  <div className='relative w-full h-full'>
                    <img
                      src={urlForImage(post.mainImage)}
                      alt={post.title}
                      className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition rounded-xl'
                    />
                  </div>
                </div>

                <h3 className='text-xl sm:text-2xl mt-1'>
                  {post.title.toLowerCase().includes(search?.toLowerCase())
                    ? post.title
                        .split(new RegExp(`(${search})`, 'gi'))
                        .map((part: string, index: number) =>
                          part.toLowerCase() === search?.toLowerCase() ? (
                            <span key={index} className='bg-yellow-500'>
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )
                    : post.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
