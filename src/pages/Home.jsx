
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
import usePageTitle from '../components/hooks/usePageTitle';

export default function Home() {
      usePageTitle(
    "Smart Digital Solutions for Modern Businesses In Delhi"
  );
    return (
        <div className='bg-white'>
            <HomeHero />
            <TwoWingsSection/>
            <AiServicesSection />
            <MovingTextSection />
            <WhyChooseUs/>
            <TechnologyStackSection/>
            <ImageText/>
            <HoverSection />
            <WhyUsSection/>
            <CTASection/>
        </div>
    );
}