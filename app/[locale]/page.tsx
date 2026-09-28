import { HomeHero } from '@/sections/home/hero';
import { HomeEntryPoints } from '@/sections/home/entry-points';
import HomeServicesAccordion from '@/sections/home/services-accordion';
import { HomeServicesStacked } from '@/sections/home/services-stacked';
import { HomeMiniProduct } from '@/sections/home/mini-product';
import { HomeHowIWork } from '@/sections/home/how-i-work';
import HomeProjects from '@/sections/home/projects';
import Testimonials from '@/sections/home/testimonials';
import { HomeAbout } from '@/sections/home/about';
import { HomeFaq } from '@/sections/home/faq';
import { HomeFinalCta } from '@/sections/home/final-cta';
import { WhatsAppFloat } from '@/components/whatsapp-float';

export default function Home() {
  return (
    <>
      {/* The hero carries the promise, the logo row and the sketch board */}
      <HomeHero />
      {/* Work straight after the hero: proof before any explaining */}
      <HomeProjects />
      <HomeEntryPoints />
      <HomeServicesAccordion />
      <Testimonials />
      <HomeAbout />
      <HomeMiniProduct />
      <HomeFaq />
      <HomeFinalCta />
      <WhatsAppFloat />
      {/* Hidden, kept for future use */}
      <div className="hidden">
        <HomeServicesStacked />
        <HomeHowIWork />
      </div>
    </>
  );
}
