import { SectionHeader } from '@/components/section-header'
import { ProjectCard } from '@/components/project-card'
import { TimelineItem } from '@/components/timeline-item'
import { useMemo } from 'react'
import { projectsIndex, type ProjectMeta } from '@/components/projects/projects'

export default function HomePage() {
  const projects = useMemo<ProjectMeta[]>(() => projectsIndex as ProjectMeta[], [])

  return (
    <div className="min-h-screen">
      {/* Hero Section (background now lives in RootLayout for full-width) */}
      <section className="relative border-b border-border pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <div className="border-2 border-foreground bg-background p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <h1 className="mb-4 font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Alex Walker
            </h1>
            <p className="mb-6 font-mono text-lg md:text-xl text-muted-foreground border-l-2 border-muted-foreground pl-4">
              Principal AI Engineer
            </p>
            <p className="font-mono text-sm leading-relaxed max-w-3xl">
              Principal Engineer leading PropTrack&apos;s AI/ML team, shaping the strategy
              and delivery of advanced data and AI systems across Australia&apos;s
              property ecosystem. I design and drive high-impact machine learning
              platforms, LLM applications, and production-grade analytics that power
              critical real-estate insights at scale.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
        {/* Key Skills */}
        <section id="skills" className="mb-24">
          <SectionHeader title="Core Competencies" subtitle="Technical Architecture" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                AI/ML Architecture
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                End-to-end AI/ML architecture across data ingestion, feature engineering,
                model training, deployment, observability, and lifecycle governance, with
                a core focus on reproducibility and rapid iteration.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Large-Scale System Design
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Ensemble models, real-time APIs, fine-tuned LLMs, and production RAG
                pipelines powering internal tools and automation at scale.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Platform Engineering
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Building shared orchestration frameworks, reusable tooling, and scalable
                compute pipelines using AWS and modern CI/CD practices.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Technical Leadership
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Mentoring engineers, defining architectural patterns, driving engineering
                standards, and maintaining exceptionally high team engagement as a senior
                tech lead.
              </p>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section id="projects" className="mb-24">
          <SectionHeader title="Featured Projects" subtitle="Production Systems">
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Select projects to view detailed architecture and implementation
            </p>
          </SectionHeader>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.tagline}
                href={`/projects/${project.id}`}
                tags={project.tags || []}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24">
          <SectionHeader title="Experience" subtitle="Career Timeline" />

          <div>
            <TimelineItem
              period="2025 — Present"
              title="Principal Engineer"
              organization="REA Group - PropTrack"
              location="Sydney"
            >
              <p className="mb-4">
                Leading the architecture, delivery, and technical direction of AI and ML
                systems across PropTrack. Responsible for end-to-end model lifecycle
                design, platform engineering, and driving best practices in
                reproducibility, observability, and scalable ML operations.
              </p>
              <ul className="list-inside space-y-2 text-xs">
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Designed overarching architecture for all ML systems covering
                    ingestion, training, serving, and governance
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Built shared ML platform with auto-generated Step Functions pipelines
                    on AWS Batch
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Established architectural standards for model reproducibility and
                    rapid iteration
                  </span>
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              period="2021 — 2025"
              title="Senior Tech Lead & Tech Lead"
              organization="REA Group - PropTrack"
              location="Sydney"
            >
              <p className="mb-4">
                Led engineering direction with 6 direct reports, achieving team engagement
                scores of 96 and 87 (highest across REA Group). Drove architectural
                decisions and mentored Data Scientists and ML Engineers.
              </p>
              <ul className="list-inside space-y-2 text-xs">
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Standardized model pipelines and adopted shared infrastructure
                    patterns
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Delivered complex systems where no existing tooling or ownership
                    existed
                  </span>
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              period="2014 — 2021"
              title="Senior Leader, Analytics"
              organization="CoreLogic Australia"
              location="Sydney"
            >
              <p className="mb-4">
                Led team of 6 Data Scientists and Data Engineers delivering national house
                price indices, market analytics, and forecasting systems used by RBA,
                Treasury, and major banks.
              </p>
              <ul className="list-inside space-y-2 text-xs">
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Built statistical modelling framework for Australia&apos;s benchmark
                    house price index
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Delivered ensemble-based AVM for UK banking and insurance (Intellival)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>
                    Stack: AWS (CloudFormation, EC2, Batch, S3), GitLab CI, Docker,
                    Python, R
                  </span>
                </li>
              </ul>
            </TimelineItem>
            

            <TimelineItem
              period="2013 — 2014"
              title="Allocations Data Analyst"
              organization="Copyright Agency"
              location="Sydney"
            >
              <p className="mb-4">
                Applying OCR, entity recognition & image classification to extract
                author/publisher information from photocopies of books & journals for
                copyright licensing.
              </p>
            </TimelineItem>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-24">
          <SectionHeader title="Education" subtitle="Academic Background" />

          <div className="border border-border bg-card p-8">
            <div className="mb-6">
              <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2008 — 2013
              </div>
              <h3 className="mb-2 font-mono text-lg font-bold">University of Adelaide</h3>
              <div className="space-y-1 font-mono text-sm">
                <p className="text-foreground">
                  Bachelor of Mathematics and Computer Science
                </p>
                <p className="text-foreground">Bachelor of Finance</p>
                <p className="text-muted-foreground text-xs mt-2">
                  Majors: Statistics, Applied Mathematics, Corporate Finance
                </p>
                <p className="text-muted-foreground text-xs">
                  Dean&apos;s Merit Certificate for Outstanding Academic Achievement -
                  Time Series Analysis
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="font-mono text-xs text-muted-foreground">
                Semester of Actuarial Science, University of Maastricht, Netherlands
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="font-mono text-xs text-center text-muted-foreground uppercase tracking-wider">
            Alex Walker — Principal Engineer / AI Architect
          </p>
        </div>
      </footer>
    </div>
  )
}
