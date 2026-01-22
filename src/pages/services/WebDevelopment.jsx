import { useState, useEffect } from "react";
import {
  FaCode,
  FaCheckCircle,
  FaServer,
  FaRocket,
  FaChartLine,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaCogs,
  FaLightbulb,
  FaGlobe,
  FaDatabase,
  FaPalette,
  FaSearch,
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaSync,
  FaHandshake,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGooglecloud,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Scroll from "../../components/ui/Scroll";
import webhero from "../../assets/webhero.mp4"

import usePageTitle from "../../components/hooks/usePageTitle";

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const techStack = [
  {
    name: "Frontend",
    items: [
      { label: "React.js", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Vue.js", icon: SiVuedotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    items: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Python", icon: SiPython },
      { label: "Django", icon: SiDjango },
      { label: "Spring Boot", icon: SiSpring },
    ],
  },
  {
    name: "Database",
    items: [
      { label: "MongoDB", icon: SiMongodb },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MySQL", icon: SiMysql },
      { label: "Firebase", icon: SiFirebase },
      { label: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "DevOps",
    items: [
      { label: "Docker", icon: SiDocker },
      { label: "Kubernetes", icon: SiKubernetes },
      { label: "Nginx", icon: SiNginx },
      { label: "Google Cloud", icon: SiGooglecloud },
    ],
  },
];

const process = [
  {
    icon: FaSearch,
    title: "Discovery & Planning",
    description: "We analyze requirements, define goals, and create a detailed project roadmap.",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces with user-centered design principles.",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Agile development with clean, maintainable code and regular updates.",
  },
  {
    icon: FaShieldAlt,
    title: "Testing & QA",
    description: "Comprehensive testing including security, performance, and usability.",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    description: "Seamless deployment with CI/CD pipelines and cloud infrastructure.",
  },
];

const services = [
  {
    icon: FaGlobe,
    title: "Custom Web Apps",
    description: "Tailored web applications built with modern frameworks and scalable architecture.",
    features: ["SPA/MPA", "Real-time features", "API Integration", "Progressive Web Apps"],
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Development",
    description: "Mobile-first approach ensuring perfect experience across all devices.",
    features: ["Mobile Optimization", "Cross-browser", "PWA", "Touch-Friendly"],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Robust server-side solutions with optimized databases and APIs.",
    features: ["REST/GraphQL APIs", "Microservices", "Database Design", "Authentication"],
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment on leading platforms.",
    features: ["AWS/Azure/GCP", "Serverless", "Load Balancing", "Auto-scaling"],
  },
  {
    icon: FaLock,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures and compliance implementation.",
    features: ["SSL/TLS", "GDPR Compliance", "Data Encryption", "Penetration Testing"],
  },
  {
    icon: FaCogs,
    title: "Performance Optimization",
    description: "Optimized for speed, SEO, and maximum user engagement.",
    features: ["CDN", "Caching", "SEO Optimization", "Core Web Vitals"],
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

export default function WebDevelopment() {
  usePageTitle("Web Development Services In Delhi");

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTab((p) => (p + 1) % techStack.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-20">
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src={webhero}
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
              <FaCode /> Web Development
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              High Performance
              <br />
              <span className="text-[#e44f39]">Web Solutions</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 max-w-xl">
              We craft scalable, secure and lightning-fast web applications.
              Built for growth, engineered for performance, trusted by businesses.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center bg-[#e44f39] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition"
            >
              Start Your Project <FaRocket className="ml-2" />
            </Link>

            {/* TRUST SIGNALS */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 100% Client Satisfaction
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Agile Development
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Performance Guaranteed
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative mt-20 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="grid md:grid-cols-2 p-6 gap-6">
                
                {/* LEFT - FEATURES */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Web Development Experts
                  </h3>

                  {[
                    "Modern UI/UX Design",
                    "Secure Architecture",
                    "Robust APIs",
                    "Cloud Deployment",
                    "Performance Optimized",
                    "Dedicated Support",
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
                    src="/web-dev-card.jpg"
                    alt="Web Development Dashboard"
                    className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-200"
                  />
                  {/* OVERLAY ON IMAGE */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                    Real-time Development
                  </div>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <FaChartLine className="mr-2 text-[#e44f39]" />
                    Weekly Progress Reports
                  </span>
                  <span className="text-gray-600 font-medium">✓ Included</span>
                </div>
              </div>
            </div>

            {/* FLOATING TECH BADGES */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float">
              <SiReact className="text-2xl text-[#61DAFB]" />
            </div>
            <div 
              className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <SiNodedotjs className="text-2xl text-green-600" />
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
            Web Development <span className="text-[#e44f39]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow group hover:border-[#e44f39]/30"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="text-4xl text-[#e44f39]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center group/item">
                      <div className="w-2 h-2 bg-[#e44f39] rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-700">{f}</span>
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
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:-translate-y-2 transition-transform group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  <p.icon className="text-3xl text-[#e44f39] mx-auto" />
                </div>
                <h4 className="font-bold mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 text-gray-300 text-3xl font-bold group-hover:text-[#e44f39] transition-colors">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= TECH MARQUEE ================= */}
      <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-gray-900 to-gray-800 mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...techStack.flatMap(t => t.items), ...techStack.flatMap(t => t.items)].map(
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

      {/* ================= TECH STACK ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technology <span className="text-[#e44f39]">Stack</span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {techStack.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === i
                    ? "bg-[#e44f39] text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {techStack[activeTab].items.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  <Icon className="text-4xl text-[#e44f39] mx-auto" />
                </div>
                <div className="font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= BENEFITS ================= */}
      <Section className="bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Key <span className="text-[#e44f39]">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaBolt, title: "Lightning Fast", desc: "Optimized for <1s page loads and Core Web Vitals" },
              { icon: FaShieldAlt, title: "Secure & Scalable", desc: "Enterprise-grade security with auto-scaling architecture" },
              { icon: FaMobileAlt, title: "Mobile-First", desc: "Responsive design that works perfectly on all devices" },
              { icon: FaChartLine, title: "SEO Optimized", desc: "Built for search engines to maximize visibility" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <benefit.icon className="text-4xl text-[#e44f39] mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
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
                    Ready to Build Your Next Web Project?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
             Get a free web development consultation and discover how we can bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Get Free Consultation <FaCode className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
 
          </div>
        </div>

      {/* ================= FAQ ================= */}
      <Section>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Web Development <span className="text-[#e44f39]">FAQs</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Simple websites: 2-4 weeks. Complex web applications: 8-16 weeks. We work in agile sprints with regular deliverables and updates throughout the project.",
              },
              {
                q: "Do you provide maintenance and support after launch?",
                a: "Yes, we offer ongoing maintenance packages including security updates, performance monitoring, bug fixes, and feature enhancements. Most clients choose our ongoing support plan.",
              },
              {
                q: "How do you ensure website security?",
                a: "We implement multiple security layers: SSL/TLS encryption, regular security audits, DDoS protection, secure coding practices, and compliance with GDPR, CCPA, and other regulations.",
              },
              {
                q: "Can you work with our existing design or brand guidelines?",
                a: "Absolutely. We can implement your existing designs or create new ones that align with your brand identity. We're flexible to work with any design system.",
              },
              {
                q: "What about mobile responsiveness?",
                a: "All our websites are mobile-first and responsive. We test across multiple devices and browsers to ensure perfect functionality on smartphones, tablets, and desktops.",
              },
              {
                q: "Do you handle hosting and domain setup?",
                a: "Yes, we can set up hosting, configure domains, and manage DNS. We work with reliable cloud providers and can recommend the best hosting solution for your needs.",
              },
              {
                q: "How do you optimize for performance?",
                a: "We optimize Core Web Vitals, implement lazy loading, optimize images, use CDN, implement caching strategies, and minimize HTTP requests to ensure fast loading times.",
              },
            ].map((faq, index) => {
              const [open, setOpen] = useState(false);

              return (
                <div
                  key={faq.q}
                  className="border rounded-xl bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e44f39]"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#e44f39] transition-colors">
                      {faq.q}
                    </h4>

                    <span className="ml-4 text-[#e44f39] group-hover:scale-110 transition-transform">
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