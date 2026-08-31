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
        className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)]"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1100px) 100vw, 960px"
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

function ChallengeBlock({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="pt-8 border-t border-[var(--border-subtle)]">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-sm font-bold text-[#732fff]">{number}</span>
        <h3 className="case-subheading">{title}</h3>
      </div>
      <div className="space-y-4 text-[1.3125rem] leading-[1.7] text-[var(--text-primary)]">
        {children}
      </div>
    </div>
  );
}

const META = [
  { label: 'Type', value: 'Product design sprint' },
  { label: 'Client', value: 'GoMatchIt' },
  { label: 'My Role', value: 'Lead Product Designer' },
  { label: 'Timeline', value: '3 months to shipped MVP' },
];

const OUTCOMES = [
  'A full visual language: typeface, type scale, colour roles, buttons, icons',
  'A component library and the information architecture to reuse it against',
  'A process canvas with a defined interaction model for every block state',
  'A dashboard built on a single hierarchy that new features can extend',
];

export default function GoMatchItPage() {
  const project = PROJECTS.find((p) => p.index === '04')!;

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">Case study</p>

          <div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6">
              A 3-Month Design Sprint to Launch a Usable and Scalable MVP
            </h1>
            <p className="case-lead">
              GoMatchIt lets a company map a complex business process on a canvas and connect the software that runs it. I joined an early build and had three months to give it a visual language, an interaction model, and a design system the single developer could actually keep up with.
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
                  {['B2B SaaS', 'Process Automation'].map((tag) => (
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
            src="/images/projects/gomatchit/gomatchit_cover_001-1.png"
            alt="The GoMatchIt canvas with a customer record process mapped across colour-coded activity blocks"
            fill
            className="object-cover"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="case-prose mx-auto px-6 pb-24 space-y-20">

        {/* Overview */}
        <div className="case-section space-y-6">
          <SectionHeading number="01" title="The Product" />
          <p>
            GoMatchIt is a tool for mapping the business processes a company runs across several pieces of software at once. A user lays a process out on a canvas as a chain of activity blocks, connects the tools each step depends on, and ends up with something the whole organisation can read.
          </p>
          <p>
            The founder had already built a working version. It functioned, and it looked like a prototype. My brief was the other three pillars: branding, UX, and the visual craft that decides whether a B2B tool feels credible in a sales call.
          </p>

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6">
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">What shipped in three months</p>
            <ul className="space-y-3">
              {OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#732fff]/10">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2.5 2.5 3.5-4" stroke="#732fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[1.3125rem] leading-[1.7] text-[var(--text-primary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Starting Point */}
        <div className="case-section space-y-6">
          <SectionHeading number="02" title="The Starting Point" />
          <p>
            This is what the canvas looked like when I joined. Every idea in the product is already present: the grid, the swimlanes, the panel for adding a process, the zoom control. None of it tells you where to look.
          </p>
          <p>
            That is the useful thing about inheriting a working prototype. The structural questions have been answered by someone who understands the domain, and the remaining problem is genuinely a design problem: hierarchy, weight, colour, and the order in which things ask for attention.
          </p>

          <CaseFigure
            src="/images/projects/gomatchit/gomatchit_canvas_img_001-1.png"
            alt="The early GoMatchIt build: a grey grid canvas with an add-process panel and no visual hierarchy"
            aspect="1000/510"
            caption="The build I inherited. Everything is there, and nothing is louder than anything else."
          />
        </div>

        {/* The Canvas */}
        <div className="case-section space-y-6">
          <SectionHeading number="03" title="The Canvas, Which Is the Whole Product" />
          <p>
            The canvas carries the product, so it got the first and largest share of the work. A process is a chain of activity blocks, each one typed by what it does: create a record, move data, run a check. Type is carried by colour and by a label on the block header, so a process is legible from a distance before anyone reads a single word of it.
          </p>
          <p>
            Each block also shows the software it touches. Seeing that a step runs through one tool and hands off to another is most of the value of drawing the process at all, so those marks sit inside the block rather than in a panel somewhere else.
          </p>
          <p>
            Grouping came next. A process is boxed and titled on the canvas, which lets several processes share one workspace without turning into a single undifferentiated diagram.
          </p>

          <CaseFigure
            src="/images/projects/gomatchit/gomatchit_canvas_img_002-1.png"
            alt="The redesigned canvas: a titled process group containing colour-coded activity blocks connected by flow lines"
            aspect="1000/510"
            caption="The same canvas after the design system. Colour carries block type, and the process is boxed and titled."
          />
        </div>

        {/* Challenges */}
        <div className="case-section space-y-8">
          <SectionHeading number="04" title="The Hard Parts" />

          <ChallengeBlock number="1" title="Editing a block without leaving the canvas">
            <p>
              Configuring an activity block takes a lot of fields: the parent process, the activity category and type, the trigger, the performers, the entities, the method. Put that on its own page and the user loses the context that made the block make sense. Put it in a small popover and it does not fit.
            </p>
            <p>
              The answer was a wide panel that opens over the canvas, with the fields grouped into four labelled columns and a live preview of the resulting block on the right. You configure the thing while looking at the thing.
            </p>
            <CaseFigure
              src="/images/projects/gomatchit/gomatchit_canvas_img_highlight.png"
              alt="The activity block editor open over the canvas, with grouped field columns, a live block preview, and the surrounding controls highlighted"
              aspect="1000/510"
              caption="The editor panel over the canvas, with the persistent controls marked. Live preview on the right."
            />
          </ChallengeBlock>

          <ChallengeBlock number="2" title="Two menus that never compete">
            <p>
              The canvas needs controls at several levels at once: the workspace itself, the current process, the block you are editing, and the view. Stacking those into one navigation made everything feel equally important, which is another way of saying nothing did.
            </p>
            <p>
              We split it. A persistent top bar for workspace and process, a secondary set of controls anchored to the canvas for creating blocks and switching to the text-to-diagram input, and the zoom pinned to the corner where it stays out of the way. Each one owns a fixed location, so the user learns where to look once.
            </p>
          </ChallengeBlock>

          <ChallengeBlock number="3" title="Designing against a single developer's velocity">
            <p>
              One developer, three months, a real launch date. Not every pattern that would be right was going to be affordable, so every component was designed against what it would cost to build.
            </p>
            <p>
              That constraint shaped the block design directly. The version comparison below is the moment it landed: an earlier variant with a heavy tinted header and a separate category strip, against the version we shipped, which drops the strip, puts the type in the block header, and gives the integration path the width instead.
            </p>
            <p>
              The shipped version is simpler to build and easier to read. That is usually the deal when you design inside a real constraint rather than around it.
            </p>
            <CaseFigure
              src="/images/projects/gomatchit/gomatchit_canvas_img_005.png"
              alt="Two design versions of the activity block side by side, labelled Version 01 and Version 03"
              aspect="1000/350"
              caption="Version 01 against the version we shipped. Less chrome, more room for the integration path."
            />
          </ChallengeBlock>

          <ChallengeBlock number="4" title="Status you can read without opening anything">
            <p>
              Processes live in states: draft, in review, published. Users needed to know where each one stood from the list view, without clicking into it.
            </p>
            <p>
              Status became a single consistent chip, using the same colour vocabulary everywhere it appears. One rule, applied on the canvas, in the list, and in the detail panel.
            </p>
          </ChallengeBlock>
        </div>

        {/* Dashboard */}
        <div className="case-section space-y-6">
          <SectionHeading number="05" title="The Dashboard" />
          <p>
            The canvas is where one process gets built. The dashboard is where an organisation keeps all of them, and it is a different problem: dense, tabular, and mostly about finding the right thing quickly.
          </p>
          <p>
            The layout settles into three columns. Navigation on the leading edge splits processes from boards and cuts each by created, shared, and starred. The centre is a searchable, filterable list carrying owner, software, status, and both dates. The trailing panel previews whatever is selected, including a thumbnail of the process itself, so a user can confirm they have the right one without leaving the list.
          </p>
          <p>
            Nothing here is novel, and that is deliberate. The canvas is where the product earns its distinctiveness. The dashboard should be boring, fast, and immediately familiar.
          </p>

          <CaseFigure
            src="/images/projects/gomatchit/gomatchit_canvas_img_expermental.png"
            alt="The GoMatchIt dashboard: navigation sidebar, a searchable process list with owner, software, and status columns, and a detail preview panel"
            aspect="1000/510"
            caption="Navigate, list, preview. The dashboard is deliberately the least surprising surface in the product."
          />
        </div>

        {/* Design system */}
        <div className="case-section space-y-6">
          <SectionHeading number="06" title="The System Underneath" />

          <SubHeading title="Typography" />
          <p>
            One clean, modern typeface that holds up at both ends of the range, since this product needs a legible hero title and legible eight-pixel-tall metadata in the same view. Five levels, defined once, from page title down to caption.
          </p>

          <SubHeading title="Colour with rules attached" />
          <p>
            The palette exists to mean something rather than to decorate. Primary actions, status indicators, surface levels, block types, and text roles each hold their own defined colour. Because the usage rules are written down, the developer never has to guess which blue, and the interface stays predictable as it grows.
          </p>

          <SubHeading title="Tokens" />
          <p>
            Colour, spacing, type scale, radii, and shadows were all defined as tokens at component level. This is the part that made a three-month timeline survivable: once the tokens were agreed, most new screens were assembly rather than design.
          </p>
        </div>

        {/* Final */}
        <div className="case-section space-y-6">
          <SectionHeading number="07" title="What I Took From It" />
          <p>
            The reason this shipped in three months is not speed. It is that the design system arrived before the screens did. Every hour spent settling tokens and block anatomy in month one paid for itself several times over in months two and three, when new surfaces could be composed instead of invented.
          </p>
          <p>
            The other half was working distance. The founder, the developer, and I moved in one loop, with design decisions implemented almost as they were made. That only works on real trust, and it is the thing I would look for first before agreeing to a timeline this short again.
          </p>
          <p>
            The MVP is published, with two further ideas already scoped on top of the system we built for it.
          </p>
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
