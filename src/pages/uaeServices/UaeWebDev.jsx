import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGlobe, FaMobileAlt, FaShoppingCart, FaSearch,
  FaShieldAlt, FaUsers, FaCheckCircle, FaArrowRight,
  FaCode, FaServer, FaDatabase, FaPalette, FaRocket,
  FaCloud, FaLock, FaChartLine, FaHandshake
} from 'react-icons/fa';
import { MdLocationOn, MdSpeed, MdDesignServices, MdSecurity } from 'react-icons/md';
import { FaHeartbeat, FaBuilding } from 'react-icons/fa';
import { FaStar, FaClock, FaHeadset } from 'react-icons/fa';

const WaveDivider = ({ flip }) => (
  <div className={`overflow-hidden ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" className="w-full h-10 sm:h-20" aria-hidden="true">
      <path
        fill="#f3f4f6"
        d="M0,40 C160,80 360,0 560,20 760,40 960,80 1200,60 1320,50 1440,40 1440,40 L1440,0 L0,0 Z"
      />
    </svg>
  </div>
);

const UaeWebDev = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    "AI-Powered Arabic Websites",
    "UAE-Compliant Design",
    "Dubai-Specific SEO",
    "Emirates Payment Integration"
  ];

  const webServices = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Corporate Websites",
      description: "Professional websites for UAE businesses with support",
      features: ["Bilingual Interface", "UAE Hosting", "Mobile-First Design", "Local SEO"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Online stores optimized for UAE market with local payment gateways",
      features: ["Tap/Moyasar Integration", "Arabic Catalog", "UAE Logistics", "Local Currency"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Fast, app-like web experiences for UAE smartphone users",
      features: ["Offline Functionality", "Push Notifications", "App Store Quality", "Arabic UI"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "UAE SEO",
      description: "Dominate Google search results in Dubai, Abu Dhabi, and all around the World",
      features: ["Arabic Keywords", "Local Listings", "Google My Business UAE", "Arabic Content"],
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "TDRA-compliant websites with UAE data protection standards",
      features: ["TDRA Compliance", "Data Localization", "SSL Certificates", "Regular Audits"],
      color: "from-red-500 to-red-700"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "CMS Solutions",
      description: "Easy-to-manage content systems with content management",
      features: ["WordPress/Drupal", "Admin", "Multi-user", "Training Included"],
      color: "from-teal-500 to-teal-700"
    }
  ];

  const technologies = [
    { name: "React", icon: FaCode, color: "text-blue-600" },
    { name: "Next.js", icon: FaRocket, color: "text-gray-900" },
    { name: "Vue.js", icon: FaPalette, color: "text-green-600" },
    { name: "Node.js", icon: FaServer, color: "text-green-700" },
    { name: "PHP", icon: FaDatabase, color: "text-purple-600" },
    { name: "Python", icon: FaCode, color: "text-yellow-600" },
    { name: "WordPress", icon: FaGlobe, color: "text-blue-500" },
    { name: "Shopify", icon: FaShoppingCart, color: "text-green-500" },
    { name: "React", icon: FaCode, color: "text-blue-600" },
    { name: "Next.js", icon: FaRocket, color: "text-gray-900" },
    { name: "Vue.js", icon: FaPalette, color: "text-green-600" },
    { name: "Node.js", icon: FaServer, color: "text-green-700" }
  ];

  const benefits = [
    "Deep understanding of UAE market preferences",
    "Arabic language expertise and RTL support",
    "UAE hosting with local data centers",
    "Compliance with TDRA regulations",
    "Local payment gateway integration",
    "UAE-specific SEO strategies"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Responsive Height */}
      <section 
        className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/uaewebdev.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements - Responsive */}
        <div className="absolute inset-0">
          {/* Floating Code Elements - Responsive Positioning */}
          <div className="absolute top-1/4 left-4 md:left-1/4 animate-float">
            <div className="text-white/10 text-2xl sm:text-3xl md:text-4xl">&lt;div&gt;</div>
          </div>
          <div className="absolute top-1/3 right-4 md:right-1/4 animate-float delay-1000">
            <div className="text-white/10 text-xl sm:text-2xl md:text-3xl">{'</>'}</div>
          </div>
          <div className="absolute bottom-1/4 left-8 md:left-1/3 animate-float delay-500">
            <div className="text-white/10 text-lg sm:text-xl md:text-2xl">{"{}"}</div>
          </div>
          
          {/* Dynamic Grid */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 62, 62, 0.3) 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              {/* UAE Location Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full">
                <MdLocationOn className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-red-400 uppercase">
                  Web Development • Dubai • UAE
                </span>
              </div>

              {/* Main Heading with Gradient Text - Responsive Font Sizes */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-white">Digital Excellence</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  For The Emirates
                </span>
              </h1>

              {/* Rotating Feature Display - Responsive Height */}
              <div className="mb-6 sm:mb-8">
                <div className="relative h-10 sm:h-12 overflow-hidden">
                  {heroFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full text-base sm:text-xl md:text-2xl font-bold text-white transition-all duration-1000 ${
                        index === activeFeature
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description - Responsive Text */}
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We craft bespoke web solutions that understand the unique dynamics of 
                the UAE market. From Dubai's luxury brands to Abu Dhabi's enterprise 
                needs, we build websites that convert and perform.
              </p>

              {/* CTA Buttons - Responsive Layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact#project-form" aria-label="Start your UAE web project" className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                      START UAE WEB PROJECT
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" aria-label="Explore our web services" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold">
                    EXPLORE SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Bar - Responsive Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
              <div className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">150+</div>
                <div className="text-xs sm:text-sm text-gray-400">UAE Projects</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">98%</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">UAE Support</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">AED</div>
                <div className="text-xs sm:text-sm text-gray-400">Local Pricing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Responsive Positioning */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>

      <WaveDivider />

      {/* Web Services Section - Responsive Layout */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              UAE-Focused <span className="text-red-600">Web Solutions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive web development services tailored specifically for the UAE market
            </p>
          </div>

          {/* Interactive Timeline/Path Layout - Responsive */}
          <div className="relative">
            {/* Central Path Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-red-500 to-red-200 transform -translate-x-1/2"></div>

            {/* Services positioned along the path */}
            <div className="space-y-8 sm:space-y-12">
              {webServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Service Card - Responsive Width */}
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`group relative bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-red-500 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 ${
                        activeService === index ? 'lg:scale-105 border-red-500 shadow-xl sm:shadow-2xl' : ''
                      }`}
                    >
                      {/* Corner Number */}
                      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg">
                        {index + 1}
                      </div>

                      <div className={`mb-4 sm:mb-6 inline-flex p-3 sm:p-4 md:p-5 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl shadow-lg`}>
                        <div className="text-white text-lg sm:text-xl md:text-2xl">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0 mt-0.5 sm:mt-1" />
                            <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Arrow - Hidden on mobile */}
                      <div className={`absolute top-1/2 ${
                        index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                      } hidden lg:block transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <FaArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 text-red-500 ${
                          index % 2 !== 0 ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Center Circle Connector - Hidden on mobile */}
                  <div className="hidden lg:block w-2/12 flex-shrink-0">
                    <div className="relative flex justify-center">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl transition-all duration-500 ${
                        activeService === index ? 'scale-110 sm:scale-125' : 'scale-100'
                      }`}>
                        <div className="text-white text-lg sm:text-xl">{service.icon}</div>
                      </div>
                      
                      {/* Pulse Effect */}
                      {activeService === index && (
                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>

                  {/* Empty Space for Alternate Layout - Hidden on mobile */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Responsive Marquee */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Modern Tech Stack for <span className="text-red-600">UAE Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We use cutting-edge technologies optimized for UAE's digital landscape
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Marquee Track */}
          <div className="flex animate-marquee hover:pause-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 group"
              >
                <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-red-500 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex flex-col items-center justify-center hover:-translate-y-1 sm:hover:-translate-y-2">
                  <tech.icon className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 ${tech.color} group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-bold text-gray-900">{tech.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }

          .pause-marquee {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <WaveDivider flip={true} />
      
      {/* Interactive UAE Solutions Showcase - Responsive Fixed Background */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/uaewebdevcards.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-4 md:left-1/4 animate-float">
            <div className="text-white/10 text-2xl sm:text-3xl md:text-4xl">&lt;div&gt;</div>
          </div>
          <div className="absolute top-1/3 right-4 md:right-1/4 animate-float delay-1000">
            <div className="text-white/10 text-xl sm:text-2xl md:text-3xl">{'</>'}</div>
          </div>
          <div className="absolute bottom-1/4 left-8 md:left-1/3 animate-float delay-500">
            <div className="text-white/10 text-lg sm:text-xl md:text-2xl">{"{}"}</div>
          </div>
          
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 62, 62, 0.2) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider sm:tracking-widest">
                Success in Motion
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Web Innovation Across <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">The Emirates</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Interactive showcase of how we're transforming UAE businesses digitally
            </p>
          </div>

          {/* Interactive 3D Card Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              {
                city: "Dubai",
                title: "Luxury E-commerce",
                icon: <FaShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
                stats: "320% Revenue Growth",
                color: "from-red-500 to-red-600",
                highlight: "High-end retail with AR preview"
              },
              {
                city: "Abu Dhabi",
                title: "Health Portal",
                icon: <FaHeartbeat className="w-6 h-6 sm:w-8 sm:h-8" />,
                stats: "450% User Increase",
                color: "from-blue-500 to-blue-600",
                highlight: "Arabic telemedicine platform"
              },
              {
                city: "Sharjah",
                title: "Education Platform",
                icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
                stats: "280% Engagement",
                color: "from-green-500 to-green-600",
                highlight: "Interactive learning system"
              },
              {
                city: "Ajman",
                title: "Industrial Portal",
                icon: <FaBuilding className="w-6 h-6 sm:w-8 sm:h-8" />,
                stats: "190% Efficiency",
                color: "from-purple-500 to-purple-600",
                highlight: "Supply chain optimization"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group perspective-1000"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
                }}
              >
                <div className="card-inner relative w-full h-64 sm:h-72 md:h-80 transition-transform duration-700 transform-style-3d">
                  {/* Front of Card */}
                  <div className="card-front absolute inset-0 backface-hidden bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl sm:shadow-2xl shadow-black/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${project.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg sm:shadow-xl relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                            <div className="text-white relative z-10 text-base sm:text-lg">{project.icon}</div>
                          </div>
                        </div>
                        <div className="px-2 sm:px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                          <span className="text-xs sm:text-sm font-semibold text-gray-300">{project.city}</span>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.highlight}</p>
                    </div>
                    <div className="pt-3 sm:pt-4 border-t border-white/10">
                      <div className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{project.stats}</div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="flex-1 h-1 sm:h-1.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <div className={`h-full bg-gradient-to-r ${project.color} rounded-full`} style={{ width: `${70 + index * 10}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-400">Success</span>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="card-back absolute inset-0 backface-hidden bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transform rotate-y-180 text-white shadow-xl sm:shadow-2xl">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <h4 className="text-base sm:text-lg font-bold text-white">Behind the Success</h4>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                            {project.icon}
                          </div>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          {["UI/UX Design", "UAE Payment Integration", "Local SEO Optimization", "Mobile-First Approach"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                                <FaCheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                              </div>
                              <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-center pt-3 sm:pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">Hover to flip back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Counter - Responsive */}
          <div className="mb-12 sm:mb-16 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { label: "Websites Launched", value: "50+", suffix: "", color: "text-red-400", icon: <FaGlobe /> },
                { label: "Client Satisfaction", value: "98", suffix: "%", color: "text-green-400", icon: <FaStar /> },
                { label: "Years of Experience", value: "1", suffix: "+", color: "text-blue-400", icon: <FaClock /> },
                { label: "Support Hours", value: "24", suffix: "/7", color: "text-purple-400", icon: <FaHeadset /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                    <div className="text-base sm:text-lg md:text-xl text-gray-300">{stat.icon}</div>
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                    {stat.value}<span className="text-lg sm:text-xl md:text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA Section - Responsive */}
          <div className="relative mb-12 sm:mb-16 p-6 sm:p-8 md:p-12 text-center rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 md:mb-8 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-sm border border-red-500/30">
                <FaHandshake className="text-xl sm:text-2xl md:text-3xl text-red-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Want More <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Traffic & Leads</span>?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Get a free consultation and discover growth opportunities for your UAE business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link
                  to="/contact#project-form"
                  aria-label="Get free SEO audit"
                  className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold shadow-xl sm:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center sm:justify-start">
                    Get Free Consultation
                    <FaArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Final CTA - Responsive */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-pink-500 rounded-full p-1 mb-4 sm:mb-6 md:mb-8 animate-gradient">
              <div className="bg-black/80 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border border-white/10">
                <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
                  Ready for Your Digital Transformation?
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              Join the growing list of UAE businesses achieving digital excellence with our tailored solutions
            </p>
            <div className="flex justify-center">
              <Link to="/contact#project-form" aria-label="Start UAE web project" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-black/60 to-black/80 text-white rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-white/20 overflow-hidden border border-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    START UAE PROJECT
                    <span className="w-2 h-2 rounded-full bg-white group-hover:bg-white transition-colors duration-300"></span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>

      {/* Benefits Section - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Our <span className="text-red-600">UAE Web Development</span> Stands Out
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Unique advantages that make us the preferred choice for UAE web projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA - Responsive */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-xl sm:shadow-2xl shadow-red-500/30">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Launch Your UAE Website?
              </h3>
              <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's build a web presence that captures the essence of the Emirates
              </p>
              <Link to="/contact#project-form" aria-label="Get started with UAE web development" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-white text-red-600 rounded-full font-bold text-sm sm:text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-white/40 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    GET STARTED TODAY
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UaeWebDev;