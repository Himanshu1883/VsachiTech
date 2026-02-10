import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPython, FaReact, FaLaravel, FaPalette, FaMobileAlt, FaCloud,
  FaGlobe, FaShoppingCart, FaSearch, FaShieldAlt, FaUsers,
  FaCheckCircle, FaChartBar, FaHeadset, FaHandshake, FaCode,
  FaClock, FaArrowRight
} from 'react-icons/fa';
import { MdLocationOn, MdSpeed, MdSecurity } from 'react-icons/md';

// Import video files from assets
import uaeVideo from '../../assets/uae.mp4';
import uaeTechVideo from '../../assets/uaetech.mp4';

// SEO Hooks
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

const UAEServices = () => {
  // SEO Configuration
  usePageTitle("UAE Digital Solutions & Tech Services");
  useSEO({
    title: 'UAE Web Development & Digital Solutions | Vsachi Tech Dubai',
    description: 'Professional UAE-focused digital services: Web development, mobile apps, e-commerce, SEO, and tech talent for Dubai, Abu Dhabi, and UAE businesses.',
    canonical: 'https://vsachitech.com/uaeservices',
    keywords: 'UAE web development, Dubai digital agency, UAE mobile apps, Abu Dhabi e-commerce, UAE SEO services, Dubai tech talent, UAE compliance, Arabic websites, UAE digital transformation',
    ogImage: 'https://vsachitech.com/images/uae-services-og.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  });

  const [currentVideo, setCurrentVideo] = useState('uae');
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    const switchVideos = () => {
      setCurrentVideo(prev => prev === 'uae' ? 'uaetech' : 'uae');
    };

    // Set timeout to switch videos
    const timer = setTimeout(switchVideos, currentVideo === 'uae' ? 3000 : 5000);

    return () => clearTimeout(timer);
  }, [currentVideo]);

  // Structured Data for UAE Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vsachi Tech UAE",
    "url": "https://vsachitech.com/uaeservices",
    "logo": "https://vsachitech.com/logo.png",
    "description": "Digital solutions and technology services specialized for the UAE market",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971-XXX-XXXXXX",
    "priceRange": "$$",
    "areaServed": "United Arab Emirates",
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
      "E-commerce Solutions",
      "SEO Services",
      "Digital Transformation"
    ]
  };

  // UAE-Focused Services with Schema
  const services = [
    {
      icon: <FaGlobe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "UAE Web Development",
      description: "Custom websites built for UAE market compliance and user preferences",
      features: ["Arabic/English Bilingual", "UAE Hosting Solutions", "Local Payment Integration"],
      schemaType: "WebDevelopment"
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile App Development",
      description: "Native & cross-platform apps optimized for UAE smartphone users",
      features: ["iOS & Android", "Arabic UI/UX", "Local App Store Optimization"],
      schemaType: "MobileApplication"
    },
    {
      icon: <FaShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "E-Commerce Solutions",
      description: "Complete online stores for UAE retail market",
      features: ["Moyasar/Tap Payment", "Arabic Catalog", "UAE Logistics Integration"],
      schemaType: "ECommercePlatform"
    },
    {
      icon: <FaSearch className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "UAE Local SEO",
      description: "Dominate local search results in Dubai, Abu Dhabi, and across UAE",
      features: ["Google My Business UAE", "Arabic Keyword Research", "Local Directory Listing"],
      schemaType: "SEO Service"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "UAE Compliance & Security",
      description: "Ensure your digital presence meets UAE regulations",
      features: ["TDRA Compliance", "Data Localization", "UAE Cyber Security Standards"],
      schemaType: "SecurityService"
    },
    {
      icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "UAE Tech Talent",
      description: "Access to specialized developers for your UAE projects",
      features: ["Python/Rust Experts", "React Specialists", "Laravel Professionals"],
      schemaType: "StaffingService"
    }
  ];

  // UAE Tech Talent (from Hire Talents)
  const uaeTalents = [
    {
      icon: FaReact,
      title: "React Developers",
      desc: "Expert React developers building responsive, UAE-optimized interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "/uaeservices/uae-react-dev"
    },
    {
      icon: FaPython,
      title: "Python Developers",
      desc: "Python specialists for scalable backends and AI solutions in UAE",
      skills: ["Python", "FastAPI", "Django", "PostgreSQL"],
      link: "/uaeservices/uae-python-dev"
    },
    {
      icon: FaLaravel,
      title: "Laravel Developers",
      desc: "PHP/Laravel experts for robust UAE enterprise applications",
      skills: ["Laravel", "PHP", "MySQL", "Redis"],
      link: "/uaeservices/uae-laravel-dev"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Developers",
      desc: "Cross-platform specialists for UAE mobile market",
      skills: ["Flutter", "React Native", "iOS", "Android"],
      link: "/uaeservices/uae-mobile-dev"
    },
    {
      icon: FaCloud,
      title: "Cloud Engineers",
      desc: "DevOps professionals for UAE-based infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      link: "/uaeservices/uae-cloud-eng"
    },
    {
      icon: FaPalette,
      title: "UI/UX Designers",
      desc: "Design experts creating UAE-cultured user experiences",
      skills: ["Figma", "Arabic UI Design", "UX Research", "Prototyping"],
      link: "/uaeservices/uae-uiux-design"
    }
  ];

  const industries = [
    {
      name: "Real Estate",
      projects: 24,
      description: "Property portals & virtual tours for Dubai market"
    },
    {
      name: "Healthcare",
      projects: 18,
      description: "Medical platforms with Arabic patient interfaces"
    },
    {
      name: "Retail & E-commerce",
      projects: 42,
      description: "Online stores with UAE payment gateways"
    },
    {
      name: "Hospitality",
      projects: 16,
      description: "Booking systems for hotels & tourism"
    },
    {
      name: "Government",
      projects: 8,
      description: "Digital transformation for public services"
    },
    {
      name: "Education",
      projects: 12,
      description: "E-learning platforms with Arabic content"
    }
  ];

  const uaeStats = [
    { value: "50+", label: "UAE Projects Delivered" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "30+", label: "UAE Team Specialists" },
    { value: "8+", label: "Years UAE Experience" }
  ];

  const engagementModels = [
    { icon: FaClock, label: 'Hourly', desc: 'Flexible billing for UAE projects' },
    { icon: FaCode, label: 'Part-time', desc: 'Dedicated hours per week' },
    { icon: FaUsers, label: 'Full-time', desc: 'Exclusive team members' },
    { icon: FaHandshake, label: 'Dedicated Team', desc: 'Complete UAE project ownership' }
  ];

  const reasons = [
    {
      title: "UAE Market Expertise",
      desc: "Deep understanding of UAE business culture, regulations, and user behavior"
    },
    {
      title: "Local Talent Pool",
      desc: "Access to pre-vetted developers and designers with UAE project experience"
    },
    {
      title: "Rapid Deployment",
      desc: "Start working with your UAE team within days, not months"
    },
    {
      title: "Flexible Scaling",
      desc: "Scale your UAE team up or down based on project demands"
    },
    {
      title: "UAE Compliance",
      desc: "All solutions meet UAE regulatory requirements and digital standards"
    },
    {
      title: "Cost Efficiency",
      desc: "Access world-class talent at competitive UAE market rates"
    }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://vsachitech.com"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "UAE Services",
              "item": "https://vsachitech.com/uaeservices"
            }
          ]
        })}
      </script>

      {/* Hero Section with Video Background */}
      <section className="relative bg-black text-white overflow-hidden min-h-[90vh] sm:min-h-screen flex items-center pt-16 sm:pt-0">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* UAE Video (3 seconds) */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${currentVideo === 'uae' ? 'opacity-100' : 'opacity-0'}`}>
            <video
              ref={video1Ref}
              className="w-full h-full object-cover"
              src={uaeVideo}
              autoPlay
              muted
              playsInline
              loop={false}
              onEnded={() => {
                if (currentVideo === 'uae') {
                  setCurrentVideo('uaetech');
                }
              }}
              aria-label="UAE business landscape video"
            />
          </div>
          
          {/* UaeTech Video (5 seconds) */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${currentVideo === 'uaetech' ? 'opacity-100' : 'opacity-0'}`}>
            <video
              ref={video2Ref}
              className="w-full h-full object-cover"
              src={uaeTechVideo}
              autoPlay
              muted
              playsInline
              loop={false}
              onEnded={() => {
                if (currentVideo === 'uaetech') {
                  setCurrentVideo('uae');
                }
              }}
              aria-label="UAE technology and innovation video"
            />
          </div>

          {/* Black tint overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        {/* Content Container - positioned to start below nav */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-20 pt-8 sm:pt-0">
          <header className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="z-10">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <MdLocationOn className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-red-500 uppercase">
                  Dubai, UAE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Digital Solutions
                <span className="text-red-500 block sm:inline"> Made for UAE</span>
                <br className="hidden sm:block" />
                Market Success
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-2xl">
                Since 2025, we've been helping businesses thrive in the UAE with 
                culturally-adapted, technology-driven solutions that understand 
                local markets and deliver measurable results.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link to="/contact" aria-label="Start your UAE project with Vsachi Tech">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    START YOUR UAE PROJECT
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" aria-hidden="true"></span>
                  </button>
                </Link>
                <Link to="#services" aria-label="Explore our UAE services">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    EXPLORE SERVICES
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" aria-hidden="true"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 z-10" role="complementary" aria-label="UAE market statistics">
              {uaeStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </header>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Why Choose Us for UAE */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50" aria-labelledby="why-uae-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 id="why-uae-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why We Understand the
              <span className="text-red-500"> UAE Market</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We combine global digital expertise with deep local insight to create 
              solutions that truly resonate in the UAE.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Service">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4" itemProp="name">Local Team, Global Standards</h3>
              <p className="text-sm sm:text-base text-gray-600" itemProp="description">
                Our Dubai-based team combines international expertise with 
                understanding of UAE culture, regulations, and business practices.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Service">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4" itemProp="name">UAE Compliance Focus</h3>
              <p className="text-sm sm:text-base text-gray-600" itemProp="description">
                All our solutions are built with UAE regulations in mind – from 
                TDRA compliance to data localization and Arabic language requirements.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Service">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <MdSpeed className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4" itemProp="name">Performance for UAE Users</h3>
              <p className="text-sm sm:text-base text-gray-600" itemProp="description">
                Optimized for UAE internet speeds and mobile-first users, 
                ensuring fast loading times and seamless experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <WaveDivider flip={true}/>
      
      {/* Our UAE Services */}
      <section id="services" className="py-12 sm:py-16 md:py-24 bg-white" aria-labelledby="uae-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 id="uae-services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our
              <span className="text-red-500"> UAE-Focused</span>
              Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored specifically for the 
              United Arab Emirates market.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {services.map((service, index) => (
              <article 
                key={index} 
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className="text-red-500 mb-4 sm:mb-6" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4" itemProp="name">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6" itemProp="description">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0" aria-hidden="true"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <WaveDivider/>

      {/* UAE Tech Talent Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white" aria-labelledby="uae-talent-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 id="uae-talent-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              UAE Tech <span className="text-red-500">Talent Pool</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Access specialized developers and designers with UAE project experience
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {uaeTalents.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group block focus:outline-none"
                aria-label={`Learn more about ${item.title} for UAE projects`}
              >
                <article className="relative bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-red-500 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 bg-red-50 rounded-lg sm:rounded-xl group-hover:bg-red-500 transition-colors duration-300" aria-hidden="true">
                    <item.icon className="text-3xl sm:text-4xl text-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-red-50 group-hover:text-red-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-4 w-11/12 h-1 bg-gradient-to-r from-red-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl sm:rounded-b-2xl" aria-hidden="true" />
                </article>
              </Link>
            ))}
          </div>

          {/* Talent CTA */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <Link to="/hiretalents" aria-label="Explore all UAE tech talents">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base">
                EXPLORE ALL TALENTS
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black" aria-hidden="true"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Engagement Models Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50" aria-labelledby="engagement-models-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 id="engagement-models-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Flexible UAE Engagement <span className="text-red-500">Models</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose the collaboration model that fits your UAE project needs
            </p>
          </header>

          {/* Model Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 transition-all duration-500 cursor-pointer overflow-hidden"
                role="article"
                aria-label={`${model.label} engagement model for UAE projects`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <model.icon className="text-4xl sm:text-5xl mx-auto mb-4 sm:mb-6 text-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 transition-colors">
                    {model.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Industries We Serve */}
      <section className="py-12 sm:py-16 md:py-24 bg-white" aria-labelledby="uae-industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 id="uae-industries-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Industries We Transform in the
              <span className="text-red-500"> UAE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From real estate to retail, we've delivered successful digital 
              transformation across key UAE sectors.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {industries.map((industry, index) => (
              <article 
                key={index} 
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300"
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900" itemProp="name">
                    {industry.name}
                  </h3>
                  <div className="text-red-500 font-bold text-2xl sm:text-3xl" aria-label={`${industry.projects} projects completed`}>
                    {industry.projects}+
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600" itemProp="description">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden" aria-labelledby="why-choose-us-heading">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, #ff0000 12%, transparent 12.5%, transparent 87%, #ff0000 87.5%, #ff0000), linear-gradient(150deg, #ff0000 12%, transparent 12.5%, transparent 87%, #ff0000 87.5%, #ff0000)',
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 40px 70px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <header className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 id="why-choose-us-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Why Choose <span className="text-red-500">Vsachi Tech UAE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              We've refined our UAE approach to deliver exceptional results
            </p>
          </header>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 sm:gap-4 md:gap-5 p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
                role="article"
              >
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-0.5 sm:mt-1" aria-hidden="true">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-red-500 rounded-full group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="text-white text-sm sm:text-lg" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-red-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-red-500 to-red-600 text-white text-center relative overflow-hidden" aria-labelledby="final-cta-heading">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-2xl sm:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-2xl sm:blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header>
            <h2 id="final-cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Dominate the
              <span className="block mt-1 sm:mt-2">UAE Market?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
              Connect with our UAE experts who'll elevate your digital presence in the Emirates
            </p>
          </header>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/contact#project-form"
              aria-label="Schedule a free UAE market consultation"
            >
              <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-red-500 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-2xl group">
                Schedule Consultation
                <FaArrowRight className="group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </Link>
            <Link
              to="/hiretalents"
              aria-label="Hire UAE tech talent for your project"
            >
              <button className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 group">
                Hire Talent
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white group-hover:bg-red-500" aria-hidden="true"></span>
              </button>
            </Link>
          </div>

          {/* Additional Info */}
          <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white/80">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <FaHandshake className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span className="text-xs sm:text-sm">Free Market Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <MdLocationOn className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span className="text-xs sm:text-sm">Dubai Office Support</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <FaClock className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span className="text-xs sm:text-sm">UAE Business Hours</span>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default UAEServices;