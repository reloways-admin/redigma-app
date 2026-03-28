'use client';

import Image from 'next/image';
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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#732fff]/10">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5l2.5 2.5 3.5-4" stroke="#732fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="text-base text-[var(--text-secondary)] leading-relaxed">{children}</span>
    </li>
  );
}

function ChallengeBlock({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
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

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold text-[var(--text-primary)] lg:text-3xl">{title}</h2>
  );
}

export default function GoMatchItPage() {
  const project = PROJECTS.find((p) => p.index === '04')!

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
                A 3-Month Design Sprint to Launch a Usable and Scalable MVP
              </h1>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                A 3-month design sprint for launching GoMatchIt, a business matchmaking platform, and the future vision for its AI-powered matching engine and data-backed insights tools.
              </p>
            </div>

            {/* Right: meta */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Industry</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Tech · B2B Strategy</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Focus</p>
                <div className="flex flex-wrap gap-2">
                  {['Design', 'Data', 'Visibility'].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Role</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Lead Product Designer</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Timeline</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">3 months</p>
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
            src="/images/home/projects/gomatchit_cover_001-1-1920x1080.png"
            alt="GoMatchIt platform overview"
            fill
            className="object-cover"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-[800px] px-6 pb-24 space-y-20">

        {/* Overview */}
        <div className="space-y-6">
          <SectionHeading title="Overview" />
          <p>
            Go Match It is a tool for matching companies specializing in complex business processes. It is powered by AI to better match the right partners, investors, and service providers — and to ensure each placement is filling its potential for both sides.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text-primary)]">The goal was:</strong> We engaged with the team at GoMatchIt with the key pillars to success: good branding, strong UX/UI, and crisp visuals. I worked closely with the founder and developer to build a solid technical foundation — working with the visual language and the user experience of the product from day one.
          </p>
          <p>
            Throughout this process, I developed a complete design system: typography, color palette, layouts, interface elements, defining screen states, a component library, and how to best use these as the tool was built.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text-primary)]">The result: published, intuitive, and technically sound MVP</strong> — with two more ideas already on the roadmap for later this year.
          </p>

          {/* Key outcomes */}
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6 mt-4">
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">Key outcomes</p>
            <ul className="space-y-3">
              <CheckItem>Every interaction was carefully considered and designed to create a clear, intuitive flow</CheckItem>
              <CheckItem>Full visual language: font, typography, colors, buttons, icons</CheckItem>
              <CheckItem>Full design system for information architecture and component reuse</CheckItem>
              <CheckItem>Dashboard built with strong hierarchy and systematic navigation</CheckItem>
            </ul>
          </div>
        </div>

        {/* Starting Point */}
        <div className="space-y-6">
          <SectionHeading title="Starting Point" />
          <p>
            I joined the GoMatchIt project when the product was still in its early stages. Back then, the founder had already begun developing a basic version of the product.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text-primary)]">My goal</strong> was to take the existing structure and build a new design — in terms of visual elements, UX, and overall consistency.
          </p>
          <p>
            First, the most reasonable path was clear: amplify the way the product looks and feels, make the visual representation meaningful, and ensure the story it tells is coherent for the user.
          </p>
          <p>
            Canvas is a unique element — one where you still need to learn what to change and what to keep, building a common domain language based on a shared set of principles.
          </p>
          <ImagePlaceholder label="Starting point — early product state" />
        </div>

        {/* How We Worked */}
        <div className="space-y-6">
          <SectionHeading title="How We Worked" />
          <p>
            I worked closely with the founders and developer throughout this project.
          </p>
          <p>
            <strong className="font-semibold text-[var(--text-primary)]">The pace was fast</strong> — every design decision was implemented almost simultaneously. The success criteria was simple: a product that delivers clear value quickly to stakeholders, and a product design that has real value quickly with the end customer.
          </p>
          <p>
            We focused on consistent design, real data quality, and clear outcomes for all parties involved.
          </p>
        </div>

        {/* Key Challenges */}
        <div className="space-y-8">
          <SectionHeading title="Key Challenges" />

          <ChallengeBlock number="1" title="Keeping an Intuitive Request Flow">
            <p>
              The primary challenge was creating a simple flow that instantly guides the user through creating and submitting a matching request. Below these elements, the forms would be combined — and we needed to make sure the correct areas were always visible and actionable.
            </p>
            <p>
              The Request "Maker" had to follow a unified mental model — on the first try, the user could click through without getting lost. When a form said something was a "Request", it had to look right, feel right, and make the flow obvious.
            </p>
            <ImagePlaceholder label="Request flow screens" />
          </ChallengeBlock>

          <ChallengeBlock number="2" title="Navigating the Menu">
            <p>
              The biggest design and UX issue was around the navigation — specifically on the canvas platform, with its different levels and contexts. With this approach, we designed a clear filtering tool where multiple factors could drive a cross-segment result.
            </p>
            <p>
              We introduced a secondary menu — a standard approach that, when combined with a clear link menu and visible entries, resolved the navigation complexity without overloading the interface.
            </p>
            <ImagePlaceholder label="Menu navigation design" />
          </ChallengeBlock>

          <ChallengeBlock number="3" title="Designing Within Technical Constraints">
            <p>
              The development environment introduced a set of real constraints — not every design pattern was achievable in the given timeline. This meant making smart tradeoffs: prioritizing interactions that would have the highest impact on usability while deferring more complex patterns to later iterations.
            </p>
            <p>
              Every component was designed with the developer's workflow in mind, ensuring that what was designed could be built accurately and quickly.
            </p>
            <ImagePlaceholder label="Component design and constraints" />
          </ChallengeBlock>

          <ChallengeBlock number="4" title="Navigating the Status">
            <p>
              Status visibility was critical. Users needed to understand at a glance where their requests stood — pending, matched, in review, or complete. We designed a clear status system with consistent color coding and iconography across all surfaces.
            </p>
          </ChallengeBlock>

          <ChallengeBlock number="5" title="Consistency Across the Entire Application">
            <p>
              With multiple surfaces — the canvas, the dashboard, the request flow, and settings — maintaining visual and interaction consistency was an ongoing challenge. The design system was the solution: every component defined once, reused everywhere.
            </p>
            <ImagePlaceholder label="Consistency across surfaces" />
          </ChallengeBlock>
        </div>

        {/* The Canvas */}
        <div className="space-y-6">
          <SectionHeading title="The Heart of the Product: The Canvas" />
          <p>
            The Canvas is the core of GoMatchIt — an infinite workspace where users create and explore business matches. The discovery canvas worked with a grid type, with labeled canvas areas — at the top level, a clearly visible grid of all relevant nodes was always accessible.
          </p>
          <p>
            We created <strong className="font-semibold text-[var(--text-primary)]">Match Groups</strong> displayed at the top column of the canvas, organized by category — either a small grid panel or a specific matching tag was used for relevant filtering.
          </p>
          <p>
            The defined interaction model for all canvas components — including layout, color, interaction states, and user data points — all contributed to making the canvas feel powerful yet approachable.
          </p>
          <ImagePlaceholder label="Canvas — main view" aspect="4/3" />
        </div>

        {/* The Dashboard */}
        <div className="space-y-6">
          <SectionHeading title="A Fun Challenge: The Dashboard" />
          <p>
            Unlike the Canvas, the Dashboard was a much more detail-populated overview across all components being used in the platform. It needed to support a launching experience across the platform — requiring notifications, data sets, connections, active tasks, and status updates all in one place.
          </p>
          <p>
            The Dashboard was designed around the user's daily workflow — surfacing what matters most, in the right order, with enough detail to act without overwhelming.
          </p>
          <p>
            We made it work through consistent design language, consistent iconography, standard labels, and a well-structured layout that could scale as new features were added.
          </p>
          <ImagePlaceholder label="Dashboard — overview" aspect="4/3" />
        </div>

        {/* Design Components */}
        <div className="space-y-8">
          <SectionHeading title="Design Components" />

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Typography</h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                We chose a clean, readable modern typeface that performs well for both large headings and small interface text. Type hierarchy was defined across five levels — from hero titles down to captions — ensuring clarity and consistency at every scale.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Color System</h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                The color system was built around a core palette with semantic usage rules — primary actions, status indicators, surface levels, and text roles each had their own defined color. This made the UI predictable and easy for the developer to implement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Design Tokens</h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Our design tokens established component-level definitions — including token colors, spacing, typography scale, border radii, and shadow values — all contributing to the consistency of the entire product experience.
              </p>
            </div>

            <ImagePlaceholder label="Design system components" aspect="4/3" />
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="space-y-6">
          <SectionHeading title="Final Thoughts" />
          <p>
            GoMatchIt was a great example of how product thinking and UX work best when combined from day one — not as sequential steps, but as an ongoing conversation. Starting from an early-stage product and moving quickly to a polished, shippable MVP required constant prioritization and clear communication.
          </p>
          <p>
            The design system we built became the product's backbone — and the foundation for everything that comes next. The two upcoming features already on the roadmap will build directly on top of what we created here.
          </p>
          <p>
            What made this project work was trust: the founder trusted the process, the developer trusted the designs, and together we moved faster than any of us expected.
          </p>
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
