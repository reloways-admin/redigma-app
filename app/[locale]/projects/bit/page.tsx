'use client';

import Image from 'next/image';
import { PROJECTS, ToolBadge } from '@/sections/home/projects';
import { HomeFinalCta } from '@/sections/home/final-cta';

function CaseFigure({
  src,
  alt,
  caption,
  aspect = '16/9',
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <figure className="case-figure">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)]"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1100px) 100vw, 960px"
          priority={priority}
        />
      </div>
      {caption ? <figcaption className="case-caption">{caption}</figcaption> : null}
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

function SubHeading({ title }: { title: string }) {
  return <h3 className="case-subheading">{title}</h3>;
}

const META = [
  { label: 'Type', value: 'Design system component' },
  { label: 'Client', value: 'Bit (bit.dev)' },
  { label: 'My Role', value: 'Head of Design' },
  { label: 'Platform', value: 'Open-source component library' },
];

const BEHAVIOURS = [
  { name: 'Pagination', note: 'Splits large data sets into pages instead of one overwhelming scroll.' },
  { name: 'Sorting', note: 'Three states per column: unsorted, sorted-up, sorted-down. Icons appear on hover, and only the active column keeps one visible.' },
  { name: 'Toolbar', note: 'Reserved for global actions: settings, complex filters, export, edit. Primary, ghost, and icon buttons only.' },
  { name: 'Row selection', note: 'Checkboxes on the leading edge. Every table has a hover state whether or not rows are selectable.' },
  { name: 'Add or remove columns', note: 'Lets users decide how much of the table they want to see at once.' },
  { name: 'Row expansion', note: 'Reveals detail in place. The expand-all chevron is hidden by default so detail queries are postponed until asked for.' },
  { name: 'Infinite scroll', note: 'An alternative to pagination for a continuous stream of content.' },
];

export default function BitPage() {
  const project = PROJECTS.find((p) => p.index === '03')!;

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">Case study</p>

          <div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6">
              Building Blocks: Crafting a Versatile Data Table Component
            </h1>
            <p className="case-lead">
              Bit is a component-driven development platform used by developers worldwide. This is one component out of eight years of work there: the data table at the centre of its open-source design system, designed to be simple enough to ship fast and structured enough to grow.
            </p>

            {/* Meta, sitting under the title rather than beside it */}
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-3 lg:grid-cols-5">
              {META.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">{item.label}</p>
                  <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
                </div>
              ))}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Industry</p>
                <div className="flex flex-wrap gap-2">
                  {['Developer Tools', 'Open Source', 'Hi-Tech'].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-3 lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Tools</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
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
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/projects/table/table_cover_001.png"
            alt="The Table documentation page in Bit's design system, with the full behaviour index in the sidebar"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="case-prose mx-auto px-6 pb-24 space-y-20">

        {/* The Problem */}
        <div className="case-section space-y-6">
          <SectionHeading number="01" title="The Brief" />
          <p>
            The purpose of a data table is to organise and display data efficiently. That sounds like a solved problem until you have to build one component that every team in a product will use, for data nobody has described to you yet.
          </p>
          <p>
            The table had to be <strong className="font-semibold text-[var(--text-primary)]">basic on purpose</strong>. It is part of the open-source design system we build in the open at Bit, which means it is not a table for one screen. It is the table other people compose their tables from. Developers add parts to it and remove parts from it, and whatever they do, the result still has to look like it belongs to the product.
          </p>
          <blockquote className="case-quote">
            <p>
              A component that is too rigid gets abandoned. A component that is too loose creates chaos across the whole product.
            </p>
          </blockquote>
          <p>
            Everything below is an attempt to sit exactly between those two failures.
          </p>
        </div>

        {/* The Basic Table */}
        <div className="case-section space-y-6">
          <SectionHeading number="02" title="Start From the Smallest Thing That Works" />
          <p>
            The starting point is a table with nothing added to it: header row, data rows, hover state. Clarity, ease of navigation, and accessibility, and nothing that has to be configured before it renders.
          </p>
          <p>
            This matters more than it looks. If the default state is already opinionated, every team that adopts the component starts by fighting it. If the default state is genuinely plain, the complex variants become additions rather than overrides.
          </p>

          <CaseFigure
            src="/images/projects/table/table_img_001.png"
            alt="The basic table variant: seven columns of contact data with a header row and a single hover state"
            aspect="1000/230"
            caption="The default. Seven columns, one hover state, nothing to configure before it renders."
          />
        </div>

        {/* Loading */}
        <div className="case-section space-y-6">
          <SectionHeading number="03" title="Design the Waiting, Not Just the Result" />
          <p>
            Tables are almost always waiting for data. If additional load time is expected, the component uses a skeleton rather than a spinner.
          </p>
          <p>
            A spinner tells you something is happening. A skeleton tells you what is about to arrive and how much of it there is, and it holds the layout still so nothing jumps when the data lands. The perceived wait is shorter even when the real wait is identical.
          </p>

          <CaseFigure
            src="/images/projects/table/table_img_003.png"
            alt="The table skeleton state: grey placeholder blocks matching the column structure of the loaded table"
            aspect="1000/360"
            caption="The skeleton mirrors the real column widths, so the layout never shifts when data arrives."
          />
        </div>

        {/* Search */}
        <div className="case-section space-y-6">
          <SectionHeading number="04" title="Active Search, and the Toolbar Problem" />
          <p>
            Active search filters the data set as each character is typed, with results appearing immediately rather than on submit. Simple enough on its own. The interesting part was what it does to everything around it.
          </p>
          <p>
            While a live search is running, the result set is no longer the full data set, so the pagination toolbar is describing something that is not on screen any more. Leaving it active would let a user page through a filtered view using controls built for an unfiltered one.
          </p>
          <p>
            We disable the pagination toolbar for as long as the search field holds a query, and restore it the moment the field is cleared. It is a small rule, and it is the kind of edge case that decides whether a shared component is trustworthy.
          </p>

          <CaseFigure
            src="/images/projects/table/table_img_006.png"
            alt="Active search in the table: a query in the search field, gender and country filters, and a reduced result set"
            aspect="1000/145"
            caption="Search, filters, and export in the toolbar. Pagination steps back while a query is active."
          />
        </div>

        {/* Docs */}
        <div className="case-section space-y-6">
          <SectionHeading number="05" title="The Documentation Is Part of the Component" />
          <p>
            A shared component is only as good as the answer it gives to the next developer who opens it at midnight. Each behaviour was written up alongside the design, covering both the design side and the development side, with its edge cases and interaction states defined rather than implied.
          </p>

          <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-1)]">
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Behaviour</th>
                  <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">What the docs pin down</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {BEHAVIOURS.map((row) => (
                  <tr key={row.name} className="bg-white">
                    <td className="px-5 py-3 font-semibold text-[var(--text-primary)] align-top whitespace-nowrap">{row.name}</td>
                    <td className="px-5 py-3 text-[1.125rem] leading-[1.6] text-[var(--text-primary)]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CaseFigure
            src="/images/projects/table/table_img_005.png"
            alt="The written specification cards for pagination, sorting, toolbar, row selection, row expansion, infinite scroll, and column controls"
            aspect="1000/380"
            caption="Every behaviour written down before it was built. This is the deliverable, not the appendix to it."
          />
        </div>

        {/* Process */}
        <div className="case-section space-y-6">
          <SectionHeading number="06" title="How It Was Built" />
          <SubHeading title="Daily, with the developers" />
          <p>
            Collaboration with the development team was the mechanism, not a nicety. Meetings were daily and carried feedback in both directions: design feedback on what had been built, development feedback on what had been designed and what it would actually cost.
          </p>
          <p>
            Working that way meant constraints arrived while the design was still cheap to change, and the table was designed against what the system could really do rather than against a picture of it.
          </p>
        </div>

        {/* Outcome */}
        <div className="case-section space-y-6">
          <SectionHeading number="07" title="What It Adds Up To" />
          <p>
            The result is a table that ships in Bit&rsquo;s open-source design system: plain by default, documented behaviour by behaviour, and composable enough that teams extend it instead of rebuilding it.
          </p>
          <p>
            The wider lesson has held up across the rest of the eight years. On a shared component, the visible design is the smaller half of the job. The half that determines whether anyone adopts it is the set of decisions about edge cases, defaults, and what happens while you wait.
          </p>
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
