import { SectionContainer } from '@/components/layout/SectionContainer'
import { publications } from '@/data/publications'

export function PublicationsSection() {
  return (
    <SectionContainer>
      <h2 className="text-xl font-semibold">Publications & Talks</h2>
      <div className="mt-4 grid gap-6">
        {publications.map((pub) => (
          <div key={pub.title} className="border rounded-lg p-4 bg-card">
            <p className="font-medium">{pub.title}</p>
            <p className="text-sm text-muted-foreground">
              {pub.type} • {pub.year}
            </p>
            <p className="mt-2 text-sm">{pub.summary}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
