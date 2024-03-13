import { useLanguage } from '@/store/use-language'
import { Cols } from './cols'
import { Container } from './container'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  posts: any
}

const normalizeText = (text: string) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export const BlogSearch = ({ posts }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { language } = useLanguage()

  const category = searchParams.get('category')

  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const allPostTitles = posts.map((post: any) => post.title.toLowerCase())
    const filteredTitles = allPostTitles.filter((title: string) =>
      normalizeText(title).includes(normalizeText(searchValue.toLowerCase()))
    )

    const words: string[] = filteredTitles.flatMap((title: any) =>
      title.split(/\s+/)
    )

    const suggestionsMap = words.reduce(
      (acc: { [word: string]: number }, word: string) => {
        if (
          normalizeText(word)
            .toLowerCase()
            .startsWith(normalizeText(searchValue).toLowerCase())
        ) {
          acc[word] = (acc[word] || 0) + 1
        }
        return acc
      },
      {}
    )

    const suggestionsArray = Object.entries(suggestionsMap)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([word, count]) => ({ word, count: count as number }))

    setSearchSuggestions(suggestionsArray)
  }, [posts, searchValue])

  const handleSuggestionClick = (word: string) => {
    setSearchValue(word)
    router.push(`/blog/posts?category=${category}&search=${word}`)
  }

  return (
    <div className='fixed top-16 pt-16 xl:pt-0 w-full left-0 bg-white pb-8 xl:pb-12 z-0'>
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
                  ? '!text!'
                  : language === 'ua'
                  ? '!text!'
                  : ''
              }
              className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl p-0 m-0 h-min placeholder:text-black placeholder:p-0 placeholder:m-0 placeholder:h-min focus-within:outline-none border-b-2 border-b-black'
              value={searchValue}
              onChange={e => {
                router.push(
                  `/blog/posts?category=${category}&search=${e.target.value}`
                )
                setSearchValue(e.target.value)
              }}
            />

            {searchValue && (
              <div className='flex gap-4 mt-4'>
                {searchSuggestions.map((suggestion, index) => (
                  <p
                    key={index}
                    className='text-sm relative font-stabil cursor-pointer'
                    onClick={() => handleSuggestionClick(suggestion.word)}
                  >
                    {suggestion.word}
                    <span className='absolute -top-1.5 -right-1.5 text-[8px]'>
                      {suggestion.count}
                    </span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </Cols>
      </Container>
    </div>
  )
}
