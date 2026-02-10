import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch, FaChartLine, FaMobileAlt, FaGlobe,
  FaCheckCircle, FaArrowRight, FaGoogle, FaMapMarkerAlt,
  FaListAlt, FaChartBar, FaBullseye, FaUsers,
  FaClock, FaShieldAlt, FaHandshake, FaTrophy,
  FaCode, FaServer, FaDatabase, FaPalette, FaRocket
} from 'react-icons/fa';
import { MdLocationOn, MdTrendingUp, MdSpeed, MdLanguage } from 'react-icons/md';

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

const UaeSeo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [rankPosition, setRankPosition] = useState(10);
  const [trafficGrowth, setTrafficGrowth] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(null);

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

  // Animate ranking improvement
  useEffect(() => {
    const interval = setInterval(() => {
      setRankPosition(prev => {
        if (prev > 1) return prev - 1;
        return 1;
      });
      setTrafficGrowth(prev => {
        if (prev < 300) return prev + 15;
        return 300;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    "Arabic SEO Optimization",
    "Dubai Local Rankings",
    "Google My Business UAE",
    "Multilingual Content Strategy"
  ];

  const seoServices = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Local SEO for UAE",
      description: "Dominate Google search results in your target UAE cities with location-specific optimization",
      features: ["Google My Business UAE", "Local Citations", "Arabic Keywords", "City-Specific Pages", "Map Pack Optimization", "Local Link Building"],
      results: "3-6 Months",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Technical SEO Audit",
      description: "Complete website analysis and optimization for peak performance in UAE market",
      features: ["Site Speed Optimization", "Mobile-First Indexing", "Arabic Schema Markup", "UAE Hosting Check", "Core Web Vitals", "Crawlability Analysis"],
      results: "2-4 Weeks",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: <MdLanguage className="w-8 h-8" />,
      title: "Arabic SEO",
      description: "Specialized SEO strategies for Arabic-speaking audience across the Emirates",
      features: ["Arabic Keyword Research", "RTL Optimization", "Arabic Content Strategy", "Local Dialect Focus", "Bilingual Integration", "Cultural Relevance"],
      results: "4-8 Months",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile SEO",
      description: "Optimize for UAE's smartphone-first users with mobile-specific strategies",
      features: ["Mobile Page Speed", "AMP Pages", "Mobile UX Optimization", "App Indexing", "Voice Search Ready", "Touch-Friendly Design"],
      results: "2-3 Months",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaListAlt className="w-8 h-8" />,
      title: "E-commerce SEO",
      description: "Product ranking optimization for UAE online stores and marketplaces",
      features: ["Product Schema", "Arabic Descriptions", "UAE Shopping Feeds", "Local Reviews", "Category Optimization", "Conversion Tracking"],
      results: "3-5 Months",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Enterprise SEO",
      description: "Advanced SEO strategies for large-scale UAE businesses and corporations",
      features: ["International SEO", "Brand Management", "Competitor Analysis", "Enterprise Analytics", "Multi-Location SEO", "Advanced Reporting"],
      results: "6-12 Months",
      color: "from-teal-500 to-teal-700"
    }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "UAE Market Analysis",
      description: "Comprehensive research of UAE search landscape, competitor analysis, and market opportunities",
      icon: FaChartBar,
      duration: "1 Week"
    },
    {
      step: "02",
      title: "Arabic Keyword Research",
      description: "Identify high-value Arabic and English keywords with strong commercial intent for UAE market",
      icon: FaSearch,
      duration: "2 Weeks"
    },
    {
      step: "03",
      title: "Technical Optimization",
      description: "Implement UAE-specific technical SEO improvements including speed, mobile, and Arabic support",
      icon: FaShieldAlt,
      duration: "3-4 Weeks"
    },
    {
      step: "04",
      title: "Content Strategy",
      description: "Create bilingual content optimized for UAE audience with cultural relevance and local insights",
      icon: FaUsers,
      duration: "Ongoing"
    },
    {
      step: "05",
      title: "Local SEO Setup",
      description: "Optimize for Google My Business UAE, local directories, and Emirates-specific platforms",
      icon: FaMapMarkerAlt,
      duration: "2 Weeks"
    },
    {
      step: "06",
      title: "Performance Tracking",
      description: "Detailed UAE-specific performance reports with actionable insights and ROI metrics",
      icon: FaChartLine,
      duration: "Monthly"
    }
  ];

  const industries = [
    {
      name: "Real Estate",
      keywords: "Dubai properties, UAE real estate, apartments for rent Dubai",
      competition: "High",
      potential: "Excellent",
      avgSearches: "50K+/month"
    },
    {
      name: "Healthcare",
      keywords: "Doctor in Abu Dhabi, hospitals Dubai, medical clinics UAE",
      competition: "Medium",
      potential: "High",
      avgSearches: "30K+/month"
    },
    {
      name: "Hospitality",
      keywords: "Hotels in Dubai, restaurants Abu Dhabi, UAE tourism",
      competition: "Very High",
      potential: "Excellent",
      avgSearches: "100K+/month"
    },
    {
      name: "E-commerce",
      keywords: "Online shopping UAE, Dubai stores, UAE delivery",
      competition: "High",
      potential: "Excellent",
      avgSearches: "80K+/month"
    },
    {
      name: "Education",
      keywords: "Schools in Dubai, UAE universities, courses Abu Dhabi",
      competition: "Medium",
      potential: "High",
      avgSearches: "25K+/month"
    },
    {
      name: "Automotive",
      keywords: "Car dealers Dubai, UAE car rental, automotive services",
      competition: "High",
      potential: "Good",
      avgSearches: "40K+/month"
    },
    {
      name: "Legal Services",
      keywords: "Lawyers in Dubai, UAE legal consultation, law firms",
      competition: "Medium",
      potential: "High",
      avgSearches: "15K+/month"
    },
    {
      name: "Finance",
      keywords: "Banks in UAE, Dubai financial services, investment UAE",
      competition: "High",
      potential: "Excellent",
      avgSearches: "35K+/month"
    },
    {
      name: "Technology",
      keywords: "IT services Dubai, software companies UAE, tech solutions",
      competition: "Medium",
      potential: "High",
      avgSearches: "20K+/month"
    }
  ];

  const seoTools = [
    { name: "Arabic Keywords Tool", icon: FaSearch, desc: "Specialized for UAE Arabic search terms" },
    { name: "Local Rank Tracker", icon: FaChartLine, desc: "Monitor rankings across UAE cities" },
    { name: "Competitor Analysis", icon: FaUsers, desc: "Track UAE competitors' strategies" },
    { name: "Google My Business", icon: FaGoogle, desc: "UAE business listing management" },
    { name: "Technical Audit", icon: FaShieldAlt, desc: "UAE hosting and speed optimization" },
    { name: "Content Analytics", icon: FaChartBar, desc: "Arabic content performance tracking" },
    { name: "Backlink Monitor", icon: FaGlobe, desc: "UAE-specific link building tracking" },
    { name: "Mobile Optimizer", icon: FaMobileAlt, desc: "Mobile performance for UAE users" }
  ];

  const stats = [
    { value: "95%", label: "Google UAE Market Share", icon: FaGoogle },
    { value: "70%", label: "Arabic Searches in UAE", icon: MdLanguage },
    { value: "85%", label: "Mobile Search Traffic", icon: FaMobileAlt },
    { value: "3x", label: "Higher Local Conversion", icon: FaBullseye }
  ];

  const whyChooseUs = [
    "Proven track record in UAE market",
    "Native Arabic SEO specialists",
    "Google Partner certified agency",
    "Data-driven strategies with measurable ROI",
    "UAE hosting and technical expertise",
    "Bilingual content optimization",
    "Local business knowledge",
    "Transparent monthly reporting"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Fully Responsive */}
      <section 
        className="relative min-h-screen sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-8 md:pt-10 pb-8 md:pb-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-float hidden md:block">
            <div className="text-white/10 text-4xl font-mono">SEO</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000 hidden lg:block">
            <div className="text-white/10 text-3xl">{'#1'}</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float delay-500 hidden xl:block">
            <div className="text-white/10 text-2xl">{'🔍'}</div>
          </div>
          
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 62, 62, 0.3) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-3 mb-6 px-4 sm:px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full w-fit">
                <FaGoogle className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
                  SEO Services • Dubai • UAE Market
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Rank #1 on Google</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Across UAE
                </span>
              </h1>

              <div className="mb-6 md:mb-8">
                <div className="relative h-10 sm:h-12 overflow-hidden">
                  {heroFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full text-lg sm:text-xl md:text-2xl font-bold text-white transition-all duration-1000 ${
                        index === activeFeature
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                We specialize in Arabic and English SEO strategies specifically designed for 
                the United Arab Emirates market. From Dubai to Abu Dhabi, dominate local search 
                results and capture high-intent customers.
              </p>

              <div className="mb-6 md:mb-8 bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-gray-300 text-xs sm:text-sm">Your Ranking Progress</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-xl sm:text-2xl">#{rankPosition}</span>
                      <MdTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="w-full h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 transition-all duration-1000"
                      style={{ width: `${((10 - rankPosition) / 9) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
                    <span className="text-gray-400">Monthly UAE Traffic Increase</span>
                    <span className="text-green-400 font-bold">+{trafficGrowth}%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact#project-form" aria-label="Get SEO consultation">
                  <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      GET FREE SEO AUDIT
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" aria-label="View SEO services">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold">
                    VIEW SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 line-clamp-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      <WaveDivider />

      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              UAE-Specific <span className="text-red-600">SEO Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO strategies tailored for dominating search results in the Emirates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
            {seoServices.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 ${
                  activeService === index ? 'scale-105 border-red-500 shadow-2xl ring-4 ring-red-100' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-lg -mx-2 sm:-mx-0">
                  {index + 1}
                </div>

                <div className={`mb-6 inline-flex p-4 sm:p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-gray-500">Expected Timeline</span>
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-100 text-red-700 text-xs sm:text-sm font-semibold rounded-full">
                      {service.results}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advanced <span className="text-red-600">SEO Tools</span> for UAE
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools and analytics for comprehensive UAE market optimization
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee hover:pause-marquee">
            {[...seoTools, ...seoTools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 sm:mx-4 group w-48 sm:w-64 h-40 sm:h-48"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-8 hover:border-red-500 hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col items-center justify-center hover:-translate-y-2">
                  <tool.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">{tool.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">{tool.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee { animation: marquee 50s linear infinite; }
          .pause-marquee { animation-play-state: paused !important; }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      <WaveDivider flip={true} />
{/* Professional 6-Step Process Section */}
<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/20 to-white"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Header */}
    <div className="text-center mb-16 sm:mb-20">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-200 rounded-full px-6 py-3 mb-6">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Strategic Process</span>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Our <span className="relative">
          <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Proven 6-Step</span>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-red-100/50 -skew-y-1 transform"></div>
        </span> SEO Framework
      </h2>
      <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
        A systematic approach designed specifically for UAE market domination
      </p>
    </div>

    {/* Process Timeline - Vertical Layout for Mobile, Horizontal for Desktop */}
    <div className="relative">
      {/* Connecting Line - Desktop */}
      <div className="hidden lg:block absolute top-24 left-12 right-12 h-0.5 bg-gradient-to-r from-red-500 via-red-400 to-red-500 z-0"></div>
      
      {/* Connecting Line - Mobile */}
      <div className="lg:hidden absolute top-0 left-8 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-600 z-0"></div>

      {/* Steps Container */}
      <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-6 lg:gap-8 relative">
        {seoProcess.map((step, index) => (
          <div 
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveProcessStep(index)}
            onMouseLeave={() => setActiveProcessStep(null)}
          >
            {/* Step Connector - Mobile */}
            <div className="lg:hidden absolute top-0 left-8 w-8 h-8 -translate-x-1/2">
              <div className="w-8 h-8 bg-white border-4 border-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProcessStep === index ? 'bg-red-500 scale-125' : 'bg-red-300'
                }`}></div>
              </div>
            </div>

            {/* Step Connector - Desktop */}
            <div className="hidden lg:block absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 bg-white border-4 border-red-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeProcessStep === index ? 'bg-red-500 scale-125' : 'bg-red-300'
                }`}></div>
              </div>
            </div>

            {/* Step Number Badge - Desktop */}
            <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-sm font-bold text-white">{step.step}</span>
              </div>
            </div>

            {/* Card Container */}
            <div className={`ml-16 lg:ml-0 lg:mt-24 transition-all duration-500 ${
              activeProcessStep === index ? 'lg:-translate-y-4' : ''
            }`}>
              <div className={`bg-white rounded-2xl border-2 p-6 shadow-lg transition-all duration-500 hover:shadow-2xl transform ${
                activeProcessStep === index 
                  ? 'border-red-500 shadow-2xl scale-105 lg:scale-110' 
                  : 'border-gray-200 hover:border-red-300'
              }`}>
                
                {/* Step Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeProcessStep === index 
                        ? 'bg-gradient-to-br from-red-500 to-red-700 shadow-lg' 
                        : 'bg-red-50'
                    }`}>
                      <step.icon className={`w-6 h-6 transition-all duration-300 ${
                        activeProcessStep === index ? 'text-white' : 'text-red-600'
                      }`} />
                    </div>
                    
                    {/* Step Number - Mobile */}
                    <div className="lg:hidden">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeProcessStep === index
                      ? 'bg-red-100 text-red-700 shadow-md'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <div className="flex items-center gap-2">
                      <FaClock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Step Title - Desktop */}
                <div className="hidden lg:block mb-4">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Step {step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Progress Indicator */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Progress Phase</span>
                    <span className="font-semibold">{index + 1}/6</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        activeProcessStep === index 
                          ? 'bg-gradient-to-r from-red-400 to-red-600' 
                          : 'bg-gradient-to-r from-red-300 to-red-400'
                      }`}
                      style={{ width: `${((index + 1) / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute inset-0 rounded-2xl border-2 pointer-events-none transition-all duration-300 ${
                  activeProcessStep === index 
                    ? 'border-red-400 opacity-100' 
                    : 'border-transparent opacity-0'
                }`}></div>
              </div>

              {/* Arrow Connector - Desktop */}
              {index < 5 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gray-300">
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4">
                    <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Process Flow Indicator */}
      <div className="mt-16 lg:mt-32 text-center">
        <div className="inline-flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeProcessStep === i 
                    ? 'bg-red-500 scale-125' 
                    : i < (activeProcessStep || 0) 
                    ? 'bg-red-400' 
                    : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-full shadow-xl inline-flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0"></div>
            </div>
            <span className="text-lg font-semibold tracking-wide">Proven Framework • 95% Client Success</span>
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0"></div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm max-w-md">
            Each phase builds upon the last, ensuring comprehensive optimization for UAE markets
          </p>
        </div>
      </div>
    </div>

    {/* Stats Banner */}
    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-300 hover:shadow-lg transition-all">
        <div className="text-3xl font-bold text-red-600 mb-2">6+</div>
        <div className="text-sm text-gray-600">Proven Steps</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-300 hover:shadow-lg transition-all">
        <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
        <div className="text-sm text-gray-600">Success Rate</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-300 hover:shadow-lg transition-all">
        <div className="text-3xl font-bold text-red-600 mb-2">3-6</div>
        <div className="text-sm text-gray-600">Months to Results</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-300 hover:shadow-lg transition-all">
        <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
        <div className="text-sm text-gray-600">Monitoring & Support</div>
      </div>
    </div>
  </div>

  {/* Background Decorations */}
  <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-3xl"></div>
</section>

      {/* Rest of sections remain the same... */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              SEO Opportunities in <span className="text-red-600">UAE Industries</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              High-potential sectors for SEO growth and market domination in the Emirates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.slice(0, 6).map((industry, index) => ( // Show only 6 for brevity
              <div key={index} className="group bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{industry.name}</h3>
                  <div className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold ${
                    industry.potential === 'Excellent' ? 'bg-green-100 text-green-700' :
                    industry.potential === 'High' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {industry.potential}
                  </div>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Popular Keywords:</div>
                  <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed line-clamp-2">"{industry.keywords}"</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Competition:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      industry.competition === 'Very High' ? 'bg-red-100 text-red-700' :
                      industry.competition === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {industry.competition}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Monthly Searches:</span>
                    <span className="text-sm font-bold text-red-600">{industry.avgSearches}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Our <span className="text-red-600">UAE SEO</span> Stands Out
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Unique advantages that make us the preferred choice for UAE SEO success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                  <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-20 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-red-500/30">
              <FaTrophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-white/90" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Rank #1 in UAE Search Results?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's develop a customized SEO strategy that puts your business at the top 
                of Google search results across the United Arab Emirates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/contact#project-form">
                  <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-red-600 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/40 overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      GET FREE SEO AUDIT
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
              </div>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Google Partner Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>UAE Market Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartLine className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Proven ROI Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UaeSeo;
  