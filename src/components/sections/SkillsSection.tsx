import { SectionContainer } from '@/components/layout/SectionContainer'
import { skills } from '@/data/skills'

export function SkillsSection() {
  return (
    <SectionContainer>
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        {skills.layers.map((layer) => (
          <div key={layer.name} className="border rounded-lg p-4 bg-card">
            <p className="font-medium">{layer.name}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {layer.items.map((s) => (
                <span key={s} className="text-xs border rounded-md px-2 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
