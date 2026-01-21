import { 
  FaCode, 
  FaSearch, 
  FaAd, 
  FaRobot, 
  FaComments,
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaChartLine
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceSection() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const services = [
    {
      id: 0,
      icon: FaCode,
      title: "Web Development",
      subtitle: "for SMEs",
      path: "/what-we-do/web-development",
      description:
        "Custom web solutions built with modern frameworks, designed to scale with your business. We craft digital experiences that convert visitors into customers.",
      benefits: [
        "Responsive & Mobile-First Design",
        "SEO-Optimized Architecture",
        "Fast Loading & Performance",
        "Scalable & Maintainable Code",
      ],
      technologies: ["React", "Next.js", "Django", "FastAPI", "Tailwind CSS"],
      useCases: ["Corporate Websites", "E-commerce Platforms", "SaaS Applications"],
      gradient: "from-red-500 to-rose-500",
      accentColor: "#e44f39",
      borderColor: "border-red-200",
      lightAccent: "bg-red-100",
    },
    {
      id: 1,
      icon: FaSearch,
      title: "SEO Services",
      subtitle: "Local, Technical & Content",
      path: "/what-we-do/seo-services",
      description:
        "Data-driven SEO strategies that increase visibility and drive organic traffic to your business.",
      benefits: [
        "Higher Search Rankings",
        "Increased Organic Traffic",
        "Better User Experience",
        "Long-term ROI Growth",
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
      useCases: ["Local SEO", "E-commerce SEO", "Content Marketing"],
      gradient: "from-red-600 to-orange-500",
      accentColor: "#dc2626",
      borderColor: "border-red-200",
      lightAccent: "bg-red-100",
    },
    {
      id: 2,
      icon: FaAd,
      title: "PPC Advertising",
      subtitle: "Google & Meta Ads",
      path: "/what-we-do/ppc-advertising",
      description:
        "Strategic paid campaigns that maximize ROI and convert clicks into customers.",
      benefits: [
        "Targeted Ad Campaigns",
        "Cost-Effective Bidding",
        "A/B Testing & Optimization",
        "Detailed Analytics & Reports",
      ],
      technologies: ["Google Ads", "Meta Ads", "Tag Manager"],
      useCases: ["Lead Generation", "E-commerce Sales", "Brand Awareness"],
      gradient: "from-rose-500 to-pink-500",
      accentColor: "#f43f5e",
      borderColor: "border-rose-200",
      lightAccent: "bg-rose-100",
    },
    {
      id: 3,
      icon: FaRobot,
      title: "AI Automation",
      subtitle: "Business Automation",
      path: "/what-we-do/automation",
      description:
        "Intelligent automation solutions that streamline workflows and reduce manual overhead.",
      benefits: [
        "Reduced Operational Costs",
        "24/7 Automated Processes",
        "Error-Free Operations",
        "Scalable Workflows",
      ],
      technologies: ["Python", "FastAPI", "OpenAI"],
      useCases: ["Data Processing", "Email Automation", "Reports"],
      gradient: "from-orange-500 to-red-500",
      accentColor: "#f97316",
      borderColor: "border-orange-200",
      lightAccent: "bg-orange-100",
    },
    {
      id: 4,
      icon: FaComments,
      title: "AI Chatbots",
      subtitle: "Web, WhatsApp & CRM",
      path: "/what-we-do/ai-chatbots",
      description:
        "Intelligent conversational AI that engages customers and automates support.",
      benefits: [
        "24/7 Customer Support",
        "Instant Query Resolution",
        "Multi-Channel Integration",
        "Lead Qualification",
      ],
      technologies: ["OpenAI", "WhatsApp API", "Twilio"],
      useCases: ["Customer Support", "Sales Assistance", "Lead Capture"],
      gradient: "from-red-500 to-orange-600",
      accentColor: "#ef4444",
      borderColor: "border-red-200",
      lightAccent: "bg-red-100",
    },
  ];

  const activeServiceData = services[activeService];
  const ActiveIcon = activeServiceData.icon;

  return (
    <section className="relative min-h-screen py-20 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4 font-semibold">
            Digital Excellence
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-red-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-impact digital solutions designed for growth
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT MENU */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition ${
                    isActive
                      ? `${service.borderColor} shadow-lg scale-[1.02]`
                      : "border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${service.lightAccent}`}
                      style={{ color: service.accentColor }}
                    >
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.subtitle}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAILS */}
          <div className="lg:col-span-8">
            <div className="bg-white border-2 rounded-3xl p-10 shadow-xl">

              {/* TITLE */}
              <div className="flex items-center gap-6 mb-8">
                <div
                  className={`p-5 rounded-2xl bg-gradient-to-br ${activeServiceData.gradient}`}
                >
                  <ActiveIcon className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold">{activeServiceData.title}</h2>
                  <p className="text-xl text-gray-600">{activeServiceData.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                {activeServiceData.description}
              </p>

              {/* BENEFITS */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {activeServiceData.benefits.map((b, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredBenefit(i)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className={`p-4 rounded-xl border flex gap-3 ${
                      hoveredBenefit === i
                        ? activeServiceData.borderColor
                        : "border-gray-200"
                    }`}
                  >
                    <FaCheckCircle style={{ color: activeServiceData.accentColor }} />
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>

              {/* TECHNOLOGIES & USE CASES */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-bold mb-4 flex gap-2">
                    <FaCogs /> Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeServiceData.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 rounded-full border text-sm"
                        style={{
                          borderColor: activeServiceData.accentColor,
                          color: activeServiceData.accentColor,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4 flex gap-2">
                    <FaChartLine /> Use Cases
                  </h3>
                  <ul className="space-y-2">
                    {activeServiceData.useCases.map((u) => (
                      <li key={u} className="flex gap-2">
                        <span
                          className="w-2 h-2 rounded-full mt-2"
                          style={{ background: activeServiceData.accentColor }}
                        />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
  {/* PRIMARY CTA */}
  <Link to={activeServiceData.path}>
    <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2">
      Explore {activeServiceData.title}
      <FaArrowRight />
    </button>
  </Link>

  {/* SECONDARY CTA */}
  <Link
    to="/contact"
    className="flex items-center gap-4 px-8 py-4 border border-red-600 rounded-full text-sm tracking-wider text-red-600
               hover:bg-red-600 hover:text-white transition group"
  >
    Talk to an expert
    <span className="w-2 h-2 bg-red-600 rounded-full group-hover:bg-white transition-colors"></span>
  </Link>
</div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
