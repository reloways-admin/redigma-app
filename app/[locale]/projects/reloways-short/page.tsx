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
  'Product strategy and definition: what it is, what it is not, and what ships first',
  'Research: talking to people who had already made the move, which is where the ordering came from',
  'Information architecture: the task model, its dependencies, and the content structure beneath it',
  'User flows, UX and UI, and the design system that keeps them consistent',
  'Prototyping, then the frontend build, including a Hebrew and English interface that mirrors properly rather than reading as a translation',
  'Working with the developer day to day, so decisions were made against what could actually be built',
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
            Reloways began as a personal response to moving country myself. I designed and built a platform that brings practical knowledge, trusted local services, and community into one place, while living the problem it solves.
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
            Relocation is not one problem. It is dozens of small ones that arrive at different times and in an order nobody tells you: registering your address, a flat, health insurance, a bank account, a doctor, tax, and the ordinary local services you need from people you have no way to vet.
          </p>
          <p>
            None of that information is missing. It is spread across Google, Facebook groups, Reddit, WhatsApp threads, and government sites written in German, and every piece of it assumes you already know which piece you need.
          </p>
          <blockquote className="case-quote">
            <p>
              The real problem was not a lack of information. It was knowing what to do, when to do it, and who to trust.
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
            Reloways is for people working out how to live in a city they have just arrived in, in the first months when nothing is familiar and every decision carries a risk they cannot size. I started with Israelis moving to Berlin because that was the move I was making and the community I could reach, but the architecture was built for any nationality and city pair from the start. The first audience is a starting point, not the definition of the product.
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
            Three decisions carry the product. Each one came out of the problem above rather than from a feature list.
          </p>

          <div className="space-y-4">
            <h3 className="case-subheading">A platform that understands where you are</h3>
            <p>
              Most relocation sites open on a directory and leave you to work out which part applies to you. Reloways opens by asking instead: where you are, what your situation is, whether you have landed yet. What it learns shapes everything after it, so someone with a visa appointment in three days and someone still deciding whether to move do not get the same product.
            </p>
            <PlaceholderFigure label="Onboarding wizard, two or three real steps" />
          </div>

          <div className="space-y-4">
            <h3 className="case-subheading">A checklist that knows what comes next</h3>
            <p>
              A relocation contains hundreds of tasks and almost none of them matter at the same moment. The checklist is personalised and ordered: grouped by when a thing happens, ranked by how urgent it is, and aware of which task blocks which. Registering your address sits under almost everything else, so it is never something you scroll past. The complexity stays inside the system instead of landing on the user.
            </p>
            <PlaceholderFigure label="The task checklist, showing phases and urgency" />
          </div>

          <div className="space-y-4">
            <h3 className="case-subheading">Knowledge connected to action</h3>
            <p>
              A guide that only explains leaves you to act somewhere else. Every article carries its task inside it, at the point in the text where you would actually do the thing. Reading and doing happen in one place, which is what turns a pile of content into a product.
            </p>
            <PlaceholderFigure label="An article with an inline task card" aspect="4/3" />
          </div>
        </div>

        {/* 04 */}
        <div className="case-section space-y-6">
          <SectionHeading number="04" title="My Role" />
          <p>
            I designed Reloways from the ground up: from defining what the product should be and how its information is structured, through the UX, the visual language, and the interaction patterns, to writing a good deal of the code.
          </p>
          <ul>
            {ROLES.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p>
            The hardest part was never the interface. It was establishing the real order of German bureaucracy accurately enough to encode it.
          </p>
        </div>

        {/* 05 */}
        <div className="case-section space-y-6">
          <SectionHeading number="05" title="Where It Stands" />
          <p>
            Reloways is live and still being built. Onboarding, the task system, and the knowledge centre all work, with 32 tasks mapped across the full journey. What began as a personal response to one move has grown into a platform connecting people with local businesses, practical knowledge, and the community around both.
          </p>
          <p>
            The writing is what remains. A knowledge centre earns trust by having enough in it, and that is the current work before opening it up publicly. It is a product still in motion rather than a finished piece of work.
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
