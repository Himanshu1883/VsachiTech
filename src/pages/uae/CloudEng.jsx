import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCloud,
  FaServer,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaAward,
  FaGlobe,
  FaNetworkWired,
  FaCogs,
  FaRocket,
  FaArrowRight,
  FaChartLine,
  FaLock,
  FaSync,
  FaBolt,
  FaLayerGroup,
  FaCubes
} from 'react-icons/fa';
import { MdLocationOn, MdWork, MdSpeed, MdStorage, MdSecurity } from 'react-icons/md';
import usePageTitle from '../../components/hooks/usePageTitle';
import useSEO from '../../components/hooks/useSEO';

// Wave Divider
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

const CloudEng = () => {
    usePageTitle("Hire Cloud Engineers in UAE - AWS, Azure, Kubernetes Experts Dubai");
useSEO({
  title: 'Hire Cloud Engineers in UAE - AWS, Azure, Kubernetes Experts Dubai',
  description: 'Hire dedicated Cloud Engineers in UAE for Dubai & Abu Dhabi projects. AWS, Azure, GCP, Kubernetes, Docker, Terraform experts available immediately.',
  canonical: 'https://vsachitech.com/hiretalents/cloud-engineers-uae'
});
  const [scrollY, setScrollY] = useState(0);
  const [activeArchitecture, setActiveArchitecture] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: "AWS",           icon: FaCloud,       color: "text-orange-600" },
    { name: "Azure",         icon: FaCloud,       color: "text-blue-600"   },
    { name: "Google Cloud",  icon: FaCloud,       color: "text-green-600"  },
    { name: "Kubernetes",    icon: FaCogs,        color: "text-blue-700"   },
    { name: "Terraform",     icon: FaCode,        color: "text-purple-600" },
    { name: "Docker",        icon: FaServer,      color: "text-cyan-600"   },
    { name: "CI/CD Pipelines", icon: FaRocket,    color: "text-red-600"    },
    { name: "Monitoring",    icon: FaChartLine,   color: "text-indigo-600" },
  ];

  const cloudServices = [
    {
      title: "Cloud Migration & Modernization",
      desc: "Seamless transition of legacy systems to cloud-native for UAE enterprises",
      projects: "26+ UAE Projects",
      features: ["Lift & Shift", "Re-platform", "Re-architect", "Cost Optimization"],
      icon: FaCloud
    },
    {
      title: "Kubernetes & Container Orchestration",
      desc: "Production-grade clusters optimized for UAE-scale workloads",
      projects: "21+ K8s Deployments",
      features: ["EKS/AKS/GKE", "Helm Charts", "Istio Service Mesh", "Autoscaling"],
      icon: FaCogs
    },
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Fully automated, versioned, and repeatable cloud infrastructure",
      projects: "29+ IaC Projects",
      features: ["Terraform", "CloudFormation", "Pulumi", "GitOps"],
      icon: FaCode
    },
    {
      title: "DevOps & CI/CD Automation",
      desc: "Fast, secure delivery pipelines tailored for UAE business velocity",
      projects: "33+ Pipelines",
      features: ["GitHub Actions", "Azure DevOps", "ArgoCD", "Jenkins"],
      icon: FaRocket
    },
    {
      title: "Cloud Security & Compliance",
      desc: "Zero-trust architectures meeting UAE regulatory standards",
      projects: "18+ Secure Environments",
      features: ["WAF", "Encryption", "IAM Hardening", "TDRA Compliance"],
      icon: FaShieldAlt
    },
    {
      title: "Observability & Cost Management",
      desc: "Full visibility into performance, logs, and cloud spend",
      projects: "24+ Observability Setups",
      features: ["Prometheus + Grafana", "CloudWatch", "ELK", "FinOps Tools"],
      icon: FaChartLine
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Cloud Goals Discovery",
      desc: "Map your UAE cloud strategy, current stack & challenges",
      icon: FaHandshake,
      duration: "1-2 Days"
    },
    {
      step: "02",
      title: "Engineer Shortlisting",
      desc: "Get matched with certified cloud & DevOps specialists",
      icon: FaUsers,
      duration: "1-3 Days"
    },
    {
      step: "03",
      title: "Technical & Architecture Review",
      desc: "Validate expertise with UAE-relevant cloud scenarios",
      icon: FaCode,
      duration: "2-4 Days"
    },
    {
      step: "04",
      title: "Onboarding & Cloud Start",
      desc: "Rapid integration aligned with your UAE timezone",
      icon: FaRocket,
      duration: "1 Day"
    }
  ];

  // Cloud Architecture Patterns
  const architecturePatterns = [
    {
      id: 0,
      title: "Multi-Cloud Architecture",
      icon: FaGlobe,
      description: "Leverage multiple cloud providers for maximum resilience",
      benefits: [
        "Avoid vendor lock-in while optimizing costs",
        "Data sovereignty compliance across GCC regions",
        "Cross-cloud disaster recovery strategies",
        "Best-of-breed services from AWS, Azure, GCP"
      ],
      uaeAdvantage: "Perfect for UAE enterprises requiring local data residency",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      accent: "orange"
    },
    {
      id: 1,
      title: "Microservices & Containerization",
      icon: FaCubes,
      description: "Scalable, independent services for agile development",
      benefits: [
        "Independent scaling of UAE-facing services",
        "Faster deployment cycles for GCC market demands",
        "Resilient architecture with circuit breakers",
        "Language-agnostic service development"
      ],
      uaeAdvantage: "Ideal for high-traffic UAE e-commerce & fintech platforms",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      accent: "blue"
    },
    {
      id: 2,
      title: "Serverless Computing",
      icon: FaBolt,
      description: "Event-driven, auto-scaling compute resources",
      benefits: [
        "Pay-per-execution cost model for UAE startups",
        "Zero infrastructure management overhead",
        "Automatic scaling for seasonal UAE traffic",
        "Built-in high availability across regions"
      ],
      uaeAdvantage: "Cost-effective for variable workloads in GCC markets",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      accent: "green"
    },
    {
      id: 3,
      title: "Zero-Trust Security",
      icon: FaLock,
      description: "Assume breach, verify every request",
      benefits: [
        "Identity-based access control for UAE compliance",
        "Micro-segmentation of sensitive workloads",
        "Continuous security monitoring & validation",
        "End-to-end encryption for data in transit"
      ],
      uaeAdvantage: "Essential for UAE financial & government applications",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      accent: "purple"
    }
  ];

  // Cloud Engineering Metrics
  const engineeringMetrics = [
    { icon: FaSync, value: "99.95%", label: "Uptime SLA", description: "Guaranteed availability for UAE services" },
    { icon: FaChartLine, value: "-40%", label: "Cost Reduction", description: "Average cloud spend optimization" },
    { icon: FaRocket, value: "5x", label: "Deployment Speed", description: "Faster than traditional infrastructure" },
    { icon: MdSecurity, value: "Zero", label: "Security Incidents", description: "Track record in UAE deployments" }
  ];

  const benefits = [
    "UAE/GCC timezone aligned cloud engineers",
    "Certified professionals (AWS, Azure, GCP, CKA/CKAD)",
    "Deep expertise in UAE data residency & TDRA compliance",
    "Proven FinOps & cost optimization track record",
    "Strong focus on security & zero-trust architecture",
    "Competitive AED-based pricing & scalable models"
  ];

  const stats = [
    { value: "45+", label: "Cloud Projects in UAE/GCC", icon: FaCloud },
    { value: "97%", label: "Client Satisfaction",       icon: FaAward },
    { value: "38+", label: "Senior Cloud Engineers",    icon: FaUsers },
    { value: "2-5", label: "Weeks to Hire",             icon: FaClock }
  ];

  // Color mapping for architecture pattern cards
  const colorClasses = {
    orange: {
      border: 'border-orange-500',
      bg: 'bg-orange-50',
      dot: 'bg-orange-500',
      text: 'text-orange-700'
    },
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-50',
      dot: 'bg-blue-500',
      text: 'text-blue-700'
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-50',
      dot: 'bg-green-500',
      text: 'text-green-700'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-50',
      dot: 'bg-purple-500',
      text: 'text-purple-700'
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Made Responsive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/cloud-eng-uae.jpg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-full">
            <MdLocationOn className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-red-400 uppercase">
              Dubai • Abu Dhabi • Sharjah • GCC
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Cloud Engineering</span>
            <span className="text-red-400 block mt-1 sm:mt-2">Powering UAE's</span>
            <span className="block mt-1 sm:mt-2">Digital Future</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Hire certified cloud architects & DevOps engineers who build secure, scalable, 
            cost-efficient infrastructure — perfectly aligned with UAE innovation goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <Link to="/contact#project-form" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  HIRE CLOUD ENGINEERS
                  <FaArrowRight className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                VIEW CLOUD SERVICES
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </button>
            </Link>
          </div>

          {/* <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 text-center leading-tight">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-1 sm:mt-2"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Technologies Marquee - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Cloud Stack <span className="text-red-600">Mastered for UAE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Deep expertise across leading cloud platforms & DevOps tooling — optimized for UAE scale, security & compliance
            </p>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-mobile sm:animate-scroll-desktop whitespace-nowrap">
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className="group mx-3 sm:mx-4 md:mx-5 bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-32 sm:w-40 md:w-48"
                  >
                    <tech.icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 text-center truncate">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/contact#project-form">
              <button className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-gray-950 text-gray-950 rounded-full hover:bg-gray-950 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                CONNECT WITH CLOUD EXPERTS
                <span className="w-2 h-2 rounded-full bg-gray-950"></span>
              </button>
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollMobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollDesktop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-scroll-mobile {
            animation: scrollMobile 30s linear infinite;
            display: flex;
          }
          .animate-scroll-desktop {
            animation: scrollDesktop 45s linear infinite;
            display: flex;
          }
          .animate-scroll-mobile:hover, .animate-scroll-desktop:hover { 
            animation-play-state: paused; 
          }
        `}</style>
      </section>

      <WaveDivider flip={true} />

      {/* Services - Made Responsive */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Cloud Solutions <span className="text-red-600">for UAE Enterprises</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Specialized cloud engineering & DevOps services built for UAE's digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 bg-red-50 rounded-lg sm:rounded-xl">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs sm:text-sm font-semibold rounded-full w-fit sm:w-auto">
                    {service.projects}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full hover:bg-red-100 hover:text-red-700 transition-colors duration-300"
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

      {/* Cloud Architecture Patterns - Fixed Color Bug & Made Responsive */}
      <section id="architecture" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advanced <span className="text-red-600">Cloud Architectures</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Modern cloud patterns & best practices tailored for UAE business requirements
            </p>
          </div>

          {/* Architecture Pattern Selector - Fixed with explicit color classes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-12">
            {architecturePatterns.map((pattern) => {
              const colors = colorClasses[pattern.accent];
              return (
                <button
                  key={pattern.id}
                  onClick={() => setActiveArchitecture(pattern.id)}
                  className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                    activeArchitecture === pattern.id
                      ? `${colors.border} ${colors.bg}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${pattern.color} group-hover:scale-110 transition-transform duration-300`}>
                    <pattern.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-2">{pattern.title}</h3>
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    activeArchitecture === pattern.id ? `${colors.dot} scale-125` : 'bg-gray-300'
                  }`}></div>
                </button>
              );
            })}
          </div>

          {/* Active Architecture Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl border border-gray-200 p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8">
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${architecturePatterns[activeArchitecture].color} w-fit`}>
                    <architecturePatterns{...[activeArchitecture].icon} className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{architecturePatterns[activeArchitecture].title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">{architecturePatterns[activeArchitecture].description}</p>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 font-semibold rounded-full text-sm sm:text-base">
                  <MdLocationOn className="w-3 h-3 sm:w-4 sm:h-4" />
                  {architecturePatterns[activeArchitecture].uaeAdvantage}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {architecturePatterns[activeArchitecture].benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors">
                    <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm sm:text-base">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Engineering Metrics - Made Responsive */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-red-200">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Engineering Excellence <span className="text-red-600">Metrics</span>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
                Our cloud engineering approach delivers measurable business outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {engineeringMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-red-100 to-red-50 rounded-lg sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-600" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{metric.value}</div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-2">{metric.label}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-red-200 text-center">
              <p className="text-gray-800 font-medium text-sm sm:text-base">
                Consistent performance across UAE cloud deployments
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Hiring Process - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center opacity-70" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Streamlined <span className="text-red-400">Hiring Process</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
              Our proven 4-step process to connect you with top cloud talent for UAE projects
            </p>
          </div>

          <div className="relative">
            {/* Timeline - Hide on mobile, show on sm+ */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-300 shadow-lg shadow-red-500/30">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-300 animate-pulse"></div>
            </div>

            <div className="space-y-8 sm:space-y-16">
              {hiringProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center`}
                >
                  {/* Timeline node - Mobile: above content, Desktop: centered */}
                  <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-2xl shadow-red-500/40 mb-4 sm:mb-0">
                    <div className="text-xs sm:text-sm font-bold text-gray-900">{step.step}</div>
                    <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-30 animate-ping"></div>
                  </div>

                  <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8 lg:pr-12' : 'sm:pl-8 lg:pl-12'} ${index % 2 === 0 ? 'sm:text-right' : ''}`}>
                    <div className="bg-white/95 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 shadow-xl">
                      <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-lg sm:rounded-xl shadow-md">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">{step.desc}</p>
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-xs sm:text-sm font-semibold rounded-full border border-red-200">
                        <FaClock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Info Card */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
            <div className="relative group w-full max-w-4xl">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75 hidden sm:block"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75 delay-500 hidden sm:block"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-red-400/30 border border-white/40 hover:shadow-red-400/50 transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse"></div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center">Why Choose Our Process</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse delay-300"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <MdSpeed className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">4 Steps</div>
                    <div className="text-xs sm:text-sm text-gray-600">Streamlined Process</div>
                  </div>

                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <FaClock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">2-3 Weeks</div>
                    <div className="text-xs sm:text-sm text-gray-600">Fast Results</div>
                  </div>

                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <MdLocationOn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">UAE Focused</div>
                    <div className="text-xs sm:text-sm text-gray-600">Local Expertise</div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 text-center">
                  <span className="text-gray-800 font-bold text-sm sm:text-base">
                    Simple • Efficient • Tailored for UAE Market
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Benefits - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our <span className="text-red-600">UAE Cloud Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Unique advantages when hiring cloud engineers through us for UAE projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Build Next-Gen Cloud Infrastructure in UAE?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's architect secure, scalable cloud solutions that power your UAE business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link to="/contact#project-form" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  START YOUR CLOUD PROJECT
                  <FaArrowRight className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="/uaeservices" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                EXPLORE UAE CLOUD SERVICES
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudEng;