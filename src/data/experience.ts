export type ExperienceItem = {
  company: string
  role: string
  start: string
  end: string | 'Present'
  responsibilities: string[]
  achievements: string[]
  techStack: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'TechCo',
    role: 'Principal AI/ML Engineer',
    start: '2021',
    end: 'Present',
    responsibilities: [
      'Lead GenAI platform design (RAG + agents)',
      'Own retrieval performance and guardrails',
    ],
    achievements: ['Reduced inference cost 35%', 'Improved retrieval faithfulness +18%'],
    techStack: ['LangChain', 'Cloud Run', 'Vertex', 'Firebase', 'React'],
  },
]
