/** Shared social media client data — portfolio drawer */

export const SOCIAL_CATEGORIES = [
  "All",
  "Fashion",
  "Beauty",
  "Fitness",
  "Wellness",
  "Events",
  "Lifestyle",
  "Real Estate",
];

export const SOCIAL_MEDIA_CLIENTS_RAW = [
  {
    id: "royal-touch",
    logoKey: "royal-touch",
    name: "Royal Touch",
    niche: "Luxury Fashion",
    specialty: "Branding",
    category: "Fashion",
    image: "/portfolio/royal_touch.jpeg",
  },
  {
    id: "sitaravastram",
    logoKey: "sitaravastram",
    name: "Sitaravastram",
    niche: "Ethnic Wear",
    specialty: "Reels",
    category: "Fashion",
    image: "/portfolio/sitaravastram.svg",
  },
  {
    id: "kaur-studio",
    logoKey: "kaur-studio",
    name: "Kaur Studio",
    niche: "Bridal Artistry",
    specialty: "Growth",
    category: "Beauty",
    image: "/portfolio/kaur_studio.PNG",
  },
  {
    id: "k-makeup",
    logoKey: "k-makeup",
    name: "K Makeup Studio",
    niche: "Bridal & HD Makeup",
    specialty: "UGC",
    category: "Beauty",
    image: "/portfolio/k_makeup.png",
  },
  {
    id: "hair-guruji",
    logoKey: "hair-guruji",
    name: "Hair Guruji",
    niche: "Salon & Academy",
    specialty: "Reels",
    category: "Beauty",
    image: "/portfolio/HAIR GURU JI 4.png",
  },
  {
    id: "swim-n-gym",
    logoKey: "swim-n-gym",
    name: "Swim n Gym",
    niche: "Fitness Club",
    specialty: "Reels",
    category: "Fitness",
    image: "/portfolio/swim'n'gym.png",
  },
  {
    id: "enlightenment-yoga",
    logoKey: "enlightenment-yoga",
    name: "Enlightenment with Yoga",
    niche: "Wellness Studio",
    specialty: "Content",
    category: "Wellness",
    image: "/portfolio/enightnment with yoga.png",
  },
  {
    id: "orvella",
    logoKey: "orvella",
    name: "Orvella",
    niche: "Beauty & Skincare",
    specialty: "Ads",
    category: "Beauty",
    image: "/portfolio/orvella.jpeg",
  },
  {
    id: "kiza-designer-studio",
    logoKey: "kiza-designer-studio",
    name: "Kiza Designer Studio",
    niche: "Designer Studio",
    specialty: "Reels",
    category: "Fashion",
    image: "/portfolio/kiza_designer_studio.png",
  },
  {
    id: "ayesha-salon",
    logoKey: "ayesha-salon",
    name: "Ayesha Salon Makeup Studio",
    niche: "Salon & Makeup",
    specialty: "UGC",
    category: "Beauty",
    image: "/portfolio/ayesha_salon_makeup_studio.svg",
  },
  {
    id: "karan-bella-ciao",
    logoKey: "karan-bella-ciao",
    name: "Karan Bella Ciao",
    niche: "Salon & Grooming",
    specialty: "Growth",
    category: "Lifestyle",
    image: "/portfolio/karan_bella_ciao.jpeg",
  },
  {
    id: "beyond-the-salon",
    logoKey: "beyond-the-salon",
    name: "Beyond The Salon",
    niche: "Premium Salon",
    specialty: "Reels",
    category: "Beauty",
    image: "/portfolio/beyond_thesalon.svg",
  },
  {
    id: "easy-homes-infra",
    logoKey: "easy-homes-infra",
    name: "Easy Homes Infra",
    niche: "Developers & Planners",
    specialty: "Branding",
    category: "Real Estate",
    image: "/portfolio/easy homes infra logo (1).png",
  },
];

/** Real social handles — same username on Instagram, Facebook, and YouTube */
export const SOCIAL_PROFILE_HANDLES = {
  "royal-touch": "royaltouch_weddingstudio",
  sitaravastram: "sitaravastram",
  "kiza-designer-studio": "kiza_designer_studio",
  "ayesha-salon": "ayesha_salon_makeup_studio",
  "karan-bella-ciao": "karan_bella_ciao",
  "beyond-the-salon": "beyond_thesalon",
  "kaur-studio": "kaur_studio_",
};

/** Unique brands only (dedupe shared logoKey placeholders). */
export const UNIQUE_SOCIAL_CLIENTS = SOCIAL_MEDIA_CLIENTS_RAW.filter(
  (client, index, list) =>
    list.findIndex((item) => item.logoKey === client.logoKey) === index,
);

/** Per-logo circle treatment — used by portfolio drawer + home marquee. */
export const SOCIAL_LOGO_DISPLAY = {
  "royal-touch": {
    bg: "#ffffff",
    imgClass: "object-contain object-center p-[9%]",
  },
  sitaravastram: {
    bg: "#000000",
    imgClass: "object-contain object-center",
  },
  "kaur-studio": {
    bg: "#ffffff",
    imgClass: "object-contain object-center scale-[1.4]",
  },
  "k-makeup": {
    bg: "#000000",
    imgClass: "object-contain object-center p-[10%]",
  },
  "hair-guruji": {
    bg: "#ffffff",
    imgClass: "object-contain object-center p-[12%]",
  },
  "easy-homes-infra": {
    bg: "#0b1f3a",
    imgClass: "object-cover object-center scale-[1.08]",
  },
  "kiza-designer-studio": {
    bg: "#000000",
    imgClass: "object-contain object-center p-1",
  },
  "ayesha-salon": {
    bg: "#000000",
    imgClass: "object-contain object-center p-1",
  },
  "karan-bella-ciao": {
    bg: "#000000",
    imgClass: "object-contain object-center p-1",
  },
  "beyond-the-salon": {
    bg: "#000000",
    imgClass: "object-contain object-center",
  },
  orvella: {
    bg: "#0a0a0a",
    imgClass: "object-contain object-center p-1",
  },
  "swim-n-gym": {
    bg: "#0a0a0a",
    imgClass: "object-contain object-center scale-[1.4]",
  },
  "enlightenment-yoga": {
    bg: "#000000",
    imgClass: "object-contain object-center scale-[1.15]",
  },
};

export function getSocialLogoDisplay(logoKey) {
  return (
    SOCIAL_LOGO_DISPLAY[logoKey] ?? {
      bg: "#0a0a0a",
      imgClass: "object-contain object-center p-1",
    }
  );
}

export function portfolioImageSrc(path) {
  if (!path?.startsWith("/portfolio/")) return path;
  const file = path.slice("/portfolio/".length);
  return `/portfolio/${encodeURIComponent(file)}`;
}
