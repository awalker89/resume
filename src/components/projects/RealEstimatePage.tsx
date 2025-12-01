import { Navigation } from '@/components/navigation'
import { SectionHeader } from '@/components/section-header'

export default function RealEstimatePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-20">
        {/* Project Header */}
        <div className="mb-16 border-2 border-foreground bg-background p-8 md:p-12">
          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Project Overview
          </div>
          <h1 className="mb-4 font-mono text-4xl font-bold uppercase tracking-tight">
            RealEstimate 
          </h1>
          <p className="font-mono text-lg text-muted-foreground border-l-2 border-muted-foreground pl-4">
            Next-Generation Automated Valuation Model
          </p>
        </div>

        {/* Key Metrics */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">#1</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Most Accurate AVM in Australia
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Real-Time</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Inference API
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Ensemble</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Model Architecture
              </div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="mb-16">
          <SectionHeader title="Technical Architecture" subtitle="System Design" />

          <div className="space-y-6">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Model Design
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Architected and delivered a high-accuracy ensemble model combining
                multiple prediction algorithms to achieve market-leading valuation
                accuracy. The model architecture enables sophisticated feature engineering
                and handles complex property market dynamics across diverse Australian
                regions.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Real-Time Inference
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Designed and implemented a production-grade API serving real-time property
                valuations with sub-second latency. The system handles thousands of daily
                requests with comprehensive error handling, request validation, and
                performance monitoring.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                MLOps Pipeline
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Established complete model lifecycle workflows covering training,
                evaluation, deployment, monitoring, and rollback procedures. Designed for
                long-term reliability and reproducibility with automated retraining
                schedules and drift detection mechanisms.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <SectionHeader title="Technology Stack" subtitle="Implementation Details" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                ML Framework
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                Python, scikit-learn, XGBoost, ensemble methods
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Infrastructure
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                AWS (Batch, Lambda, S3, ECR), Docker
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Data Pipeline
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                Apache Airflow, AWS Step Functions, BigQuery
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Monitoring
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                CloudWatch, custom dashboards, Pager Duty
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <SectionHeader title="Business Impact" subtitle="Outcomes" />

          <div className="border border-border bg-card p-8">
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Independently validated as the most accurate automated valuation model
                  in the Australian property market
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Powers critical real-estate insights across PropTrack&apos;s entire
                  product ecosystem
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Established robust MLOps workflows ensuring long-term model reliability
                  and accuracy
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Created reusable patterns for model deployment and monitoring adopted
                  across the organization
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture Diagram Placeholder */}
        <section className="mb-16">
          <SectionHeader title="System Architecture" subtitle="High-Level Design" />

          <div className="border border-border bg-muted p-8 diagram-grid min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 font-mono text-sm text-muted-foreground uppercase tracking-wider">
                Architecture Diagram
              </div>
              <p className="font-mono text-xs text-muted-foreground max-w-md">
                Data Ingestion → Feature Engineering → Model Training → Evaluation →
                Deployment → Real-Time API → Monitoring → Rollback Workflow
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
