import { useMenu } from '@/store/use-menu'
import { X } from 'lucide-react'

export const Menu = () => {
  const { closeMenu } = useMenu()

  return (
    <div className='fixed right-0 top-0 h-full w-full lg:w-1/3 bg-primary'>
      <X
        className='absolute top-6 right-6 cursor-pointer'
        onClick={() => closeMenu()}
      />
    </div>
  )
}
