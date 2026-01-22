import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
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

  return (
    <footer className="relative w-full bg-[#1a1a1a] text-white overflow-hidden min-h-[80vh]">

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
              text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] xl:text-[24rem]"
            >
              Vsachi Tech
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 sm:px-10 md:px-16 lg:px-24 pt-12 sm:pt-16 pb-24 sm:pb-28">

        {/* LEFT COLUMN */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {/* Logo + Description */}
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <Logo className="w-8 h-8 sm:w-10 sm:h-10"/>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">VSachi Tech</h3>
            </div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Transform your digital presence with our AI web design services.
              Let's create something exceptional together.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Desktop - Hover Effect */}
            <Link
              to="/contact"
              onMouseEnter={showCursor}
              onMouseMove={moveCursor}
              onMouseLeave={hideCursor}
              className="group hidden md:block"
            >
              <h2 className="font-bold tracking-tight
              text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                GET IN TOUCH <span className="text-[#e44f39]">@</span>
              </h2>
            </Link>

            {/* Mobile - Simple Link */}
            <Link
              to="/contact"
              className="md:hidden inline-flex items-center gap-2 text-lg sm:text-xl font-semibold text-[#e44f39] hover:gap-3 transition-all"
            >
              Get in touch →
            </Link>

            {/* Email */}
            <a
              href="mailto:info@vsachitech.com"
              className="block text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
              text-gray-400 hover:text-[#e44f39] transition break-all sm:break-normal"
            >
              info@vsachitech.com
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN - Desktop & Mobile */}
        <div className="flex flex-col lg:ml-auto space-y-8 sm:space-y-10 text-gray-300 lg:text-right">
          
           

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-widest text-[#e44f39] mb-2 sm:mb-3">
              Contact
            </h4>
   
            <a 
              href="mailto:info@vsachitech.com"
              className="block text-base sm:text-lg break-all hover:text-[#e44f39] transition"
            >
              info@vsachitech.com
            </a>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-widest text-[#e44f39] mb-2 sm:mb-3">
              Business Hours
            </h4>
            <p className="text-base sm:text-lg">
              Mon – Fri<br />
              11:00 AM – 8:00 PM IST
            </p>
          </div>

          {/* Social Links - Mobile Only */}
          <div className="lg:hidden pt-4 border-t border-gray-700">
            <h4 className="text-xs sm:text-sm uppercase tracking-widest text-[#e44f39] mb-3">
              Follow Us
            </h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-[#e44f39] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#e44f39] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#e44f39] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#e44f39] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4
          px-6 sm:px-10 md:px-16 lg:px-24 py-4 sm:py-5 text-xs sm:text-sm">
          <p className="text-gray-500 text-center sm:text-left">
            © 2026 Vsachi Tech. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-[#e44f39]">
            <Link to="/policies" className="hover:underline">Privacy</Link>
            <span className="text-gray-500">|</span>
            <Link to="/policies" className="hover:underline">Cookies</Link>
            <span className="text-gray-500">|</span>
            <Link to="/policies" className="hover:underline">Web Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}