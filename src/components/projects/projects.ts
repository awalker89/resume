
export type ProjectMeta = { id: string; title: string; tagline: string; tags?: string[] };

export const projectsIndex: ProjectMeta[] = [
  {
    "id": "real-estimate",
    "title": "RealEstimate",
    "tagline": "Next-Generation Automated Valuation Model",
    "tags": [
      "ML",
      "API",
      "Production"
    ]
  },
  {
    "id": "resume-chat-bot",
    "title": "Resume Chat Bot",
    "tagline": "Retrieval-Augmented Resume Q&A Assistant",
    "tags": [
      "AI",
      "GCP",
      "Firebase"
    ]
  }
] as const;

export function getProjectById(id: string) {
  return projectsIndex.find((p) => p.id === id) ?? null
}

