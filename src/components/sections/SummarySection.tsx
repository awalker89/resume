import { SectionContainer } from '@/components/layout/SectionContainer'
import { Button } from '@/components/ui/button'
import { summary } from '@/data/summary'

export function SummarySection() {
  return (
    <SectionContainer>
      <h1 className="text-2xl font-semibold tracking-tight">{summary.name}</h1>
      <p className="mt-2 text-muted-foreground">{summary.tagline}</p>
      <p className="mt-4 max-w-3xl">{summary.elevatorPitch}</p>
      <div className="mt-6 flex gap-2 flex-wrap">
        {summary.coreValues.map((v) => (
          <span key={v} className="text-xs border rounded-md px-2 py-1">
            {v}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <Button>Contact</Button>
      </div>
    </SectionContainer>
  )
}
