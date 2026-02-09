import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaHandshake, FaUsers, FaAward, FaRocket, FaGlobe, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import { MdTrendingUp, MdLocationOn, MdCheckCircle, MdWork } from 'react-icons/md';

const UAEMarket = () => {
  const stats = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      value: "85%",
      label: "Growth Rate",
      description: "Year-over-year increase in UAE client acquisition"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      value: "50+",
      label: "Local Partnerships",
      description: "Strategic alliances with UAE businesses"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: "30+",
      label: "Team Members",
      description: "Dedicated UAE market specialists"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      value: "98%",
      label: "Client Satisfaction",
      description: "Positive feedback from UAE enterprises"
    }
  ];

  const services = [
    "AI-Powered Multilingual Solutions",
    "UAE-Compliant Web Design",
    "Local SEO Optimization",
    "UX/UI Design",
    "E-Commerce Solutions for Gulf Market",
    "Dubai Digital Transformation"
  ];

  const timelineSteps = [
    {
      year: "2024",
      title: "Market Research & Planning",
      description: "Comprehensive analysis of UAE digital landscape, identifying key opportunities and establishing strategic partnerships.",
      icon: <FaGlobe className="w-5 h-5 text-white" />,
      achievements: ["Market Analysis", "Partnership Setup", "Strategy Development"]
    },
    {
      year: "2025",
      title: "Strategic UAE Launch",
      description: "Successfully established our Dubai headquarters, assembling a specialized team with deep understanding of UAE market dynamics.",
      icon: <FaRocket className="w-5 h-5 text-white" />,
      achievements: ["Dubai HQ Setup", "Team Assembly", "Local Compliance"]
    },
    {
      year: "2026",
      title: "Growth & Expansion",
      description: "Expanded services across Abu Dhabi and Sharjah, establishing multiple client success stories and local recognition.",
      icon: <MdTrendingUp className="w-5 h-5 text-white" />,
      achievements: ["Multi-City Expansion", "Client Portfolio", "Brand Recognition"]
    },
    {
      year: "2027",
      title: "Market Leadership",
      description: "Established as a leading digital partner for UAE enterprises, driving digital transformation with cutting-edge solutions.",
      icon: <FaLightbulb className="w-5 h-5 text-white" />,
      achievements: ["Industry Leadership", "Innovation Awards", "Enterprise Solutions"]
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Decorative Elements - Responsive */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-x-16 sm:-translate-x-24 md:-translate-x-32 -translate-y-16 sm:-translate-y-24 md:-translate-y-32" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-red-50 to-transparent rounded-full translate-x-24 sm:translate-x-32 md:translate-x-40 lg:translate-x-48 translate-y-24 sm:translate-y-32 md:translate-y-40 lg:translate-y-48" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <MdLocationOn className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-red-600 uppercase">
              UAE Market Journey
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Our Strategic Growth in the
            <span className="text-red-600 block sm:inline"> United Arab Emirates</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            From market entry to market leadership, we've been strategically expanding our presence in the UAE, 
            delivering innovative digital solutions tailored to the region's dynamic business ecosystem.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left Side - Enhanced Progress Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-600 via-red-500 to-red-400 rounded-full">
              {/* Progress Fill Animation */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
            </div>
            
            {/* Timeline Steps */}
            <div className="space-y-8 sm:space-y-10">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative pl-14 sm:pl-20 group">
                  {/* Step Connector Line */}
                  <div className="absolute left-6 sm:left-8 top-8 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent group-hover:from-red-600 group-hover:to-transparent transition-all duration-500"></div>
                  
                  {/* Step Indicator */}
                  <div className="absolute left-4 sm:left-6 top-4">
                    <div className={`relative w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br ${index === 0 ? 'from-red-700 to-red-600' : index === 1 ? 'from-red-600 to-red-500' : index === 2 ? 'from-red-500 to-red-400' : 'from-red-400 to-red-300'} border-4 border-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex items-center justify-center`}>
                      {step.icon}
                      {/* Animated Ring Effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-red-600 opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-red-600/30 transition-all duration-500 group-hover:-translate-y-1">
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className={`px-4 py-1.5 bg-gradient-to-r ${index === 0 ? 'from-red-700 to-red-600' : index === 1 ? 'from-red-600 to-red-500' : index === 2 ? 'from-red-500 to-red-400' : 'from-red-400 to-red-300'} text-white text-xs sm:text-sm font-bold rounded-full shadow-sm`}>
                        {step.year}
                      </div>
                      <div className="h-0.5 flex-grow bg-gradient-to-r from-gray-100 to-transparent"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {step.description}
                    </p>

                    {/* Achievements List */}
                    <div className="flex flex-wrap gap-2">
                      {step.achievements.map((achievement, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full group-hover:bg-red-100 group-hover:text-red-800 transition-all duration-300"
                        >
                          <MdCheckCircle className="w-3 h-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Right Side - Services & Stats */}
          <div className="space-y-8 sm:space-y-10">
            {/* Services Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Tailored Solutions for the UAE Market
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-xl p-4 sm:p-5 hover:bg-gradient-to-br hover:from-red-50 hover:to-white transition-all duration-300 border border-gray-200 hover:border-red-600 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-300"></div>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-red-700 transition-colors">
                        {service}
                      </span>
                    </div>
                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE Market Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-red-600/20 rounded-lg">
                  <MdWork className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold">UAE Market Impact</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-colors">
                        <div className="text-red-400 group-hover:text-red-300 transition-colors">
                          {stat.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-300 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-tight">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Stats Summary */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  Continuously growing to serve the UAE market better
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-red-600 rounded-full"></div>
                <h4 className="text-lg font-bold text-gray-900">Quick Facts</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-sm text-gray-600">Year in UAE</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Local Support</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-red-600">AED</div>
                  <div className="text-sm text-gray-600">Local Currency</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-gray-600">UAE Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UAE Commitment Statement */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 border border-red-200 shadow-lg overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-50 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-red-100 rounded-full">
                <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Commitment to the UAE Market
              </h3>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              We're not just another digital agency in the UAE. We're committed partners 
              in your growth journey, combining global expertise with local insight to 
              deliver digital solutions that drive real business impact in Dubai and 
              across the Emirates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              {[
                { label: "Cultural Adaptation", icon: <FaGlobe className="w-4 h-4 text-red-600" /> },
                { label: "UAE Compliance Expertise", icon: <FaShieldAlt className="w-4 h-4 text-red-600" /> },
                { label: "Local Market Analytics", icon: <FaChartLine className="w-4 h-4 text-red-600" /> },
                { label: "Arabic Language Support", icon: <FaUsers className="w-4 h-4 text-red-600" /> }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full shadow-sm hover:shadow-md hover:border-red-600 hover:bg-red-100 transition-all duration-300"
                >
                  {item.icon}
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <Link to="/uaeservices" className="group">
            <button className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 text-sm sm:text-base font-semibold overflow-hidden">
              <span className="relative z-10">EXPLORE OUR UAE SERVICES</span>
              <span className="relative z-10 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black group-hover:bg-white transition-colors"></span>
              
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UAEMarket;