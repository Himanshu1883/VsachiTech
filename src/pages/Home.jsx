import HomeHero from '../components/hero/HomeHero';
import AiServicesSection from '../components/ui/AiServicesSection';
import CTASection from '../components/ui/CTASection';
import HoverSection from '../components/ui/HoverSection';
import ImageText from '../components/ui/ImageText';
import MovingTextSection from '../components/ui/MovingTextSection';
import TechnologyStackSection from '../components/ui/TechnologyStackSection';
import TwoWingsSection from '../components/ui/TwoWingsSection';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import WhyUsSection from '../components/ui/WhyUsSection';
import useSEO from '../components/hooks/useSEO';
import FAQ from '../components/ui/FAQ';
export default function Home() {
  useSEO({
    title: "Software Development Company in India | Vsachi Tech",
    description:
      "Vsachi Tech is a software development company in India offering web development, automation, AI solutions, and dedicated developers for modern businesses.",
    canonical: "https://vsachitech.com/"
  });
  return (
    <div className="bg-white">
      <h1 className="sr-only">
        Software Development Company in India
      </h1>
      <HomeHero />
      <TwoWingsSection />
      <AiServicesSection />
      <MovingTextSection />
      <WhyChooseUs />
      <TechnologyStackSection />
      <ImageText />
      <HoverSection />
      <WhyUsSection />
      <FAQ/>
      <CTASection />
    </div>
  );
}
