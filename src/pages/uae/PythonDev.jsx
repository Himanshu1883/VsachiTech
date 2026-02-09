import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPython, FaCode, FaServer, FaDatabase, FaRobot, 
  FaChartLine, FaCloud, FaShieldAlt, FaUsers, FaCheckCircle,
  FaArrowRight, FaClock, FaHandshake, FaAward,
  FaGlobe, FaMobileAlt, FaShoppingCart, FaSearch
} from 'react-icons/fa';
import { MdLocationOn, MdSpeed, MdTrendingUp, MdVerified, MdWork } from 'react-icons/md';

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

const PythonDev = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: "Python", icon: FaPython, color: "text-blue-600" },
    { name: "Django", icon: FaServer, color: "text-green-600" },
    { name: "FastAPI", icon: FaCode, color: "text-teal-600" },
    { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-700" },
    { name: "AWS", icon: FaCloud, color: "text-orange-600" },
    { name: "Docker", icon: FaShieldAlt, color: "text-blue-500" },
    { name: "AI/ML", icon: FaRobot, color: "text-purple-600" },
    { name: "Data Science", icon: FaChartLine, color: "text-red-600" }
  ];

  const pythonServices = [
    {
      title: "Web Development",
      desc: "Scalable Python web applications for UAE businesses",
      projects: "24+ UAE Projects",
      features: ["Django", "Flask", "FastAPI", "REST APIs"],
      icon: FaGlobe
    },
    {
      title: "AI & Automation",
      desc: "Intelligent solutions automating UAE business processes",
      projects: "18+ AI Solutions",
      features: ["Machine Learning", "Automation", "Chatbots", "Data Analysis"],
      icon: FaRobot
    },
    {
      title: "Data Engineering",
      desc: "Robust data pipelines for UAE enterprise needs",
      projects: "16+ Data Systems",
      features: ["ETL Pipelines", "Big Data", "Analytics", "Data Warehousing"],
      icon: FaChartLine
    },
    {
      title: "FinTech Solutions",
      desc: "Secure financial applications for UAE's banking sector",
      projects: "12+ FinTech Apps",
      features: ["Payment Systems", "Risk Analysis", "Compliance", "Security"],
      icon: FaShieldAlt
    },
    {
      title: "E-commerce Platforms",
      desc: "High-performance online stores for UAE market",
      projects: "22+ E-commerce",
      features: ["Shopping Carts", "Payment Gateways", "Inventory", "Analytics"],
      icon: FaShoppingCart
    },
    {
      title: "Mobile Backends",
      desc: "Powerful APIs for UAE mobile applications",
      projects: "15+ Mobile Apps",
      features: ["REST APIs", "WebSocket", "Push Notifications", "Security"],
      icon: FaMobileAlt
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Discovery Call",
      desc: "Understand your UAE project requirements",
      icon: FaHandshake,
      duration: "1-2 Days"
    },
    {
      step: "02",
      title: "Talent Matching",
      desc: "Match with pre-vetted Python experts",
      icon: FaUsers,
      duration: "1-3 Days"
    },
    {
      step: "03",
      title: "Technical Interview",
      desc: "Assess skills with UAE-relevant challenges",
      icon: FaCode,
      duration: "2-3 Days"
    },
    {
      step: "04",
      title: "Onboarding",
      desc: "Seamless integration with your UAE team",
      icon: FaCheckCircle,
      duration: "1 Day"
    }
  ];

  const uaeProjects = [
    {
      industry: "Real Estate",
      project: "Dubai Property Management Platform",
      tech: ["Python", "Django", "PostgreSQL", "AWS"],
      duration: "6 months",
      client: "Major Dubai Developer"
    },
    {
      industry: "E-commerce",
      project: "UAE Online Retail System",
      tech: ["Python", "FastAPI", "MongoDB", "Docker"],
      duration: "4 months",
      client: "UAE Retail Chain"
    },
    {
      industry: "Healthcare",
      project: "Abu Dhabi Medical Data System",
      tech: ["Python", "Flask", "MySQL", "Redis"],
      duration: "8 months",
      client: "Healthcare Provider"
    },
    {
      industry: "Logistics",
      project: "Sharjah Shipping Management",
      tech: ["Python", "Django REST", "PostgreSQL", "Celery"],
      duration: "5 months",
      client: "Logistics Company"
    }
  ];

  const benefits = [
    "Arabic-speaking Python developers available",
    "Deep understanding of UAE business culture",
    "TDRA compliance expertise built-in",
    "Local UAE hosting and infrastructure",
    "24/7 support aligned with UAE timezone",
    "Competitive AED-based pricing"
  ];

  const stats = [
    { value: "50+", label: "Python Projects in UAE", icon: FaPython },
    { value: "98%", label: "Client Satisfaction", icon: FaAward },
    { value: "40+", label: "Python Developers", icon: FaUsers },
    { value: "3-4", label: "Weeks to Hire", icon: FaClock }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with UAE Skyline Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Black Tint */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/uae-skyline.jpg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          {/* UAE Location Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-full">
            <MdLocationOn className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
              Dubai • Abu Dhabi • Sharjah
            </span>
          </div>


          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Python Excellence</span>
            <span className="text-red-400 block mt-2">For UAE's Digital</span>
            <span className="block mt-2">Transformation</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hire pre-vetted Python developers who understand the unique demands of the 
            UAE market, delivering scalable solutions that thrive in Dubai's competitive landscape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" aria-label="Hire Python developers for UAE projects">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  HIRE PYTHON DEVELOPERS
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>
            <Link to="#services" aria-label="Explore Python services for UAE">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                EXPLORE SERVICES
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" aria-hidden="true"></span>
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Python Stack <span className="text-red-600">Mastered for UAE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our developers specialize in Python technologies optimized for UAE's digital infrastructure
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Infinite Marquee */}
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className="group mx-4 bg-white border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-44"
                  >
                    <tech.icon className={`w-12 h-12 mx-auto mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900">{tech.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Static Grid for Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:hidden mt-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-xl p-4 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <tech.icon className={`w-8 h-8 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-900">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below marquee */}
          <div className="text-center mt-12">
          
            <Link to="/contact#project-form" aria-label="Talk to our Python experts">
              <button className="inline-flex items-center gap-3 px-8 py-4 border border-gray-950 text-gray-950 rounded-full hover:bg-gray-950 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                TALK TO PYTHON EXPERTS
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-950" aria-hidden="true"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Marquee Animation CSS */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            display: flex;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <WaveDivider flip={true} />

      {/* Python Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Python Solutions <span className="text-red-600">for UAE Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored Python development services designed for UAE's unique business landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pythonServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex p-4 bg-red-50 rounded-xl">
                  <service.icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
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

      {/* UAE Projects Showcase */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Python Success Stories <span className="text-red-600">in UAE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real Python projects delivered for UAE businesses across various sectors
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
                  <span className="text-sm text-gray-600">Python Expertise Applied</span>
                  <div className="flex items-center gap-2 text-red-600">
                    <FaPython className="w-5 h-5" />
                    <span className="font-semibold">Successfully Delivered</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

         {/* Hiring Process */}
      <section className="py-20 relative overflow-hidden bg-black">
        {/* Background */}
            <div
                className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center opacity-70"
                aria-hidden
            />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Streamlined <span className="text-red-400">Hiring Process</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our proven 4-step process to connect you with the perfect Python talent in UAE
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline Line with Glow Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-300 shadow-lg shadow-red-500/30">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-300 animate-pulse"></div>
            </div>

            <div className="space-y-12">
              {hiringProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Enhanced Timeline Dot with Glow */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-2xl shadow-red-500/40">
                    <div className="text-sm font-bold text-gray-900">{step.step}</div>
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-30 animate-ping"></div>
                  </div>

                  {/* Enhanced Step Card with Glass Effect */}
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

          {/* Decorative Elements */}
          <div className="mt-20 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-500/30">
                4 Simple Steps • Fast Results • UAE Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-red-600">UAE Python Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique advantages of hiring Python developers through Vsachi Tech UAE
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
                <div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build with Python in UAE?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how our UAE-based Python experts can transform your digital vision into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" aria-label="Start your Python project in UAE">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  START YOUR UAE PYTHON PROJECT
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>
            <Link to="/uaeservices" aria-label="Explore more UAE services">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-8 py-4 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                EXPLORE UAE SERVICES
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-900" aria-hidden="true"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PythonDev;