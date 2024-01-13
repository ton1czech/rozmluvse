import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const removeOneLetterWords = (text: string) => {
  const lines = text.split('\n')

  // Process each line
  const modifiedLines = lines.map(line => {
    // Remove one-letter words at the end of the line
    const modifiedLine = line.replace(/\b\w\b\s*$/g, '').replace(/\s+$/, '')

    return modifiedLine
  })

  // Join the modified lines back into a single text
  const modifiedText = modifiedLines.join('\n')

  return modifiedText
}
