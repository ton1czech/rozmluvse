'use client'

import { useEffect } from 'react'

export const RemoveOneLetterWords = () => {
  const clearWordBreaks = (target: HTMLElement) =>
    (target.textContent = target.textContent?.replace(/\u00a0/g, ' ') || '')

  const noMoreLonelyWords = (target: HTMLElement) => {
    let textArray = target.textContent?.split(' ') || []
    let newTextArray: string[] = []
    textArray.forEach(word => {
      let textEntry = ''
      if (word.length === 1) textEntry = word + '\xa0'
      else textEntry = word + ' '
      newTextArray.push(textEntry)
    })
    target.textContent = newTextArray.join('')
  }

  const updateWordBreaks = (target: HTMLElement) => {
    clearWordBreaks(target)
    noMoreLonelyWords(target)
  }

  const setup = () => {
    const elements = document.querySelectorAll('p, h2, label, h3')
    elements.forEach(element => updateWordBreaks(element as HTMLElement))
  }

  useEffect(() => {
    setup()
  }, [])

  return <></>
}
