export default function TwoWingsSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            (Our Core Offerings)
          </p>
          <h2 className="text-6xl font-bold leading-tight text-gray-900">
            Two Wings. <span className="text-red-500">One Vision.</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need digital solutions or technical talent, we deliver with precision and reliability.
          </p>
        </div>

        {/* Two Wings Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Wing 1: Digital Services */}
          <div className="bg-white border border-gray-200 rounded-lg p-10 hover:shadow-2xl hover:border-red-200 transition-all duration-300 group relative overflow-hidden">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/30 group-hover:to-transparent transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
                  WING 1
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Digital & AI Services
                </h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                End-to-end digital solutions designed to help SMEs scale, automate, and grow online.
              </p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>Web Development for SMEs</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>SEO (Local, Technical, Content)</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>PPC Advertising (Google & Meta Ads)</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>AI Business Process Automation</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>AI Chatbots (Website, WhatsApp, CRM)</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 mt-16 pt- border border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                Explore Services
              </button>
            </div>
          </div>

          {/* Wing 2: Resource Hiring */}
          <div className="bg-white border border-gray-200 rounded-lg p-10 hover:shadow-2xl hover:border-red-200 transition-all duration-300 group relative overflow-hidden">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/30 group-hover:to-transparent transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
                  WING 2
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  IT Resource Hiring
                </h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Skilled technical talent ready to integrate with your team on your terms.
              </p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>Python Developers (Django, FastAPI)</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>Laravel Developers</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>React Developers</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-red-500 mr-3 mt-1 group-hover/item:translate-x-1 transition-transform">→</span>
                  <span>UI/UX Designers</span>
                </li>
              </ul>
              <div className="mb-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3 font-medium">Engagement Models:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors cursor-default">Hourly</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors cursor-default">Part-time</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors cursor-default">Full-time</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors cursor-default">Dedicated Team</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-red-50 hover:text-red-600 transition-colors cursor-default">White-label</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 border border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                Hire Talent
              </button>
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