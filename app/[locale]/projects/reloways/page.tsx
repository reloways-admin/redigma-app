'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { PROJECTS, ToolBadge } from '@/sections/home/projects';
import { HomeFinalCta } from '@/sections/home/final-cta';

function ImagePlaceholder({ label = 'Image coming soon', aspect = '16/9' }: { label?: string; aspect?: string }) {
  return (
    <div
      className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] flex items-center justify-center"
      style={{ aspectRatio: aspect }}
    >
      <p className="text-sm text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold text-[var(--text-primary)] lg:text-3xl">{title}</h2>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="text-xl font-bold text-[var(--text-primary)]">{title}</h3>
  );
}

function FeatureBlock({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="pt-8 border-t border-[var(--border-subtle)]">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-sm font-bold text-[#732fff]">{number}</span>
        <h3 className="text-xl font-bold text-[var(--text-primary)]">{title}</h3>
      </div>
      <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function DecisionItem({ number, title, body }: { number: number; title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#732fff]/10 text-xs font-bold text-[#732fff]">
        {number}
      </span>
      <div>
        <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{title}</p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function RelowaysPage() {
  const locale = useLocale();
  const project = PROJECTS.find((p) => p.index === '01')!

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">Case study</p>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-16 lg:items-start">

            {/* Left: title */}
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] leading-tight lg:text-5xl mb-6">
                Designing a Relocation Platform from the Ground Up: While Relocating Myself
              </h1>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Reloways is a bilingual product (Hebrew/English) that helps Israelis navigate the dependency chain of German bureaucracy: from Anmeldung to long-term settlement. I designed it and built it.
              </p>
            </div>

            {/* Right: meta */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Type</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Product Design + Full-Stack Build</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Status</p>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-[var(--text-primary)]">MVP: Live in development</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">My Role</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Sole designer and co-developer</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Platform</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Web (Next.js) · Hebrew / English</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Industry</p>
                <div className="flex flex-wrap gap-2">
                  {['RelTech', 'Expat Tools', 'Civic Tech'].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Tools</p>
                <div className="flex flex-col gap-3">
                  {project.tools.map((tool) => (
                    <ToolBadge key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="mx-auto max-w-[1360px] px-6 py-12">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '16/7' }}>
          <Image
            src="/images/home/projects/reloways_cover-1920x1080.png"
            alt="Reloways platform overview"
            fill
            className="object-cover"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-[800px] px-6 pb-24 space-y-20">

        {/* The Problem */}
        <div className="space-y-6">
          <SectionHeading title="The Problem" />
          <p>
            Moving to a new country is one of the most stressful, document-heavy experiences a person can go through. For Israelis relocating to Berlin specifically, the gap is enormous: German bureaucracy is notoriously complex and unforgiving: you can't open a bank account without first registering your address (Anmeldung). You can't get a residence permit without the bank account. Every step has a prerequisite.
          </p>
          <p>
            Yet the available resources look like a 2009 expat forum. Fragmented Reddit threads, PDFs in German, Facebook groups where the same questions get asked every week. Nobody has mapped the actual dependency chain of tasks, told you what to do <em>first</em>, or packaged this into a language you actually read.
          </p>
          <div className="rounded-2xl border border-[#732fff]/20 bg-[#732fff]/5 px-6 py-5">
            <p className="text-base font-semibold text-[var(--text-primary)] leading-relaxed">
              The core pain point: people don't know what order to do things in, and one mistake can set them back weeks.
            </p>
          </div>
        </div>

        {/* Who It's For */}
        <div className="space-y-6">
          <SectionHeading title="Who It's For" />
          <p>
            Reloways was designed for four distinct user types, which the product calls <em>archetypes</em>. The archetype drives everything: which tasks surface, in what order, and which articles are recommended.
          </p>

          <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-1)]">
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Archetype</th>
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Profile</th>
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">What they need</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {[
                  { archetype: 'Explorer', profile: 'Considering a move, no date set', need: 'Inspiration, overview, "is this for me?"' },
                  { archetype: 'Planner', profile: 'Has a move date, hasn\'t landed yet', need: 'Time-triggered pre-arrival checklist' },
                  { archetype: 'Settler', profile: 'Already in Berlin (0–365 days)', need: 'Urgent, ordered task system: "what do I do today?"' },
                  { archetype: 'Local', profile: 'Living there 1+ year', need: 'Business setup, community, optimization' },
                ].map((row) => (
                  <tr key={row.archetype} className="bg-white">
                    <td className="px-5 py-3 font-semibold text-[var(--text-primary)]">{row.archetype}</td>
                    <td className="px-5 py-3 text-[var(--text-secondary)]">{row.profile}</td>
                    <td className="px-5 py-3 text-[var(--text-secondary)]">{row.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The primary audience at launch is <strong className="font-semibold text-[var(--text-primary)]">Israelis</strong>: hence the bilingual Hebrew/English experience with full RTL support. But the architecture was designed to extend to any nationality + city combination.
          </p>
          <ImagePlaceholder label="Split-screen: Hebrew (RTL) · English (LTR): same onboarding step, both directions" />
        </div>

        {/* What the Product Does */}
        <div className="space-y-8">
          <SectionHeading title="What the Product Does" />

          <FeatureBlock number="1" title="Personalized Onboarding Wizard">
            <p>
              The first thing a new user does is complete a 6–7 step wizard. The flow branches based on whether they're a Settler (already in Berlin) or a Planner/Explorer (not yet arrived). Steps collect country of origin, how long they've been in Berlin, employment situation (employee, freelancer, student, job-seeking), visa type, top priorities, and preferred language.
            </p>
            <p>
              This data drives the archetype, and the archetype drives everything that follows.
            </p>
            <ImagePlaceholder label="Onboarding wizard: card-picker component, branching logic annotated" />
          </FeatureBlock>

          <FeatureBlock number="2" title="Smart Checklist System: The Core Interface">
            <p>
              For Settlers, the primary experience is a phase-based task system organized as a timeline:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                { phase: 'Upon Landing (Days 0–30)', desc: 'Critical blockers: Anmeldung, bank account, health insurance' },
                { phase: 'First 30 Days (Weeks 2–12)', desc: 'Foundation: residence permit, freelancer registration, Tax ID' },
                { phase: 'First 90 Days (Month 3+)', desc: 'Life optimization: long-term housing, Kita, language learning' },
              ].map((item) => (
                <li key={item.phase} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#732fff]/50" />
                  <span><strong className="font-semibold text-[var(--text-primary)]">{item.phase}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
            <p>
              Each task carries an urgency score (1–10), a linked in-depth article, and dependency logic ("you must complete X before Y"). Some tasks only appear for specific audiences: freelancers, parents, students.
            </p>
            <p>
              The critical insight: mapping the actual <strong className="font-semibold text-[var(--text-primary)]">dependency chain</strong> of German bureaucracy. Anmeldung is the single critical blocker: almost everything else depends on it. Designing around that truth rather than a flat list was the core product decision.
            </p>
            <ImagePlaceholder label="Dependency chain diagram: Anmeldung as root node, urgency color-coded" />
          </FeatureBlock>

          <FeatureBlock number="3" title="Knowledge Center: Bilingual Article Library">
            <p>
              Every task links to a long-form article in both Hebrew and English. Articles are structured as step-by-step guides with embedded task cards inline: the checklist item appears <em>at the moment in the article where you'd naturally take action</em>, not bolted on at the top or bottom.
            </p>
            <p>
              Content is organized by phase (PRE / ARRIVE / SETTLE / LOCAL) and category (Finance, Housing, Bureaucracy, Health, Employment, Education, Life in Germany). The URL structure mirrors the relocation geography: <code className="text-xs bg-[var(--surface-1)] border border-[var(--border-subtle)] rounded px-1.5 py-0.5">/knowledge/europe/germany/berlin/[category]/[article]</code>
            </p>
            <ImagePlaceholder label="Knowledge Center: desktop view with phase tabs, category sections, table of contents sidebar" aspect="4/3" />
          </FeatureBlock>

          <FeatureBlock number="4" title="Content Architecture: The Design Behind the Design">
            <p>
              Before writing a single line of frontend code, I built a structured knowledge base in Obsidian to model the entire relocation journey:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                'A roadmap defining all 34 tasks across 4 phases with IDs, dependencies, audiences, and urgency',
                'A task database enforcing unique IDs (BER_ARR_001 format: location + phase + number)',
                'A bilingual reference ensuring Hebrew and English terminology stayed consistent',
                'Article templates and editorial rules for how inline task cards embed into narratives',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#732fff]/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              This pre-work meant the CMS schema, frontend data model, and content structure were all aligned from day one: rather than retrofitting content into a system that wasn't built for it.
            </p>
            <ImagePlaceholder label="Design system: task card component in default, hover, and completed states" />
          </FeatureBlock>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <SectionHeading title="The Tech Stack" />
          <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-1)]">
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Layer</th>
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Tool</th>
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {[
                  { layer: 'Frontend', tool: 'Next.js + MUI', why: 'App Router, i18n, RTL/LTR' },
                  { layer: 'Auth + User data', tool: 'AWS Amplify Gen 2', why: 'Profile storage, completed tasks' },
                  { layer: 'CMS', tool: 'Strapi v5 (cloud)', why: 'Structured content, dual-locale' },
                  { layer: 'Content ops', tool: 'Obsidian + Node.js import scripts', why: 'Knowledge base → CMS pipeline' },
                ].map((row) => (
                  <tr key={row.layer} className="bg-white">
                    <td className="px-5 py-3 font-semibold text-[var(--text-primary)]">{row.layer}</td>
                    <td className="px-5 py-3 text-[var(--text-secondary)] font-mono text-xs">{row.tool}</td>
                    <td className="px-5 py-3 text-[var(--text-secondary)]">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* The Design Story */}
        <div className="space-y-10">
          <SectionHeading title="The Design Story" />

          <div className="space-y-6">
            <SubHeading title="What Was Hard" />
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-2">The bilingual RTL problem.</p>
                <p>Hebrew reads right-to-left. Every layout decision: navigation, card grids, arrow icons, text alignment, breadcrumbs: had to work in both directions. This wasn't just <code className="text-xs bg-[var(--surface-1)] border border-[var(--border-subtle)] rounded px-1.5 py-0.5">direction: rtl</code>; it required thinking about information hierarchy differently depending on reading direction. I built a custom hook that detects locale and flips directional UI tokens accordingly.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-2">Designing for uncertainty.</p>
                <p>Users arrive with wildly different situations: a freelancer who landed last week, a student with a visa appointment in 3 days, a parent who needs Kita for a 2-year-old. The challenge was building one interface that serves all of them without overwhelming anyone. The archetype + audience-tag system was the solution: tasks only surface if they're relevant to your situation.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-2">The content architecture problem.</p>
                <p>Relocation guides usually fail because they're written as flat lists. A real relocation has a graph structure: tasks that unlock other tasks. Designing the dependency system required deep research into German bureaucracy, interviews with people who'd moved, and mapping the actual causal relationships. The Anmeldung insight: that it's the absolute Day 1 blocker, without which nothing else works: shaped the entire information hierarchy.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SubHeading title="Key Design Decisions" />
            <div className="space-y-5">
              <DecisionItem
                number={1}
                title="Phase tabs over a single long list."
                body="Breaking the journey into PRE / ARRIVE / SETTLE / LOCAL gave users a sense of progress and made the content feel manageable rather than overwhelming."
              />
              <DecisionItem
                number={2}
                title="Urgency over alphabetical order."
                body="Every task carries a 1–10 urgency score. The UI surfaces critical tasks first, always. No user should scroll past a Day 1 blocker to find a nice-to-have."
              />
              <DecisionItem
                number={3}
                title="Hebrew-first content."
                body="Even though English reaches a wider market, the target user is Israeli. Writing in Hebrew first ensured the product felt native, not translated. English is a deliberate secondary experience, not a Google Translate artifact."
              />
              <DecisionItem
                number={4}
                title="Embed tasks inside articles, not just beside them."
                body="The inline task card component means a checklist item appears mid-article at the natural action moment, not as a separate UI layer you have to context-switch to."
              />
              <DecisionItem
                number={5}
                title="Nationality system for future scale."
                body="Designed and built a nationality content model in Strapi early, so future articles can be tagged as relevant to specific nationalities. Adding a non-Israeli track will be clean and non-destructive."
              />
            </div>
          </div>

          <div className="space-y-6">
            <SubHeading title="What I Learned" />
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6 space-y-4">
              <p>
                Building both the design and the product revealed a pattern I didn't expect: <strong className="font-semibold text-[var(--text-primary)]">the hardest design problems were information architecture, not UI.</strong> Getting the task ID naming convention right, deciding how categories map to phases, understanding that <code className="text-xs bg-white border border-[var(--border-subtle)] rounded px-1.5 py-0.5">editorialStatus</code> and <code className="text-xs bg-white border border-[var(--border-subtle)] rounded px-1.5 py-0.5">priority</code> needed to be separate fields on articles: these were decisions that shaped the whole product and couldn't be easily undone after the fact.
              </p>
              <p>
                I also learned that <strong className="font-semibold text-[var(--text-primary)]">a well-structured knowledge base is a design deliverable.</strong> The Obsidian vault: roadmaps, task database, article templates, bilingual reference: is not just documentation. It's the design spec, the content model, and the editorial guide in one place.
              </p>
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="space-y-6">
          <SectionHeading title="My Role" />
          <p>I designed and built this product solo, acting as:</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { role: 'Product Designer', desc: 'UX flows, component design, information architecture, onboarding experience' },
              { role: 'Product Manager', desc: 'Phase system, roadmap, task dependency logic, sprint planning' },
              { role: 'Frontend Developer', desc: 'Next.js app with MUI, i18n (Hebrew/English), RTL layout handling' },
              { role: 'Backend / CMS Architect', desc: 'Strapi schema design, AWS Amplify data model, custom import scripts' },
              { role: 'Content Architect', desc: 'Bilingual editorial system, article templates, task taxonomy' },
            ].map((item) => (
              <div key={item.role} className="rounded-xl border border-[var(--border-subtle)] bg-white p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{item.role}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Where It Is Today */}
        <div className="space-y-6">
          <SectionHeading title="Where It Is Today" />
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6 space-y-3">
            {[
              { label: 'System architecture', value: '~95% complete' },
              { label: 'Frontend', value: 'Core flows built: onboarding, knowledge center, task system' },
              { label: 'CMS', value: 'Live on Strapi Cloud · 6 articles published (PRE phase)' },
              { label: 'Tasks', value: '32 tasks mapped across all 4 phases, with full dependency chains and metadata' },
              { label: 'Content', value: 'Sprint 1 underway: targeting 7 ARRIVE-phase articles as the critical path to launch' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-baseline border-b border-[var(--border-subtle)] pb-3 last:border-b-0 last:pb-0">
                <p className="w-44 shrink-0 text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">{item.label}</p>
                <p className="text-sm text-[var(--text-primary)]">{item.value}</p>
              </div>
            ))}
          </div>
          <p>
            The product is functional and running. The blocker to public launch is content volume: you need enough articles to make the knowledge center feel substantive. That's the current focus.
          </p>
        </div>

        {/* What's Next */}
        <div className="space-y-6">
          <SectionHeading title="What's Next" />
          <ul className="space-y-3">
            {[
              'Complete Sprint 1: 7 ARRIVE-phase articles: Anmeldung, banking, health insurance, residence permit, freelancer registration, visa, blocked account',
              'Launch public beta targeting Israeli expat communities in Berlin',
              'Add Munich as the second city',
              'Explore partnerships with Israeli relocation communities and HR teams at Berlin tech companies',
              'Build a community layer (LOCAL archetype features: Verein, networking, business registration)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#732fff]" />
                <span className="text-base text-[var(--text-secondary)] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
