import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
              VSachi Tech
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      {/* Main Content */}
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 px-6 sm:px-10 md:px-16 lg:px-24 pt-16 pb-28">

  {/* LEFT COLUMN (UNCHANGED) */}
  <div className="space-y-24">
    {/* Logo + Description */}
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <img src="/Logo.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
        <h3 className="text-2xl sm:text-3xl font-bold">VSachi Tech</h3>
      </div>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
        Transform your digital presence with our AI web design services.
        Let’s create something exceptional together.
      </p>
    </div>

    {/* Contact */}
    <div className="space-y-6">
     
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
       

      <Link
        to="/contact"
        className="md:hidden inline-block text-xl font-semibold text-[#e44f39]"
      >
        Get in touch →
      </Link>

      <a
        href="mailto:info@vsachitech.com"
        className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl
        text-gray-400 hover:text-[#e44f39] transition break-all sm:break-normal"
      >
        info@vsachitech.com
      </a>
    </div>
  </div>

{/* RIGHT COLUMN (FIXED – EXTREME RIGHT) */}
<div className="hidden lg:flex flex-col ml-auto space-y-10 text-gray-300 text-right">
  <div>
    <h4 className="text-sm uppercase tracking-widest text-red-500 mb-2">
      Office Address
    </h4>
    <p className="text-lg leading-relaxed">
      VSachi Tech<br />
      A2A/50 
      <br/>Janakpuri West
      <br />New Delhi,
      India
    </p>
  </div>

  <div>
    <h4 className="text-sm uppercase tracking-widest text-red-500 mb-2">
      Contact
    </h4>
    <p className="text-lg"> +91 9XXXXXXXXX</p>
    <p className="text-lg break-all">info@vsachitech.com</p>
  </div>

  <div>
    <h4 className="text-sm uppercase tracking-widest text-red-500 mb-2">
      Business Hours
    </h4>
    <p className="text-lg">
      Mon – Fri<br />
      11:00 AM – 8:00 PM IST
    </p>
  </div>
</div>


</div>

      

      {/* Bottom Strip */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between gap-3
          px-6 sm:px-10 md:px-16 lg:px-24 py-4 text-xs sm:text-sm">
          <p className="text-gray-500">
            © 2026 VSachi Tech. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2 text-[#e44f39]">
            <Link to="/policies">Privacy</Link>
            <span>|</span>
            <Link to="/policies">Cookies</Link>
            <span>|</span>
            <Link to="/policies">Web Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
