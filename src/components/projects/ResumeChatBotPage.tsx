import { Navigation } from '@/components/navigation'
import { SectionHeader } from '@/components/section-header'

export default function ResumeChatBotPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-20">
        {/* Project Header */}
        <div className="mb-16 border-2 border-foreground bg-background p-8 md:p-12">
          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            AI Applications
          </div>
          <h1 className="mb-4 font-mono text-4xl font-bold uppercase tracking-tight">
            Firestore RAG Chatbot
          </h1>
          <p className="font-mono text-lg text-muted-foreground border-l-2 border-muted-foreground pl-4">
            Vector-Backed Resume Q&A Assistant
          </p>
        </div>

        {/* Key Highlights */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">LangGraph</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Conversational Orchestration
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">FastAPI</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Streaming API
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Cloud Run</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                CI/CD via GitHub Actions
              </div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="mb-16">
          <SectionHeader title="System Design" subtitle="Architecture Overview" />

          <div className="space-y-6">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Retrieval-Augmented Generation (RAG)
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Documents are ingested, chunked, embedded, and stored in Firestore's vector
                index for low-latency semantic retrieval. Queries run vector similarity search
                with metadata filters and are composed with contextual prompts for precise,
                citeable answers.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Conversational Orchestration
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Built with LangGraph to manage tool calls, retrieval steps, and conversation
                state. The graph coordinates retrieval, grounding, and response generation with
                guardrails and retry policies for resilience.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                API & Serving
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Exposed via FastAPI with streaming responses for responsive UX. Deployed on
                Cloud Run with containerized builds, autoscaling, and zero-downtime releases.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                CI/CD & Operations
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                GitHub Actions handles testing, image build & push, and Cloud Run deployment.
                Observability through Cloud Logging and Error Reporting with basic SLOs and
                alerts.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <SectionHeader title="Capabilities" subtitle="Core Features" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Vector Search in Firestore
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Stores embeddings and performs semantic retrieval directly in Firestore for
                simplified ops and low-latency access alongside structured metadata.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Structured Citations
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Answers include source snippets, titles, and URLs for transparent, verifiable
                outputs and an audit trail.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Streaming Responses
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Token-level streaming via FastAPI endpoints enables fluid conversational UX
                with early partial results.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Deployment Automation
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                GitHub Actions workflows build, test, and deploy to Cloud Run on merge, with
                environment promotion gates.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <SectionHeader title="Technology Stack" subtitle="Implementation" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Orchestration
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                LangGraph (Python), tool calling, graph state
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                API & Serving
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                FastAPI, ASGI, streaming endpoints, Cloud Run
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Storage & Retrieval
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                Firestore Vector Index, embeddings store, metadata filters
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                CI/CD & Ops
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                GitHub Actions, Cloud Build/Artifact Registry (optional), Cloud Logging
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <SectionHeader title="Impact" subtitle="Outcomes" />

          <div className="border border-border bg-card p-8">
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Delivers accurate resume Q&A with grounded, citeable responses and clear
                  source attribution
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Simple, low-ops deployment on Cloud Run with automated CI/CD and sensible
                  defaults for scaling and cost
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Modular graph design enabling quick iteration on retrieval and prompting
                  strategies
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="mb-16">
          <SectionHeader title="Architecture" subtitle="System Flow" />

          <div className="border border-border bg-muted p-8 diagram-grid min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 font-mono text-sm text-muted-foreground uppercase tracking-wider">
                End-to-End Flow
              </div>
              <p className="font-mono text-xs text-muted-foreground max-w-md">
                Ingest & Chunk → Embed → Firestore Vector Index → Retrieval → LangGraph
                Orchestration → FastAPI Streaming → Cloud Run → Logging & Alerts
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
