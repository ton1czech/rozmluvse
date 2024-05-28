import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export const RichText = {
  types: {
    image: ({ value }: any) => (
      <div className='relative w-full m-10 mx-auto h-96'>
        <Image
          className='object-contain'
          src={urlForImage(value)}
          alt='Blog Post Image'
          fill
        />
      </div>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className='py-5 ml-10 space-y-5 list-disc list-inside'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='list-decimal mt-lg list-inside'>{children}</ol>
    ),
  },

  block: {
    normal: ({ children }: any) => (
      <p className='text-zinc-800 font-stabil'>{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className='mt-10 mb-2 text-4xl xl:text-5xl font-bold font-labil'>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='mt-10 mb-2 text-4xl font-bold font-labil'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='mt-10 mb-2 text-4xl xl:text-5xl font-bold font-labil'>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='mt-10 mb-2 text-4xl xl:text-5xl font-bold font-labil'>
        {children}
      </h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className='py-5 pl-5 my-5 border-l-4 border-l-indigo-500'>
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined

      return (
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-indigo-500 hover:decoration-black'
        >
          {children}
        </Link>
      )
    },
  },
}
