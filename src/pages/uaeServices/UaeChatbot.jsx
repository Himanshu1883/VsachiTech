import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRobot, FaComments, FaChartLine, FaCheckCircle,
  FaArrowRight, FaClock, FaDollarSign, FaUsers,
  FaShieldAlt, FaHandshake, FaTrophy, FaWhatsapp,
  FaMobileAlt, FaShoppingCart, FaHeadset, FaCalendarAlt,
  FaFacebookMessenger, FaInstagram, FaTelegram, FaLanguage,
  FaUserCheck, FaBrain, FaSync, FaBullseye, FaChartBar,
  FaLightbulb, FaRocket, FaCogs, FaGlobe
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
  const [responseTime, setResponseTime] = useState(2.5);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotating features
  const heroFeatures = [
    "Intelligent Customer Support",
    "24/7 Automated Responses",
    "Lead Generation Automation",
    "Multi-channel Integration"
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
        if (prev > 0.5) return prev - 0.2;
        return 0.5;
      });
      setSatisfactionRate(prev => {
        if (prev < 95) return prev + 2;
        return 95;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // New hero stats - focused on value proposition
  const heroStats = [
    { 
      value: "24/7", 
      label: "Availability", 
      icon: FaClock,
      description: "Always-on customer support"
    },
    { 
      value: "90%", 
      label: "Automation", 
      icon: FaCogs,
      description: "Common queries handled"
    },
    { 
      value: "5x", 
      label: "ROI Potential", 
      icon: FaChartLine,
      description: "Return on investment"
    },
    { 
      value: "Global", 
      label: "Technology", 
      icon: FaGlobe,
      description: "Enterprise-grade AI"
    }
  ];

  const chatbotServices = [
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp Business AI",
      description: "Deploy intelligent chatbots on WhatsApp to handle customer inquiries 24/7",
      features: ["Instant Responses", "Order Processing", "Booking System", "Product Catalog", "Payment Links", "CRM Sync"],
      results: "2-3 Weeks Setup",
      gradient: "from-red-500 to-orange-500",
      color: "bg-green-400"
    },
    {
      icon: <MdChat className="w-8 h-8" />,
      title: "Website Live Chat AI",
      description: "Intelligent chat widgets for your website that capture leads and answer questions instantly",
      features: ["Lead Qualification", "FAQ Automation", "Smart Routing", "Live Handoff", "Multi-language", "Conversion Tracking"],
      results: "1-2 Weeks Setup",
      gradient: "from-orange-500 to-yellow-500",
      color: "bg-orange-400"
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-commerce Shopping AI",
      description: "Smart shopping assistants that guide customers through product discovery to purchase",
      features: ["Product Search", "Recommendations", "Cart Assistance", "Order Tracking", "Size Guide", "Checkout Help"],
      results: "3-4 Weeks Setup",
      gradient: "from-yellow-500 to-green-500",
      color: "bg-yellow-400"
    },
    {
      icon: <FaFacebookMessenger className="w-8 h-8" />,
      title: "Social Media Bots",
      description: "Automate customer engagement on Instagram, Facebook Messenger with intelligent AI responses",
      features: ["Instagram DM", "Facebook Messenger", "Auto-Replies", "Story Responses", "Comment Bot", "Lead Collection"],
      results: "2-3 Weeks Setup",
      gradient: "from-green-500 to-blue-500",
      color: "bg-red-400"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Customer Support AI",
      description: "Enterprise-grade support bots that handle tier-1 queries and escalate complex issues",
      features: ["Ticket Creation", "Knowledge Base", "Escalation Logic", "Multi-channel", "Analytics", "Performance Reports"],
      results: "4-6 Weeks Setup",
      gradient: "from-blue-500 to-purple-500",
      color: "bg-blue-400"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Lead Generation AI",
      description: "Intelligent bots that qualify leads, schedule demos, and capture contact information",
      features: ["Lead Scoring", "Appointment Setting", "Follow-up Automation", "CRM Integration", "Analytics Dashboard", "ROI Tracking"],
      results: "3-4 Weeks Setup",
      gradient: "from-purple-500 to-pink-500",
      color: "bg-purple-400"
    }
  ];

  const chatbotProcess = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Comprehensive review of your customer service needs and automation opportunities",
      icon: FaChartBar,
      duration: "3-5 Days",
      color: "from-red-500 to-orange-500"
    },
    {
      step: "02",
      title: "Conversation Design",
      description: "Map out intelligent conversation flows tailored for your specific business needs",
      icon: FaBrain,
      duration: "1 Week",
      color: "from-orange-500 to-yellow-500"
    },
    {
      step: "03",
      title: "AI Training & Setup",
      description: "Train AI models on your business data, FAQs, and customer interactions",
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
      description: "Rigorous testing with real customer scenarios and continuous optimization",
      icon: FaCheckCircle,
      duration: "3-5 Days",
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "06",
      title: "Performance Monitoring",
      description: "Continuous learning from customer interactions with detailed analytics",
      icon: FaChartLine,
      duration: "Ongoing",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const industries = [
    {
      name: "E-commerce & Retail",
      useCases: "Product recommendations, order status, size queries, returns processing",
      potential: "Excellent",
      automation: "85%",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Healthcare & Clinics",
      useCases: "Appointment booking, symptom check, doctor selection, insurance queries",
      potential: "Excellent",
      automation: "80%",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Real Estate",
      useCases: "Property search, viewing bookings, price inquiries, document assistance",
      potential: "High",
      automation: "75%",
      color: "from-yellow-500 to-green-500"
    },
    {
      name: "Restaurants & Cafes",
      useCases: "Table reservations, menu questions, delivery tracking, special requests",
      potential: "Excellent",
      automation: "90%",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Education & Training",
      useCases: "Course enrollment, schedules, fees information, certificate requests",
      potential: "High",
      automation: "70%",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Professional Services",
      useCases: "Consultation booking, project inquiries, service information, quote requests",
      potential: "High",
      automation: "75%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const whyChooseUs = [
    "Proven AI chatbot expertise and experience",
    "Custom solutions tailored to your business",
    "Enterprise-grade technology integration",
    "Data-driven approach with measurable ROI",
    "Seamless integration with existing systems",
    "Continuous improvement and optimization",
    "Dedicated technical support team",
    "Scalable solutions for growth"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Cleaner and Professional */}
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
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="text-red-400/20 text-4xl font-mono">AI</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
            <div className="text-red-400/20 text-3xl">🤖</div>
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
              {/* AI Chatbot Badge */}
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full">
                <FaRobot className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
                  AI Chatbots • Intelligent Automation
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Transform Customer</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Experience with AI
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
                Deploy intelligent AI chatbots that provide instant responses, automate support 24/7, 
                and boost conversions through personalized customer interactions.
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
                      style={{ width: `${((2.5 - responseTime) / 2) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Customer Satisfaction</span>
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
                    EXPLORE SOLUTIONS
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Value Proposition Cards */}
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
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

      {/* Chatbot Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI Chatbot <span className="text-red-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent conversational AI tailored to enhance customer experience across all touchpoints
            </p>
          </div>

          {/* Grid Layout for Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8 z-10">
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg">
                    <div className={`p-3 ${service.color} rounded-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Setup Time */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600 font-medium">Implementation Time</span>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-semibold rounded-full">
                        {service.results}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-gradient-to-br ${service.gradient} transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Chatbot Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">6-Step Process</span>
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

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="text-red-600">Transform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-impact sectors for AI chatbot implementation
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
                        : 'bg-green-100 text-green-700'
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
              Why <span className="text-red-600">Choose Us</span>
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
                Ready to Transform Your Customer Service?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Deploy intelligent AI chatbots that provide instant responses, 
                automate support 24/7, and deliver exceptional customer experiences
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
                    <span>Proven Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartLine className="w-5 h-5" />
                    <span>Measurable ROI</span>
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