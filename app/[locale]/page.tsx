import { HomeHero } from '@/sections/home/hero';
import { HomeEntryPoints } from '@/sections/home/entry-points';
import HomeServicesAccordion from '@/sections/home/services-accordion';
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
      <HomeHowIWork />
      <HomeProjects />
      <Testimonials />
      <HomeAbout />
      <HomeFinalCta />
    </>
  );
}
