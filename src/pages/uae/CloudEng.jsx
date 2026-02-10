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
} from 'react-icons/fa';
import { MdLocationOn, MdWork } from 'react-icons/md';

// Divider Component (unchanged)
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
    const [scrollY, setScrollY] = useState(0);

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

  const uaeProjects = [
    {
      industry: "Real Estate",
      project: "Dubai Property Platform – AWS EKS Migration & Terraform IaC",
      tech: ["AWS EKS", "Terraform", "Kubernetes", "RDS Aurora"],
      duration: "7 months",
      client: "Leading Dubai Developer"
    },
    {
      industry: "E-commerce",
      project: "UAE Retail – Azure Modernization & GitHub Actions CI/CD",
      tech: ["Azure AKS", "Terraform", "GitHub Actions", "Azure Monitor"],
      duration: "5 months",
      client: "Prominent UAE Retail Brand"
    },
    {
      industry: "FinTech",
      project: "Abu Dhabi Digital Bank – Secure GCP Infrastructure & Observability",
      tech: ["GKE", "Cloud Armor", "Terraform", "Prometheus + Grafana"],
      duration: "9 months",
      client: "Regulated UAE FinTech Firm"
    },
    {
      industry: "Logistics",
      project: "Sharjah Supply Chain – Hybrid Cloud & Real-time Monitoring",
      tech: ["AWS + Azure", "Kubernetes", "CloudWatch", "ELK Stack"],
      duration: "6 months",
      client: "Major Logistics Operator"
    }
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
  return (
    <div className="bg-white">
      {/* Hero – slightly taller & more premium feel */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/uae-skyline.jpg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center text-white py-28">
          <div className="inline-flex items-center gap-4 mb-10 px-8 py-4 bg-black/60 backdrop-blur-lg border border-red-500/40 rounded-full shadow-xl">
            <MdLocationOn className="w-6 h-6 text-red-400" />
            <span className="text-base font-semibold tracking-widest text-red-400 uppercase">
              Dubai • Abu Dhabi • Sharjah • GCC
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-tight">
            <span className="block">Cloud Engineering</span>
            <span className="text-red-400 block mt-4">Powering UAE's</span>
            <span className="block mt-4">Digital Future</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-14 max-w-5xl mx-auto leading-relaxed">
            Hire certified cloud architects & DevOps engineers who build secure, scalable, 
            cost-efficient infrastructure — perfectly aligned with UAE innovation goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact#project-form">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold text-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  HIRE CLOUD ENGINEERS
                  <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="#services">
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 border-2 border-red-400 text-red-400 rounded-2xl hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-105 text-xl font-semibold">
                VIEW CLOUD SERVICES
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
              </button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-xl border border-red-500/30 rounded-3xl p-10 hover:border-red-400 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-center gap-5 mb-5">
                  <stat.icon className="w-10 h-10 text-red-400" />
                  <div className="text-5xl font-extrabold text-white">{stat.value}</div>
                </div>
                <div className="text-lg text-gray-300 text-center font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-4 border-red-400/40 rounded-full flex justify-center pt-3">
            <div className="w-2 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Technologies Marquee – wider cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
              Cloud Stack <span className="text-red-600">Mastered for UAE</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Deep expertise across leading cloud platforms & DevOps tooling — optimized for UAE scale, security & compliance
            </p>
          </div>

          <div className="relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className="group mx-6 bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex-shrink-0 w-60"
                  >
                    <tech.icon className={`w-16 h-16 mx-auto mb-6 ${tech.color} group-hover:scale-110 transition-transform duration-400`} />
                    <div className="text-center text-lg font-bold text-gray-900">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/contact#project-form">
              <button className="inline-flex items-center gap-4 px-12 py-6 border-2 border-gray-900 text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-xl font-bold">
                CONNECT WITH CLOUD EXPERTS
                <span className="w-3 h-3 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-scroll {
            animation: scroll 50s linear infinite;
            display: flex;
          }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
      </section>

      <WaveDivider flip={true} />

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
              Cloud Solutions <span className="text-red-600">for UAE Enterprises</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Specialized cloud engineering & DevOps services built for UAE's digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-10 hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="mb-8 inline-flex p-5 bg-red-50 rounded-2xl shadow-md">
                  <service.icon className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform duration-400" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-extrabold text-gray-900">{service.title}</h3>
                  <span className="px-5 py-2 bg-red-100 text-red-700 text-lg font-semibold rounded-full">
                    {service.projects}
                  </span>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">{service.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2 bg-gray-100 text-gray-800 text-base rounded-full hover:bg-red-100 hover:text-red-700 transition-colors duration-300"
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

      {/* Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
              Cloud Success Stories <span className="text-red-600">in UAE</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Proven cloud engineering projects delivered for leading UAE organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {uaeProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-10 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-100 text-red-700 text-lg font-semibold rounded-2xl mb-6">
                      <MdWork className="w-5 h-5" />
                      {project.industry}
                    </div>
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{project.project}</h3>
                    <p className="text-gray-700 text-lg">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-500">Duration</div>
                    <div className="text-3xl font-extrabold text-gray-900">{project.duration}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-3 bg-gray-100 text-gray-800 text-base rounded-2xl hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-lg text-gray-700">Cloud Expertise Delivered</span>
                  <div className="flex items-center gap-4 text-red-600">
                    <FaCloud className="w-7 h-7" />
                    <span className="text-2xl font-bold">Successfully Deployed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Hiring Process – timeline with enhanced glow */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center opacity-75" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-10">
              Efficient <span className="text-red-400">Hiring Process</span>
            </h2>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our proven 4-step process to bring top cloud talent to your UAE team
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-red-500 via-red-400 to-red-300 shadow-2xl shadow-red-500/50">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-300 animate-pulse"></div>
            </div>

            <div className="space-y-24">
              {hiringProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-2xl shadow-red-500/60">
                    <div className="text-lg font-bold text-gray-900">{step.step}</div>
                    <div className="absolute -inset-2 bg-red-500 rounded-full blur-xl opacity-50 animate-ping"></div>
                  </div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-20 text-right' : 'pl-20'}`}>
                    <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl p-10 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-500 hover:scale-105 shadow-xl">
                      <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-lg">
                        <step.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-700 mb-6 text-lg">{step.desc}</p>
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 text-red-700 text-lg font-semibold rounded-2xl border border-red-200">
                        <FaClock className="w-5 h-5" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-2xl shadow-red-500/50">
                4 Steps • Fast • UAE Timezone Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
              Why Choose Our <span className="text-red-600">UAE Cloud Team</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Unique advantages when hiring cloud engineers through us for UAE projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 p-10 bg-white border border-gray-200 rounded-3xl hover:border-red-500 hover:shadow-2xl transition-all duration-400"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <FaCheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
            Ready to Build Next-Gen Cloud Infrastructure in UAE?
          </h3>
          <p className="text-2xl text-gray-700 mb-14 max-w-4xl mx-auto leading-relaxed">
            Let's architect secure, scalable cloud solutions that power your UAE business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact#project-form">
              <button className="group relative px-14 py-7 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold text-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 overflow-hidden">
                <span className="relative z-10 flex items-center gap-5">
                  START YOUR CLOUD PROJECT
                  <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>

            <Link to="/uaeservices">
              <button className="w-full sm:w-auto flex items-center justify-center gap-5 px-14 py-7 border-2 border-gray-900 text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-2xl font-bold">
                EXPLORE UAE CLOUD SERVICES
                <span className="w-4 h-4 rounded-full bg-gray-900"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CloudEng
