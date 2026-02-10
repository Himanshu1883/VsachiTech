import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGlobe, FaMobileAlt, FaShoppingCart, FaSearch,
  FaShieldAlt, FaUsers, FaCheckCircle, FaArrowRight,
  FaCode, FaServer, FaDatabase, FaPalette, FaRocket,
  FaCloud, FaLock, FaChartLine, FaHandshake
} from 'react-icons/fa';
import { MdLocationOn, MdSpeed, MdDesignServices, MdSecurity } from 'react-icons/md';

// Divider Component
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
      description: "Professional websites for UAE businesses with Arabic/English support",
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
      description: "Dominate Google search results in Dubai, Abu Dhabi, and UAE",
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
      description: "Easy-to-manage content systems with Arabic content management",
      features: ["WordPress/Drupal", "Arabic Admin", "Multi-user", "Training Included"],
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

  const uaeProjects = [
    {
      name: "Dubai Luxury Real Estate",
      type: "Property Portal",
      tech: ["React", "Node.js", "PostgreSQL"],
      highlight: "Arabic property listings with virtual tours"
    },
    {
      name: "Abu Dhabi Healthcare",
      type: "Medical Platform",
      tech: ["Vue.js", "Python", "MongoDB"],
      highlight: "Arabic patient portal with appointment booking"
    },
    {
      name: "Sharjah E-commerce",
      type: "Online Retail",
      tech: ["Next.js", "Shopify", "Redis"],
      highlight: "UAE payment gateways with Arabic interface"
    },
    {
      name: "Dubai Government",
      type: "Service Portal",
      tech: ["React", "Java", "Oracle"],
      highlight: "TDRA compliant with Arabic forms"
    }
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
      {/* Hero Section - With Background Image and Adjusted Height */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Code Elements */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="text-white/10 text-4xl">&lt;div&gt;</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
            <div className="text-white/10 text-3xl">{'</>'}</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
            <div className="text-white/10 text-2xl">{"{}"}</div>
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div>
              {/* UAE Location Badge */}
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full">
                <MdLocationOn className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
                  Web Development • Dubai • UAE
                </span>
              </div>

              {/* Main Heading with Gradient Text */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Digital Excellence</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  For The Emirates
                </span>
              </h1>

              {/* Rotating Feature Display */}
              <div className="mb-8">
                <div className="relative h-12 overflow-hidden">
                  {heroFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full text-xl sm:text-2xl font-bold text-white transition-all duration-1000 ${
                        index === activeFeature
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                We craft bespoke web solutions that understand the unique dynamics of 
                the UAE market. From Dubai's luxury brands to Abu Dhabi's enterprise 
                needs, we build websites that convert and perform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" aria-label="Start your UAE web project">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      START UAE WEB PROJECT
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" aria-label="Explore our web services">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-base font-semibold">
                    EXPLORE SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-400">150+</div>
                <div className="text-sm text-gray-400">UAE Projects</div>
              </div>
              <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-400">98%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-400">UAE Support</div>
              </div>
              <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-400">AED</div>
                <div className="text-sm text-gray-400">Local Pricing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
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

      {/* Web Services Section - Unique Hexagon/Timeline Layout */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UAE-Focused <span className="text-red-600">Web Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services tailored specifically for the UAE market
            </p>
          </div>

          {/* Interactive Timeline/Path Layout */}
          <div className="relative">
            {/* Central Path Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-red-500 to-red-200 transform -translate-x-1/2"></div>

            {/* Services positioned along the path */}
            <div className="space-y-12">
              {webServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Service Card */}
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 ${
                        activeService === index ? 'scale-105 border-red-500 shadow-2xl' : ''
                      }`}
                    >
                      {/* Corner Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>

                      <div className={`mb-6 inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Arrow */}
                      <div className={`absolute top-1/2 ${
                        index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                      } hidden lg:block transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <FaArrowRight className={`w-6 h-6 text-red-500 ${
                          index % 2 !== 0 ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Center Circle Connector */}
                  <div className="hidden lg:block w-2/12 flex-shrink-0">
                    <div className="relative flex justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl transition-all duration-500 ${
                        activeService === index ? 'scale-125' : 'scale-100'
                      }`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      {/* Pulse Effect */}
                      {activeService === index && (
                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>

                  {/* Empty Space for Alternate Layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Marquee */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Modern Tech Stack for <span className="text-red-600">UAE Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies optimized for UAE's digital landscape
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Marquee Track */}
          <div className="flex animate-marquee hover:pause-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-300 w-40 h-40 flex flex-col items-center justify-center hover:-translate-y-2">
                  <tech.icon className={`w-16 h-16 mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">{tech.name}</div>
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

      {/* UAE Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Web Success Stories in <span className="text-red-600">The Emirates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real web solutions delivered for UAE businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {uaeProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
                      <MdLocationOn className="w-4 h-4" />
                      {project.type}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  </div>
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <FaGlobe className="w-6 h-6 text-red-600" />
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

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium">{project.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Our <span className="text-red-600">UAE Web Development</span> Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique advantages that make us the preferred choice for UAE web projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white shadow-2xl shadow-red-500/30">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Launch Your UAE Website?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's build a web presence that captures the essence of the Emirates
              </p>
              <Link to="/contact" aria-label="Get started with UAE web development">
                <button className="group relative px-12 py-5 bg-white text-red-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/40 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
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