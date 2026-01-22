import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovingTextSection from '../components/ui/MovingTextSection';
import {
  FiLayers,
  FiTriangle,
  FiImage,
  FiTrendingUp,
} from "react-icons/fi";
import StickyPortfolioSection from '../components/ui/StickyPortfolioSection';
import ImageText from '../components/ui/ImageText';
import ServiceSection from '../components/ui/ServiceSection';
import Scroll from '../components/ui/Scroll';


function Services() {
  const [cursor, setCursor] = useState({
    show: false,
    x: 0,
    y: 0,
  });
  const [activeStrengthIndex, setActiveStrengthIndex] = useState(null);

  const showCursor = (e) => {
    if (window.innerWidth < 768) return;
    setCursor({
      show: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const moveCursor = (e) => {
    if (window.innerWidth < 768) return;
    setCursor((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const hideCursor = () => {
    setCursor((prev) => ({
      ...prev,
      show: false,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
            Software, AI & Automation Solutions
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            (<Link to="/" className="hover:text-red-500 transition-colors">HOME</Link> - <span className="font-semibold">WHAT WE DO</span>)
          </p>
        </div>

        {/* Team Image with Gradient Effect */}
        <div className="mt-12 mb-10">
          <img
            src="services.jpg"
            alt="Team collaboration"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        <Scroll/>
      </section>
      
      <section className="py-10">
        <div className="mx-auto w-[90%] h-px bg-black/80"></div>
      </section>
      
      <ServiceSection/>

      <section className="pb-40 pt-20 ">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                (ENGINEERED FOR SCALE)
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                We Build Intelligent Software for{' '}
                <span className="text-red-500">
                  Modern Businesses
                </span>
              </h2>
            </div>

            {/* Right Column */}
            <div className="space-y-6 px-5">
              <p className="text-gray-900 text-xl font-semibold">
                Technology solutions designed to scale, automate, and outperform.
              </p>

              <p className="text-gray-700 leading-relaxed">
                At Vsachi Tech, we design and develop high-performance software solutions
                tailored to your business goals. From startups to enterprises, we help
                organizations leverage technology to work smarter, faster, and more efficiently.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our approach combines clean engineering, AI-driven automation, and
                strategic thinking to deliver secure, scalable, and future-ready systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ImageText withBackground={true} />
      </section>

      <MovingTextSection />

      {/* PYTHON + AI AUTOMATION SECTION */}
      <section className="relative bg-gray-50 text-black py-32 overflow-hidden">
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Label */}
          <p className="text-center text-gray-500 tracking-widest mb-10">
            (INTELLIGENT AUTOMATION)
          </p>

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-[48px] md:text-[68px] font-extrabold leading-tight">
              AI Driven <br />
              <span className="text-[#e44f39]">Python Automation Solutions</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-8 text-gray-600 text-lg leading-relaxed">
              We build automation systems that eliminate manual work, streamline operations,
              and integrate seamlessly into your existing infrastructure using Python and AI.
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                id: "01",
                title: "AI Powered Automation",
                desc: "Custom automation systems using Python, AI models, and intelligent logic to handle repetitive and complex business operations.",
              },
              {
                id: "02",
                title: "Custom Python Software",
                desc: "From internal tools to APIs and dashboards, we build robust Python solutions tailored to your exact workflow.",
              },
              {
                id: "03",
                title: "Workflow Optimization",
                desc: "We analyze existing processes and engineer automation to improve speed, accuracy, and operational efficiency.",
              },
              {
                id: "04",
                title: "Scalable & Secure Systems",
                desc: "Enterprise-grade automation designed with security, scalability, and performance as core principles.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative border bg-white border-black/10 rounded-2xl p-10 overflow-hidden hover:border-[#e44f39] transition"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#e44f39] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-sm tracking-widest text-gray-500 group-hover:text-black transition">
                    {item.id}
                  </span>

                  <h3 className="text-3xl font-bold mt-4 mb-6 group-hover:text-black transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-black transition">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-24">
            <Link
              to="/contact"
              className="flex items-center gap-4 px-10 py-5 border border-black rounded-full text-sm tracking-wider
                   hover:bg-black hover:text-white transition group"
            >
              BUILD YOUR AUTOMATION
              <span className="w-2 h-2 bg-black rounded-full group-hover:bg-white"></span>
            </Link>
          </div>
        </div>
      </section>  
      
      {/* MORE THAN JUST WEB DEVELOPMENT SECTION */}
      <section className="relative text-white pb-12 sm:pb-20 pt-5 px-4 sm:px-5 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/sbg1.jpg')" }}
        />

        {/* Black Tint Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10">
          {/* Section Heading */}
          <div className="py-12 sm:py-16 text-center text-xs sm:text-sm tracking-widest">
            (More than just web development)
          </div>

          {[
            {
              id: "001",
              title: "AUTOMATION",
              desc: "Automation is at the core of building efficient digital systems. We design and develop intelligent automation solutions that streamline workflows, reduce manual effort.",
            },
            {
              id: "002",
              title: "WEB DEVELOP",
              desc: "We understand that each business is unique. We offer customized web design services to match your brand identity and business goals perfectly.",
            },
            {
              id: "003",
              title: "UX DESIGN",
              desc: "With our UX/UI optimizations, we ensure your website delivers seamless navigation and an engaging experience for your visitors.",
            },
            {
              id: "004",
              title: "ECOMMERCE",
              desc: "Drive sales and expand your online reach with our robust e-commerce solutions to maximize conversions.",
            },
            {
              id: "005",
              title: "OPTIMIZATION",
              desc: "Optimizing web performance improves conversions through techniques such as page speed optimization, image optimization, CDN implementation, and browser/server caching.",
            },
          ].map((item, index) => {
            const isActive = activeStrengthIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveStrengthIndex(index)}
                onMouseLeave={() => setActiveStrengthIndex(null)}
                onClick={(e) => {
                  // On mobile, toggle active state when clicking anywhere except arrow
                  if (window.innerWidth < 1024) {
                    e.preventDefault();
                    setActiveStrengthIndex(isActive ? null : index);
                  }
                }}
                className="relative border-t border-white/20 overflow-hidden cursor-pointer"
              >
                {/* Hover Background */}
                <div
                  className={`
                    absolute inset-0 bg-[#e44f39]
                    transition-transform duration-500 ease-out
                    ${isActive ? "translate-y-0" : "translate-y-full"}
                  `}
                />

                {/* DESKTOP LAYOUT (lg and above) */}
                <Link to="/contact" className="hidden lg:block">
                  <div className="relative z-10 px-6 sm:px-10 py-6">
                    <div className="relative flex items-center">
                      {/* ID */}
                      <span
                        className={`absolute left-10 border rounded-full px-4 py-1 text-sm transition-colors duration-300
                          ${isActive ? "border-black text-black" : "border-white text-white"}`}
                      >
                        {item.id}
                      </span>

                      {/* TITLE */}
                      <h2
                        className={`
                          mx-auto text-[6vw] font-bold uppercase leading-none
                          transition-all duration-500 ease-out
                          ${isActive ? "text-black translate-x-[-15vw]" : "text-white"}
                        `}
                      >
                        {item.title}
                      </h2>

                      {/* RIGHT CONTENT */}
                      <div className="absolute right-10 flex items-center gap-10">
                        <p
                          className={`
                            max-w-md text-lg font-bold
                            transition-all duration-500 ease-out
                            ${isActive
                              ? "opacity-100 translate-x-0 text-black"
                              : "opacity-0 translate-x-20 text-black"}
                          `}
                        >
                          {item.desc}
                        </p>

                        <span
                          className={`text-3xl rotate-45 transition-colors duration-300
                            ${isActive ? "text-black" : "text-white"}`}
                        >
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* MOBILE LAYOUT (below lg) */}
                <div className="relative z-10 px-4 sm:px-6 py-6 lg:hidden">
                  <div className="space-y-4">
                    {/* Top Row - ID and Arrow */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`border rounded-full px-3 py-1 text-xs sm:text-sm transition-colors duration-300
                          ${isActive ? "border-black text-black" : "border-white text-white"}`}
                      >
                        {item.id}
                      </span>

                      <Link 
                        to="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className={`text-2xl sm:text-3xl rotate-45 transition-colors duration-300 inline-block
                          ${isActive ? "text-black" : "text-white"}`}
                      >
                        ↗
                      </Link>
                    </div>

                    {/* Title */}
                    <h2
                      className={`
                        text-[12vw] sm:text-[10vw] font-bold uppercase leading-none
                        transition-colors duration-500 ease-out
                        ${isActive ? "text-black" : "text-white"}
                      `}
                    >
                      {item.title}
                    </h2>

                    {/* Description - Only show when active */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500 ease-out
                        ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-black">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
 
      {/* WHY VSACHI TECH SECTION */}
      <section className="relative bg-[#f4f3f1] text-[#1c1c1c] px-8 py-24 overflow-hidden">
        {/* CUSTOM CURSOR - Desktop only */}
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
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "600",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
            }}
          >
            MORE
          </div>
        )}

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 mb-6">
              (WHY VSACHI TECH)
            </p>

            <h1 className="text-[64px] leading-[1.05] font-bold mb-16">
              Software Solutions <br />
              Built for Real <br />
              Business Impact
            </h1>

            <Link to={"/contact"}>
              <button className="flex items-center gap-4 border border-black rounded-full px-8 py-4 text-sm tracking-wider hover:bg-black hover:text-white transition group">
                START YOUR PROJECT
                <span className="w-2 h-2 bg-black rounded-full group-hover:bg-white"></span>
              </button>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                icon: <FiLayers />,
                title: "Customized Design",
                desc: "Our expert team will create a visually stunning and user-friendly website optimized for all devices.",
              },
              {
                icon: <FiTriangle />,
                title: "Compelling Content",
                desc: "We'll craft compelling and engaging content that communicates your message effectively.",
              },
              {
                icon: <FiImage />,
                title: "Strategic Thinking",
                desc: "We don't just code — we solve problems with a product-first mindset.",
              },
              {
                icon: <FiTrendingUp />,
                title: "SEO Advantage",
                desc: "AI-powered SEO helps you gain a competitive edge in the digital landscape.",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to="/who-we-are"
                onMouseEnter={showCursor}
                onMouseMove={moveCursor}
                onMouseLeave={hideCursor}
                className="group block"
              >
                <div>
                  <div className="text-[#e44f39] text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4 transition-all duration-300 group-hover:font-bold group-hover:text-black">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyPortfolioSection />
    </div>
  );
}

export default Services;