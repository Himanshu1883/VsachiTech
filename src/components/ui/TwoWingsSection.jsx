import { Link } from "react-router-dom";

export default function TwoWingsSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-28 lg:py-32 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

        <div className="absolute top-40 right-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            (Our Core Offerings)
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Where <span className="text-red-500">Growth Engines</span> Unite.
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We combine technology, talent, and digital engagement to help businesses scale faster,
            connect deeper, and grow smarter.
          </p>
        </div>

        {/* Three Engine Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {/* Tech Engine */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] hover:-translate-y-3 hover:border-red-300 transition-all duration-500 group relative overflow-hidden">

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/40 group-hover:to-transparent transition-all duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">

              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
                  Tech Engine
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  Digital & AI Services
                </h3>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                End-to-end digital solutions designed to help SMEs scale,
                automate, and accelerate growth online.
              </p>

              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Web Development for SMEs</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>SEO (Local, Technical, Content)</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>PPC Advertising (Google & Meta Ads)</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>AI Business Process Automation</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>AI Chatbots (Website, WhatsApp, CRM)</span>
                </li>
              </ul>

              <div className="mt-auto">
                <Link to={"/what-we-do"}>
                  <button className="w-full px-6 py-3 border border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Talent Acquisition Engine */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] hover:-translate-y-3 hover:border-red-300 transition-all duration-500 group relative overflow-hidden">

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/40 group-hover:to-transparent transition-all duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">

              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
                  Talent Acquisition Engine
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  IT Resource Hiring
                </h3>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Skilled technical professionals ready to integrate seamlessly
                with your team on flexible engagement models.
              </p>

              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Python Developers (Django, FastAPI)</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Laravel Developers</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>React Developers</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>UI/UX Designers</span>
                </li>
              </ul>

              <div className="mb-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  Engagement Models:
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                    Hourly
                  </span>

                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                    Part-time
                  </span>

                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                    Full-time
                  </span>

                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                    Dedicated Team
                  </span>

                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                    White-label
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <Link to={"/hiretalents"}>
                  <button className="w-full px-6 py-3 border border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Hire Talent
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Digital Engagement Engine */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] hover:-translate-y-3 hover:border-red-300 transition-all duration-500 group relative overflow-hidden">

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/40 group-hover:to-transparent transition-all duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">

              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
                  Digital Engagement Engine
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  Creative Media & Brand Presence
                </h3>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Building impactful digital experiences through creative storytelling,
                social media management, and audience engagement strategies.
              </p>

              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Social Media Management</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Video Editing & Reels Production</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Graphic Design & Visual Branding</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Content Strategy & Campaigns</span>
                </li>

                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">
                    →
                  </span>
                  <span>Community Engagement & Growth</span>
                </li>
              </ul>

              <div className="mt-auto">
                <Link to={"/digital-engagement"}>
                  <button className="w-full px-6 py-3 border border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Boost Engagement
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }

          33% {
            transform: translate(30px, -50px) scale(1.1);
          }

          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }

          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}