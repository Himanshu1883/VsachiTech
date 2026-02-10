import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRobot, FaComments, FaChartLine, FaCheckCircle,
  FaArrowRight, FaClock, FaDollarSign, FaUsers,
  FaShieldAlt, FaHandshake, FaTrophy, FaWhatsapp,
  FaMobileAlt, FaShoppingCart, FaHeadset, FaCalendarAlt,
  FaFacebookMessenger, FaInstagram, FaTelegram, FaLanguage,
  FaUserCheck, FaBrain, FaSync, FaBullseye, FaChartBar
} from 'react-icons/fa';
import { MdSpeed, MdSupportAgent, MdChat, MdSmartToy } from 'react-icons/md';
import { SiOpenai } from 'react-icons/si';
import { FaMicrosoft } from "react-icons/fa";
// Import tech stack icons for Chatbot tools
import { 
  SiGoogleanalytics, SiGoogleads, SiDialogflow, 
  SiBmcsoftware, SiAmazonwebservices,
  SiTensorflow, SiPytorch
} from 'react-icons/si';

import usePageTitle from '../../components/hooks/usePageTitle';
import useSEO from '../../components/hooks/useSEO';

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

// Chatbot Tools Marquee Component
const ChatbotToolsMarquee = () => {
  usePageTitle("AI Chatbot Development UAE - Dubai Arabic Chatbot Services");
useSEO({
  title: 'AI Chatbot Development UAE - Dubai Arabic Chatbot Services',
  description: 'AI Chatbot Development in UAE for Dubai & Abu Dhabi businesses. Arabic/English chatbots, 24/7 customer support, WhatsApp Business integration.',
  canonical: 'https://vsachitech.com/uaeservices/uae-chatbots'
});
  const tools = [
    { icon: SiDialogflow, name: "Dialogflow", color: "text-blue-500" },
    { icon: SiBmcsoftware, name: "IBM Watson", color: "text-blue-600" },
    { icon: FaMicrosoft, name: "Azure AI", color: "text-blue-400" },
    { icon: SiAmazonwebservices, name: "AWS Lex", color: "text-yellow-600" },
    { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-600" },
    { icon: SiPytorch, name: "PyTorch", color: "text-red-600" },
    { icon: SiGoogleanalytics, name: "Analytics", color: "text-orange-500" },
    { icon: SiOpenai, name: "OpenAI", color: "text-green-500" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 to-black py-8">
      {/* Gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-red-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-red-900 to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-red-500/50 hover:bg-white/20 transition-all duration-300 group"
          >
            <tool.icon className={`w-8 h-8 ${tool.color} mr-3 group-hover:scale-110 transition-transform duration-300`} />
            <span className="text-white font-semibold text-lg">{tool.name}</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

const UaeChatbot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [responseTime, setResponseTime] = useState(5);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate through features
  const heroFeatures = [
    "24/7 Arabic Chatbot Support",
    "WhatsApp Business AI Bots",
    "AI-Powered Lead Generation",
    "Multilingual UAE Customer Service"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate chatbot performance metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setResponseTime(prev => {
        if (prev > 0.5) return prev - 0.5;
        return 0.5;
      });
      setSatisfactionRate(prev => {
        if (prev < 98) return prev + 2.45;
        return 98;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const chatbotServices = [
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp Business AI",
      description: "Deploy intelligent chatbots on WhatsApp to handle UAE customer inquiries 24/7 in Arabic & English",
      features: ["Instant Responses", "Order Processing", "Booking System", "Product Catalog", "Payment Links", "CRM Sync"],
      results: "2-3 Weeks Setup",
      gradient: "from-red-500 to-orange-500",
      color: "bg-red-50"
    },
    {
      icon: <MdChat className="w-8 h-8" />,
      title: "Website Live Chat AI",
      description: "Intelligent chat widgets for your website that capture leads and answer questions instantly",
      features: ["Lead Qualification", "FAQ Automation", "Smart Routing", "Live Handoff", "Multi-language", "Conversion Tracking"],
      results: "1-2 Weeks Setup",
      gradient: "from-orange-500 to-yellow-500",
      color: "bg-orange-50"
    },
    {
      icon: <FaLanguage className="w-8 h-8" />,
      title: "Arabic AI Chatbots",
      description: "Specialized Arabic language chatbots that understand dialects and cultural nuances for UAE market",
      features: ["Arabic NLP", "Dialect Recognition", "Cultural Context", "Bilingual Support", "Right-to-Left UI", "Local References"],
      results: "3-4 Weeks Setup",
      gradient: "from-yellow-500 to-green-500",
      color: "bg-yellow-50"
    },
    {
      icon: <FaFacebookMessenger className="w-8 h-8" />,
      title: "Social Media Bots",
      description: "Automate customer engagement on Instagram, Facebook Messenger with intelligent AI responses",
      features: ["Instagram DM", "Facebook Messenger", "Auto-Replies", "Story Responses", "Comment Bot", "Lead Collection"],
      results: "2-3 Weeks Setup",
      gradient: "from-green-500 to-blue-500",
      color: "bg-green-50"
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-commerce Shopping AI",
      description: "Smart shopping assistants that guide customers through product discovery to purchase",
      features: ["Product Search", "Recommendations", "Cart Assistance", "Order Tracking", "Size Guide", "Checkout Help"],
      results: "3-4 Weeks Setup",
      gradient: "from-blue-500 to-purple-500",
      color: "bg-blue-50"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Customer Support AI",
      description: "Enterprise-grade support bots that handle tier-1 queries and escalate complex issues",
      features: ["Ticket Creation", "Knowledge Base", "Escalation Logic", "Multi-channel", "Analytics", "Performance Reports"],
      results: "4-6 Weeks Setup",
      gradient: "from-purple-500 to-pink-500",
      color: "bg-purple-50"
    }
  ];

  const chatbotProcess = [
    {
      step: "01",
      title: "UAE Business Analysis",
      description: "Comprehensive review of your customer service needs, common queries, and automation opportunities",
      icon: FaChartBar,
      duration: "3-5 Days",
      color: "from-red-500 to-orange-500"
    },
    {
      step: "02",
      title: "Conversation Design",
      description: "Map out intelligent conversation flows with Arabic & English support tailored for UAE customers",
      icon: FaBrain,
      duration: "1 Week",
      color: "from-orange-500 to-yellow-500"
    },
    {
      step: "03",
      title: "AI Training & Setup",
      description: "Train AI models on your business data, FAQs, and UAE-specific terminology and cultural context",
      icon: FaRobot,
      duration: "1-2 Weeks",
      color: "from-yellow-500 to-green-500"
    },
    {
      step: "04",
      title: "Platform Integration",
      description: "Connect chatbot to WhatsApp, website, social media, CRM, and other business systems",
      icon: FaSync,
      duration: "1 Week",
      color: "from-green-500 to-blue-500"
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description: "Rigorous testing with real UAE customer scenarios, Arabic language variations, and edge cases",
      icon: FaCheckCircle,
      duration: "3-5 Days",
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "06",
      title: "Performance Monitoring",
      description: "Continuous learning from customer interactions with detailed analytics and monthly improvements",
      icon: FaChartLine,
      duration: "Ongoing",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const industries = [
    {
      name: "E-commerce & Retail",
      useCases: "Product recommendations, order status, size queries, returns",
      competition: "High",
      potential: "Excellent",
      automation: "85%",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Healthcare & Clinics",
      useCases: "Appointment booking, symptom check, doctor selection, insurance",
      competition: "Medium",
      potential: "Excellent",
      automation: "80%",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Real Estate",
      useCases: "Property search, viewing bookings, price inquiries, documents",
      competition: "Medium",
      potential: "High",
      automation: "75%",
      color: "from-yellow-500 to-green-500"
    },
    {
      name: "Restaurants & Cafes",
      useCases: "Table reservations, menu questions, delivery, special requests",
      competition: "High",
      potential: "Excellent",
      automation: "90%",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Education & Training",
      useCases: "Course enrollment, schedules, fees, certificate requests",
      competition: "Medium",
      potential: "High",
      automation: "70%",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Banking & Finance",
      useCases: "Balance inquiries, transactions, loan info, branch locations",
      competition: "Very High",
      potential: "High",
      automation: "65%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "<1s", label: "Average Response Time", icon: MdSpeed },
    { value: "24/7", label: "Always Available", icon: FaClock },
    { value: "95%", label: "Customer Satisfaction", icon: FaUserCheck },
    { value: "80%", label: "Cost Reduction", icon: FaDollarSign }
  ];

  const whyChooseUs = [
    "5+ years AI chatbot expertise in UAE",
    "Native Arabic & English NLP specialists",
    "WhatsApp Business API certified partners",
    "Data-driven approach with proven ROI",
    "Custom AI training for your business",
    "Seamless integration with existing systems",
    "UAE market and cultural understanding",
    "24/7 technical support and maintenance"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Matching SEO Theme */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Chat Bubbles */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="text-red-400/20 text-4xl font-mono">AI</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
            <div className="text-red-400/20 text-3xl">💬</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
            <div className="text-red-400/20 text-2xl">🤖</div>
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
              {/* UAE AI Badge */}
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full">
                <FaRobot className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
                  AI Chatbots • Dubai • UAE Market
                </span>
              </div>

              {/* Main Heading with Gradient Text */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">AI Chatbots That</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Speak Arabic
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
                Deploy intelligent AI chatbots specialized for the UAE market. Handle customer conversations 
                in Arabic & English, automate support 24/7, and boost conversions with instant responses.
              </p>

              {/* Live Performance Demo */}
              <div className="mb-8 bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Chatbot Performance</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-2xl">{responseTime.toFixed(1)}s</span>
                      <MdSpeed className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 transition-all duration-1000"
                      style={{ width: `${((5 - responseTime) / 4.5) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Customer Satisfaction Rate</span>
                    <span className="text-green-400 font-bold">{Math.round(satisfactionRate)}%</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact#project-form" aria-label="Get chatbot demo">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      GET FREE DEMO
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" aria-label="View chatbot services">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-base font-semibold">
                    VIEW SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
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

      {/* Chatbot Tools Marquee */}
      <ChatbotToolsMarquee />

      <WaveDivider />

      {/* Unique Chatbot Services Display - Pyramid Layout */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UAE-Specific <span className="text-red-600">AI Chatbot Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent conversational AI tailored for the Emirates market and customer expectations
            </p>
          </div>

          {/* Interactive Pyramid Layout */}
          <div className="relative w-full h-[600px] lg:h-[700px]">
            {/* Base Row - 3 Services */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-8">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`w-72 p-6 bg-gradient-to-br ${chatbotServices[index].gradient} rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/30 group-hover:z-30`}>
                    <div className="mb-4 inline-flex p-3 bg-white/20 rounded-xl">
                      {chatbotServices[index].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{chatbotServices[index].title}</h3>
                    <p className="text-white/80 mb-4 text-sm">{chatbotServices[index].description}</p>
                    <div className="pt-3 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Setup Time</span>
                        <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                          {chatbotServices[index].results}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Lines to Center */}
                  <div className="absolute top-1/2 left-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-12 group-hover:bg-red-500/50 transition-colors duration-300"></div>
                </div>
              ))}
            </div>

            {/* Middle Row - 2 Services */}
            <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex gap-12">
              {[3, 4].map((index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`w-64 p-6 bg-gradient-to-br ${chatbotServices[index].gradient} rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/30 group-hover:z-20`}>
                    <div className="mb-4 inline-flex p-3 bg-white/20 rounded-xl">
                      {chatbotServices[index].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{chatbotServices[index].title}</h3>
                    <p className="text-white/80 mb-4 text-sm">{chatbotServices[index].description}</p>
                    <div className="pt-3 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Setup Time</span>
                        <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                          {chatbotServices[index].results}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Lines to Top */}
                  <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:bg-red-500/50 transition-colors duration-300"></div>
                </div>
              ))}
            </div>

            {/* Top Service - Peak */}
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 group">
              <div className={`w-56 p-6 bg-gradient-to-br ${chatbotServices[5].gradient} rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/30 group-hover:z-10`}>
                <div className="mb-4 inline-flex p-3 bg-white/20 rounded-xl">
                  {chatbotServices[5].icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{chatbotServices[5].title}</h3>
                <p className="text-white/80 mb-4 text-sm">{chatbotServices[5].description}</p>
                <div className="pt-3 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Setup Time</span>
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                      {chatbotServices[5].results}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Top Connection Lines */}
              <div className="absolute -bottom-4 left-1/2 w-4 h-24 bg-gradient-to-b from-white/30 to-transparent transform -translate-x-1/2 group-hover:bg-red-500/50 transition-colors duration-300"></div>
            </div>

            {/* Center Pyramid Lines */}
            <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
              <polygon 
                points="50%,32 35%,48 65%,48" 
                fill="transparent" 
                stroke="rgba(229, 62, 62, 0.1)" 
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <polygon 
                points="35%,48 15%,72 50%,72 65%,48" 
                fill="transparent" 
                stroke="rgba(229, 62, 62, 0.1)" 
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {chatbotServices.slice(0, 4).map((service, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex p-4 ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{service.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{service.features[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Chatbot Process Timeline - Vertical Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">6-Step Chatbot Process</span> for UAE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for deploying AI chatbots that deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {chatbotProcess.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number with Gradient */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl font-bold text-white">{step.step}</div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br ${step.color} rounded-full opacity-50 animate-ping"></div>
                </div>

                {/* Step Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="mb-4 inline-flex p-3 bg-red-50 rounded-xl">
                    <step.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
                    <FaClock className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>

                {/* Connecting Line (except last) */}
                {index < chatbotProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-x-110 transition-transform duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Industries Chatbot Potential */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Chatbot Opportunities in <span className="text-red-600">UAE Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-impact sectors for AI chatbot implementation in the Emirates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8 z-10">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      industry.potential === 'Excellent' 
                        ? 'bg-red-100 text-red-700'
                        : industry.potential === 'High'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {industry.potential}
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <div className="text-sm text-gray-600 mb-3 font-semibold">Common Use Cases:</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{industry.useCases}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 font-medium">Market Demand:</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          industry.competition === 'Very High'
                            ? 'bg-red-500 animate-pulse'
                            : industry.competition === 'High'
                            ? 'bg-orange-500'
                            : 'bg-green-500'
                        }`}></div>
                        <span className={`text-sm font-semibold ${
                          industry.competition === 'Very High'
                            ? 'text-red-600'
                            : industry.competition === 'High'
                            ? 'text-orange-600'
                            : 'text-green-600'
                        }`}>
                          {industry.competition}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 font-medium">Automation Rate:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${industry.color}`}
                            style={{ width: industry.automation }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{industry.automation}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-gradient-to-br ${industry.color} transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Our <span className="text-red-600">UAE Chatbots</span> Stand Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique advantages that make us the preferred choice for AI chatbot deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white shadow-2xl shadow-red-500/30">
              <FaRobot className="w-16 h-16 mx-auto mb-6 text-white/90" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Deploy Your AI Chatbot?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform customer service with intelligent AI chatbots that understand Arabic, 
                work 24/7, and deliver exceptional experiences for your UAE customers
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact#project-form" aria-label="Get chatbot demo">
                  <button className="group relative px-12 py-5 bg-white text-red-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/40 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      GET FREE CHATBOT DEMO
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-5 h-5" />
                    <span>AI & NLP Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHandshake className="w-5 h-5" />
                    <span>UAE Market Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartLine className="w-5 h-5" />
                    <span>Proven Success Rate</span>
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

export default UaeChatbot;