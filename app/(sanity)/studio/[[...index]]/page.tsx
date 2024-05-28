'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return (
    <div className='mt-24'>
      <NextStudio config={config} />
    </div>
  )
}
