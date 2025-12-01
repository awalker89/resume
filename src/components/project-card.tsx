import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  href: string
  tags?: string[]
}

export function ProjectCard({ title, description, href, tags }: ProjectCardProps) {
  return (
    <Link
      to={href}
      className="group relative block border border-border bg-card p-6 transition-all hover:border-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-mono text-lg font-bold">{title}</h3>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </div>
      <p className="mb-4 font-mono text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-border bg-muted px-2 py-1 font-mono text-xs uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
