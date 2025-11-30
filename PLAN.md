# Interactive AI/ML Architect Resume – Comprehensive Build Plan

> Format: All actionable items are checkboxes `- [ ]`. Triage by section. Tackle top-to-bottom or parallelize where safe.

---

## 1. Project Initialization & Tooling

- [x] Confirm Node + Bun versions and lock strategy
- [ ] Initialize Git branch strategy (main, develop, feature/\*)
- [x] Add conventional commit guidelines
- [x] Add `.editorconfig` for consistency
- [x] Add Prettier config
- [x] Add ESLint config (React + TypeScript + accessibility + security plugins)
- [x] Configure TypeScript strict mode (`strict: true`, `noUncheckedIndexedAccess`, etc.)
- [x] Configure path aliases (e.g. `@components`, `@lib`, `@routes`, `@ai`)
- [x] Install core deps: React, React DOM, TanStack Query, TanStack Router (evaluate), Framer Motion, React Flow, Tailwind, shadcn/ui
- [x] Install testing libs: Vitest, React Testing Library, Playwright (optional for E2E)
- [x] Install lint/security: `eslint-plugin-security`, `eslint-plugin-jsx-a11y`
- [x] Add commit hooks (Husky + lint-staged) for formatting & type check
- [x] Add environment variable scaffolding (`.env.example`)

---

## 2. Design System & UI Foundations

- [x] Finalize color palette (light + dark + semantic accent)
- [x] Define typography scale & font loading strategy
- [x] Define spacing scale & layout grid
- [x] Configure Tailwind theme extension
- [x] Integrate shadcn/ui primitives (Button, Dialog, Tooltip, Tabs, Accordion, Sheet)
- [x] Implement `ThemeToggle` (already present) finalize UX (persist choice to localStorage)
- [x] Create reusable layout components (`AppShell`, `SectionContainer`, `ViewportTransition`)
- [x] Define motion tokens (easing, durations, spring configs)
- [x] Create icon strategy (Lucide wrapper)

---

## 3. Content & Data Modeling

- [ ] List resume domains: Summary, Experience, Skills, Projects, Publications, Contact
- [ ] Define TypeScript interfaces for each domain entity
  - [ ] `Summary`: tagline, elevatorPitch, coreValues, specialization
  - [ ] `ExperienceItem`: company, role, startDate, endDate, responsibilities[], achievements[], techStack[], architectureHighlights[]
  - [ ] `SkillLayer`: layerName, items[] (each item: name, proficiency, tags)
  - [ ] `Project`: name, description, pipelineStages[], impactMetrics[], links (repo/demo)
  - [ ] `Publication`: title, type (talk/paper/post/podcast), year, url, summary, tags
  - [ ] `ContactChannel`: method, endpointSpec, icon, action
  - [ ] `AIChatDocument`: id, type, sourceRef, rawText, cleanedText, chunks[], embeddingVector?, metadata
- [ ] Decide storage location (static JSON vs Firestore dynamic) --> use firestore
- [ ] Create seed data JSON files under `src/data/`
- [ ] Script to sync seed data to Firestore (optional CI task)

---

## 4. Architecture Diagram System (Core Visual Metaphor)

- [ ] Evaluate React Flow vs custom canvas vs Three.js hybrid
- [ ] Create `ArchitectureGraph` component wrapper
- [ ] Define node types: SummaryNode, ExperienceNode, SkillsNode, ProjectsNode, PublicationsNode, ContactNode
- [ ] Define edge semantics (data-flow, event, request-response) with type `GraphEdge`
- [ ] Node expansion animation states (idle, hover, active, focus)
- [ ] Implement viewport transition API (zoomToNode, fadeOthers)
- [ ] Add auto-layout or manual coordinates config
- [ ] Pulsing edge animation using Framer Motion
- [ ] Performance optimization (memoization, virtualization if needed)
- [ ] Add accessibility focus management on node activation

---

## 5. Section Components & Progressive Disclosure

- [ ] `SummarySection` overlay
- [ ] `ExperienceSection` with service-box expansion pattern
- [ ] `SkillsSection` layered cascade (front/middle/back stack)
- [ ] `ProjectsSection` horizontal pipeline scroller
- [ ] `PublicationsSection` event stream timeline
- [ ] `ContactSection` API-style form
- [ ] Shared `SectionTransition` orchestrator
- [ ] Smooth exit/enter interplay with diagram
- [ ] Route integration (TanStack Router or internal state machine?)
- [ ] Keyboard navigation between sections

---

## 6. Animations & Motion Choreography

- [ ] Define a motion spec document (sequence diagrams for transitions)
- [ ] Implement global `MotionProvider` (central config)
- [ ] Node hover: subtle scale + glow
- [ ] Active node: expand + detach edges effect
- [ ] Diagram entrance: staged fade-in of nodes + edge pulses
- [ ] Skills peel effect (layer slides + parallax)
- [ ] Project pipeline step reveal on scroll progress
- [ ] Timeline events: slide + opacity + micro-delay cascade
- [ ] Contact API request animation (JSON flight → success response)
- [ ] Respect prefers-reduced-motion (turn off intensive effects)

---

## 7. State & Data Fetch Layer (TanStack Query)

- [ ] Configure QueryClient with sensible defaults (retry, stale times)
- [ ] Queries: `useExperience()`, `useProjects()`, `useSkills()`, `usePublications()`, `useSummary()`
- [ ] Mutation: `useSendContactMessage()` (post to Cloud Run)
- [ ] AI chat queries: `useChatStream()` (SSE or WebSocket?)
- [ ] Add offline caching strategy (query persistence optional)
- [ ] Error boundaries per section

---

## 8. RAG Chatbot – High-Level Architecture

- [ ] Define primary use cases (answer career questions, architecture philosophy, project deep dives)
- [ ] Choose embedding model (Vertex AI, OpenAI, or local via `text-embedding-3-large` equivalent)
- [ ] Choose vector store (Vertex Matching Engine vs Firestore + approximate indexing vs external Pinecone) – evaluate tradeoffs
- [ ] Decide retrieval strategy (top-k, MMR, hybrid keyword+vector)
- [ ] Decide summarization vs direct answer logic
- [ ] Define guardrail mechanisms (hallucination disclaimers, citation links)
- [ ] Design chat session flow diagram

---

## 9. Document Ingestion & Preprocessing Pipeline (Python)

- [ ] Create ingestion script folder `backend/ingestion/`
- [ ] Source docs: resume JSON, project deep dives, architecture essays, publication abstracts
- [ ] Normalization: strip markup, unify whitespace, remove boilerplate
- [ ] Chunking strategy (semantic + token length constraints)
- [ ] Store raw & cleaned text
- [ ] Embedding generation batch job
- [ ] Upsert vectors to chosen store
- [ ] Metadata tagging (domain, recency, entity extraction)
- [ ] Quality verification (redundancy scan, empty chunk filter)
- [ ] Add ingestion CLI (`python -m ingestion.run --rebuild`)
- [ ] Scheduled refresh process (Cloud Scheduler)

---

## 10. Backend (Cloud Run Python API + LangChain)

- [ ] Select Python framework (FastAPI recommended)
- [ ] Define folder structure (`app/main.py`, `app/routes`, `app/services`, `app/chains`)
- [ ] Implement health endpoint `/healthz`
- [ ] Implement `/v1/chat` streaming endpoint (SSE / WebSocket)
- [ ] Implement `/v1/embed-doc` (admin only) optional
- [ ] Implement `/v1/search` for direct retrieval preview
- [ ] LangChain chain: Retrieval-Augmented Generation chain
- [ ] Add custom prompt templates with placeholders for context + question + persona tone
- [ ] Add response post-processing (citation injection, markdown sanitization)
- [ ] Observability middleware (logging correlation IDs)
- [ ] Rate limiting (IP + session) – Cloud Armor or custom
- [ ] Auth (optional token for admin ops)
- [ ] Unit tests for services (Pytest)
- [ ] Dockerfile multi-stage build (slim runtime)
- [ ] Cloud Run deploy config (memory, concurrency)

---

## 11. LangChain Components (Python)

- [ ] Document loader(s) (JSON loader, plaintext loader)
- [ ] Text splitter (recursive + custom heuristics for bullets)
- [ ] Embeddings client (Vertex AI / OpenAI / sentence-transformers fallback)
- [ ] Vector store wrapper (Matching Engine / Pinecone adapter / FAISS local fallback)
- [ ] Retriever with MMR parameterization
- [ ] Custom relevance re-ranker (optional – e.g., Cohere re-rank or local model)
- [ ] Prompt templates versioning system
- [ ] Output parser (markdown safe + code block detection)
- [ ] Evaluation script (answer faithfulness vs source chunks)

---

## 12. Chat UX (Frontend)

- [ ] Chat panel component (`ChatWindow`)
- [ ] Message bubble components (user, assistant, system)
- [ ] Streaming token display with cursor
- [ ] Citation hover panel linking back to document chunk
- [ ] Follow-up suggested questions generation
- [ ] Clear conversation action
- [ ] Export chat transcript (JSON + copy-to-clipboard)
- [ ] Loading skeleton states
- [ ] Error + retry UI
- [ ] Assistive keyboard shortcuts (Enter to send, Shift+Enter newline)
- [ ] Mobile responsive collapse behavior

---

## 13. Prompt Engineering & Guardrails

- [ ] Define base system prompt tone (Principal AI/ML Architect, pragmatic, concise)
- [ ] Add instructions for citing sources with indices
- [ ] Add fallback when retrieval returns low relevance score
- [ ] Add refusal patterns for unrelated questions
- [ ] Inject structured context (YAML or JSON embedding into prompt)
- [ ] Implement max answer length + summary continuation
- [ ] Add bias/hallucination disclaimer footer
- [ ] Build evaluation dataset (10–20 benchmark questions)
- [ ] Run periodic eval & store accuracy metrics

---

## 14. Performance & Optimization

- [ ] Measure initial bundle size (Vite analyze)
- [ ] Code split heavy components (Diagram, Chat) via dynamic import
- [ ] Lazy-load Three.js (if adopted)
- [ ] Optimize images/SVGs (React logo, icons)
- [ ] Use React memo + useCallback in intensive nodes
- [ ] Preload critical fonts
- [ ] Implement service worker (offline caching of static assets)
- [ ] Enable HTTP/2 + GZIP/Brotli on hosting
- [ ] Optimize query hydration (defer non-critical fetches)
- [ ] Monitor Cloud Run cold start times

---

## 15. Accessibility (a11y)

- [ ] Semantic HTML in section overlays
- [ ] ARIA roles for graph nodes (role=button + descriptive labels)
- [ ] Keyboard navigation sequence through diagram
- [ ] Focus outline visibility & skip-to-content link
- [ ] High contrast mode test
- [ ] Prefers-reduced-motion compliance
- [ ] Screen reader alt descriptions for pipeline diagrams
- [ ] Form labels + error messaging for contact

---

## 16. Security & Privacy

- [ ] Secure headers (CSP, X-Frame-Options, X-Content-Type-Options)
- [ ] Input validation (contact form, chat questions)
- [ ] Rate limiting strategy (Cloud Run + Firestore counters / Cloud Armor)
- [ ] Secret management (GCP Secret Manager)
- [ ] Avoid logging PII in chat transcripts
- [ ] TLS enforcement (redirect HTTP → HTTPS)
- [ ] API key rotation policy
- [ ] Abuse detection (excessive token consumption)

---

## 17. Analytics & Telemetry

- [ ] Page view tracking
- [ ] Section node activation events
- [ ] Chat question asked event
- [ ] Retrieval quality (top-k relevance score logging)
- [ ] Contact message sent event
- [ ] Performance metrics (CLS, LCP, FID via web-vitals)
- [ ] Error tracking (Sentry or GCP Error Reporting)
- [ ] Custom dashboard (optional BigQuery → Looker Studio)

---

## 18. Testing Strategy

- [ ] Unit tests (React components: snapshot + logic)
- [ ] Integration tests (diagram + section transition)
- [ ] Chat flow test (mock streaming)
- [ ] Backend unit tests (retriever, prompt assembly)
- [ ] Backend integration tests (API endpoints + vector store)
- [ ] E2E tests (Playwright: navigate nodes, open sections, send chat)
- [ ] Performance test (load simulation for chat concurrency)
- [ ] Security lint + dependency vulnerability scan (npm audit / pip safety)
- [ ] Regression suite in CI

---

## 19. CI/CD Pipeline

- [ ] GitHub Actions (or Cloud Build) workflow file
- [ ] Steps: Install deps, Lint, Typecheck, Test (frontend & backend), Build
- [ ] Cache dependencies (Bun, npm, pip, LangChain models?)
- [ ] Build and push backend Docker image to Artifact Registry
- [ ] Deploy Cloud Run (staging) on merge to `develop`
- [ ] Deploy Cloud Run (production) on tagged release
- [ ] Frontend deploy to Firebase Hosting (staging & production channels)
- [ ] Post-deploy smoke tests
- [ ] Notify channel (Slack/Email) with build status

---

## 20. Deployment & Infrastructure

- [ ] GCP project creation & IAM roles setup
- [ ] Enable APIs: Cloud Run, Firestore, Vertex AI (if used), Secret Manager, Cloud Scheduler
- [ ] Firestore (mode: Native, security rules)
- [ ] Storage bucket for assets (if large media)
- [ ] Secret Manager entries (API keys, embedding model key)
- [ ] VPC connector if needed (private services)
- [ ] CDN configuration (Firebase Hosting / Cloud CDN)
- [ ] Domain + SSL certificate
- [ ] Cloud Scheduler job for ingestion refresh

---

## 21. Monitoring & Observability

- [ ] Structured logging (JSON) in backend
- [ ] Tracing (OpenTelemetry optional)
- [ ] Metrics export (request counts, latency, embedding call durations)
- [ ] Alerting policies (error rate, latency spikes)
- [ ] Chat drift monitoring (quality drop detection)
- [ ] Dashboard for top asked questions

---

## 22. SEO & Social Presence

- [ ] Meta tags (title, description)
- [ ] Open Graph image (dynamic architecture diagram snapshot)
- [ ] Twitter Card tags
- [ ] Structured data (Person schema, JobPosting optional)
- [ ] Sitemap (static pages: root + canonical sections)
- [ ] Robots.txt
- [ ] Lighthouse audit & fixes

---

## 23. Documentation & Developer Experience

- [ ] `README.md` augmentation (architecture overview + quick start)
- [ ] `ARCHITECTURE.md` (diagram + RAG explanation)
- [ ] `PROMPTS.md` (prompt versions + rationale)
- [ ] `DATA_MODEL.md` (interfaces & ingestion flow)
- [ ] `OPERATIONS.md` (deployment, rollback, scaling)
- [ ] `SECURITY.md` (threat model summary)
- [ ] Comment critical code paths (retriever, viewport transitions)

---

## 24. Maintenance & Governance

- [ ] Dependency update schedule (monthly)
- [ ] Vulnerability scanning cadence
- [ ] Backup strategy (Firestore exports)
- [ ] Disaster recovery runbook
- [ ] Model change procedure (embedding/model swap test harness)
- [ ] Data retention policy (chat logs TTL)

---

## 25. Future Enhancements (Backlog – not MVP)

- [ ] Multi-lingual resume content
- [ ] 3D node environment (Three.js) with depth-based navigation
- [ ] Skill proficiency heatmap
- [ ] Chat persona switching (Architect / Mentor / Interview Coach)
- [ ] Synthetic Q&A expansion for retrieval improvement
- [ ] Voice input for chat
- [ ] WebGPU-based embedding acceleration (experimental)
- [ ] Personal timeline auto-generated from experience data

---

## 26. Final Launch Checklist

- [ ] All core sections implemented & styled
- [ ] Diagram performance validated under stress
- [ ] All endpoints passing integration tests
- [ ] RAG answers meeting baseline quality (>= defined score threshold)
- [ ] Accessibility audit completed
- [ ] SEO checks green (Lighthouse > 90 for SEO, Performance > 85)
- [ ] Error tracking shows no critical regressions
- [ ] Analytics events validated
- [ ] Content proofreading (typos, clarity)
- [ ] Production deploy executed
- [ ] Post-launch monitoring active

---

## 27. Post-Launch Iteration

- [ ] Collect real user feedback (chat questions distribution)
- [ ] Fine-tune retrieval settings based on logs
- [ ] Evaluate adding semantic re-ranker
- [ ] Optimize any slow Cloud Run endpoints
- [ ] A/B test alternate prompt variants

---

### Legend / Notes

- Prioritize sections 1–14 for MVP.
- Parallelizable: Frontend diagram work & backend ingestion pipeline.
- Critical path for chat: ingestion → embeddings → vector store → retrieval chain → streaming API → UI.

---

### High-Level RAG Chain Pseudocode (Reference)

```
question -> sanitize -> retrieve(top_k, mmr) -> rank -> build_prompt(context, question, system_tone) -> llm.generate(stream=True) -> parse -> cite
```

---

### Risk Areas & Mitigations

- [ ] Cold starts: Enable min instances on Cloud Run if needed
- [ ] Embedding cost: Batch + cache local vectors
- [ ] Hallucinations: Strict prompt + citations + low-confidence fallback
- [ ] Performance regressions: CI bundle size guard
- [ ] Data drift: Scheduled ingestion review

---

End of PLAN.
