import { useCallback, useEffect, useRef, useState } from "react";
import { FiPause, FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";
import Logo from "../../../components/ui/logo";
import { BRAND, SM_HERO } from "../socialMediaData";

function SideTag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}

function StatCard({ value, label, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm ${className}`}
    >
      <p className="text-2xl font-black tracking-[-0.03em] text-white">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
    </div>
  );
}

function HighlightCard({ label, body, className = "" }) {
  return (
    <div
      className={`max-w-[220px] rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md ${className}`}
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.24em]"
        style={{ color: BRAND }}
      >
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
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
      className="sm-hero relative z-30 overflow-x-hidden rounded-b-[2.75rem] bg-[#050507] md:rounded-b-[3.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(228,79,57,0.22),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_100%,rgba(228,79,57,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04),transparent_50%)]" />
      </div>

      <div className="sm-hero-pin relative mx-auto flex h-[100svh] max-h-[100svh] w-full max-w-[100vw] flex-col overflow-hidden px-4 pb-8 pt-[96px] sm:px-6 sm:pb-10 sm:pt-[104px] md:pt-[112px]">
        <header className="sm-hero-header relative z-10 mx-auto mb-3 max-w-4xl shrink-0 text-center sm:mb-4 md:mb-5">
          <h1 className="text-[28px] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px] md:text-[50px]">
            {SM_HERO.titleBefore}{" "}
            <span className="font-bold" style={{ color: BRAND }}>
              {SM_HERO.titleAccent}
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:mt-4 sm:text-base">
            {SM_HERO.subtitle}
          </p>
        </header>

        <div className="sm-hero-stage relative z-10 mx-auto flex min-h-0 w-full max-w-[1180px] flex-1 items-center justify-center">
          <div className="sm-hero-flank-left pointer-events-none absolute left-0 top-1/2 hidden w-[min(22vw,240px)] -translate-y-1/2 flex-col gap-5 lg:flex">
            <div
              className="sm-hero-watermark-left absolute -left-2 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <p
                className="text-[64px] font-black uppercase leading-none tracking-[-0.06em] text-white/[0.04] lg:text-[80px]"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {SM_HERO.sideLeft.watermark}
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start gap-3 pl-2">
              {SM_HERO.sideLeft.tags.map((tag, index) => (
                <SideTag
                  key={tag}
                  className={`sm-hero-side-tag sm-hero-side-tag-left-${index}`}
                >
                  {tag}
                </SideTag>
              ))}
            </div>

            <HighlightCard
              label={SM_HERO.sideLeft.highlight.label}
              body={SM_HERO.sideLeft.highlight.body}
              className="sm-hero-side-highlight relative z-10 mt-4"
            />
          </div>

          <div className="sm-hero-flank-right pointer-events-none absolute right-0 top-1/2 hidden w-[min(22vw,260px)] -translate-y-1/2 flex-col items-end gap-4 lg:flex">
            <div
              className="sm-hero-watermark-right absolute -right-2 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <p
                className="text-[64px] font-black uppercase leading-none tracking-[-0.06em] text-white/[0.04] lg:text-[80px]"
                style={{ writingMode: "vertical-rl" }}
              >
                {SM_HERO.sideRight.watermark}
              </p>
            </div>

            <div className="relative z-10 flex w-full flex-col items-end gap-3">
              {SM_HERO.sideRight.stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  className={`sm-hero-side-stat w-full max-w-[210px] sm-hero-side-stat-right-${index}`}
                />
              ))}
            </div>

            <HighlightCard
              label={SM_HERO.sideRight.highlight.label}
              body={SM_HERO.sideRight.highlight.body}
              className="sm-hero-side-highlight relative z-10 mt-2 text-right"
            />
          </div>

          <div
            className="sm-hero-perspective relative mx-auto w-full max-w-[520px] pb-[2vh]"
            style={{ perspective: "1200px", perspectiveOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          >
            <div className="sm-hero-screen relative mx-auto w-[min(68vw,400px)] will-change-transform sm:w-[min(64vw,420px)]">
              <div className="rounded-[28px] border border-white/10 bg-[#0a0a0f] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[34px] sm:p-4">
                <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-black sm:rounded-[24px]">
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
                    className="sm-hero-grid pointer-events-none absolute inset-0 opacity-35"
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

          <div className="pointer-events-none absolute inset-y-[18%] left-[12%] right-[12%] hidden lg:block">
            <div className="sm-hero-connector-left absolute left-0 top-[38%] h-px w-[calc(50%-250px)] bg-gradient-to-r from-transparent via-white/10 to-white/20" />
            <div className="sm-hero-connector-right absolute right-0 top-[58%] h-px w-[calc(50%-250px)] bg-gradient-to-l from-transparent via-white/10 to-white/20" />
          </div>
        </div>

        <p className="sm-hero-scroll-hint pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.28em] text-white/45 sm:bottom-8">
          Scroll to reveal
        </p>
      </div>
    </section>
  );
}
