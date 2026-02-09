import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaHandshake, FaUsers, FaAward } from 'react-icons/fa';
import { MdTrendingUp, MdLocationOn } from 'react-icons/md';

const UAEMarketFocus = () => {
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
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-50 to-transparent rounded-full translate-x-48 translate-y-48" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <MdLocationOn className="w-6 h-6 text-red-500" />
            <span className="text-sm font-semibold tracking-widest text-red-500 uppercase">
              UAE Market Focus
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Expanding Our Digital Footprint in the
            <span className="text-red-500"> UAE Market</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2025, we've been strategically growing our presence in the UAE, 
            delivering cutting edge digital solutions that resonate with the region's 
            dynamic business landscape.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Progress Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-gray-200" />
            
            <div className="space-y-12">
              {/* 2025 Milestone */}
              <div className="relative pl-16">
                <div className="absolute left-6 top-1 w-5 h-5 bg-red-500 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-4 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                      2025
                    </div>
                    <span className="text-sm font-medium text-gray-500">Market Entry</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Strategic UAE Launch
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Successfully established our Dubai headquarters, assembling a specialized 
                    team with deep understanding of UAE market dynamics, regulations, and 
                    consumer behavior.
                  </p>
                </div>
              </div>

              {/* 2025 Progress */}
              <div className="relative pl-16">
                <div className="absolute left-6 top-1 w-5 h-5 bg-red-500 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MdTrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-500">Current Progress</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Accelerated Growth & Recognition
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Tailored Solutions for the UAE Market
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE Market Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">UAE Market Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="text-red-400">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* UAE Commitment Statement */}
        <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-10 border border-red-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to the UAE Market
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're not just another digital agency in the UAE. We're committed partners 
              in your growth journey, combining global expertise with local insight to 
              deliver digital solutions that drive real business impact in Dubai and 
              across the Emirates.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Cultural Adaptation</span>
              </div>
             
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>UAE Compliance Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Local Market Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Button */}
        <div className="flex justify-center mt-20">
          <Link to="/uaeservices">
            <button className="flex items-center gap-3 px-8 py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
              EXPLORE OUR UAE SERVICES
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UAEMarketFocus;