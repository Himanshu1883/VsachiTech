import { useCallback, useEffect, useRef, useState } from "react";
import { FiPause, FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";
import Logo from "../../../components/ui/logo";
import { BRAND, SM_HERO } from "../socialMediaData";

function SideTag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-black/8 bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2a3140] shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}

function StatCard({ value, label, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-black/8 bg-white/75 px-4 py-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md ${className}`}
    >
      <p className="text-[22px] font-black tracking-[-0.03em] text-[#0c121c]">
        {value}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#6b7280]">
        {label}
      </p>
    </div>
  );
}

function ServiceRow({ label, body, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-black/8 bg-white/70 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-md ${className}`}
    >
      <p className="text-[12px] font-bold tracking-[-0.01em] text-[#0c121c]">
        {label}
      </p>
      <p className="mt-1 text-[11px] leading-relaxed text-[#6b7280]">{body}</p>
    </div>
  );
}

function HighlightCard({ label, body, className = "", align = "left" }) {
  return (
    <div
      className={`max-w-[240px] rounded-2xl border border-black/8 bg-white/80 px-5 py-4 shadow-[0_12px_36px_rgba(15,23,42,0.08)] backdrop-blur-md ${className}`}
    >
      <p
        className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
          align === "right" ? "text-right" : ""
        }`}
        style={{ color: BRAND }}
      >
        {label}
      </p>
      <p
        className={`mt-2 text-[13px] leading-relaxed text-[#4b5563] ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export default function SmHero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const syncPlayingState = useCallback(() => {
    const video = videoRef.current;
    setIsPlaying(Boolean(video && !video.paused));
  }, []);

  const playWithAudio = useCallback(async () => {
    const video = videoRef.current;
    if (!video || userPausedRef.current) return;

    video.muted = isMuted;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      if (!isMuted) {
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      } else {
        setIsPlaying(false);
      }
    }
  }, [isMuted]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onReveal = (event) => {
      const { revealed, progress } = event.detail;
      const video = videoRef.current;
      if (!video) return;

      setShowControls(revealed);

      if (revealed) {
        if (!userPausedRef.current && video.paused) {
          playWithAudio();
        }
        return;
      }

      video.pause();
      setIsPlaying(false);

      if (progress < 0.3) {
        video.currentTime = 0;
      }
    };

    section.addEventListener("sm-hero-video-reveal", onReveal);
    return () => section.removeEventListener("sm-hero-video-reveal", onReveal);
  }, [playWithAudio]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      video.muted = isMuted;
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      userPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted && video.paused && showControls && !userPausedRef.current) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="sm-hero relative z-30 -mt-6 overflow-x-hidden rounded-t-[2.75rem] rounded-b-[2.75rem] bg-[#f4f1ec] md:-mt-8 md:rounded-t-[3.5rem] md:rounded-b-[3.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={SM_HERO.backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_35%] opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,241,236,0.88)_0%,rgba(244,241,236,0.72)_42%,rgba(244,241,236,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(228,79,57,0.14),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_100%,rgba(228,79,57,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.55),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(12,18,28,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="sm-hero-pin relative mx-auto flex h-[100svh] max-h-[100svh] w-full max-w-[100vw] flex-col overflow-hidden px-4 pb-20 pt-[96px] sm:px-6 sm:pb-24 sm:pt-[104px] md:pb-28 md:pt-[112px]">
        <header className="sm-hero-header relative z-20 mx-auto mb-2 max-w-3xl shrink-0 text-center sm:mb-3 md:mb-4">
          <p
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.32em] sm:mb-2.5"
            style={{ color: BRAND }}
          >
            {SM_HERO.eyebrow}
          </p>
          <h1 className="text-[22px] font-black leading-[1.08] tracking-[-0.03em] text-[#0c121c] sm:text-[28px] md:text-[34px] lg:text-[38px]">
            {SM_HERO.titleBefore}{" "}
            <span className="font-bold" style={{ color: BRAND }}>
              {SM_HERO.titleAccent}
            </span>
          </h1>
          <p className="sm-hero-subtitle mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-[#5b6472] sm:mt-2.5 sm:text-sm">
            {SM_HERO.subtitle}
          </p>
        </header>

        <div className="sm-hero-stage relative z-10 mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 items-center justify-center">
          <div className="sm-hero-flank-left pointer-events-none absolute left-0 top-1/2 hidden w-[min(24vw,280px)] -translate-y-1/2 flex-col gap-4 xl:flex">
            <div
              className="sm-hero-watermark-left absolute -left-1 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <p
                className="text-[64px] font-black uppercase leading-none tracking-[-0.06em] text-[#0c121c]/[0.045] xl:text-[78px]"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {SM_HERO.sideLeft.watermark}
              </p>
            </div>

            <div className="relative z-10 pl-1">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.24em]"
                style={{ color: BRAND }}
              >
                {SM_HERO.sideLeft.eyebrow}
              </p>
              <h2 className="mt-2 max-w-[220px] text-[20px] font-black leading-[1.1] tracking-[-0.03em] text-[#0c121c]">
                {SM_HERO.sideLeft.title}
              </h2>
              <p className="mt-2 max-w-[230px] text-[12px] leading-relaxed text-[#667085]">
                {SM_HERO.sideLeft.body}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 pl-1">
              {SM_HERO.sideLeft.tags.map((tag, index) => (
                <SideTag
                  key={tag}
                  className={`sm-hero-side-tag sm-hero-side-tag-left-${index}`}
                >
                  {tag}
                </SideTag>
              ))}
            </div>

            <div className="relative z-10 flex flex-col gap-2.5 pl-1">
              {SM_HERO.sideLeft.services.map((service) => (
                <ServiceRow
                  key={service.label}
                  label={service.label}
                  body={service.body}
                  className="sm-hero-side-service"
                />
              ))}
            </div>

            <HighlightCard
              label={SM_HERO.sideLeft.highlight.label}
              body={SM_HERO.sideLeft.highlight.body}
              className="sm-hero-side-highlight relative z-10 mt-1"
            />
          </div>

          <div className="sm-hero-flank-right pointer-events-none absolute right-0 top-1/2 hidden w-[min(24vw,290px)] -translate-y-1/2 flex-col items-end gap-3.5 xl:flex">
            <div
              className="sm-hero-watermark-right absolute -right-1 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <p
                className="text-[64px] font-black uppercase leading-none tracking-[-0.06em] text-[#0c121c]/[0.045] xl:text-[78px]"
                style={{ writingMode: "vertical-rl" }}
              >
                {SM_HERO.sideRight.watermark}
              </p>
            </div>

            <div className="relative z-10 max-w-[240px] text-right">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.24em]"
                style={{ color: BRAND }}
              >
                {SM_HERO.sideRight.eyebrow}
              </p>
              <h2 className="mt-2 text-[20px] font-black leading-[1.1] tracking-[-0.03em] text-[#0c121c]">
                {SM_HERO.sideRight.title}
              </h2>
              <p className="mt-2 text-[12px] leading-relaxed text-[#667085]">
                {SM_HERO.sideRight.body}
              </p>
            </div>

            <div className="relative z-10 grid w-full max-w-[250px] grid-cols-2 gap-2.5">
              {SM_HERO.sideRight.stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  className={`sm-hero-side-stat sm-hero-side-stat-right-${index}`}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-wrap justify-end gap-2">
              {SM_HERO.sideRight.platforms.map((platform) => (
                <SideTag key={platform} className="sm-hero-side-platform">
                  {platform}
                </SideTag>
              ))}
            </div>

            <HighlightCard
              label={SM_HERO.sideRight.highlight.label}
              body={SM_HERO.sideRight.highlight.body}
              align="right"
              className="sm-hero-side-highlight relative z-10 mt-1"
            />
          </div>

          <div
            className="sm-hero-perspective relative mx-auto mb-6 w-full max-w-[520px] pb-[4vh] sm:mb-8 md:mb-10"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 100%",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="sm-hero-screen relative mx-auto w-[min(58vw,340px)] will-change-transform sm:w-[min(52vw,360px)] md:w-[min(48vw,380px)]">
              <div className="rounded-[28px] border border-black/8 bg-white/85 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:rounded-[34px] sm:p-4">
                <div className="relative overflow-hidden rounded-[20px] border border-black/6 bg-[#0a0a0f] sm:rounded-[24px]">
                  <img
                    className="sm-hero-poster absolute inset-0 h-full w-full object-contain"
                    src={SM_HERO.poster}
                    alt=""
                    aria-hidden="true"
                  />

                  <video
                    ref={videoRef}
                    className="sm-hero-video absolute inset-0 h-full w-full object-contain opacity-0"
                    src={SM_HERO.video}
                    poster={SM_HERO.poster}
                    playsInline
                    loop
                    preload="metadata"
                    onPlay={syncPlayingState}
                    onPause={syncPlayingState}
                  />

                  <div
                    className="sm-hero-grid pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  <div className="sm-hero-video-shade pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

                  <div className="relative aspect-[9/16] w-full" />

                  <div className="sm-hero-screen-copy pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center sm:px-10">
                    <p className="max-w-[18rem] text-[22px] font-black leading-[1.08] tracking-[-0.03em] text-white sm:max-w-xs sm:text-[28px] md:text-[32px]">
                      {SM_HERO.screen.line1}{" "}
                      <span className="font-bold" style={{ color: BRAND }}>
                        {SM_HERO.screen.accent1}
                      </span>{" "}
                      {SM_HERO.screen.line2}{" "}
                      <span className="font-bold" style={{ color: BRAND }}>
                        {SM_HERO.screen.accent2}
                      </span>
                      {SM_HERO.screen.line3}
                    </p>
                  </div>

                  <div
                    className={`sm-hero-video-controls absolute bottom-5 left-5 z-20 flex items-center gap-2 transition-all duration-300 sm:bottom-6 sm:left-6 ${
                      showControls
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:border-[#e44f39]/50 hover:bg-black/70 sm:h-12 sm:w-12"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <FiPause className="h-5 w-5" />
                      ) : (
                        <FiPlay className="h-5 w-5 translate-x-[1px]" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:border-[#e44f39]/50 hover:bg-black/70 sm:h-12 sm:w-12"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <FiVolumeX className="h-5 w-5" />
                      ) : (
                        <FiVolume2 className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  <div className="pointer-events-none absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
                    <Logo className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-[18%] left-[10%] right-[10%] hidden xl:block">
            <div className="sm-hero-connector-left absolute left-0 top-[38%] h-px w-[calc(50%-250px)] bg-gradient-to-r from-transparent via-[#e44f39]/25 to-[#e44f39]/40" />
            <div className="sm-hero-connector-right absolute right-0 top-[58%] h-px w-[calc(50%-250px)] bg-gradient-to-l from-transparent via-[#e44f39]/25 to-[#e44f39]/40" />
          </div>
        </div>

        {/* Mobile / tablet side content strip */}
        <div className="relative z-10 mx-auto mt-2 w-full max-w-[520px] shrink-0 xl:hidden">
          <div className="flex flex-wrap justify-center gap-2">
            {SM_HERO.sideLeft.tags.slice(0, 4).map((tag) => (
              <SideTag key={tag}>{tag}</SideTag>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SM_HERO.sideRight.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <p className="sm-hero-scroll-hint pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.28em] text-[#6b7280] sm:bottom-10 md:bottom-12">
          Scroll to reveal
        </p>
      </div>
    </section>
  );
}
