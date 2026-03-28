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

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold text-[var(--text-primary)] lg:text-3xl">{title}</h2>
  );
}

function CaseStudyLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      <span className="text-sm font-bold text-[#732fff]">{number}</span>
      <h3 className="text-xl font-bold text-[var(--text-primary)] lg:text-2xl">{title}</h3>
    </div>
  );
}

function TwoColSection({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_3fr] lg:gap-16 items-start">
      <div>{left}</div>
      <div className="text-base text-[var(--text-secondary)] leading-relaxed space-y-4">{right}</div>
    </div>
  );
}

export default function BitPage() {
  const project = PROJECTS.find((p) => p.index === '03')!;

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
                Eight Years Building the Design Language of an Open-Source Platform
              </h1>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Bit is a component-driven development platform used by hundreds of thousands of developers worldwide. As Head of Design, I've shaped the product's visual language, UX architecture, design system, and AI-powered features — from day-to-day UI decisions to long-term product thinking.
              </p>
            </div>

            {/* Right: meta */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Company</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Bit (bit.dev)</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Role</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Head of Design</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Duration</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">8 years (ongoing)</p>
              </div>
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">Focus</p>
                <div className="flex flex-wrap gap-2">
                  {['UX Strategy', 'UI Design', 'Design System', 'AI Features'].map((tag) => (
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
        <ImagePlaceholder label="Bit platform — overview" aspect="16/7" />
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-[800px] px-6 pb-24 space-y-24">

        {/* Context */}
        <div className="space-y-6">
          <SectionHeading title="The Long Game" />
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Most design work happens in sprints. Eight years at one company is something different — it means building the design culture, not just the screens. At Bit, I've been involved in every meaningful product decision: what to build, how to structure it, what to cut. The two case studies below are recent examples — but they reflect a much longer design story.
          </p>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Today the work includes AI-powered features that help developers compose and understand components faster. The challenge is the same as it's always been: make something technically complex feel obvious to use.
          </p>
        </div>

        {/* ── Case Study 1: Data Table ── */}
        <div className="space-y-10 pt-4 border-t border-[var(--border-subtle)]">

          <CaseStudyLabel number="01" title="Building Blocks: Crafting a Versatile Data Table Component" />

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Strategy</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">UX Strategy · UX/UI</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Client</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Bit</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Industry</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Hi-Tech</p>
              </div>
            </div>
          </div>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            The purpose of data tables is to organize and display data efficiently. Data tables can be customized with additional functionality based on the needs of users' products. The goal was to design and develop a basic table for Bit's open-source design system — something simple enough to ship fast, yet structured enough to grow.
          </p>

          <ImagePlaceholder label="Data table — component overview" aspect="16/9" />

          <div className="space-y-8">
            <TwoColSection
              left={
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The challenge</h3>
              }
              right={
                <>
                  <p>
                    The challenge was to design a basic table component — a basic design and basic functionality. This table is basic because it is part of the open-source design system we are building in the company. The table is customizable: developers can add and remove parts from it.
                  </p>
                  <p>
                    The difficulty was balancing flexibility with consistency. A component that's too rigid gets abandoned; one that's too loose creates chaos across the product.
                  </p>
                </>
              }
            />

            <TwoColSection
              left={
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The process</h3>
              }
              right={
                <p>
                  Collaboration with the development team was a crucial element in the process. The meetings were daily and included design feedback and development feedback. This process allowed us to work together quickly and build a quality basic table.
                </p>
              }
            />

            <TwoColSection
              left={
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The features that were designed and developed</h3>
              }
              right={
                <p>
                  Collaboration with the development team was a crucial element in the process. The meetings were daily and included design feedback and development feedback. This process allowed us to work together quickly and build a quality basic table.
                </p>
              }
            />
          </div>

          <div className="space-y-12">
            <p className="text-lg font-semibold text-[var(--text-primary)] text-center">A few examples of the basic table</p>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--text-primary)]">A basic table</h4>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  A basic table emphasizes clarity, ease of navigation, and accessibility to ensure users can efficiently comprehend and interact with the data. By building a basic table, you can build a more complex one.
                </p>
                <ImagePlaceholder label="Basic table — component" aspect="16/7" />
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--text-primary)]">Skeleton</h4>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  Use skeleton states instead of spinners if additional load time is expected. This keeps the layout stable and reduces perceived wait time.
                </p>
                <ImagePlaceholder label="Skeleton loading state" aspect="16/7" />
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--text-primary)]">Active search</h4>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  An active search is a way of searching an application on data set. After each character is entered, live search runs and results are displayed immediately. Active search is a way of filtering a dataset using keywords. The pagination toolbar is in disabled mode as the search is run actively and the user has not deleted the data in the search field. We implemented it to hide the toolbar while the search field is active.
                </p>
                <ImagePlaceholder label="Active search — component" aspect="16/7" />
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--text-primary)]">Table docs</h4>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  A detailed documentation document explains both the design and development sides of the component, attached to the table so users can better understand it. Key behaviors documented: Pagination, Sorting, Toolbar, Row Selection, Add/remove columns, Row expansion — each defined with edge cases and interaction states.
                </p>
                <ImagePlaceholder label="Table documentation" aspect="4/3" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6 space-y-3">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Conclusion</p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              The goal was to design and develop a basic table for our open-source design system. The process included daily conversations with the development and product teams to design according to limitations and requests. In addition to the design, a detailed documentation document regarding the behavior of the component has been included.
            </p>
          </div>
        </div>

        {/* ── Case Study 2: CLI Reference ── */}
        <div className="space-y-10 pt-4 border-t border-[var(--border-subtle)]">

          <CaseStudyLabel number="02" title="CLI Reference" />

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Strategy</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">UX Strategy · UX/UI Design</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Client</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Bit</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Industry</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">Hi-Tech</p>
              </div>
            </div>
          </div>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            CLI — or Command Line Interface — commands are instructions given to a computer or software through a text-based interface. Users interact with the system by typing commands into a terminal or command prompt. The goal: displaying and browsing various commands in a comfortable way.
          </p>

          <ImagePlaceholder label="CLI Reference — main view" aspect="16/9" />

          <div className="space-y-8">
            <TwoColSection
              left={
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The challenge was to create a comfortable user experience for a large amount of commands</h3>
              }
              right={
                <p>
                  Developers write code using many commands that help them work faster. The commands library must be designed to make it easier for developers to browse the commands. The previous experience wasn't good enough because the user got all the commands in one long page, and as a result, it was painful to search quickly for the commands the user needs.
                </p>
              }
            />

            <TwoColSection
              left={
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The decision was to group commands according to product areas and then create a clear and pleasant filter experience</h3>
              }
              right={
                <p>
                  In this way, users can clearly understand the areas of the product and see which commands are linked to which areas of the product. The following commands have been categorized — some commands belong to more than one category.
                </p>
              }
            />
          </div>

          {/* 4 Versions grid */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Four design versions explored</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-secondary)] font-medium">Version 1</p>
                <ImagePlaceholder label="CLI Reference — Version 1" aspect="4/3" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-secondary)] font-medium">Version 2</p>
                <ImagePlaceholder label="CLI Reference — Version 2" aspect="4/3" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-secondary)] font-medium">Version 3</p>
                <ImagePlaceholder label="CLI Reference — Version 3" aspect="4/3" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-secondary)] font-medium">Version 4</p>
                <ImagePlaceholder label="CLI Reference — Version 4" aspect="4/3" />
              </div>
            </div>
          </div>

          <TwoColSection
            left={
              <h3 className="text-xl font-bold text-[var(--text-primary)]">A comprehensive icon library of 75 new icons for CLI was designed</h3>
            }
            right={
              <p>
                We knew we needed a bunch of new icons. We worked closely and created 75 new icons to fix its small things on the commands' internal pages and to communicate the essence of the command in a simple, graphical way.
              </p>
            }
          />

          <ImagePlaceholder label="75 CLI icons — icon library" aspect="16/9" />

          <TwoColSection
            left={
              <h3 className="text-xl font-bold text-[var(--text-primary)]">On the go fixing for the inner pages of each command</h3>
            }
            right={
              <p>
                Each project involves fixing and improving pages related to the same feature. Our goal was to fix small things on the commands' internal pages that can enhance the look of the page.
              </p>
            }
          />

          <ImagePlaceholder label="Command inner page — ws-config" aspect="16/9" />

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6 space-y-3">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Summary</p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              It took one month to develop 75 new icons and design new experiences. It was a fast-paced project that heavily focused on UX Strategy, collaborative design, and product design. The result was a navigation system that made Bit's CLI feel approachable — not just functional.
            </p>
          </div>
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
