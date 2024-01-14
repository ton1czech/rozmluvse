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

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage(state => state)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className='hover:bg-zinc-300/50'>
        <Button
          variant='outline'
          role='combobox'
          name='language selector'
          aria-expanded={open}
          className='border-none text-zinc-900 bg-transparent gap-2'
        >
          <p className='uppercase font-stabil text-lg'>{language}</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-2 z-[1001] bg-zinc-100 dark:bg-zinc-900 backdrop-blur-lg border-zinc-500/40'>
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
