import { ArchitectureGraph } from '@/components/diagram/ArchitectureGraph'
import { SummarySection } from '@/components/sections/SummarySection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
// import { PublicationsSection } from "@/components/sections/PublicationsSection";

// Chat thread now lives in layout-level sidebar
// import { Thread } from '@/components/assistant-ui/thread'
// import { useState } from 'react'

export default function IndexPage() {
  return (
    <div className="p-4 space-y-8">
      <section id="top" className="scroll-mt-20">
        <ArchitectureGraph />
        <SummarySection />
      </section>

      <section id="experience" className="scroll-mt-20">
        <ExperienceSection />
      </section>

      <section id="skills" className="scroll-mt-20">
        <SkillsSection />
      </section>

      <section id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </section>

      {/* <section id="publications" className="scroll-mt-20">
        <PublicationsSection />
      </section> */}
    </div>
  )
}
