import { Navigation } from '@/components/navigation'
import { SectionHeader } from '@/components/section-header'

export default function MLPlatformPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-20">
        {/* Project Header */}
        <div className="mb-16 border-2 border-foreground bg-background p-8 md:p-12">
          <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Platform Engineering
          </div>
          <h1 className="mb-4 font-mono text-4xl font-bold uppercase tracking-tight">
            ML Platform Architecture
          </h1>
          <p className="font-mono text-lg text-muted-foreground border-l-2 border-muted-foreground pl-4">
            Shared Orchestration Framework for ML Workloads
          </p>
        </div>

        {/* Key Metrics */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Auto-Gen</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Step Functions
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">AWS Batch</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Shared Compute
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Rapid</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Iteration Speed
              </div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="mb-16">
          <SectionHeader title="Platform Design" subtitle="Architecture Principles" />

          <div className="space-y-6">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Decorator-Based Orchestration
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Built a shared ML platform using Python decorators that automatically
                generate AWS Step Functions pipelines. Engineers simply decorate their
                functions with workflow metadata, and the platform handles orchestration,
                dependency management, and error handling automatically.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Shared Compute Layer
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Architected shared AWS Batch compute infrastructure that dynamically
                scales based on workload demands. Provides consistent environments across
                all ML workloads while optimizing cost through intelligent spot instance
                management and resource pooling.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-6">
              <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider">
                Reproducibility & Governance
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Established architectural standards ensuring all model training runs are
                fully reproducible with versioned data, code, and dependencies. Automated
                artifact management, experiment tracking, and lineage recording enable
                robust model governance and auditability.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <SectionHeader title="Platform Capabilities" subtitle="Core Features" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Auto-Generated Workflows
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Python decorators automatically create Step Functions state machines,
                handling retries, error states, and parallel execution patterns without
                manual configuration.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Dependency Management
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Automatic detection and orchestration of task dependencies, ensuring
                correct execution order and enabling intelligent parallelization where
                possible.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Resource Optimization
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Smart resource allocation across shared compute pools, with automatic
                scaling, spot instance management, and cost optimization strategies.
              </p>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider">
                Observability
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Built-in monitoring, logging, and alerting for all pipeline executions
                with detailed metrics on compute usage, execution times, and failure
                patterns.
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
                AWS Step Functions, Python decorators, State Machines
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Compute
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                AWS Batch, EC2 Spot Instances, ECS, Docker
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Storage & Data
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                S3, DynamoDB, Artifact Registry, MLflow
              </div>
            </div>

            <div className="border border-border bg-card p-4">
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                Monitoring
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                CloudWatch, Custom Dashboards, PagerDuty
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <SectionHeader title="Platform Impact" subtitle="Organizational Benefits" />

          <div className="border border-border bg-card p-8">
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Enabled rapid iteration on ML models with consistent, reproducible
                  workflows across all teams
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Reduced time-to-production for new models from weeks to days through
                  automated orchestration
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Established architectural patterns adopted as standards across
                  PropTrack&apos;s ML organization
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Significantly reduced infrastructure costs through shared compute and
                  intelligent resource management
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">→</span>
                <span>
                  Improved model governance with automated tracking, versioning, and
                  lineage recording
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="mb-16">
          <SectionHeader title="Platform Architecture" subtitle="System Overview" />

          <div className="border border-border bg-muted p-8 diagram-grid min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 font-mono text-sm text-muted-foreground uppercase tracking-wider">
                Platform Flow
              </div>
              <p className="font-mono text-xs text-muted-foreground max-w-md">
                Python Code + Decorators → Auto-Generate Step Functions → Orchestrate AWS
                Batch Jobs → Shared Compute Pool → Artifact Storage → Monitoring & Alerts
                → Model Registry
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
