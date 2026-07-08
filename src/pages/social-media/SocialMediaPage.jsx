import { useEffect, useRef } from "react";
import usePageTitle from "../../components/hooks/usePageTitle";
import { useSocialMediaScroll } from "./useSocialMediaScroll";
import SmHero from "./sections/SmHero";

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
      className="sm-page relative overflow-x-hidden bg-[#050507] text-white max-w-[100vw]"
    >
      <SmHero />
    </div>
  );
}
