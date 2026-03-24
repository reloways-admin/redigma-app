'use client';

import * as React from 'react';
import Image from 'next/image';

export type CompanyLogo = {
  src: string;
  alt: string;
  href?: string;
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
        'companies-section py-16',
        'scroll-mt-[var(--spacing-12)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto max-w-[1360px] px-6">
        <p className="companies-title type-body-small text-center">
          {title}
        </p>

        <div className="mt-10 companies-logos">
          {logos.map((logo) => {
            const image = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={60}
                className="company-logo"
              />
            );

            if (!logo.href) {
              return (
                <div key={logo.alt} className="hover:company-logo-hover">
                  {image}
                </div>
              );
            }

            return (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="hover:company-logo-hover"
              >
                {image}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;