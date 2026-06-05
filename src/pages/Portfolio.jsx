import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import useSEO from "../components/hooks/useSEO";
import { PORTFOLIO_CLIENTS } from "../data/portfolioCaseStudies";
import ProjectCaseStudy from "../components/portfolio/ProjectCaseStudy";
import PortfolioTrustBanner from "../components/portfolio/PortfolioTrustBanner";
import FeaturedInfiniteScroll from "../components/portfolio/FeaturedInfiniteScroll";

const BRAND = "#de6b58";

function Portfolio() {
  const [activeClientId, setActiveClientId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useSEO({
    title: "Our Work & Client Projects | Vsachi Tech",
    description:
      "Explore Vsachi Tech client websites — bespoke tailoring, wholesale zari, designer blouses, and luxury portfolios built with modern UI/UX and full-stack engineering.",
    canonical: "https://vsachitech.com/our-work",
  });

  const selectedClient = useMemo(
    () => PORTFOLIO_CLIENTS.find((client) => client.id === activeClientId) || null,
    [activeClientId],
  );

  const openClientModal = (clientId, imageIndex = 0) => {
    setActiveClientId(clientId);
    setActiveImageIndex(imageIndex);
  };

  const closeModal = () => {
    setActiveClientId(null);
    setActiveImageIndex(0);
  };

  const goPrev = () => {
    if (!selectedClient) return;
    const total = selectedClient.images.length;
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    if (!selectedClient) return;
    const total = selectedClient.images.length;
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative bg-[#0b0b0b] text-white min-h-screen overflow-x-hidden max-w-[100vw]">
      {/* ambient */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-260px] top-[20%] w-[520px] h-[520px] rounded-full blur-[150px]"
        style={{ background: `${BRAND}14` }}
        animate={{ x: [0, 18, 0], y: [0, -28, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-260px] top-[52%] w-[520px] h-[520px] rounded-full blur-[160px]"
        style={{ background: `${BRAND}10` }}
        animate={{ x: [0, -18, 0], y: [0, 28, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* trust banner */}
      <PortfolioTrustBanner />

      {/* quick overview */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-14 px-2 sm:px-3 overflow-x-hidden">
        <div className="w-full max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-gray-300/75 leading-[1.9] text-sm sm:text-base">
                Preview each build, open full-screen galleries, and read how we
                solved business problems with UI/UX and engineering.
              </p>

              <nav
                className="mt-8 flex flex-wrap gap-2"
                aria-label="Jump to project details"
              >
                {PORTFOLIO_CLIENTS.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/15 text-gray-300 hover:border-[#de6b58]/60 hover:text-white transition"
                  >
                    {c.name.split(" ")[0]}
                  </a>
                ))}
              </nav>
            </div>

            {/* <div className="lg:col-span-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-gray-300/70">
                  Quick stats
                </p>
                <div className="mt-5 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#de6b58]">
                      {PORTFOLIO_CLIENTS.reduce(
                        (count, client) => count + client.images.length,
                        0,
                      )}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-300/70">
                      Screens
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#de6b58]">
                      {PORTFOLIO_CLIENTS.length}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-300/70">
                      Clients
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#de6b58]">
                      4
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-300/70">
                      Case studies
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#de6b58] text-black font-semibold hover:brightness-110 transition"
                  >
                    Start a project
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 text-white hover:border-[#de6b58]/70 hover:text-[#de6b58] transition"
                  >
                    View services
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* featured infinite scroll */}
      <FeaturedInfiniteScroll
        projects={PORTFOLIO_CLIENTS}
        onOpenGallery={openClientModal}
      />

      

      {/* Case studies */}
      <section id="case-studies" className="pb-24 px-2 sm:px-3">
        <div className="w-full max-w-[100rem] mx-auto">
          <div className="mb-10 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.28em] text-[#de6b58] mb-3">
              ( PROJECT DETAILS )
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.04em]">
              How we built each product
            </h2>
            <p className="mt-4 max-w-3xl text-gray-300/80 leading-[1.85] text-sm sm:text-base">
              Challenge, solution, functionality, UI/UX decisions, and the tech
              behind every delivery — the way leading product teams document client
              work.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            {PORTFOLIO_CLIENTS.map((project, i) => (
              <ProjectCaseStudy
                key={project.id}
                project={project}
                reverse={i % 2 === 1}
                onOpenGallery={openClientModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-2 sm:px-3">
        <div className="w-full max-w-[100rem] mx-auto">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-10 sm:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gray-200/70">
                  Want a site like this?
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.04em]">
                  Let’s build a website your customers trust.
                </h2>
                <p className="mt-4 text-gray-200/70 leading-[1.8] max-w-2xl">
                  We combine UI/UX design with modern development to create fast,
                  premium experiences for real businesses.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 bg-[#de6b58] text-black font-semibold hover:brightness-110 transition"
                >
                  Start project
                </Link>
                <Link
                  to="/what-we-do/web-development"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 border border-white/20 text-white hover:border-[#de6b58]/70 hover:text-[#de6b58] transition"
                >
                  Web development
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* lightbox */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close preview"
            />

            <div className="relative mx-auto max-w-6xl w-[92vw] sm:w-[90vw] top-[6vh]">
              <motion.div
                className="rounded-[28px] overflow-hidden border border-white/15 bg-[#0b0b0b]"
                initial={{ y: 18, scale: 0.98, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 18, scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#de6b58]">
                      {selectedClient.name}
                    </p>
                    <p className="text-sm text-gray-200/70">
                      {selectedClient.type} • {activeImageIndex + 1}/
                      {selectedClient.images.length}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="px-3 py-2 rounded-full border border-white/15 text-white/90 hover:border-[#de6b58]/60 hover:text-white transition"
                      aria-label="Previous"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="px-3 py-2 rounded-full border border-white/15 text-white/90 hover:border-[#de6b58]/60 hover:text-white transition"
                      aria-label="Next"
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-3 py-2 rounded-full border border-white/15 text-white/90 hover:border-[#de6b58]/60 hover:text-white transition"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="relative max-h-[76vh] overflow-auto">
                  <img
                    src={selectedClient.images[activeImageIndex]}
                    alt={`${selectedClient.name} website screenshot ${activeImageIndex + 1}`}
                    className="w-full h-auto"
                  />
                </div>

                <div className="px-4 sm:px-6 py-4 border-t border-white/10">
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {selectedClient.images.map((img, idx) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`shrink-0 rounded-xl overflow-hidden border transition ${
                          idx === activeImageIndex
                            ? "border-[#de6b58] opacity-100"
                            : "border-white/15 opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`Open screenshot ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${selectedClient.name} thumbnail ${idx + 1}`}
                          className="w-24 h-16 sm:w-28 sm:h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
