import { Link } from 'react-router-dom';
import {
  FaPython,
  FaReact,
  FaLaravel,
  FaPalette,
  FaCode,
  FaClock,
  FaUsers,
  FaHandshake,
  FaMobileAlt,
  FaCloud,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Scroll from '../components/ui/Scroll';
import HiringProcessSection from '../components/ui/HiringProcessSection ';
import usePageTitle from '../components/hooks/usePageTitle';
export default function HireTalents() {
usePageTitle("Hire Dedicated Developers");


  const engagementModels = [
    { icon: FaClock, label: 'Hourly', desc: 'Flexible billing for short-term needs' },
    { icon: FaCode, label: 'Part-time', desc: 'Dedicated hours per week' },
    { icon: FaUsers, label: 'Full-time', desc: 'Exclusive team members' },
    { icon: FaHandshake, label: 'Dedicated Team', desc: 'Complete project ownership' }
  ];

  const talents = [
    {
      icon: FaReact,
      title: "Frontend Developers",
      desc: "Expert React, Next.js, and Tailwind engineers building responsive, performant interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "/hiretalents/react-developers"
    },
    {
      icon: FaPython,
      title: "Backend Developers",
      desc: "Python specialists crafting scalable APIs, automation systems, and AI-ready architectures",
      skills: ["Python", "FastAPI", "Django", "PostgreSQL"],
      link: "/hiretalents/python-developers"
    },
    {
      icon: FaLaravel,
      title: "Laravel Developers",
      desc: "PHP experts building robust enterprise backends and modern SaaS applications",
      skills: ["Laravel", "PHP", "MySQL", "Redis"],
      link: "/hiretalents/laravel-developers"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Developers",
      desc: "Cross-platform specialists delivering native experiences for iOS and Android",
      skills: ["Flutter", "React Native", "iOS", "Android"],
      link: "/hiretalents"
    },
    {
      icon: FaCloud,
      title: "Cloud Engineers",
      desc: "DevOps professionals architecting scalable infrastructure and CI/CD pipelines",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      link: "/hiretalents"
    },
    {
      icon: FaPalette,
      title: "UI/UX Designers",
      desc: "Design system architects creating beautiful, intuitive user experiences",
      skills: ["Figma", "Design Systems", "UX Research", "Prototyping"],
      link: "/hiretalents/uiux-designers"
    }
  ];


  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      desc: "Share your vision, tech stack, and timeline with our team",
      duration: "30 mins"
    },
    {
      step: "02",
      title: "Talent Matching",
      desc: "Receive curated profiles of pre-vetted professionals within 48 hours",
      duration: "2 days"
    },
    {
      step: "03",
      title: "Technical Interview",
      desc: "Conduct interviews and assess technical fit with your team",
      duration: "1 week"
    },
    {
      step: "04",
      title: "Seamless Onboarding",
      desc: "Start collaboration with integrated tools and workflows",
      duration: "1-3 days"
    }
  ];

  const reasons = [
    {
      title: "Pre-vetted Excellence",
      desc: "Every professional passes rigorous technical assessments and background checks"
    },
    {
      title: "Rapid Deployment",
      desc: "Start working with your new team member within days, not months"
    },
    {
      title: "Flexible Scaling",
      desc: "Scale your team up or down seamlessly based on project demands"
    },
    {
      title: "Global Time Zones",
      desc: "Find talent that aligns perfectly with your working hours"
    },
    {
      title: "Enterprise Security",
      desc: "Comprehensive NDAs, IP protection, and data security protocols"
    },
    {
      title: "Cost Efficiency",
      desc: "Access world-class talent at competitive rates without compromise"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]"></div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FaPython className="absolute top-24 left-[8%] text-7xl text-blue-500 opacity-30 animate-float glow-blue" />
          <FaReact className="absolute top-40 right-[12%] text-6xl text-cyan-400 opacity-30 animate-float-delayed glow-cyan" />
          <FaLaravel className="absolute bottom-40 left-[18%] text-6xl text-red-500 opacity-30 animate-float glow-red" />
          <FaPalette className="absolute bottom-24 right-[22%] text-7xl text-purple-500 opacity-30 animate-float-delayed glow-purple" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight">
            Hire Talents
          </h1>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            (
            <Link to="/" className="hover:text-red-500 transition-colors">
              HOME
            </Link>{" "}
            - <span className="font-semibold">HIRE TALENTS</span>)
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-14 z-10 mb-16">
          <img
            src="hiretalents.jpg"
            alt="Hire Talents"
            className="w-full h-64 md:h-96 object-cover rounded-t-3xl shadow-xl"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-t-3xl"></div>
        </div>
        <Scroll />


      </section>

      {/* Divider */}
      <section className="py-10">
        <div className="mx-auto w-[90%] h-px bg-black/80"></div>
      </section>




      {/* Specialized Talent Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Specialized <span className="text-red-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access top-tier professionals across every discipline of modern software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talents.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group block focus:outline-none"
              >
                <div
                  className="
          relative bg-white border border-gray-200 rounded-2xl p-8
          hover:border-red-500 hover:shadow-2xl
          transition-all duration-500 hover:-translate-y-2
          h-full
        "
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-red-50 rounded-xl group-hover:bg-red-500 transition-colors duration-300">
                    <item.icon className="text-4xl text-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="
                text-xs font-medium px-3 py-1 rounded-full
                bg-gray-100 text-gray-700
                group-hover:bg-red-50 group-hover:text-red-600
                transition-colors
              "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
      <HiringProcessSection />
      {/* Hiring Process Section */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple & <span className="text-red-500">Transparent</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first conversation to successful collaboration in four straightforward steps
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {/* Connector Line (hidden on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-500 to-transparent opacity-20"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-200">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-red-500 to-red-600 text-white text-2xl font-bold rounded-full shadow-lg">
                    {s.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">{s.desc}</p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 text-sm text-red-500 font-medium">
                    <FaClock className="text-xs" />
                    <span>{s.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Flexible Engagement <span className="text-red-500">Models</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the collaboration model that perfectly fits your project needs and budget
            </p>
          </div>

          {/* Model Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <model.icon className="text-5xl mx-auto mb-6 text-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                    {model.label}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors text-sm">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, #ff0000 12%, transparent 12.5%, transparent 87%, #ff0000 87.5%, #ff0000), linear-gradient(150deg, #ff0000 12%, transparent 12.5%, transparent 87%, #ff0000 87.5%, #ff0000)',
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 40px 70px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose <span className="text-red-500">Vsachi Tech</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've refined our hiring process to deliver exceptional talent with zero compromise
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-full group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="text-white text-lg" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-28 bg-gradient-to-br from-red-500 to-red-600 text-white text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Build Your
            <span className="block mt-2">Dream Team?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Connect with pre-vetted experts who'll elevate your product and accelerate your timeline
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-red-500 px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl group"
          >
            Schedule a Discovery Call
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Additional Info */}
          <p className="mt-10 text-white/80 text-sm">
            No commitment required • Free consultation • Get matched in 48 hours
          </p>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(8deg);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-6deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}