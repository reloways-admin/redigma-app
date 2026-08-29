'use client';

import Image from 'next/image';

export type CompanyLogo = {
  src: string;
  alt: string;
  href?: string;
  /**
   * Optical size override. Every source file is the same 268x108 canvas, but
   * each mark fills it differently, so a round logo looks far smaller than a
   * wordmark at the same height. Set this per logo to even them out.
   */
  heightClass?: string;
};

type CompanyLogosProps = {
  title: string;
  logos: CompanyLogo[];
  id?: string;
  className?: string;
};

export function CompanyLogos({
  title,
  logos,
  id = 'companies',
  className,
}: CompanyLogosProps) {
  return (
    <section
      id={id}
      className={[
        // Pure white, so the logo strip reads as its own clean band rather
        // than blending into the off-white the surrounding sections use.
        'bg-white py-24 lg:py-32 border-t border-[var(--border-subtle)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="mb-12 text-center">
          <h2 className="mx-auto max-w-4xl text-balance text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {title}
          </h2>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-16">
          {logos.map((logo) => {
            const image = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={134}
                height={54}
                // Trust signals directly under the hero: load them straight
                // away rather than lazily. Each file is only a few KB.
                loading="eager"

                className={[
                  logo.heightClass ?? 'h-9 sm:h-10 lg:h-11',
                  'w-auto object-contain opacity-80 transition-opacity duration-200',
                ].join(' ')}
              />
            );

            return (
              <li key={logo.alt} className="flex items-center">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-100 transition-opacity hover:opacity-100 [&:hover_img]:opacity-100"
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default CompanyLogos;
