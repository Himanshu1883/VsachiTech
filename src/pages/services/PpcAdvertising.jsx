import { useState, useEffect } from "react";
import {
  FaAd,
  FaBullhorn,
  FaMoneyBillWave,
  FaChartBar,
  FaHandshake,
  FaSearch,
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaShoppingCart,
  FaMobileAlt,
  FaRocket,
  FaUsers,
  FaFilter,
  FaCheckCircle,
  FaBolt,
  FaChartLine,
  FaPercentage,
  FaPlus,
  FaMinus,
  FaLightbulb 
} from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { Link } from "react-router-dom";
import Scroll from "../../components/ui/Scroll";
import ppchero from "../../assets/ppchero.mp4"
/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const ppcPlatforms = [
  {
    name: "Google Ads",
    items: [
      { label: "Search Ads", icon: FaGoogle },
      { label: "Display Network", icon: FaAd },
      { label: "YouTube Ads", icon: FaBullhorn },
      { label: "Shopping Ads", icon: FaShoppingCart },
    ],
  },
  {
    name: "Social Media",
    items: [
      { label: "Facebook Ads", icon: FaFacebook },
      { label: "Instagram Ads", icon: FaInstagram },
      { label: "LinkedIn Ads", icon: FaLinkedin },
      { label: "TikTok Ads", icon: FaMobileAlt },
    ],
  },
  {
    name: "Advanced",
    items: [
    
      { label: "Audience Targeting", icon: FaUsers },
      { label: "Conversion Tracking", icon: FaChartBar },
      { label: "A/B Testing", icon: FaFilter },
    ],
  },
];

const process = [
  {
    icon: FaSearch,
    title: "Strategy & Research",
    description: "Audience analysis, keyword research, and goal setting.",
  },
  {
    icon: FaBullhorn,
    title: "Campaign Setup",
    description: "Platform selection, ad creation, and targeting.",
  },
  {
    icon: FaChartBar,
    title: "Launch & Optimize",
    description: "Continuous monitoring and performance optimization.",
  },
  {
    icon: FaMoneyBillWave,
    title: "ROI Maximization",
    description: "Bid adjustments and budget optimization.",
  },
  {
    icon: FaRocket,
    title: "Scale & Grow",
    description: "Expand successful campaigns and test new opportunities.",
  },
];

const services = [
  {
    icon: FaGoogle,
    title: "Google Ads",
    description: "Maximize visibility on Google Search, Display, and YouTube.",
    features: ["Search Campaigns", "Display Network", "Video Ads", "Shopping"],
  },
  {
    icon: FaFacebook,
    title: "Social Media Ads",
    description: "Target audiences on Facebook, Instagram, and LinkedIn.",
    features: ["Lead Generation", "Brand Awareness", "Traffic", "Conversions"],
  },
  {
    icon: FaMoneyBillWave,
    title: "Remarketing",
    description: "Re-engage visitors who showed interest in your brand.",
    features: ["Custom Audiences", "Dynamic Ads", "Cross-Platform", "Sequencing"],
  },
  {
    icon: FaChartBar,
    title: "Analytics & Tracking",
    description: "Complete conversion tracking and performance analysis.",
    features: ["ROI Tracking", "Funnel Analysis", "Attribution", "Reporting"],
  },
  {
    icon: FaFilter,
    title: "A/B Testing",
    description: "Systematic testing of ads, landing pages, and audiences.",
    features: ["Ad Copy Tests", "Landing Pages", "Audience Segments", "CTR Optimization"],
  },
  {
    icon: FaMoneyBillWave,
    title: "ROI Optimization",
    description: "Maximize returns through strategic bid management.",
    features: ["CPA Reduction", "Budget Allocation", "Bid Strategies", "Performance Max"],
  },
];

/* ---------------------------------- */
/* UI HELPERS */
/* ---------------------------------- */

const Section = ({ children, className = "" }) => (
  <section className={`py-28 ${className}`}>{children}</section>
);

const WaveDivider = ({ flip }) => (
  <div className={`overflow-hidden ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" className="w-full">
      <path
        fill="#f3f4f6"
        d="M0,40 C160,80 360,0 560,20 760,40 960,80 1200,60 1320,50 1440,40 1440,40 L1440,0 L0,0 Z"
      />
    </svg>
  </div>
);

/* ---------------------------------- */
/* COMPONENT */
/* ---------------------------------- */

export default function PPCAdvertising() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTab((p) => (p + 1) % ppcPlatforms.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-20">
        {/* VIDEO */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src={ppchero}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />

        <div className="relative lg:grid lg:grid-cols-2 gap-16 items-center px-6 md:px-16 pt-32 pb-64">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold mb-6">
              <FaAd /> PPC Advertising
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Instant Traffic.
              <br />
              <span className="text-[#e44f39]">Measurable Results.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 max-w-xl">
              Data-driven PPC campaigns that deliver qualified leads, 
              increase conversions, and maximize your advertising ROI.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center bg-[#e44f39] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition"
            >
              Get Free PPC Audit <FaRocket className="ml-2" />
            </Link>

            {/* TRUST SIGNALS */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Google Premier Partner
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> ROI-Focused Campaigns
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Transparent Reporting
              </span>
            </div>
          </div>

          {/* RIGHT CARD WITH IMAGE */}
          <div className="relative mt-20 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 p-6 gap-6">
                {/* LEFT - FEATURES */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    PPC Performance Metrics
                  </h3>

                  {[
                    "Lower Cost-Per-Click",
                    "Higher Click-Through Rate",
                    "Improved Quality Score",
                    "Better Conversion Rate",
                    "Lower Cost-Per-Acquisition",
                    "Positive ROI from Day 1",
                  ].map((item) => (
                    <div key={item} className="flex items-center mb-3 group">
                      <FaCheckCircle className="text-green-600 mr-3 text-lg group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-gray-800 group-hover:text-[#e44f39] transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* RIGHT - IMAGE */}
                <div className="relative hidden md:block">
                  <img
                    src="/ppc-dashboard.jpg"
                    alt="PPC Analytics Dashboard"
                    className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-200"
                  />
                  {/* OVERLAY ON IMAGE */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                    Real-time Performance
                  </div>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <FaChartLine className="mr-2 text-[#e44f39]" />
                    Weekly Performance Reports
                  </span>
                  <span className="text-gray-600 font-medium">✓ Included</span>
                </div>
              </div>
            </div>

            {/* FLOATING TECH BADGES */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float">
              <SiGoogleads className="text-2xl text-[#e44f39]" />
            </div>
            <div 
              className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <FaFacebook className="text-2xl text-[#1877F2]" />
            </div>
          </div>
        </div>

         

        <Scroll />
      </section>

      <WaveDivider />

      {/* ================= SERVICES ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#e44f39]">PPC Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow"
              >
                <s.icon className="text-4xl text-[#e44f39] mb-6" />
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center">
                      <FaCheckCircle className="text-green-600 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <WaveDivider flip />

      {/* ================= PROCESS ================= */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#e44f39]">Process</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <div
                key={p.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:-translate-y-2 transition-transform"
              >
                <p.icon className="text-3xl text-[#e44f39] mb-4 mx-auto" />
                <h4 className="font-bold mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 text-gray-300 text-3xl font-bold">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= PLATFORM MARQUEE ================= */}
      <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-gray-900 to-gray-800 mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...ppcPlatforms.flatMap(t => t.items), ...ppcPlatforms.flatMap(t => t.items)].map(
            ({ label, icon: Icon }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-white/90 text-lg font-semibold group hover:scale-105 transition-transform"
              >
                <Icon className="text-2xl group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{label}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* ================= PPC PLATFORMS ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            PPC <span className="text-[#e44f39]">Platforms & Tactics</span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {ppcPlatforms.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === i
                    ? "bg-[#e44f39] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ppcPlatforms[activeTab].items.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <Icon className="text-4xl text-[#e44f39] mb-4 mx-auto" />
                <div className="font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= RESULTS ================= */}
      <Section className="bg-gradient-to-r from-[#e44f39]/5 to-[#34A853]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Real <span className="text-[#e44f39]">Results</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaChartLine, value: "65%", label: "Increase in Qualified Leads", desc: "For B2B SaaS Client" },
              { icon: FaMoneyBillWave, value: "42%", label: "Reduction in CPA", desc: "E-commerce Campaign" },
              { icon: FaBolt, value: "3.8x", label: "ROI Improvement", desc: "Across All Clients" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <stat.icon className="text-5xl text-[#e44f39] mb-4 mx-auto" />
                <div className="text-5xl font-bold mb-2 text-gray-900">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= CTA ================= */}
      <div className="relative bg-black p-14 text-center shadow-2xl overflow-hidden">
          <div
                    className="absolute inset-0 bg-[url('/skill-bg.webp')]
               bg-no-repeat bg-center opacity-100"
                />
          <div className="relative">
            <FaHandshake className="text-6xl text-white/20 mb-8 mx-auto" />
            <h2 className="text-4xl font-bold text-white mb-6">
                   Ready to Scale Paid Ads?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Launch profitable PPC campaigns with expert management.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Get Free PPC Consultation <FaLightbulb className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
 
          </div>
        </div>

      {/* ================= FAQ ================= */}
      <Section>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            PPC <span className="text-[#e44f39]">FAQs</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to see PPC results?",
                a: "PPC can deliver immediate traffic. We typically see measurable improvements within 2-4 weeks as campaigns are optimized based on performance data.",
              },
              {
                q: "What's a realistic PPC budget?",
                a: "Budgets vary by industry and goals. We recommend starting with $1,000-$3,000/month for SMBs to gather enough data for meaningful optimization.",
              },
              {
                q: "Do you guarantee ROI?",
                a: "While we can't guarantee specific returns, we optimize every campaign to maximize ROI. We've consistently delivered 3-5x ROI for our clients.",
              },
              {
                q: "Which platforms do you manage?",
                a: "Google Ads, Microsoft Advertising, Facebook/Instagram, LinkedIn, TikTok, Pinterest, and other performance-driven platforms.",
              },
              {
                q: "How do you track conversions?",
                a: "We implement full-funnel tracking using Google Tag Manager, conversion pixels, and UTMs to measure every click and conversion accurately.",
              },
              {
                q: "What makes your PPC management different?",
                a: "We focus on profitable conversions, not just clicks. Our data-driven approach includes continuous A/B testing, audience refinement, and bid optimization.",
              },
              {
                q: "Can PPC work with my SEO strategy?",
                a: "Absolutely! PPC and SEO complement each other. PPC provides immediate data on converting keywords, while SEO builds long-term organic value.",
              },
            ].map((faq, index) => {
              const [open, setOpen] = useState(false);

              return (
                <div
                  key={faq.q}
                  className="border rounded-xl bg-white shadow-sm overflow-hidden"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e44f39]"
                  >
                    <h4 className="text-lg font-semibold text-gray-900">
                      {faq.q}
                    </h4>

                    <span className="ml-4 text-[#e44f39]">
                      {open ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}