'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const SERVICES = [
  {
    id: 'shape',
    key: 'shape' as const,
    imageSrc: '/illustrations/how-i-work/sketch-wireframes-and-product-design.svg',
    color: '#1C83FB',
  },
  {
    id: 'fix',
    key: 'fix' as const,
    imageSrc: '/illustrations/how-i-work/sketch-ux-audit-and-redesign.svg',
    color: '#E52225',
  },
  {
    id: 'scale',
    key: 'scale' as const,
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg',
    color: '#10B981',
  },
  {
    id: 'ai',
    key: 'ai' as const,
    imageSrc: '/illustrations/how-i-work/sketch-ai.svg',
    color: '#E76F4D',
  },
];

/**
 * What I actually do.
 *
 * The deliverables used to be the reward for opening an accordion, which meant
 * three of the four services showed nothing concrete at any given moment. They
 * are the part a buyer scans for, so they are all on the page now, as plain
 * lists. The panel on the right is a single still, no longer a slideshow tied
 * to which row happens to be open.
 */
export default function HomeServicesAccordion() {
  const t = useTranslations('home.services');

  return (
    <section id="services" className="border-t border-[var(--border-subtle)] py-20 lg:py-28 bg-[var(--background)] scroll-mt-[var(--spacing-12)]">
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {t('heading')}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left: the four services, everything visible */}
          <div>
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="border-b border-[var(--border-subtle)] py-5"
              >
                <h3 className="block text-lg font-medium text-[var(--text-primary)]">
                  {t(`items.${service.key}.title`)}
                </h3>

                <p className="mt-2 max-w-sm type-body leading-relaxed text-[var(--text-secondary)]">
                  {t(`items.${service.key}.body`)}
                </p>

                <ul className="mt-3.5 flex max-w-sm flex-col gap-2">
                  {(t.raw(`items.${service.key}.bullets`) as string[]).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-normal text-[var(--text-secondary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--purple-400)]"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Mobile illustration, full width under its service */}
                <div
                  className="relative mt-5 w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] lg:hidden"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <Image
                    src={service.imageSrc}
                    alt=""
                    fill
                    className="object-contain p-6"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: one still panel, desktop only. It rides along with the list
              rather than competing with it for attention. */}
          <div
            className="sticky top-28 hidden overflow-hidden rounded-2xl border border-[var(--border-subtle)] lg:block"
            style={{ aspectRatio: '4 / 3' }}
          >
            <div className="relative h-full w-full">
              <Image
                src={SERVICES[0].imageSrc}
                alt=""
                fill
                className="object-contain p-12"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
