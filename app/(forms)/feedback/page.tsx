'use client'

import { Container } from '@/components/container'
import { Widget } from '@typeform/embed-react'

export default function Page() {
  return (
    <main className='bg-white mt-20 lg:mt-32 xl:mt-24 mb-32 lg:mb-40 overflow-hidden min-h-[60vh]'>
      <Container>
        <Widget
          id={process.env.NEXT_PUBLIC_TYPEFORM_FEEDBACK_ID!}
          style={{ width: '100%', minHeight: '500px' }}
        />
      </Container>
    </main>
  )
}
