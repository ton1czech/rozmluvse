'use client'

import { useLanguage } from '@/store/use-language'
import { Cols } from './cols'
import { Container } from './container'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  posts: any
}

export const BlogSearch = ({ posts }: Props) => {
  console.log(posts)

  const router = useRouter()
  const searchParams = useSearchParams()

  const { language } = useLanguage()

  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])

  const category = searchParams.get('category')

  useEffect(() => {
    if (posts.length > 0) {
      // Seznam všech titulů příspěvků
      const allPostTitles = posts.map((post: any) => post.title.toLowerCase())

      // Filtrace titulů, které obsahují hledaný výraz
      const filteredTitles = allPostTitles.filter((title: string) =>
        title.includes(searchParams.get('search')?.toLowerCase() || '')
      )

      // Seřazení a omezení výsledků na maximálně 5
      const suggestions = filteredTitles.slice(0, 5)

      setSearchSuggestions(suggestions)
    }
  }, [posts, searchParams])

  return (
    <div className='fixed top-16 pt-16 xl:pt-0 w-full left-0 bg-white pb-4 z-0'>
      <Container>
        <Cols>
          <div />
          <div>
            <input
              type='text'
              placeholder={
                language === 'cz'
                  ? 'Hledat...'
                  : language === 'en'
                  ? 'Search...'
                  : language === 'de'
                  ? ''
                  : language === 'ua'
                  ? ''
                  : ''
              }
              className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl p-0 m-0 h-min placeholder:text-black placeholder:p-0 placeholder:m-0 placeholder:h-min focus-within:outline-none border-b-2 border-b-black'
              onChange={v =>
                router.push(
                  `/blog/posts?category=${category}&search=${v.target.value}`
                )
              }
            />
            <div className='flex flex-col gap-1 mt-4'>
              <p className='text-sm relative font-stabil'>
                search
                <span className='text-[9px] absolute -top-1.5 -right-1.5'>
                  {searchSuggestions.length}
                </span>
              </p>
              {searchSuggestions.map((suggestion, index) => (
                <p key={index} className='text-sm'>
                  {suggestion}
                </p>
              ))}
            </div>
          </div>
        </Cols>
      </Container>
    </div>
  )
}
