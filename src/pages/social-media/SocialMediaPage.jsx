import { useRef } from "react";
import usePageTitle from "../../components/hooks/usePageTitle";
import { useSocialMediaScroll } from "./useSocialMediaScroll";
import SmFlipHero from "./sections/SmFlipHero";
import SmHero from "./sections/SmHero";
import SmWorkScroll from "./sections/SmWorkScroll";
import SmZoomReveal from "./sections/SmZoomReveal";
import SmFaq from "./sections/SmFaq";

export default function SocialMediaPage() {
  const rootRef = useRef(null);

  usePageTitle("Social Media");
  useSocialMediaScroll(rootRef);

  return (
    <div
      ref={rootRef}
      className="sm-page relative max-w-[100vw] overflow-x-hidden bg-[#eaeaea] text-[#503717]"
    >
      <SmFlipHero />
      {/* <SmHero /> */}
      <SmWorkScroll />
      <SmZoomReveal />
      <SmFaq />
    </div>
  );
}
