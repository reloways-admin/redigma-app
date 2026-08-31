'use client';

import Image from 'next/image';
import { PROJECTS, ToolBadge } from '@/sections/home/projects';
import { HomeFinalCta } from '@/sections/home/final-cta';

function CaseFigure({
  src,
  alt,
  caption,
  aspect = '16/9',
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure className="case-figure">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1140px) 100vw, 1056px"
        />
      </div>
      {caption ? <figcaption className="case-caption">{caption}</figcaption> : null}
    </figure>
  );
}

function PlaceholderFigure({ label, aspect = '16/9' }: { label: string; aspect?: string }) {
  return (
    <figure className="case-figure">
      <div
        className="flex w-full items-center justify-center rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-1)]"
        style={{ aspectRatio: aspect }}
      >
        <p className="max-w-lg px-8 text-center text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
          {label}
        </p>
      </div>
    </figure>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <header>
      <span className="case-number">{number}</span>
      <h2 className="case-heading">{title}</h2>
    </header>
  );
}

const META = [
  { label: 'Type', value: 'Product Design + Full-Stack Build' },
  { label: 'My Role', value: 'Sole designer and co-developer' },
  { label: 'Platform', value: 'Web · Hebrew / English' },
  { label: 'Status', value: 'MVP, live in development' },
];

const ROLES = [
  'Product design: flows, components, information architecture',
  'Frontend build, including full right-to-left support',
  'Content architecture and the bilingual editorial system',
  'Product decisions: what shipped first, and what waited',
];

export default function RelowaysShortPage() {
  const project = PROJECTS.find((p) => p.index === '01')!;

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">Case study</p>

          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6">
            Designing a Relocation Platform from the Ground Up, While Relocating Myself
          </h1>
          <p className="case-lead">
            Reloways helps Israelis moving to Berlin work out what to do, and in what order. I designed it and I built it.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-4 lg:grid-cols-5">
            {META.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">{item.label}</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-4 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Tools</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {project.tools.map((tool) => (
                  <ToolBadge key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="mx-auto max-w-[1360px] px-6 py-12">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/home/projects/reloways-hero-laptop.jpg"
            alt="The Reloways homepage open on a laptop in a Berlin cafe"
            fill
            className="object-cover"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="case-prose mx-auto px-6 pb-24 space-y-20">

        {/* 01 */}
        <div className="case-section space-y-6">
          <SectionHeading number="01" title="The Problem" />
          <p>
            German bureaucracy runs on prerequisites. You cannot open a bank account before you register your address, and you cannot get a residence permit before the bank account. Every step is blocked by another one.
          </p>
          <p>
            Nobody had mapped that order. People were piecing it together from Facebook groups, German PDFs, and the same question asked again every week.
          </p>
          <blockquote className="case-quote">
            <p>
              People don&rsquo;t know what order to do things in, and one mistake can set them back weeks.
            </p>
          </blockquote>

          <CaseFigure
            src="/images/projects/reloways/reloways-before-state.png"
            alt="A collage of real questions from Israeli expat groups in Berlin about permits, apartments, licences, and finding Hebrew-speaking professionals"
            aspect="2915/1820"
            caption="Where people looked before. Same questions, every week, answers scattered across a dozen threads."
          />
        </div>

        {/* 02 */}
        <div className="case-section space-y-6">
          <SectionHeading number="02" title="Who It Is For" />
          <p>
            The product serves both sides of a small market: people arriving in Berlin who need something done, and the Hebrew-speaking professionals already there who can do it. I wrote six personas across the two sides, and they set what got built first.
          </p>

          <CaseFigure
            src="/images/projects/reloways/reloways-personas.png"
            alt="Six Reloways personas, three service seekers and three service providers, each with bio, goals, frustrations, and needs"
            aspect="2842/1521"
            caption="Six personas across the two sides of the marketplace."
          />
        </div>

        {/* 03 */}
        <div className="case-section space-y-8">
          <SectionHeading number="03" title="What I Built" />
          <p>
            Three things carry the product. Each one exists to answer a single question the user is actually asking.
          </p>

          <div className="space-y-4">
            <h3 className="case-subheading">A wizard that asks who you are</h3>
            <p>
              A short onboarding flow that branches on whether you have already landed. What it learns decides which tasks you see and in what order, so the product is different for a student with a visa appointment in three days than it is for someone still deciding whether to move.
            </p>
            <PlaceholderFigure label="Onboarding wizard, two or three real steps" />
          </div>

          <div className="space-y-4">
            <h3 className="case-subheading">A checklist that knows the order</h3>
            <p>
              The core screen. Tasks are grouped by when they happen and ranked by urgency, not alphabetically, and the system understands which task blocks which. Registering your address sits at the root of almost everything, so it is never something you scroll past.
            </p>
            <PlaceholderFigure label="The task checklist, showing phases and urgency" />
          </div>

          <div className="space-y-4">
            <h3 className="case-subheading">Articles with the task built in</h3>
            <p>
              Every task opens into a full guide in Hebrew and English. The checklist item appears inside the article at the point where you would actually act on it, rather than sitting in a separate list you have to switch to.
            </p>
            <PlaceholderFigure label="An article with an inline task card" aspect="4/3" />
          </div>
        </div>

        {/* 04 */}
        <div className="case-section space-y-6">
          <SectionHeading number="04" title="My Role" />
          <p>
            Everything. I was the only designer and one of two people writing the code.
          </p>
          <ul>
            {ROLES.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p>
            The hardest part was not the interface. It was working out the real order of German bureaucracy well enough to encode it, and designing a Hebrew and English product where the layout mirrors properly in both directions rather than looking translated.
          </p>
        </div>

        {/* 05 */}
        <div className="case-section space-y-6">
          <SectionHeading number="05" title="Where It Stands" />
          <p>
            The product is built and running. Onboarding, the task system, and the knowledge centre all work, with 32 tasks mapped across the full journey.
          </p>
          <p>
            What is left is writing. A knowledge centre needs enough articles to feel worth trusting, and that is the current work before a public launch in the Israeli community in Berlin.
          </p>

          <PlaceholderFigure
            label="The live product on a phone. Two or three real screens, not a mockup."
            aspect="16/9"
          />
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
