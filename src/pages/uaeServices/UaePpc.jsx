import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGoogle, FaFacebook, FaInstagram, FaLinkedin,
  FaCheckCircle, FaArrowRight, FaBullseye, FaChartLine,
  FaMousePointer, FaDollarSign, FaClock, FaUsers,
  FaShieldAlt, FaHandshake, FaTrophy, FaRocket,
  FaMobileAlt, FaGlobe, FaSearchDollar, FaAd,
  FaChartBar, FaMapMarkerAlt, FaLanguage, FaFire
} from 'react-icons/fa';
import { MdLocationOn, MdTrendingUp, MdSpeed, MdAutoGraph } from 'react-icons/md';
import { FaBolt, FaCrosshairs, FaCalculator, FaSlidersH } from 'react-icons/fa';
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

const UaePpc = () => {
  usePageTitle("PPC Advertising UAE - Dubai Google Ads Management");
useSEO({
  title: 'PPC Advertising UAE - Dubai Google Ads Management',
  description: 'PPC Advertising services in UAE for Dubai & Abu Dhabi businesses. Google Ads optimization, Arabic/English campaigns, UAE audience targeting.',
  canonical: 'https://vsachitech.com/uaeservices/uae-ppc'
});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [adSpend, setAdSpend] = useState(1000);
  const [conversions, setConversions] = useState(0);
  const [roas, setRoas] = useState(0);

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

  // Animate metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setConversions(prev => {
        if (prev < 150) return prev + 5;
        return 150;
      });
      setRoas(prev => {
        if (prev < 480) return prev + 15;
        return 480;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    "Google Ads for UAE Market",
    "Instagram Shopping Campaigns",
    "LinkedIn B2B Advertising",
    "YouTube Video Ads Dubai"
  ];

  const ppcServices = [
    {
      icon: <FaGoogle className="w-8 h-8" />,
      title: "Google Ads Management",
      description: "Dominate Google search results with targeted PPC campaigns optimized for UAE market",
      features: [
        "Search Campaigns",
        "Display Network",
        "Shopping Ads",
        "Performance Max",
        "Arabic Ad Copy",
        "Local Extensions"
      ],
      avgCPC: "AED 2-15",
      platforms: ["Google Search", "Google Display", "YouTube"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaFacebook className="w-8 h-8" />,
      title: "Facebook & Instagram Ads",
      description: "Engage UAE audiences on social media with visually compelling ad campaigns",
      features: [
        "Feed Ads",
        "Stories Ads",
        "Reels Advertising",
        "Carousel Campaigns",
        "Lead Generation",
        "Conversion Tracking"
      ],
      avgCPC: "AED 1-8",
      platforms: ["Facebook", "Instagram", "Messenger"],
      color: "from-pink-500 to-purple-700"
    },
    {
      icon: <FaLinkedin className="w-8 h-8" />,
      title: "LinkedIn B2B Campaigns",
      description: "Target UAE professionals and decision-makers with precision LinkedIn advertising",
      features: [
        "Sponsored Content",
        "InMail Campaigns",
        "Lead Gen Forms",
        "Account Targeting",
        "Industry Targeting",
        "Job Title Targeting"
      ],
      avgCPC: "AED 8-25",
      platforms: ["LinkedIn", "LinkedIn Feed"],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <FaSearchDollar className="w-8 h-8" />,
      title: "Shopping Ads UAE",
      description: "Showcase products directly in search results for UAE e-commerce businesses",
      features: [
        "Product Listings",
        "Smart Shopping",
        "Local Inventory",
        "Arabic Descriptions",
        "Price Optimization",
        "Feed Management"
      ],
      avgCPC: "AED 1.5-10",
      platforms: ["Google Shopping", "Merchant Center"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile App Campaigns",
      description: "Drive app installs and engagement across UAE's mobile-first audience",
      features: [
        "App Install Ads",
        "In-App Actions",
        "App Engagement",
        "Universal Campaigns",
        "Play Store Ads",
        "iOS App Store"
      ],
      avgCPC: "AED 0.5-5",
      platforms: ["Google UAC", "Facebook", "Apple Search"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: <FaAd className="w-8 h-8" />,
      title: "Display & Remarketing",
      description: "Re-engage UAE visitors with strategic display and retargeting campaigns",
      features: [
        "Display Banners",
        "Dynamic Remarketing",
        "Custom Audiences",
        "Lookalike Targeting",
        "Sequential Messaging",
        "Cross-Platform"
      ],
      avgCPC: "AED 0.5-4",
      platforms: ["GDN", "Facebook Pixel", "Multi-Channel"],
      color: "from-orange-500 to-red-700"
    }
  ];

  const ppcPlatforms = [
    { 
      name: "Google Ads", 
      icon: FaGoogle, 
      color: "text-blue-600",
      reach: "95% UAE Users",
      bestFor: "Search Intent & Shopping"
    },
    { 
      name: "Facebook", 
      icon: FaFacebook, 
      color: "text-blue-700",
      reach: "85% UAE Adults",
      bestFor: "Brand Awareness & Engagement"
    },
    { 
      name: "Instagram", 
      icon: FaInstagram, 
      color: "text-pink-600",
      reach: "70% UAE Youth",
      bestFor: "Visual Products & Lifestyle"
    },
    { 
      name: "LinkedIn", 
      icon: FaLinkedin, 
      color: "text-blue-800",
      reach: "2M+ UAE Professionals",
      bestFor: "B2B & Professional Services"
    },
    { 
      name: "YouTube", 
      icon: FaRocket, 
      color: "text-red-600",
      reach: "90% UAE Video Viewers",
      bestFor: "Video Marketing & Branding"
    },
    { 
      name: "Snapchat", 
      icon: FaFire, 
      color: "text-yellow-500",
      reach: "60% UAE Young Adults",
      bestFor: "Gen Z & Millennials"
    },
    { 
      name: "TikTok", 
      icon: FaMobileAlt, 
      color: "text-gray-900",
      reach: "55% UAE Mobile Users",
      bestFor: "Viral Content & Trends"
    },
    { 
      name: "Twitter", 
      icon: FaGlobe, 
      color: "text-blue-400",
      reach: "40% UAE Users",
      bestFor: "News & Real-Time Engagement"
    }
  ];

  const ppcProcess = [
    {
      step: "01",
      title: "Campaign Strategy & Planning",
      description: "Deep dive into your UAE business goals, target audience, and competitive landscape to craft winning PPC strategy",
      icon: FaBullseye,
      duration: "1 Week",
      deliverables: ["Market Analysis", "Audience Research", "Budget Planning", "KPI Definition"]
    },
    {
      step: "02",
      title: "Account Setup & Structure",
      description: "Build optimized campaign architecture with proper tracking, conversion pixels, and UAE-specific settings",
      icon: FaRocket,
      duration: "3-5 Days",
      deliverables: ["Account Configuration", "Conversion Tracking", "Pixel Installation", "Campaign Structure"]
    },
    {
      step: "03",
      title: "Ad Creative Development",
      description: "Design compelling ad creatives in Arabic and English that resonate with UAE audience and drive clicks",
      icon: FaAd,
      duration: "1 Week",
      deliverables: ["Ad Copywriting", "Visual Design", "A/B Test Variants", "Landing Pages"]
    },
    {
      step: "04",
      title: "Campaign Launch & Monitoring",
      description: "Launch campaigns with careful monitoring and rapid optimization for maximum UAE market impact",
      icon: FaChartLine,
      duration: "Ongoing",
      deliverables: ["Campaign Launch", "Real-Time Monitoring", "Quick Optimizations", "Performance Tracking"]
    },
    {
      step: "05",
      title: "Optimization & Scaling",
      description: "Continuous testing, refinement, and scaling of winning campaigns across UAE markets",
      icon: MdAutoGraph,
      duration: "Ongoing",
      deliverables: ["Bid Optimization", "Audience Refinement", "Budget Scaling", "Creative Testing"]
    },
    {
      step: "06",
      title: "Reporting & Analysis",
      description: "Transparent reporting with actionable insights and recommendations for UAE campaign improvement",
      icon: FaChartBar,
      duration: "Monthly",
      deliverables: ["Performance Reports", "ROI Analysis", "Insights & Trends", "Strategy Recommendations"]
    }
  ];

  const industries = [
    {
      name: "E-commerce & Retail",
      avgCPC: "AED 2-8",
      conversionRate: "2-5%",
      roi: "300-500%",
      bestPlatforms: ["Google Shopping", "Instagram", "Facebook"],
      potential: "Excellent"
    },
    {
      name: "Real Estate",
      avgCPC: "AED 5-20",
      conversionRate: "1-3%",
      roi: "400-800%",
      bestPlatforms: ["Google Search", "Instagram", "LinkedIn"],
      potential: "Excellent"
    },
    {
      name: "Healthcare & Medical",
      avgCPC: "AED 3-12",
      conversionRate: "3-8%",
      roi: "250-450%",
      bestPlatforms: ["Google Search", "Facebook", "YouTube"],
      potential: "High"
    },
    {
      name: "Education & Training",
      avgCPC: "AED 2-10",
      conversionRate: "4-10%",
      roi: "200-400%",
      bestPlatforms: ["Google Search", "LinkedIn", "Facebook"],
      potential: "High"
    },
    {
      name: "Hospitality & Travel",
      avgCPC: "AED 1.5-6",
      conversionRate: "2-6%",
      roi: "350-600%",
      bestPlatforms: ["Google Search", "Instagram", "TikTok"],
      potential: "Excellent"
    },
    {
      name: "B2B Services",
      avgCPC: "AED 8-30",
      conversionRate: "2-5%",
      roi: "400-1000%",
      bestPlatforms: ["LinkedIn", "Google Search", "YouTube"],
      potential: "Excellent"
    },
    {
      name: "Automotive",
      avgCPC: "AED 3-15",
      conversionRate: "1-4%",
      roi: "300-700%",
      bestPlatforms: ["Google Search", "YouTube", "Instagram"],
      potential: "High"
    },
    {
      name: "Finance & Insurance",
      avgCPC: "AED 10-40",
      conversionRate: "1-3%",
      roi: "500-1200%",
      bestPlatforms: ["Google Search", "LinkedIn", "Facebook"],
      potential: "High"
    }
  ];

  const adFormats = [
    {
      format: "Search Ads",
      description: "Text ads appearing in Google search results for UAE queries",
      icon: FaGoogle,
      avgCTR: "3-8%",
      bestFor: "High Intent Searches"
    },
    {
      format: "Display Ads",
      description: "Visual banner ads across websites visited by UAE users",
      icon: FaAd,
      avgCTR: "0.5-2%",
      bestFor: "Brand Awareness"
    },
    {
      format: "Video Ads",
      description: "Engaging video content on YouTube and social platforms",
      icon: FaRocket,
      avgCTR: "1-4%",
      bestFor: "Storytelling & Demos"
    },
    {
      format: "Shopping Ads",
      description: "Product listings with images and prices in search results",
      icon: FaSearchDollar,
      avgCTR: "1-3%",
      bestFor: "E-commerce Sales"
    },
    {
      format: "Social Feed Ads",
      description: "Native ads in Facebook and Instagram feeds",
      icon: FaInstagram,
      avgCTR: "1-5%",
      bestFor: "Engagement & Leads"
    },
    {
      format: "Stories Ads",
      description: "Full-screen vertical ads in Instagram and Snapchat stories",
      icon: FaMobileAlt,
      avgCTR: "2-6%",
      bestFor: "Mobile Users"
    }
  ];

  const targetingOptions = [
    {
      category: "Location Targeting",
      options: ["Dubai", "Abu Dhabi", "Sharjah", "Specific Emirates", "Radius Targeting", "Multiple Locations"],
      icon: FaMapMarkerAlt,
      color: "from-red-500 to-red-600"
    },
    {
      category: "Demographic Targeting",
      options: ["Age Groups", "Gender", "Income Level", "Parental Status", "Education", "Marital Status"],
      icon: FaUsers,
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Interest Targeting",
      options: ["Luxury Goods", "Real Estate", "Travel", "Technology", "Sports", "Fashion"],
      icon: FaBullseye,
      color: "from-green-500 to-green-600"
    },
    {
      category: "Behavior Targeting",
      options: ["Shopping Behavior", "Device Usage", "Travel Patterns", "Purchase History", "App Activity", "Online Activity"],
      icon: FaChartLine,
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Language Targeting",
      options: ["Arabic", "English", "Hindi", "Urdu", "Tagalog", "Multi-Language"],
      icon: FaLanguage,
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Custom Audiences",
      options: ["Website Visitors", "Customer Lists", "Lookalike Audiences", "Engagement", "Video Viewers", "App Users"],
      icon: FaMousePointer,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const ppcBenefits = [
    {
      title: "Immediate Results",
      description: "Start driving UAE traffic and conversions within 24 hours of campaign launch",
      icon: FaClock
    },
    {
      title: "Budget Control",
      description: "Set daily budgets and maximum CPC to maintain complete control over ad spend",
      icon: FaDollarSign
    },
    {
      title: "Precise Targeting",
      description: "Reach exact UAE audience segments based on demographics, interests, and behaviors",
      icon: FaBullseye
    },
    {
      title: "Measurable ROI",
      description: "Track every dirham spent with detailed conversion tracking and analytics",
      icon: FaChartBar
    },
    {
      title: "Scalable Growth",
      description: "Easily scale winning campaigns across UAE markets as budget allows",
      icon: MdTrendingUp
    },
    {
      title: "Competitive Edge",
      description: "Outrank competitors in UAE search results and social feeds",
      icon: FaTrophy
    },
    {
      title: "Mobile-First Reach",
      description: "Connect with UAE's 85% mobile internet users where they spend time",
      icon: FaMobileAlt
    },
    {
      title: "Remarketing Power",
      description: "Re-engage UAE visitors who didn't convert on first visit",
      icon: FaMousePointer
    }
  ];

  const whyChooseUs = [
    "Google Ads & Facebook Blueprint certified",
    "5+ years UAE market experience",
    "Arabic & English ad expertise",
    "Transparent monthly reporting",
    "Dedicated account manager",
    "No long-term contracts",
    "UAE timezone support",
    "Proven ROI across industries"
  ];

const stats = [
  {
    value: "Performance Driven",
    label: "Return-Focused Strategy",
    icon: FaChartLine,
  },
  {
    value: "Budget Efficient",
    label: "Smart Spend Management",
    icon: FaDollarSign,
  },
  {
    value: "UAE Expertise",
    label: "Region-Specific Campaigns",
    icon: FaRocket,
  },
  {
    value: "Always Active",
    label: "Continuous Monitoring",
    icon: FaClock,
  },
];


  return (
    <div className="bg-white">
      {/* ========== HERO SECTION ========== */}
      <section 
        className="relative min-h-screen sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-float hidden sm:block">
            <div className="text-white/10 text-4xl font-mono">💰</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000 hidden md:block">
            <div className="text-white/10 text-3xl">📊</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float delay-500 hidden lg:block">
            <div className="text-white/10 text-2xl">🎯</div>
          </div>
          
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 62, 62, 0.3) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* PPC Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full w-fit">
                <FaGoogle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-red-400 uppercase">
                  PPC Advertising • Dubai • UAE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-white">Scale Your Business</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  With Paid Ads
                </span>
              </h1>

              {/* Rotating Features */}
              <div className="mb-6 md:mb-8">
                <div className="relative h-10 sm:h-12 overflow-hidden">
                  {heroFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white transition-all duration-1000 ${
                        index === activeFeature
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                Drive immediate results with expert PPC management across Google, Facebook, Instagram, 
                and LinkedIn. Reach your UAE audience with precision targeting and maximize ROI.
              </p>

              {/* Live Metrics */}
              <div className="mb-6 md:mb-8 bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
  <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
    
    <div>
      <div className="text-xs sm:text-sm text-gray-400 mb-1">
        Budget Strategy
      </div>
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
        Optimized Spend
      </div>
    </div>

    <div>
      <div className="text-xs sm:text-sm text-gray-400 mb-1">
        Lead Quality
      </div>
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400">
        High Intent
      </div>
    </div>

    <div>
      <div className="text-xs sm:text-sm text-gray-400 mb-1">
        Return Health
      </div>
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400">
        Performance Positive
      </div>
    </div>

  </div>
</div>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact#project-form" className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      GET FREE PPC AUDIT
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-white sm:border-2 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold">
                    VIEW SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 mb-8 lg:mb-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              UAE-Focused <span className="text-red-600">PPC Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive paid advertising solutions across all major platforms for maximum ROI
            </p>
          </div>

          {/* Mobile View - Vertical Cards */}
          <div className="lg:hidden space-y-6">
            {ppcServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500 ${
                  activeService === index ? 'scale-105 border-red-500 shadow-xl' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-lg">
                  {index + 1}
                </div>

                <div className={`mb-4 sm:mb-6 inline-flex p-3 sm:p-4 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl shadow-lg`}>
                  <div className="text-white w-6 h-6 sm:w-8 sm:h-8">{service.icon}</div>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-500">Average CPC</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 text-green-700 text-xs sm:text-sm font-semibold rounded-full">
                      {service.avgCPC}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {service.platforms.map((platform, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-red-500 to-red-200 transform -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-16 xl:space-y-20">
              {ppcServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Left/Right Content */}
                  <div className="w-5/12">
                    <div
                      className={`group relative bg-white border-2 border-gray-200 rounded-3xl p-6 lg:p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 ${
                        activeService === index ? 'scale-105 border-red-500 shadow-2xl' : ''
                      }`}
                    >
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>

                      <div className={`mb-6 inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Average CPC</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                            {service.avgCPC}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-2/12 flex-shrink-0">
                    <div className="relative flex justify-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl transition-all duration-500 ${
                        activeService === index ? 'scale-125' : 'scale-100'
                      }`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      {activeService === index && (
                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PLATFORMS SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advertising <span className="text-red-600">Platforms</span> We Master
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Expert campaign management across all major digital advertising platforms in UAE
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee hover:pause-marquee">
            {[...ppcPlatforms, ...ppcPlatforms].map((platform, index) => (
              <div key={index} className="flex-shrink-0 mx-2 sm:mx-4 group w-48 sm:w-64 h-40 sm:h-48">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-8 hover:border-red-500 hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col items-center justify-center hover:-translate-y-2">
                  <platform.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 sm:mb-4 ${platform.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">{platform.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{platform.reach}</div>
                    <div className="text-xs sm:text-sm text-gray-500 italic line-clamp-1">{platform.bestFor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

{/* Professional 6-Step SEO Process Section */}
<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-blue-50/20"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/10 via-transparent to-transparent"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Header Section */}
    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-200 rounded-full px-6 py-3 mb-6">
        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
          Strategic Process
        </span>
        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Our <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
            6-Step SEO
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-100 to-pink-100 transform -skew-y-1 rounded-full blur-sm"></div>
        </span> Framework
      </h2>
      
      {/* Subtitle */}
      <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
        A systematic approach designed specifically for UAE market domination
      </p>
    </div>

    {/* Process Timeline - Mobile (Vertical) & Desktop (Horizontal) */}
    <div className="relative">
      {/* Main Timeline Line - Desktop */}
      <div className="hidden lg:block absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-red-500 via-red-400 to-red-500 transform -translate-y-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse opacity-30"></div>
      </div>
      
      {/* Main Timeline Line - Mobile */}
      <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-600 z-0"></div>

      {/* Steps Container */}
      <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-6 lg:gap-8 relative">
        {ppcProcess.map((step, index) => {
          const isActive = activeProcessStep === index;
          
          return (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveProcessStep(index)}
              onMouseLeave={() => setActiveProcessStep(null)}
            >
              {/* Step Connector - Mobile */}
              <div className="lg:hidden absolute top-0 left-8 w-8 h-8 -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="w-8 h-8 bg-white border-4 border-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-red-500 scale-125' : 'bg-red-300'
                    }`}></div>
                  </div>
                  {isActive && (
                    <div className="absolute -inset-1 bg-red-500/30 rounded-full blur-sm animate-ping"></div>
                  )}
                </div>
              </div>

              {/* Step Connector - Desktop */}
              <div className="hidden lg:block absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-white border-4 border-red-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-red-500 scale-125' : 'bg-red-300'
                    }`}></div>
                  </div>
                  {isActive && (
                    <div className="absolute -inset-2 bg-red-500/30 rounded-full blur-sm animate-ping"></div>
                  )}
                </div>
              </div>

              {/* Step Number Badge - Desktop */}
              <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-sm font-bold text-white drop-shadow-lg">{step.step}</span>
                </div>
              </div>

              {/* Card Container */}
              <div className={`ml-16 lg:ml-0 lg:mt-24 transition-all duration-500 ${
                isActive ? 'lg:-translate-y-4' : ''
              }`}>
                <div className={`bg-white rounded-2xl border-2 p-6 shadow-lg transition-all duration-500 hover:shadow-2xl transform ${
                  isActive 
                    ? 'border-red-500 shadow-2xl scale-105 lg:scale-110 ring-4 ring-red-100/50' 
                    : 'border-gray-200 hover:border-red-300'
                }`}>
                  
                  {/* Step Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {/* Icon Container */}
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-red-500 to-red-700 shadow-lg' 
                          : 'bg-red-50'
                      }`}>
                        <step.icon className={`w-6 h-6 transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-red-600'
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
                      isActive
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
                          isActive 
                            ? 'bg-gradient-to-r from-red-400 to-red-600' 
                            : 'bg-gradient-to-r from-red-300 to-red-400'
                        }`}
                        style={{ width: `${((index + 1) / 6) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  {isActive && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur -z-10 animate-pulse"></div>
                  )}
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
          );
        })}
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

  <style jsx>{`
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
      50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.6); }
    }
    .ring-4.ring-red-100\\/50 {
      animation: glow 2s ease-in-out infinite;
    }
  `}</style>
</section>

      {/* ========== AD FORMATS SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-red-600">Ad Formats</span> That Convert
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic use of various ad formats to maximize engagement and conversions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {adFormats.map((format, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                  <format.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{format.format}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{format.description}</p>
                
                <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Avg. CTR</span>
                    <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-semibold rounded-full">
                      {format.avgCTR}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold">Best For:</span> {format.bestFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TARGETING SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Precision <span className="text-red-600">Targeting Options</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Reach your exact UAE audience with advanced targeting capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {targetingOptions.map((targeting, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500"
              >
                <div className={`mb-4 sm:mb-6 inline-flex p-3 sm:p-4 bg-gradient-to-br ${targeting.color} rounded-xl sm:rounded-2xl shadow-lg`}>
                  <targeting.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{targeting.category}</h3>
                
                <div className="space-y-2">
                  {targeting.options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* ========== INDUSTRIES SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              PPC Performance by <span className="text-red-600">UAE Industry</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific insights and benchmarks for UAE paid advertising
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">{industry.name}</h3>
                  <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold ${
                    industry.potential === 'Excellent' 
                      ? 'bg-green-100 text-green-700'
                      : industry.potential === 'High'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {industry.potential}
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-600">Avg CPC</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900">{industry.avgCPC}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-sm sm:text-base font-bold text-green-600">{industry.conversionRate}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-600">Avg ROI</span>
                    <span className="text-sm sm:text-base font-bold text-red-600">{industry.roi}</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-2">Best Platforms:</div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {industry.bestPlatforms.map((platform, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PPC ADVANTAGES SECTION ========== */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-float hidden sm:block">
            <div className="text-white/10 text-4xl">🎯</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000 hidden md:block">
            <div className="text-white/10 text-3xl">🚀</div>
          </div>
          
          {/* Dynamic Grid */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 62, 62, 0.2) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-widest">
                Why PPC in UAE?
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              The Power of <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Targeted Advertising</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how strategic PPC campaigns can transform your UAE business growth
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              {
                title: "Immediate Results",
                description: "PPC campaigns start driving traffic and leads within hours, unlike SEO which takes months",
                icon: <FaBolt className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              },
              {
                title: "Precise Targeting",
                description: "Reach exactly who you want with demographic, geographic, and interest-based targeting",
                icon: <FaCrosshairs className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              },
              {
                title: "Measurable ROI",
                description: "Track every penny spent and see exactly what returns your campaigns generate",
                icon: <FaCalculator className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              },
              {
                title: "Full Control",
                description: "Complete control over budget, timing, messaging, and audience targeting",
                icon: <FaSlidersH className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              },
              {
                title: "UAE Market Focus",
                description: "Campaigns optimized specifically for UAE audience behavior and preferences",
                icon: <FaMapMarkerAlt className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              },
              {
                title: "Scalable Growth",
                description: "Easily scale successful campaigns to drive more business as needed",
                icon: <FaChartLine className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border-2 border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30">
                  <div className="text-red-400 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: "320%", label: "Average ROI Increase", color: "text-red-400" },
                { value: "68%", label: "Lower Cost Per Lead", color: "text-green-400" },
                { value: "42%", label: "Higher Conversion Rates", color: "text-blue-400" },
                { value: "24/7", label: "Campaign Monitoring", color: "text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-pink-500 rounded-full p-1 mb-6 sm:mb-8 animate-gradient">
              <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/10">
                <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
                  Ready to Start Your PPC Journey?
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Let's discuss how PPC advertising can drive immediate results for your UAE business
            </p>
            <div className="flex justify-center">
              <Link to="/contact#ppc-form" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-14 py-3 sm:py-4 bg-gradient-to-r from-black/60 to-black/80 text-white rounded-full font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-2xl hover:shadow-white/20 overflow-hidden border border-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    START PPC CAMPAIGN
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose <span className="text-red-600">PPC Advertising</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The advantages of paid advertising for your UAE business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ppcBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 sm:mb-4 inline-flex p-2 sm:p-3 bg-red-50 rounded-lg sm:rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* ========== WHY CHOOSE US + CTA ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Partner With <span className="text-red-600">Our PPC Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience and expertise that drives real results in UAE market
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-xl sm:shadow-2xl shadow-red-500/30">
              <FaRocket className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 text-white/90" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Launch Profitable PPC Campaigns?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's create data-driven PPC strategies that deliver measurable ROI 
                and scale your UAE business to new heights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/contact#project-form" className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-white text-red-600 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-2xl hover:shadow-white/40 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      START YOUR CAMPAIGN
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Certified PPC Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>No Long-Term Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartLine className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Guaranteed ROI Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-float { 
          animation: float 6s ease-in-out infinite; 
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .pause-marquee {
          animation-play-state: paused !important;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default UaePpc;