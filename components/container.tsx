import { cn } from '@/lib/utils'
import { FC, PropsWithChildren } from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      'mx-auto px-4 2xl:max-w-screen-2xl lg:max-w-screen-xl',
      className
    )}
  >
    {children}
  </div>
)
