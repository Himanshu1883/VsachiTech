import { useRef } from "react";
import usePageTitle from "../../components/hooks/usePageTitle";
import { useDigitalEngagementScroll } from "./useDigitalEngagementScroll";
import DeHero from "./sections/DeHero";
import DeMarquee from "./sections/DeMarquee";
import DeWhySection from "./sections/DeWhySection";
import DeProcess from "./sections/DeProcess";
import DeStats from "./sections/DeStats";
import DeEngine from "./sections/DeEngine";
import DeCta from "./sections/DeCta";

export default function DigitalEngagementPage() {
  const rootRef = useRef(null);

  usePageTitle("Digital Engagement");
  useDigitalEngagementScroll(rootRef);

  return (
    <div
      ref={rootRef}
      className="de-page bg-[#f4f3f1] text-black overflow-x-hidden max-w-[100vw]"
    >
      <DeHero />
      <DeMarquee />
      <DeWhySection />
      <DeStats />
      <DeEngine />
      <DeProcess />
      <DeCta />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&display=swap');
        .de-serif {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}
