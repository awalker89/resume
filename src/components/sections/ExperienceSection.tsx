import { SectionContainer } from '@/components/layout/SectionContainer'
import { experience } from '@/data/experience'

export function ExperienceSection() {
  return (
    <SectionContainer>
      <h2 className="text-xl font-semibold">Experience</h2>
      <div className="mt-4 grid gap-6">
        {experience.map((item) => (
          <div key={item.company} className="border rounded-lg p-4 bg-card">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">{item.role}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.start} – {item.end}
              </p>
            </div>
            <ul className="mt-3 list-disc ml-5 text-sm">
              {item.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="mt-3 text-sm text-muted-foreground">
              Tech: {item.techStack.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
