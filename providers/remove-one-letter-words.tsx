'use client'

import { useEffect, useState } from 'react'

export const RemoveOneLetterWords = () => {
  const [content, setContent] = useState<string>('')

  const clearWordBreaks = (text: string) => text.replace(/\u00a0/g, ' ')

  const noMoreLonelyWords = (text: string) =>
    text
      .split(' ')
      .map(word => (word.length === 1 ? word + '\xa0' : word))
      .join(' ')

  const updateWordBreaks = (text: string) => {
    const clearedText = clearWordBreaks(text)
    const modifiedText = noMoreLonelyWords(clearedText)
    setContent(modifiedText)
  }

  useEffect(() => {
    const elements = document.querySelectorAll('p, h2, label, h3')
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        updateWordBreaks(element.textContent || '')
      }
    })
  }, [])

  return <div className='opacity-0 pointer-events-none'>{content}</div>
}
