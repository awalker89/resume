import type React from 'react'
interface TimelineItemProps {
  period: string
  title: string
  organization: string
  location?: string
  children?: React.ReactNode
}

export function TimelineItem({
  period,
  title,
  organization,
  location,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-border pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 border-2 border-foreground bg-background" />

      <div className="mb-4">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {period}
        </div>
        <h3 className="mb-1 font-mono text-xl font-bold">{title}</h3>
        <div className="font-mono text-sm text-muted-foreground">
          {organization}
          {location && ` | ${location}`}
        </div>
      </div>

      {children && <div className="font-mono text-sm leading-relaxed">{children}</div>}
    </div>
  )
}
