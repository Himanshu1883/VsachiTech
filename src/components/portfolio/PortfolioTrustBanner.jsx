import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PORTFOLIO_CLIENTS } from "../../data/portfolioCaseStudies";

export default function PortfolioTrustBanner() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 px-2 sm:px-3 mb-8 sm:mb-12 lg:mb-16 border-b border-white/[0.08] overflow-x-hidden">
      <div className="w-full max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-end">
          {/* Headline */}
          <motion.div
            className="lg:col-span-7 xl:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.35em] text-[11px] sm:text-xs text-[#de6b58] mb-6 sm:mb-8">
              ( OUR WORK )
            </p>
            <h1 className="font-black leading-[0.95] tracking-[-0.04em] text-[38px] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px] text-white">
              Trusted by brands
              <span className="block sm:inline sm:ml-3">
                building{" "}
                <span
                  className="portfolio-banner-script inline-block text-[#de6b58] font-normal tracking-normal translate-y-1 sm:translate-y-2"
                  style={{ fontSize: "1.15em" }}
                >
                  online
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Supporting copy */}
          <motion.div
            className="lg:col-span-5 xl:col-span-4 lg:pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-[15px] text-gray-400/90 leading-[1.85] max-w-md lg:max-w-none lg:text-right">
              From luxury makeup portfolios to full-stack ecommerce — we design
              and ship premium digital products with clear communication,
              responsive delivery, and a focus on real business outcomes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-[#de6b58] text-black hover:brightness-110 transition"
              >
                Start a project
              </Link>
              <a
                href="#silver-stitch"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-white/20 text-white hover:border-[#de6b58]/60 hover:text-[#de6b58] transition"
              >
                View case studies
              </a>
            </div>
          </motion.div>
        </div>

        {/* Client wordmarks */}
        <motion.div
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 sm:mb-8">
            Featured client work
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 sm:gap-y-6 items-center">
            {PORTFOLIO_CLIENTS.map((client) => (
              <li key={client.id}>
                <a
                  href={`#${client.id}`}
                  className="group block text-center sm:text-left"
                >
                  <span className="block text-base sm:text-lg md:text-xl font-bold tracking-[-0.02em] text-white/35 group-hover:text-white/70 transition-colors duration-300">
                    {client.name}
                  </span>
                  <span className="mt-1 block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gray-600 group-hover:text-[#de6b58]/80 transition-colors">
                    {client.type.split(" ").slice(0, 2).join(" ")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .portfolio-banner-script {
          font-family: 'Great Vibes', cursive;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
}




