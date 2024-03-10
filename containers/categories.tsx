'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

interface Props {
  categories: any
}

export const Categories = ({ categories }: Props) => {
  const { language } = useLanguage()

  return (
    <section className='scroll-mt-28'>
      <Container>
        <Cols>
          <div />
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-black lg:text-6xl'>
            {language === 'cz' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
            {language === 'en' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
            {language === 'de' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
            {language === 'ua' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
          </h1>
        </Cols>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 mt-14'>
          {categories.map((item: any) => (
            <Link
              key={item.title}
              href={`/blog/posts?category=${item.title}&color=${item.color}`}
              style={{ background: `#${item.color}` }}
              className={cn(
                'text-center text-3xl rounded-2xl py-8 font-black',
                item.disabled && 'pointer-events-none',
                !item.disabled && 'ffs-12-hover'
              )}
            >
              {language === 'cz' && item.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
