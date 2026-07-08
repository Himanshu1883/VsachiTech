import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  UNIQUE_SOCIAL_CLIENTS,
  getSocialLogoDisplay,
  portfolioImageSrc,
} from "../../data/socialMediaClients";

const ROW_ONE_COUNT = 6;
const ROW_TWO_COUNT = 6;

function ClientOrb({ client }) {
  const logo = getSocialLogoDisplay(client.logoKey);
  const imageSrc = portfolioImageSrc(client.image);

  return (
    <div className="home-social-item inline-flex shrink-0 items-center">
      <article className="group/orb flex w-[128px] flex-col items-center gap-3 sm:w-[142px] md:w-[152px]">
        <div
          className="relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full border border-white/12 shadow-[0_14px_36px_rgba(0,0,0,0.4)] transition-all duration-400 group-hover/orb:-translate-y-1 group-hover/orb:border-[#e44f39]/70 group-hover/orb:shadow-[0_0_0_1px_rgba(228,79,57,0.4),0_18px_48px_rgba(228,79,57,0.25)] sm:h-[132px] sm:w-[132px] md:h-[148px] md:w-[148px]"
          style={{ backgroundColor: logo.bg }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-400 group-hover/orb:opacity-100"
            style={{
              background:
                "radial-gradient(circle at 50% 20%, rgba(228,79,57,0.18), transparent 62%)",
            }}
            aria-hidden
          />
          <img
            src={imageSrc}
            alt={client.name}
            className={`relative z-10 h-full w-full ${logo.imgClass}`}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>

        <div className="w-full px-1 text-center">
          <p className="line-clamp-2 text-[12px] font-semibold leading-tight tracking-[-0.01em] text-white/90 transition-colors duration-300 group-hover/orb:text-[#ff6b55] sm:text-[13px]">
            {client.name}
          </p>
          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-gray-500 transition-colors duration-300 group-hover/orb:text-gray-400 sm:text-[10px]">
            {client.category}
          </p>
        </div>
      </article>

      <span
        className="mx-4 h-20 w-px shrink-0 bg-gradient-to-b from-transparent via-white/18 to-transparent sm:mx-5 sm:h-24 md:mx-6"
        aria-hidden
      />
    </div>
  );
}

function MarqueeRow({
  clients,
  direction = "forward",
  speed = 36,
  centered = false,
}) {
  const loop = useMemo(() => [...clients, ...clients], [clients]);

  return (
    <div
      className={`home-social-marquee group relative overflow-hidden ${
        centered
          ? "mx-auto w-[min(98vw,1180px)]"
          : "w-full"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-20 bg-gradient-to-r from-[#07070b] via-[#07070b]/90 to-transparent ${
          centered ? "w-10 sm:w-14 md:w-20" : "w-14 sm:w-20 md:w-28"
        }`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-20 bg-gradient-to-l from-[#07070b] via-[#07070b]/90 to-transparent ${
          centered ? "w-10 sm:w-14 md:w-20" : "w-14 sm:w-20 md:w-28"
        }`}
        aria-hidden
      />

      <div
        className="home-social-track inline-flex min-w-max items-center will-change-transform group-hover:[animation-play-state:paused]"
        data-direction={direction}
        style={{ "--marquee-duration": `${speed}s` }}
      >
        {loop.map((client, index) => (
          <ClientOrb key={`${client.id}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );
}

export default function HomeSocialClientsMarquee() {
  const { rowOne, rowTwo, total } = useMemo(() => {
    const pool = UNIQUE_SOCIAL_CLIENTS;
    const first = pool.slice(0, ROW_ONE_COUNT);

    // Prefer brands not on row one; if pool is short, fill from the rest so row stays at 6 unique.
    const preferred = pool.filter(
      (client) => !first.some((item) => item.logoKey === client.logoKey),
    );
    const fillers = pool.filter(
      (client) => !preferred.some((item) => item.logoKey === client.logoKey),
    );
    const second = [...preferred, ...fillers].slice(0, ROW_TWO_COUNT);

    return {
      rowOne: first,
      rowTwo: second,
      total: new Set([...first, ...second].map((c) => c.logoKey)).size,
    };
  }, []);

  return (
    <section className="home-social-section relative overflow-hidden bg-[#07070b] py-16 md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(228,79,57,0.12), transparent 34%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04), transparent 36%), radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 26px 26px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e44f39]/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="home-container home-gutter relative z-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e44f39]">
              Brand Partners
            </p>
            <h2 className="mt-3 text-[28px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[36px] md:text-[42px]">
              Brands we grow on
              <span className="block text-[#e44f39]">social.</span>
            </h2>
            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-gray-400 sm:text-[14px]">
              Featured partners we scale with cinematic content, systems, and
              audience momentum.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-300 tabular-nums">
              {total} featured brands
            </span>
            <Link
              to="/digital-engagement"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold text-white/80 transition-colors hover:text-[#e44f39]"
            >
              Explore digital engagement
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-8 md:space-y-10">
        <MarqueeRow clients={rowOne} direction="forward" speed={36} />
        <MarqueeRow
          clients={rowTwo}
          direction="reverse"
          speed={30}
          centered
        />
      </div>

      <style>{`
        .home-social-track {
          display: inline-flex;
          width: max-content;
        }

        .home-social-track[data-direction="forward"] {
          animation: home-social-forward var(--marquee-duration, 36s) linear infinite;
        }

        .home-social-track[data-direction="reverse"] {
          animation: home-social-reverse var(--marquee-duration, 30s) linear infinite;
        }

        @keyframes home-social-forward {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes home-social-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-social-track[data-direction="forward"],
          .home-social-track[data-direction="reverse"] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
