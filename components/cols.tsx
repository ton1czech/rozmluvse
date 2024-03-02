import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Cols = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-[1fr_2.5fr] sm:grid-cols-[1fr_3.7fr] xl:grid-cols-[1fr_4fr] gap-4'>
      {children}
    </div>
  )
}
