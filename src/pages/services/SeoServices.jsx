import { useState, useEffect } from "react";
import {
  FaSearch,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaGlobe,
  FaCogs,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaBolt,
  FaShieldAlt,
  FaPlus, FaMinus
} from "react-icons/fa";
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiWordpress,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Scroll from "../../components/ui/Scroll";
import seohero from "../../assets/seo-hero.mp4"
import usePageTitle from "../../components/hooks/usePageTitle";

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const seoStack = [
  {
    name: "Analysis",
    items: [
      { label: "Google Analytics", icon: SiGoogleanalytics },
      { label: "Search Console", icon: SiGooglesearchconsole },
      { label: "SEMrush", icon: SiSemrush },
    ],
  },
  {
    name: "Optimization",
    items: [
      { label: "On-Page SEO", icon: FaSearch },
      { label: "Technical SEO", icon: FaCogs },
      { label: "Content SEO", icon: FaLightbulb },
      { label: "Core Web Vitals", icon: FaBolt },
    ],
  },
  {
    name: "Audits",
    items: [
      { label: "SEO Audits", icon: FaChartLine },
      { label: "Competitor Analysis", icon: FaUsers },
      { label: "CMS SEO", icon: SiWordpress },
    ],
  },
];

const process = [
  {
    icon: FaSearch,
    title: "Research & Audit",
    description: "Deep analysis of site, competitors, and keywords.",
  },
  {
    icon: FaLightbulb,
    title: "SEO Strategy",
    description: "Clear roadmap aligned with business goals.",
  },
  {
    icon: FaCogs,
    title: "Optimization",
    description: "Technical, on-page, and content improvements.",
  },
  {
    icon: FaShieldAlt,
    title: "Monitoring",
    description: "Tracking performance and algorithm updates.",
  },
  {
    icon: FaRocket,
    title: "Growth",
    description: "Sustainable traffic and conversions.",
  },
];

const services = [
  {
    icon: FaSearch,
    title: "On-Page SEO",
    description: "Optimize content and structure.",
    features: ["Keyword Optimization", "Meta Tags", "Internal Linking"],
  },
  {
    icon: FaCogs,
    title: "Technical SEO",
    description: "Improve crawlability and performance.",
    features: ["Core Web Vitals", "Schema", "Architecture"],
  },
  {
    icon: FaLightbulb,
    title: "Content SEO",
    description: "Content that ranks and converts.",
    features: ["SEO Blogs", "Landing Pages", "Strategy"],
  },
  {
    icon: FaChartLine,
    title: "SEO Audits",
    description: "Identify ranking blockers.",
    features: ["Technical Audit", "Competitor Audit", "Gap Analysis"],
  },
  {
    icon: FaGlobe,
    title: "Local & Global SEO",
    description: "Rank locally or globally.",
    features: ["Google Maps", "Citations", "International SEO"],
  },
  {
    icon: FaRocket,
    title: "Growth SEO",
    description: "Long-term ROI focused SEO.",
    features: ["Traffic Growth", "Conversion SEO", "Reporting"],
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

export default function SeoServices() {
  usePageTitle("SEO Services In Delhi");

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTab((p) => (p + 1) % seoStack.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-black">

      <section className="relative overflow-hidden pb-20">

  {/* VIDEO */}
  <div className="absolute inset-0">
    <video
      className="w-full h-full object-cover"
      src={seohero}
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  <div className="absolute inset-0 bg-black/80" />

  <div className="relative lg:grid lg:grid-cols-2 gap-16 items-center px-6 md:px-16 pt-32 pb-64">

    {/* LEFT */}
    <div>
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold mb-6">
        <FaSearch /> SEO Services
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
        Rank Higher.
        <br />
        <span className="text-[#e44f39]">Grow Faster.</span>
      </h1>

      <p className="text-lg text-gray-300 mb-10 max-w-xl">
        Data-driven SEO strategies that increase visibility, traffic,
        and conversions — sustainably.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center bg-[#e44f39] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition"
      >
        Get SEO Audit <FaRocket className="ml-2" />
      </Link>
      
      {/* TRUST SIGNALS */}
      <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> White-hat SEO
        </span>
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> Google-friendly practices
        </span>
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> Monthly reporting
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
              SEO Growth Framework
            </h3>

            {[
              "Keyword Research",
              "Technical SEO",
              "Content Optimization",
              "Authority Building",
              "Conversion Tracking",
              "Performance Analytics",
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
              src="/seo-dashboard.jpg"
              alt="SEO Analytics Dashboard"
              className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-200"
            />
            {/* OVERLAY ON IMAGE */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
              Real-time Analytics
            </div>
          </div>

        </div>

        {/* CARD FOOTER */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-gray-600">
              <FaChartLine className="mr-2 text-[#e44f39]" />
              Monthly Growth Reports
            </span>
            <span className="text-gray-600 font-medium">✓ Included</span>
          </div>
        </div>
      </div>

      {/* FLOATING TECH BADGES */}
      <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float">
        <SiGoogleanalytics className="text-2xl text-[#FF6D01]" />
      </div>
      <div 
        className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <SiSemrush className="text-2xl text-[#FF6D00]" />
      </div>
    </div>
  </div>

  {/* FLOATING SEO METRICS */}
  {/* <div className="absolute top-40 right-10 hidden lg:flex flex-col gap-4">
    {[
      { label: "Avg. CTR", value: "+42%", icon: FaChartLine },
      { label: "Top 10 Rankings", value: "120+", icon: FaSearch },
      { label: "Organic Traffic", value: "+3.4x", icon: FaGlobe },
    ].map((stat) => (
      <div
        key={stat.label}
        className="bg-white/90 backdrop-blur-md rounded-xl px-6 py-4 shadow-xl animate-float group hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#e44f39]/10">
            <stat.icon className="text-[#e44f39]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-extrabold text-[#e44f39] group-hover:scale-105 transition-transform">
              {stat.value}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div> */}

  <Scroll />
</section>

      <WaveDivider />


      {/* ================= SERVICES ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-red-600">SEO Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-lg border"
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {process.map((p, i) => (
            <div
              key={p.title}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
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
      </Section>
       <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-gray-900 to-gray-800 mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...seoStack.flatMap(t => t.items), ...seoStack.flatMap(t => t.items)].map(
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
      {/* ================= SEO STACK ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {seoStack.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full font-semibold ${
                  activeTab === i
                    ? "bg-[#e44f39] text-white"
                    : "bg-gray-100"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {seoStack[activeTab].items.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <Icon className="text-4xl text-[#e44f39] mb-4 mx-auto" />
                <div className="font-semibold">{label}</div>
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
                    Want More Traffic & Leads?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Get a free SEO consultation and discover growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Get Free SEO Audit <FaLightbulb className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
 
          </div>
        </div>

      {/* ================= FAQ ================= */}
      <Section>
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16">
      SEO <span className="text-red-600">FAQs</span>
    </h2>

    <div className="space-y-4">
      {[
  {
    q: "How long does SEO take?",
    a: "SEO typically takes 3–6 months to show noticeable improvements, depending on competition, website health, and strategy execution.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No agency can ethically guarantee rankings. We focus on sustainable growth, improved visibility, and measurable ROI using proven white-hat strategies.",
  },
  {
    q: "Is SEO safe for my website?",
    a: "Yes. We strictly follow Google’s guidelines and use 100% white-hat, algorithm-safe techniques to protect and grow your site long-term.",
  },
  {
    q: "What makes your SEO services different?",
    a: "Our SEO is data-driven, intent-focused, and conversion-oriented. We don’t chase vanity keywords — we optimize for traffic that converts into leads and revenue.",
  },
  {
    q: "Do you provide monthly SEO reports?",
    a: "Yes. You receive clear monthly reports covering keyword rankings, traffic growth, conversions, and actionable insights.",
  },
  {
    q: "Can you help recover from Google penalties?",
    a: "Absolutely. We perform detailed audits to identify penalties, toxic backlinks, or technical issues and create a recovery plan aligned with Google’s best practices.",
  },
  {
    q: "Do you offer local SEO services?",
    a: "Yes. We optimize Google Business Profiles, local citations, location pages, and maps visibility to help you dominate local search results.",
  }
]
.map((faq, index) => {
        const [open, setOpen] = useState(false);

        return (
          <div
            key={faq.q}
            className="border rounded-xl bg-white shadow-sm overflow-hidden"
          >
            {/* QUESTION */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {faq.q}
              </h4>

              <span className="ml-4 text-red-600">
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
