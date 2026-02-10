import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPalette,
  FaPencilRuler,
  FaMobileAlt,
  FaDesktop,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaAward,
  FaRocket,
  FaChartLine,
  FaArrowRight,
  FaSearch,
  FaLaptopCode,
  FaShoppingCart
} from 'react-icons/fa';

import {
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiFramer,
  SiAdobephotoshop,
} from 'react-icons/si';

import { MdLocationOn, MdWork, MdSpeed } from 'react-icons/md';

// Wave Divider (unchanged)
const WaveDivider = ({ flip }) => (
  <div className={`overflow-hidden ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" className="w-full" aria-hidden="true">
      <path
        fill="#f3f4f6"
        d="M0,40 C160,80 360,0 560,20 760,40 960,80 1200,60 1320,50 1440,40 1440,40 L1440,0 L0,0 Z"
      />
    </svg>
  </div>
);

const UiUxDesign = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: "Figma",          icon: SiFigma,         color: "text-purple-600" },
    { name: "Adobe XD",       icon: SiAdobexd,       color: "text-red-600"    },
    { name: "Sketch",         icon: SiSketch,        color: "text-yellow-600" },
    { name: "Framer",         icon: SiFramer,        color: "text-pink-600"   },
    { name: "Principle",      icon: FaMobileAlt,     color: "text-blue-600"   },
    { name: "ProtoPie",       icon: FaPencilRuler,   color: "text-teal-600"   },
    { name: "UserTesting",    icon: FaUsers,         color: "text-indigo-600" },
    { name: "Miro / FigJam",  icon: FaPalette,       color: "text-green-600"  },
  ];

  const uxServices = [
    {
      title: "UI/UX Design & Prototyping",
      desc: "Beautiful, intuitive interfaces crafted for UAE users",
      projects: "31+ UAE Projects",
      features: ["Figma", "High-Fidelity", "Interactive Prototypes", "Design Systems"],
      icon: FaPalette
    },
    {
      title: "Mobile App UI/UX",
      desc: "Engaging iOS & Android experiences tailored to UAE market",
      projects: "24+ Mobile Designs",
      features: ["Flutter / RN UI", "Gesture Design", "Dark Mode", "Accessibility"],
      icon: FaMobileAlt
    },
    {
      title: "Web & Dashboard Design",
      desc: "Modern SaaS & enterprise dashboards for UAE businesses",
      projects: "19+ Web Projects",
      features: ["Responsive", "Data Viz", "Admin Panels", "B2B UX"],
      icon: FaDesktop
    },
    {
      title: "E-commerce & FinTech UX",
      desc: "Conversion-focused designs compliant with UAE regulations",
      projects: "17+ FinTech / E-com",
      features: ["Checkout Flows", "Onboarding", "Trust Signals", "RTL Support"],
      icon: FaShoppingCart
    },
    {
      title: "User Research & Testing",
      desc: "Deep insights into UAE user behavior & preferences",
      projects: "22+ Research Studies",
      features: ["Interviews", "Usability Testing", "Heatmaps", "A/B Testing"],
      icon: FaUsers
    },
    {
      title: "Design Systems & Component Libraries",
      desc: "Scalable, consistent design languages for UAE brands",
      projects: "28+ Design Systems",
      features: ["Atomic Design", "Tokens", "Accessibility", "Documentation"],
      icon: FaPencilRuler
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Vision & Goals Call",
      desc: "Discuss your UAE project, brand, and user needs",
      icon: FaHandshake,
      duration: "1-2 Days"
    },
    {
      step: "02",
      title: "Designer Matching",
      desc: "Receive curated profiles of senior UI/UX talent",
      icon: FaUsers,
      duration: "1-3 Days"
    },
    {
      step: "03",
      title: "Portfolio & Case Review",
      desc: "Evaluate relevant UAE/GCC design experience",
      icon: FaSearch,
      duration: "2-4 Days"
    },
    {
      step: "04",
      title: "Onboarding & Kickoff",
      desc: "Smooth start aligned with your UAE timezone",
      icon: FaRocket,
      duration: "1 Day"
    }
  ];

  const uaeProjects = [
    {
      industry: "Real Estate",
      project: "Dubai Luxury Real Estate Mobile & Web Experience",
      tech: ["Figma", "Framer", "RTL", "Interactive Prototype"],
      duration: "4 months",
      client: "Premium Dubai Developer"
    },
    {
      industry: "E-commerce",
      project: "UAE Fashion Platform UI/UX Redesign",
      tech: ["Figma", "Design System", "Mobile-First", "Checkout Flow"],
      duration: "3 months",
      client: "Leading UAE Retail Brand"
    },
    {
      industry: "FinTech",
      project: "Abu Dhabi Digital Banking App UX Overhaul",
      tech: ["Adobe XD", "User Testing", "Biometric Flows", "Compliance UI"],
      duration: "6 months",
      client: "Regulated UAE FinTech"
    },
    {
      industry: "Logistics",
      project: "Sharjah Delivery App Interface & Dashboard",
      tech: ["Figma", "ProtoPie", "Real-time Tracking UX", "Driver UI"],
      duration: "5 months",
      client: "Major UAE Logistics Provider"
    }
  ];

  const benefits = [
    "UAE timezone aligned UI/UX designers",
    "Deep understanding of Arabic RTL & cultural nuances",
    "Experience with TDRA & UAE accessibility guidelines",
    "Strong portfolio in luxury, fintech & e-commerce",
    "Focus on conversion & user retention metrics",
    "Competitive AED-based pricing & flexible engagement"
  ];

  const stats = [
    { value: "55+", label: "UI/UX Projects in UAE/GCC", icon: FaPalette },
    { value: "96%", label: "Client Satisfaction",       icon: FaAward  },
    { value: "34+", label: "Senior UI/UX Designers",    icon: FaUsers  },
    { value: "2-4", label: "Weeks to Hire",             icon: FaClock  }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/uae-skyline.jpg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center text-white py-24">
          <div className="inline-flex items-center gap-3 mb-10 px-7 py-4 bg-black/50 backdrop-blur-md border border-red-500/40 rounded-full shadow-lg">
            <MdLocationOn className="w-6 h-6 text-red-400" />
            <span className="text-base font-semibold tracking-wider text-red-400 uppercase">
              Dubai • Abu Dhabi • Sharjah • GCC
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="block">UI/UX Design</span>
            <span className="text-red-400 block mt-3">Elevating UAE Brands</span>
            <span className="block mt-3">Digitally</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Hire world-class UI/UX designers who craft pixel-perfect, user-centered experiences 
            that resonate with UAE audiences and drive business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact#project-form">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  HIRE UI/UX DESIGNERS
                  <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="#services">
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 border-2 border-red-400 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-105 text-lg font-semibold">
                VIEW DESIGN SERVICES
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
              </button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/45 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8 hover:border-red-400 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <stat.icon className="w-8 h-8 text-red-400" />
                  <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                </div>
                <div className="text-base text-gray-300 text-center font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-red-400/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-4 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Technologies Marquee */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              Design Tools <span className="text-red-600">Mastered for UAE</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Elite proficiency across industry-leading UI/UX tools — delivering world-class experiences for UAE brands
            </p>
          </div>

          <div className="relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className="group mx-6 bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex-shrink-0 w-56"
                  >
                    <tech.icon className={`w-14 h-14 mx-auto mb-5 ${tech.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-400`} />
                    <div className="text-center text-base font-bold text-gray-900">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/contact#project-form">
              <button className="inline-flex items-center gap-4 px-10 py-5 border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-lg font-semibold">
                CONNECT WITH UI/UX TALENT
                <span className="w-3 h-3 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-scroll {
            animation: scroll 50s linear infinite;
            display: flex;
          }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
      </section>

      <WaveDivider flip={true} />

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              UI/UX Services <span className="text-red-600">for UAE Brands</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Specialized design services crafted to meet the expectations of UAE users and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {uxServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-9 hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="mb-8 inline-flex p-5 bg-red-50 rounded-2xl shadow-md">
                  <service.icon className="w-10 h-10 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400" />
                </div>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <span className="px-4 py-2 bg-red-100 text-red-700 text-base font-semibold rounded-full">
                    {service.projects}
                  </span>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">{service.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-base rounded-full hover:bg-red-100 hover:text-red-700 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              Design Success Stories <span className="text-red-600">in UAE</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Impactful UI/UX projects delivered for leading organizations across the UAE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {uaeProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-9 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-red-100 text-red-700 text-base font-semibold rounded-2xl mb-5">
                      <MdWork className="w-5 h-5" />
                      {project.industry}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.project}</h3>
                    <p className="text-gray-700 text-lg">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-base text-gray-500">Duration</div>
                    <div className="text-2xl font-bold text-gray-900">{project.duration}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-base rounded-2xl hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-base text-gray-700">UI/UX Craftsmanship Delivered</span>
                  <div className="flex items-center gap-3 text-red-600">
                    <FaPalette className="w-6 h-6" />
                    <span className="text-xl font-bold">Launched Successfully</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Hiring Process – with font consistency applied */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center opacity-70" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
              Streamlined <span className="text-red-400">Hiring Journey</span>
            </h2>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Clear 4-step process to bring top-tier UI/UX talent to your UAE team
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-300 shadow-lg shadow-red-500/30">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-300 animate-pulse"></div>
            </div>

            <div className="space-y-20">
              {hiringProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-2xl shadow-red-500/50">
                    <div className="text-lg font-bold text-gray-900">{step.step}</div>
                    <div className="absolute -inset-2 bg-red-500 rounded-full blur-lg opacity-40 animate-ping"></div>
                  </div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <div className="bg-white/95 backdrop-blur-lg border border-white/30 rounded-3xl p-10 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-105 shadow-xl">
                      <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-md">
                        <step.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-700 mb-6 text-lg">{step.desc}</p>
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-base font-semibold rounded-2xl border border-red-200">
                        <FaClock className="w-5 h-5" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Info Card – exact match to ReactDev.jsx */}
          <div className="mt-20 flex justify-center">
            <div className="relative group w-full max-w-4xl">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75 hidden sm:block"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75 delay-500 hidden sm:block"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-400/30 border border-white/40 hover:shadow-red-400/50 transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">Why Choose Our Process</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse delay-300"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                      <MdSpeed className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">4 Steps</div>
                    <div className="text-xs sm:text-sm text-gray-600">Streamlined Process</div>
                  </div>

                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                      <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">2-3 Weeks</div>
                    <div className="text-xs sm:text-sm text-gray-600">Fast Results</div>
                  </div>

                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                      <MdLocationOn className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">UAE Focused</div>
                    <div className="text-xs sm:text-sm text-gray-600">Local Expertise</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <span className="text-gray-800 font-bold text-sm sm:text-base">
                    Simple • Efficient • Tailored for UAE Market
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              Why Our <span className="text-red-600">UAE Design Team</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Key advantages when hiring top UI/UX talent through us for UAE projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 p-8 bg-white border border-gray-200 rounded-3xl hover:border-red-500 hover:shadow-xl transition-all duration-400"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <FaCheckCircle className="w-7 h-7 text-red-600" />
                </div>
                <span className="text-xl font-semibold text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
            Ready to Elevate Your Brand with World-Class UI/UX in UAE?
          </h3>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's create experiences that users in Dubai, Abu Dhabi and beyond will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact#project-form">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold text-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  START YOUR DESIGN PROJECT
                  <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="/uaeservices">
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 border-2 border-gray-900 text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-xl font-bold">
                MORE UAE DESIGN SERVICES
                <span className="w-3 h-3 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiUxDesign;