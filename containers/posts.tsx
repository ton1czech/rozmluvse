'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
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

  const normalizeText = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  function filterPosts(posts: any, category: string): any {
    if (
      (category === 'null' ||
        category === null ||
        category === undefined ||
        category === '') &&
      (search === '' || search === null || search === undefined)
    ) {
      return posts
    } else if (
      search === '' ||
      search === 'null' ||
      search === null ||
      search === undefined
    ) {
      return posts.filter((post: any) =>
        post.categories.some((cat: any) => cat.title === category)
      )
    } else {
      return posts.filter(
        (post: any) =>
          normalizeText(post.title.toLowerCase()).includes(search) ||
          normalizeText(post.title).includes(search) ||
          post.title.toLowerCase().includes(search) ||
          post.title.includes(search)
      )
    }
  }

  const filteredPosts = filterPosts(posts, category!)

  return (
    <section className='scroll-mt-28'>
      <Container>
        <Cols>
          <div />
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl mt-2'>
            {category === '' ||
            category === 'null' ||
            category === null ||
            category === undefined ? (
              <>
                {language === 'cz' && 'Všechny Příspěvky'}
                {language === 'en' && 'All Posts'}
                {language === 'de' && '!text!'}
                {language === 'ua' && '!text!'}
                <br />
                <br />
              </>
            ) : search === '' ||
              search === undefined ||
              search === null ||
              search === 'null' ? (
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
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 mt-14 gap-4 xl:gap-8'>
            {filteredPosts.map((post: any) => (
              <Link
                key={post.slug.current}
                href={`/blog/posts/${post.slug.current}`}
              >
                <div
                  className='aspect-square overflow-hidden rounded-3xl p-4'
                  style={{ background: `#${post.categories[0].color}` }}
                >
                  <div className='relative w-full h-full overflow-hidden'>
                    <img
                      src={urlForImage(post.mainImage)}
                      alt={post.title}
                      className='absolute inset-0 w-full h-full object-cover hover:scale-[102%] transition rounded-xl overflow-hidden'
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
