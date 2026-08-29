'use client';

import { useTranslations } from 'next-intl';
import { CompanyLogos } from '@/components/companies/company-logos';

// Strongest names first: these carry the most trust in the least time.
const COMPANIES = [
  { src: '/logos/clients/microsoft.png', alt: 'Microsoft' },
  { src: '/logos/clients/autodesk.png', alt: 'Autodesk' },
  // Round mark: needs extra height to look the same size as the wordmarks.
  { src: '/logos/clients/bit.png', alt: 'Bit', heightClass: 'h-12 sm:h-14 lg:h-16' },
  { src: '/logos/clients/method-queen.png', alt: 'Method Queen', heightClass: 'h-11 sm:h-12 lg:h-14' },
  { src: '/logos/clients/financial-cat-he.png', alt: 'Financial Cat' },
];

export default function HomeCompanyLogos() {
  const t = useTranslations('home.companies');

  return <CompanyLogos title={t('title')} logos={COMPANIES} />;
}
