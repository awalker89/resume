import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface Props extends PropsWithChildren {
  className?: string
  width?: 'narrow' | 'default' | 'full'
}
const widths = { narrow: 'max-w-3xl', default: 'max-w-5xl', full: 'max-w-[72rem]' }
export function SectionContainer({ children, className, width = 'default' }: Props) {
  return (
    <section className={cn('mx-auto px-4 md:px-6 py-12', widths[width], className)}>
      {children}
    </section>
  )
}
