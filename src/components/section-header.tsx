import type { ReactNode } from "react"

interface SectionHeaderProps {
  id?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export function SectionHeader({ id, title, subtitle, children }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 border-l-2 border-foreground pl-6">
      <div className="flex items-baseline gap-4 mb-2">
        <h2 className="font-mono text-2xl font-bold uppercase tracking-tight">{title}</h2>
        {subtitle && (
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{subtitle}</span>
        )}
      </div>
      {children}
    </div>
  )
}
