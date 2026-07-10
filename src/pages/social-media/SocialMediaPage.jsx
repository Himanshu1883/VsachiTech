import { useEffect, useRef } from "react";
import usePageTitle from "../../components/hooks/usePageTitle";
import { useSocialMediaScroll } from "./useSocialMediaScroll";
import SmFlipHero from "./sections/SmFlipHero";
import SmHero from "./sections/SmHero";
import SmWorkScroll from "./sections/SmWorkScroll";
import SmFaq from "./sections/SmFaq";

export default function SocialMediaPage() {
  const rootRef = useRef(null);

  usePageTitle("Social Media");
  useSocialMediaScroll(rootRef);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      ref={rootRef}
      className="sm-page relative max-w-[100vw] overflow-x-hidden bg-[#eaeaea] text-[#503717]"
    >
      <SmFlipHero />
      {/* <SmHero /> */}
      <SmWorkScroll />
      <SmFaq />
    </div>
  );
}
