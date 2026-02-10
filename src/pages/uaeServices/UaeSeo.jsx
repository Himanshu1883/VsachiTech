import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch, FaChartLine, FaMobileAlt, FaGlobe,
  FaCheckCircle, FaArrowRight, FaGoogle, FaMapMarkerAlt,
  FaListAlt, FaChartBar, FaBullseye, FaUsers,
  FaClock, FaShieldAlt, FaHandshake, FaTrophy
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
  const [searchTerm, setSearchTerm] = useState('');
  const [rankPosition, setRankPosition] = useState(1);
  const [trafficGrowth, setTrafficGrowth] = useState(0);

  // Animate ranking improvement
  useEffect(() => {
    const interval = setInterval(() => {
      setRankPosition(prev => {
        if (prev > 1) return prev - 1;
        return 1;
      });
      setTrafficGrowth(prev => {
        if (prev < 300) return prev + Math.floor(Math.random() * 20);
        return 300;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const uaeCities = [
    { name: "Dubai", rank: "1st", color: "from-red-500 to-red-600" },
    { name: "Abu Dhabi", rank: "2nd", color: "from-green-500 to-green-600" },
    { name: "Sharjah", rank: "3rd", color: "from-blue-500 to-blue-600" },
    { name: "Ajman", rank: "Top 5", color: "from-purple-500 to-purple-600" },
    { name: "Ras Al Khaimah", rank: "Top 10", color: "from-yellow-500 to-yellow-600" },
    { name: "Fujairah", rank: "Top 10", color: "from-pink-500 to-pink-600" }
  ];

  const seoServices = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Local SEO for UAE",
      description: "Dominate Google search results in your target UAE cities",
      features: ["Google My Business UAE", "Local Citations", "Arabic Keywords", "City-Specific Pages"],
      results: "3-6 Months"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Technical SEO Audit",
      description: "Complete website analysis for UAE market performance",
      features: ["Site Speed Optimization", "Mobile-First Indexing", "Arabic Schema Markup", "UAE Hosting Check"],
      results: "2-4 Weeks"
    },
    {
      icon: <MdLanguage className="w-8 h-8" />,
      title: "Arabic SEO",
      description: "Specialized SEO for Arabic-speaking audience in UAE",
      features: ["Arabic Keyword Research", "RTL Optimization", "Arabic Content Strategy", "Local Dialect Focus"],
      results: "4-8 Months"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile SEO",
      description: "Optimize for UAE's smartphone-first users",
      features: ["Mobile Page Speed", "AMP Pages", "Mobile UX", "App Indexing"],
      results: "2-3 Months"
    },
    {
      icon: <FaListAlt className="w-8 h-8" />,
      title: "E-commerce SEO",
      description: "Product ranking optimization for UAE online stores",
      features: ["Product Schema", "Arabic Descriptions", "UAE Shopping Feeds", "Local Reviews"],
      results: "3-5 Months"
    },
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Enterprise SEO",
      description: "Advanced SEO strategies for UAE large businesses",
      features: ["International SEO", "Brand Management", "Competitor Analysis", "Enterprise Analytics"],
      results: "6-12 Months"
    }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "UAE Market Analysis",
      description: "Comprehensive research of UAE search landscape",
      icon: FaChartBar,
      duration: "1 Week"
    },
    {
      step: "02",
      title: "Arabic Keyword Research",
      description: "Identify high-value Arabic keywords for UAE market",
      icon: FaSearch,
      duration: "2 Weeks"
    },
    {
      step: "03",
      title: "Technical Optimization",
      description: "Implement UAE-specific technical SEO improvements",
      icon: FaShieldAlt,
      duration: "3-4 Weeks"
    },
    {
      step: "04",
      title: "Content Strategy",
      description: "Create Arabic content optimized for UAE audience",
      icon: FaUsers,
      duration: "Ongoing"
    },
    {
      step: "05",
      title: "Local SEO Setup",
      description: "Optimize for Google My Business UAE and local directories",
      icon: FaMapMarkerAlt,
      duration: "2 Weeks"
    },
    {
      step: "06",
      title: "Monthly Reporting",
      description: "Detailed UAE-specific performance reports",
      icon: FaChartLine,
      duration: "Monthly"
    }
  ];

  const industries = [
    {
      name: "Real Estate",
      keywords: "Dubai properties, UAE real estate, apartments for rent Dubai",
      competition: "High",
      potential: "Excellent"
    },
    {
      name: "Healthcare",
      keywords: "Doctor in Abu Dhabi, hospitals Dubai, medical clinics UAE",
      competition: "Medium",
      potential: "High"
    },
    {
      name: "Hospitality",
      keywords: "Hotels in Dubai, restaurants Abu Dhabi, UAE tourism",
      competition: "Very High",
      potential: "Excellent"
    },
    {
      name: "E-commerce",
      keywords: "Online shopping UAE, Dubai stores, UAE delivery",
      competition: "High",
      potential: "Excellent"
    },
    {
      name: "Education",
      keywords: "Schools in Dubai, UAE universities, courses Abu Dhabi",
      competition: "Medium",
      potential: "High"
    },
    {
      name: "Automotive",
      keywords: "Car dealers Dubai, UAE car rental, automotive services",
      competition: "High",
      potential: "Good"
    }
  ];

  const seoTools = [
    { name: "Arabic Keywords Tool", icon: FaSearch, desc: "Specialized for UAE Arabic search terms" },
    { name: "Local Rank Tracker", icon: FaChartLine, desc: "Monitor rankings across UAE cities" },
    { name: "Competitor Analysis", icon: FaUsers, desc: "Track UAE competitors' strategies" },
    { name: "Google My Business", icon: FaGoogle, desc: "UAE business listing management" },
    { name: "Technical Audit", icon: FaShieldAlt, desc: "UAE hosting and speed optimization" },
    { name: "Content Analytics", icon: FaChartBar, desc: "Arabic content performance tracking" }
  ];

  const stats = [
    { value: "95%", label: "Google UAE Market Share", icon: FaGoogle },
    { value: "70%", label: "Arabic Searches in UAE", icon: MdLanguage },
    { value: "85%", label: "Mobile Search Traffic", icon: FaMobileAlt },
    { value: "3x", label: "Higher Local Conversion", icon: FaBullseye }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Search Engine Simulation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Search Interface */}
        <div className="absolute inset-0">
          {/* Search Bar Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #e53e3e22 1px, transparent 1px),
                               linear-gradient(to bottom, #e53e3e22 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Search Terms */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="text-red-400/30 text-lg font-mono">"دبي عقارات"</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
            <div className="text-green-400/30 text-lg font-mono">"أبوظبي فنادق"</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
            <div className="text-blue-400/30 text-lg font-mono">"الشارقة خدمات"</div>
          </div>
          
          {/* Animated Search Results */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 opacity-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3">
              <div className="h-4 bg-white/20 rounded animate-pulse"></div>
              <div className="h-3 bg-white/20 rounded animate-pulse delay-100"></div>
              <div className="h-3 bg-white/20 rounded animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              {/* UAE SEO Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                <FaGoogle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold tracking-widest text-green-400 uppercase">
                  Google SEO • UAE Market • Arabic Focus
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-white">Dominate UAE</span>
                <span className="block bg-gradient-to-r from-green-400 via-green-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Search Results
                </span>
                <span className="block text-white mt-2">In Arabic & English</span>
              </h1>

              {/* Interactive Search Demo */}
              <div className="mb-10 bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaSearch className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">UAE Search Simulation</span>
                </div>
                
                {/* Search Input */}
                <div className="relative mb-6">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <FaSearch className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type your business keywords in Arabic or English..."
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Search Results */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Your Current Ranking</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 to-green-500"
                          style={{ width: `${(10 - rankPosition) * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-bold text-lg">{rankPosition}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Monthly UAE Traffic</span>
                    <div className="flex items-center gap-2">
                      <MdTrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-white font-bold text-lg">+{trafficGrowth}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                We specialize in Arabic and English SEO strategies specifically designed for 
                the United Arab Emirates market. From Dubai to Abu Dhabi, we help businesses 
                climb Google rankings and capture local search traffic.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" aria-label="Get SEO consultation for UAE">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/40 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      GET SEO ANALYSIS
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" aria-label="Explore SEO services">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-lg font-semibold">
                    VIEW SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* UAE Cities SEO Ranking Visualization */}
              <div className="relative w-full h-96">
                {/* Dubai - Top Position */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 animate-pulse">
                      <span className="text-white font-bold text-xl">#1</span>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-green-300 font-bold">Dubai</div>
                      <div className="text-xs text-gray-400">SEO Priority</div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Abu Dhabi - Second Position */}
                <div className="absolute top-2/3 left-1/4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40">
                      <span className="text-white font-bold">#2</span>
                    </div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-blue-300 font-bold text-sm">Abu Dhabi</div>
                    </div>
                  </div>
                </div>

                {/* Sharjah - Third Position */}
                <div className="absolute top-2/3 right-1/4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/40">
                      <span className="text-white font-bold">#3</span>
                    </div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-purple-300 font-bold text-sm">Sharjah</div>
                    </div>
                  </div>
                </div>

                {/* Other Emirates */}
                <div className="absolute bottom-4 left-1/4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                    <span className="text-white text-xs">Top 5</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-1/4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <span className="text-white text-xs">Top 10</span>
                  </div>
                </div>

                {/* Connecting Search Lines */}
                <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <line 
                    x1="50%" y1="25%" 
                    x2="25%" y2="66%" 
                    stroke="url(#seoLine1)" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                  />
                  <line 
                    x1="50%" y1="25%" 
                    x2="75%" y2="66%" 
                    stroke="url(#seoLine2)" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                  />
                  <defs>
                    <linearGradient id="seoLine1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#48bb78" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4299e1" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="seoLine2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#48bb78" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#9f7aea" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* UAE SEO Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/50 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-green-400" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(5px); }
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

      {/* SEO Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UAE-Specific <span className="text-green-600">SEO Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO strategies tailored for the United Arab Emirates market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Expected Results</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      {service.results}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* SEO Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">6-Step SEO Process</span> for UAE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to dominate UAE search rankings
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 lg:w-1.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 rounded-full"></div>

            <div className="space-y-12">
              {seoProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 lg:left-1/2 transform ${index % 2 === 0 ? 'lg:-translate-x-1/2' : 'lg:-translate-x-1/2'} w-12 h-12 bg-white border-4 border-green-500 rounded-full flex items-center justify-center z-10 shadow-xl`}>
                    <div className="text-sm font-bold text-gray-900">{step.step}</div>
                  </div>

                  {/* Step Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} ml-12 lg:ml-0 lg:mt-0`}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-500 hover:shadow-xl transition-all duration-500">
                      <div className="mb-4 inline-flex p-3 bg-green-100 rounded-xl">
                        <step.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
                        <FaClock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UAE Industries SEO Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SEO Opportunities in <span className="text-green-600">UAE Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-potential sectors for SEO growth in the Emirates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-green-500 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    industry.potential === 'Excellent' 
                      ? 'bg-green-100 text-green-700'
                      : industry.potential === 'High'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {industry.potential}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Top Keywords:</div>
                  <p className="text-gray-700 text-sm italic">"{industry.keywords}"</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Competition:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      industry.competition === 'Very High'
                        ? 'bg-red-100 text-red-700'
                        : industry.competition === 'High'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {industry.competition}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <FaTrophy className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Rank #1 in UAE Search?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's develop a customized SEO strategy that puts your business at the top 
              of Google search results across the United Arab Emirates
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" aria-label="Get SEO consultation">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/40 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  GET FREE SEO AUDIT
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>
            <Link to="/uaeservices" aria-label="Explore more UAE services">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-lg font-semibold">
                VIEW ALL SERVICES
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-5 h-5 text-green-600" />
                <span>Google Partner Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHandshake className="w-5 h-5 text-green-600" />
                <span>UAE Market Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaChartLine className="w-5 h-5 text-green-600" />
                <span>Data-Driven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UaeSeo;