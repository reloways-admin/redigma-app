import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PROJECTS } from '@/content/projects';

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--background)] pt-24 pb-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-6 inline-flex items-center gap-2 bg-[var(--grey-100)] px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
            Case study
          </div>
          <h1 className="type-page-title text-[var(--text-primary)] max-w-3xl mb-4">{project.title}</h1>
          <p className="type-section-subtitle text-[var(--text-secondary)] max-w-2xl mb-10">{project.intro}</p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-8 border-t border-[var(--border-subtle)] pt-8">
            {Object.entries(project.meta).map(([key, value]) => (
              <div key={key}>
                <p className="type-kicker text-[var(--text-dimmed)] mb-1 uppercase">{key}</p>
                <p className="type-body font-medium text-[var(--text-primary)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      {project.heroImage && (
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="relative w-full overflow-hidden bg-[var(--surface-1)]" style={{ minHeight: 400 }}>
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* Content sections */}
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="space-y-16">
          {project.sections.map((section, index) => {
            if (section.type === 'headline') {
              return (
                <div key={index} className="border-t border-[var(--border-subtle)] pt-12">
                  <h2 className="type-section-title text-[var(--text-primary)] mb-4">{section.title}</h2>
                  {section.subtitle && (
                    <p className="type-section-subtitle text-[var(--text-secondary)] max-w-2xl">{section.subtitle}</p>
                  )}
                </div>
              );
            }

            if (section.type === 'text') {
              return (
                <div key={index}>
                  {section.title && (
                    <h3 className="text-xl font-medium text-[var(--text-primary)] mb-4">{section.title}</h3>
                  )}
                  <p className="type-body text-[var(--text-secondary)] max-w-2xl leading-relaxed">{section.body}</p>
                </div>
              );
            }

            if (section.type === 'image') {
              return (
                <div key={index}>
                  <div className="relative w-full overflow-hidden bg-[var(--surface-1)]" style={{ minHeight: 360 }}>
                    <Image
                      src={section.src}
                      alt={section.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                  {section.caption && (
                    <p className="mt-3 text-sm text-[var(--text-dimmed)] text-center">{section.caption}</p>
                  )}
                </div>
              );
            }

            if (section.type === 'facts') {
              return (
                <div key={index} className="bg-[var(--surface-1)] p-8">
                  <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {section.items.map((item) => (
                      <div key={item.label}>
                        <p className="type-kicker text-[var(--text-dimmed)] mb-1 uppercase">{item.label}</p>
                        <p className="text-2xl font-semibold text-[var(--text-primary)]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* CTA Banner */}
      <section className="bg-[#050508] py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <h2 className="type-page-title text-white mb-6 leading-tight">
                Does your product have a clear next step?{' '}
                <span className="text-[#732fff]">Let&apos;s talk!</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">How can I help you?</p>
              <ul className="space-y-2 text-gray-300">
                {['UX/UI Design & Prototyping', 'Product Audit & Optimization', 'Design System Architecture', 'Wireframing & IA', 'AI Consulting & Implementation'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-4 h-px bg-[#732fff] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400">
                <a href="mailto:amir@redigma.com" className="hover:text-white transition-colors">amir@redigma.com</a>
                <span>Berlin, Germany</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
