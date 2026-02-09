import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaHandshake, FaUsers, FaAward } from 'react-icons/fa';
import { MdTrendingUp, MdLocationOn } from 'react-icons/md';

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
      value: "120+",
      label: "Local Partnerships",
      description: "Strategic alliances with UAE businesses"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: "40+",
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

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Decorative Elements - Responsive */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-x-16 sm:-translate-x-24 md:-translate-x-32 -translate-y-16 sm:-translate-y-24 md:-translate-y-32" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-red-50 to-transparent rounded-full translate-x-24 sm:translate-x-32 md:translate-x-40 lg:translate-x-48 translate-y-24 sm:translate-y-32 md:translate-y-40 lg:translate-y-48" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <MdLocationOn className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-red-500 uppercase">
              UAE Market Focus
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Expanding Our Digital Footprint in the
            <span className="text-red-500 block sm:inline"> UAE Market</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Since 2025, we've been strategically growing our presence in the UAE, 
            delivering cutting edge digital solutions that resonate with the region's 
            dynamic business landscape.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left Side - Progress Timeline */}
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-gray-200" />
            
            <div className="space-y-8 sm:space-y-12">
              {/* 2025 Milestone */}
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-r from-red-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <div className="px-3 sm:px-4 py-1 bg-red-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                      2025
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">Market Entry</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Strategic UAE Launch
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Successfully established our Dubai headquarters, assembling a specialized 
                    team with deep understanding of UAE market dynamics, regulations, and 
                    consumer behavior.
                  </p>
                </div>
              </div>

              {/* 2025 Progress */}
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-r from-red-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <MdTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-500">Current Progress</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Accelerated Growth & Recognition
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Rapid client acquisition across Dubai, Abu Dhabi, and Sharjah. 
                    Recognized for delivering culturally adapted, high performance digital 
                    solutions that exceed regional expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Services & Stats */}
          <div>
            <div className="mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Tailored Solutions for the UAE Market
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-red-50 transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE Market Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">UAE Market Impact</h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-red-400">
                        <div className="w-6 h-6 sm:w-8 sm:h-8">
                          {stat.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-tight">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* UAE Commitment Statement */}
        <div className="bg-gradient-to-r from-red-50 to-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 border border-red-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Commitment to the UAE Market
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              We're not just another digital agency in the UAE. We're committed partners 
              in your growth journey, combining global expertise with local insight to 
              deliver digital solutions that drive real business impact in Dubai and 
              across the Emirates.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full" />
                <span>Cultural Adaptation</span>
              </div>
             
              <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full" />
                <span>UAE Compliance Expertise</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full" />
                <span>Local Market Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <Link to="/uaeservices" className="w-full max-w-sm sm:max-w-none">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base">
              EXPLORE OUR UAE SERVICES
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black"></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UAEMarket;