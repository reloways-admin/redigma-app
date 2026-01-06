import { HomeHero } from '@/sections/home/hero';
import { HomeEntryPoints } from '@/sections/home/entry-points';
import { HomeMiniProduct } from '@/sections/home/mini-product';
import HomeStrategicPartnership from '@/sections/home/strategy-partnership';
import HomeMVPExecution from '@/sections/home/mvp-execution';
import { HomeHowIWork } from '@/sections/home/how-i-work';
import { HomeWhoIsThisFor } from '@/sections/home/Who-is-this-for';
import HomeProjects from '@/sections/home/projects';
import Testimonials from '@/sections/home/testimonials';
import { HomeAbout } from '@/sections/home/about';
import { HomeFinalCta } from '@/sections/home/final-cta';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeEntryPoints />
      <HomeMiniProduct />
      <HomeStrategicPartnership />
      <HomeMVPExecution />
      <HomeHowIWork />
      <HomeWhoIsThisFor />
      <HomeProjects />
      <Testimonials />
      <HomeAbout />
      <HomeFinalCta />
    </>
  );
}