import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMobileAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaHandshake,
  FaAward,
  FaGlobe,
  FaAppStore,
  FaGooglePlay,
  FaShoppingCart,
} from 'react-icons/fa';
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

const MobileDev = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: "Flutter",       icon: FaMobileAlt, color: "text-blue-600" },
    { name: "React Native",  icon: FaCode,      color: "text-cyan-600" },
    { name: "Swift",         icon: FaAppStore,  color: "text-red-600"   },
    { name: "Kotlin",        icon: FaGooglePlay,color: "text-green-600" },
    { name: "Firebase",      icon: FaDatabase,  color: "text-amber-600" },
    { name: "AWS Amplify",   icon: FaCloud,     color: "text-orange-600" },
    { name: "Appwrite",      icon: FaServer,    color: "text-purple-600" },
    { name: "Supabase",      icon: FaDatabase,  color: "text-emerald-600" },
  ];

  const mobileServices = [
    {
      title: "Cross-Platform Apps",
      desc: "High-performance apps using Flutter & React Native for UAE businesses",
      projects: "27+ UAE Projects",
      features: ["Flutter", "React Native", "Single Codebase", "Fast Delivery"],
      icon: FaMobileAlt
    },
    {
      title: "Native iOS & Android",
      desc: "Premium native experiences tailored for UAE market expectations",
      projects: "19+ Native Apps",
      features: ["SwiftUI", "Jetpack Compose", "ARKit / ARCore", "Push Notifications"],
      icon: FaAppStore
    },
    {
      title: "E-commerce Mobile Solutions",
      desc: "Feature-rich shopping apps optimized for UAE consumers",
      projects: "23+ E-commerce Apps",
      features: ["In-app Payments", "Loyalty Programs", "Location Services", "Analytics"],
      icon: FaShoppingCart
    },
    {
      title: "FinTech & Wallet Apps",
      desc: "Secure mobile banking & payment solutions for UAE regulations",
      projects: "14+ FinTech Apps",
      features: ["Biometrics", "Tokenization", "Compliance", "Real-time Transactions"],
      icon: FaShieldAlt
    },
    {
      title: "On-Demand & Delivery Apps",
      desc: "Scalable platforms for UAE's growing gig & logistics economy",
      projects: "18+ On-Demand Apps",
      features: ["Real-time Tracking", "Driver/Passenger Flows", "Ratings", "Payments"],
      icon: FaChartLine
    },
    {
      title: "Backend & Firebase Integration",
      desc: "Reliable mobile backends with real-time capabilities",
      projects: "29+ Mobile Backends",
      features: ["Firebase", "Appwrite", "Supabase", "Push & Auth"],
      icon: FaServer
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Project Discovery",
      desc: "Understand your UAE mobile app vision & target audience",
      icon: FaHandshake,
      duration: "1-2 Days"
    },
    {
      step: "02",
      title: "Talent Matching",
      desc: "Get matched with pre-vetted mobile developers",
      icon: FaUsers,
      duration: "1-3 Days"
    },
    {
      step: "03",
      title: "Technical Assessment",
      desc: "Skills validated with UAE-relevant app challenges",
      icon: FaCode,
      duration: "2-4 Days"
    },
    {
      step: "04",
      title: "Onboarding & Sprint Start",
      desc: "Quick integration aligned with your UAE timezone",
      icon: FaRocket,
      duration: "1 Day"
    }
  ];

  const uaeProjects = [
    {
      industry: "Real Estate",
      project: "Dubai Luxury Property Viewing & Booking App",
      tech: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      duration: "5 months",
      client: "Premium Dubai Developer"
    },
    {
      industry: "E-commerce",
      project: "UAE Fashion & Lifestyle Mobile Store",
      tech: ["React Native", "AWS Amplify", "Razorpay", "Pushwoosh"],
      duration: "4 months",
      client: "Leading UAE Retail Chain"
    },
    {
      industry: "FinTech",
      project: "Abu Dhabi Digital Wallet & Payment App",
      tech: ["Swift + Kotlin", "Firebase Auth", "Tokenization", "Biometrics"],
      duration: "7 months",
      client: "Regulated UAE FinTech Firm"
    },
    {
      industry: "Logistics",
      project: "Sharjah On-Demand Delivery & Tracking App",
      tech: ["Flutter", "Supabase", "Google Maps API", "Real-time DB"],
      duration: "6 months",
      client: "Major UAE Logistics Provider"
    }
  ];

  const benefits = [
    "UAE timezone aligned mobile developers",
    "Experience with Arabic RTL & localization",
    "TDRA & UAE app store compliance knowledge",
    "Strong focus on performance & battery optimization",
    "Expertise in secure payment & biometric flows",
    "Competitive AED-based pricing"
  ];

  const stats = [
    { value: "52+", label: "Mobile Apps in UAE/GCC", icon: FaMobileAlt },
    { value: "97%", label: "Client Satisfaction",    icon: FaAward },
    { value: "36+", label: "Mobile Developers",      icon: FaUsers },
    { value: "3-5", label: "Weeks to Hire",          icon: FaClock }
  ];
  return (
    <div className="bg-white">
      {/* Hero – same style, adjusted headline */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/uae-skyline.jpg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-full">
            <MdLocationOn className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
              Dubai • Abu Dhabi • Sharjah • GCC
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Mobile App Excellence</span>
            <span className="text-red-400 block mt-2">For UAE's</span>
            <span className="block mt-2">Digital Lifestyle</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hire pre-vetted mobile developers who create engaging, high-performance iOS & Android apps 
            — perfectly aligned with UAE user expectations and market trends.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact#project-form">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  HIRE MOBILE DEVELOPERS
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="#services">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-base">
                EXPLORE MOBILE SERVICES
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <stat.icon className="w-6 h-6 text-red-400" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-400 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Technologies Marquee – slightly wider cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile Stack <span className="text-red-600">Mastered for UAE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full expertise in cross-platform & native mobile development — optimized for UAE performance & user experience
            </p>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className="group mx-5 bg-white border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-48"
                  >
                    <tech.icon className={`w-12 h-12 mx-auto mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-center text-sm font-semibold text-gray-900">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact#project-form">
              <button className="inline-flex items-center gap-3 px-8 py-4 border border-gray-950 text-gray-950 rounded-full hover:bg-gray-950 hover:text-white transition-all duration-300 hover:scale-105">
                TALK TO MOBILE EXPERTS
                <span className="w-2 h-2 rounded-full bg-gray-950"></span>
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
            animation: scroll 45s linear infinite;
            display: flex;
          }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
      </section>

      <WaveDivider flip={true} />

      {/* Services – same grid, slightly more padding on mobile */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile Solutions <span className="text-red-600">for UAE Market</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored mobile app development services designed for UAE users and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-7 sm:p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex p-4 bg-red-50 rounded-xl">
                  <service.icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                    {service.projects}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-100 hover:text-red-700 transition-colors duration-300"
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
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile Success Stories <span className="text-red-600">in UAE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real mobile apps delivered for UAE businesses across key sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {uaeProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
                      <MdWork className="w-4 h-4" />
                      {project.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.project}</h3>
                    <p className="text-gray-600 text-sm">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="text-lg font-bold text-gray-900">{project.duration}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mobile Expertise Delivered</span>
                  <div className="flex items-center gap-2 text-red-600">
                    <FaMobileAlt className="w-5 h-5" />
                    <span className="font-semibold">Successfully Launched</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Hiring Process – timeline with red glow (same as before) */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center opacity-70" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fast-Track <span className="text-red-400">Hiring Process</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              4-step process to bring experienced mobile talent to your UAE team
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-300 shadow-lg shadow-red-500/30">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-300 animate-pulse"></div>
            </div>

            <div className="space-y-16">
              {hiringProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-2xl shadow-red-500/40">
                    <div className="text-sm font-bold text-gray-900">{step.step}</div>
                    <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-30 animate-ping"></div>
                  </div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 shadow-xl">
                      <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl shadow-md">
                        <step.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 mb-4">{step.desc}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-sm font-semibold rounded-full border border-red-200">
                        <FaClock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                    {/* Modern Info Card – fixed closure and structure */}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-red-600">UAE Mobile Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique advantages when hiring mobile app developers through us for UAE projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Launch Your Next Mobile App in UAE?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how our mobile experts can bring your app idea to life in the UAE market.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact#project-form">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  START YOUR MOBILE PROJECT
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="/uaeservices">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105">
                EXPLORE UAE SERVICES
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobileDev
