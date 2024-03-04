'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'

const languages = [
  {
    value: 'cz',
  },
  {
    value: 'en',
  },
  {
    value: 'de',
  },
  {
    value: 'ua',
  },
]

interface Props {
  color: 'white' | 'black'
}

const LanguageSelector = ({ color }: Props) => {
  const { language, setLanguage } = useLanguage(state => state)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          name='language selector'
          aria-expanded={open}
          className={cn(
            'border-none bg-transparent gap-2 hover:bg-transparent p-0 m-0',
            color === 'white' && 'hover:text-white text-white',
            color === 'black' && 'hover:text-black text-black'
          )}
        >
          <p className='uppercase font-stabil'>{language}</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-2 z-[1001] bg-zinc-100 backdrop-blur-lg border-zinc-500/40'>
        <Command className='!bg-transparent'>
          <CommandGroup className='space-y-2'>
            {languages.map(({ value }: { value: string }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setLanguage(value)
                  setOpen(false)
                }}
                className='mb-2 !bg-transparent hover:!bg-zinc-400/20'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 text-zinc-900 dark:text-zinc-100',
                    language === value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <p className='uppercase font-stabil'>{value}</p>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
