import { HomeHero } from '@/sections/home/hero';
import { HomeEntryPoints } from '@/sections/home/entry-points';
import HomeServicesAccordion from '@/sections/home/services-accordion';
import { HomeServicesStacked } from '@/sections/home/services-stacked';
import { HomeMiniProduct } from '@/sections/home/mini-product';
import { HomeHowIWork } from '@/sections/home/how-i-work';
import HomeProjects from '@/sections/home/projects';
import Testimonials from '@/sections/home/testimonials';
import { HomeAbout } from '@/sections/home/about';
import { HomeFinalCta } from '@/sections/home/final-cta';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeEntryPoints />
      <HomeServicesAccordion />
      <HomeMiniProduct />
      <HomeProjects />
      <Testimonials />
      <HomeAbout />
      <HomeFinalCta />
      {/* Hidden — kept for future use */}
      <div className="hidden">
        <HomeServicesStacked />
        <HomeHowIWork />
      </div>
    </>
  );
}
