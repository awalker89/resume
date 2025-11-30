import { SectionContainer } from '@/components/layout/SectionContainer'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <SectionContainer>
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="mt-4 grid gap-6">
        {projects.map((p) => (
          <div key={p.name} className="border rounded-lg p-4 bg-card">
            <p className="font-medium">{p.name}</p>
            <p className="mt-1 text-sm">Pipeline: {p.pipeline.join(' → ')}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Impact: {p.impact.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
