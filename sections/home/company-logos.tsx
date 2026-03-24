'use client';

import { CompanyLogos } from '@/components/companies/company-logos';

const COMPANIES = [
  {
    src: '/logos/reloways.svg',
    alt: 'Reloways',
    href: 'https://reloways.com',
  },
  {
    src: '/logos/fincat.svg',
    alt: 'Fincat',
  },
  {
    src: '/logos/table.svg',
    alt: 'Table',
  },
];

export default function HomeCompanyLogos() {
  return (
    <CompanyLogos
      title="Companies and products I worked with"
      logos={COMPANIES}
    />
  );
}
