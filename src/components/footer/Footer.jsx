import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/logo';

export default function Footer() {
  const [cursor, setCursor] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  const showCursor = (e) => {
    if (window.innerWidth < 768) return;
    setCursor({ show: true, x: e.clientX, y: e.clientY });
  };

  const moveCursor = (e) => {
    if (window.innerWidth < 768) return;
    setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const hideCursor = () => setCursor({ ...cursor, show: false });

  // Navigation groups for better organization
  const navigationGroups = [
    {
      title: 'Company',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Who We Are', path: '/who-we-are' },
        { name: 'Our Work', path: '/our-work' },
        { name: 'Our Blog', path: '/our-blog' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'What We Do', path: '/what-we-do' },
        { name: 'Web Development', path: '/what-we-do/web-development' },
        { name: 'SEO Services', path: '/what-we-do/seo-services' },
        { name: 'PPC Advertising', path: '/what-we-do/ppc-advertising' },
        { name: 'Automation', path: '/what-we-do/automation' },
        { name: 'AI Chatbots', path: '/what-we-do/ai-chatbots' },
      ]
    },
    {
      title: 'UAE Services',
      links: [
        { name: 'UAE Services Hub', path: '/uaeservices' },
        { name: 'Web Development', path: '/uaeservices/uae-web-dev' },
        { name: 'SEO Services', path: '/uaeservices/uae-seo' },
        { name: 'PPC Advertising', path: '/uaeservices/uae-ppc' },
        { name: 'Automation', path: '/uaeservices/uae-automation' },
        { name: 'AI Chatbots', path: '/uaeservices/uae-chatbots' },
      ]
    },
    {
      title: 'Hire Talents',
      links: [
        { name: 'Talent Hub', path: '/hiretalents' },
        { name: 'Python Developers', path: '/hiretalents/python-developers' },
        { name: 'Laravel Developers', path: '/hiretalents/laravel-developers' },
        { name: 'React Developers', path: '/hiretalents/react-developers' },
        { name: 'UI/UX Designers', path: '/hiretalents/uiux-designers' },
      ]
    },
    {
      title: 'UAE Talents',
      links: [
        { name: 'React Developers', path: '/uaeservices/uae-react-dev' },
        { name: 'Python Developers', path: '/uaeservices/uae-python-dev' },
        { name: 'Laravel Developers', path: '/uaeservices/uae-laravel-dev' },
        { name: 'Mobile Developers', path: '/uaeservices/uae-mobile-dev' },
        { name: 'Cloud Engineers', path: '/uaeservices/uae-cloud-eng' },
        { name: 'UI/UX Designers', path: '/uaeservices/uae-uiux-design' },
      ]
    },
  ];

  return (
    <footer className="relative w-full bg-[#1a1a1a] text-white overflow-hidden max-h-[90vh]">

      {/* Custom Cursor (Desktop Only) */}
      {cursor.show && (
        <div
          className="fixed z-50 pointer-events-none hidden md:flex"
          style={{
            left: cursor.x - 40,
            top: cursor.y - 40,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Contact Us
        </div>
      )}

      {/* Animated Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-5 pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -3000] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="font-bold tracking-tighter mx-12 leading-none
              text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] xl:text-[18rem]"
            >
              Vsachi Tech
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content - Scrollable Container */}
      <div className="relative z-10 h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-8 sm:pt-10 pb-20">
          
          {/* Top Section: Logo + Description */}
          <div className="mb-10 max-w-2xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 sm:w-9 sm:h-9"/>
              <h3 className="text-xl sm:text-2xl font-bold">VSachi Tech</h3>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Transform your digital presence with our AI web design services.
              Let's create something exceptional together.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-10">
            {navigationGroups.map((group, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#e44f39] mb-2 font-semibold">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-[#e44f39] transition-colors duration-300
                        text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 border-t border-gray-800 pt-8">
            
            {/* LEFT COLUMN - Contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-3">
                {/* Desktop - Hover Effect */}
                <Link
                  to="/contact"
                  onMouseEnter={showCursor}
                  onMouseMove={moveCursor}
                  onMouseLeave={hideCursor}
                  className="group hidden md:block"
                >
                  <h2 className="font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    GET IN TOUCH <span className="text-[#e44f39]">@</span>
                  </h2>
                </Link>

                {/* Mobile - Simple Link */}
                <Link
                  to="/contact"
                  className="md:hidden inline-flex items-center gap-2 text-lg font-semibold text-[#e44f39] hover:gap-3 transition-all"
                >
                  Get in touch →
                </Link>

                {/* Email */}
                <a 
                  href="mailto:info@vsachitech.com"
                  className="block text-base sm:text-lg md:text-xl lg:text-2xl
                  text-gray-400 hover:text-[#e44f39] transition break-all sm:break-normal"
                >
                  info@vsachitech.com
                </a>
              </div>
            </div>

            {/* MIDDLE COLUMN - Social Links */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#e44f39] mb-3">
                  Connect With Us
                </h4>
                <div className="flex gap-4 text-gray-400">
                  <a href="#" className="hover:text-[#e44f39] transition-transform hover:scale-110 duration-300" aria-label="Facebook">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#e44f39] transition-transform hover:scale-110 duration-300" aria-label="Twitter">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#e44f39] transition-transform hover:scale-110 duration-300" aria-label="Telegram">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/vsachi-tech-pvt-ltd/" className="hover:text-[#e44f39] transition-transform hover:scale-110 duration-300" aria-label="LinkedIn">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Business Hours */}
            <div className="lg:col-span-1">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#e44f39] mb-2">
                  Business Hours
                </h4>
                <p className="text-sm sm:text-base text-gray-300">
                  Mon – Fri<br />
                  11:00 AM – 8:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] z-20">
        <div className="h-px bg-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4
          px-6 sm:px-10 md:px-16 lg:px-20 py-3 text-xs">
          
          {/* Left - Copyright */}
          <p className="text-gray-500 text-center sm:text-left">
            © 2026 Vsachi Tech. All rights reserved.
          </p>

          {/* Right - Policies Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 text-gray-500">
            <Link to="/policies" className="hover:text-[#e44f39] transition">Privacy Policy</Link>
            <span>|</span>
            <Link to="/policies" className="hover:text-[#e44f39] transition">Cookie Policy</Link>
            <span>|</span>
            <Link to="/policies" className="hover:text-[#e44f39] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}