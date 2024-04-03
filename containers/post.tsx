'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { RichText } from '@/components/rich-text'
import { PortableText } from '@portabletext/react'
import { parseISO, format } from 'date-fns'

interface Props {
  post: any
}

export const Post = ({ post }: Props) => {
  console.log(post)

  const parsedDate = parseISO(post.publishedAt)
  const formattedDate = format(parsedDate, 'dd. MM. yy')

  return (
    <section className='scroll-mt-28'>
      <Container>
        <Cols>
          <div />
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl mt-2 mb-14'>
            {post.title}
          </h1>
        </Cols>
        <Cols>
          <div className='font-stabil'>
            <p>{formattedDate}</p>
            <p>{post.minutes} min. čtení</p>
            <p className='mt-5'>Text</p>
            <p>{post.author.name}</p>
            <div className='mt-5'>
              {post.categories.map((category: any) => (
                <p
                  style={{ background: `#${category.color}` }}
                  className='text-center rounded-2xl py-1 text-xs lg:w-1/2'
                >
                  {/* {category.title} */}
                  Byznys a práce
                </p>
              ))}
            </div>
          </div>
          <div>
            <PortableText value={post.body} components={RichText} />
          </div>
        </Cols>
      </Container>
    </section>
  )
}
