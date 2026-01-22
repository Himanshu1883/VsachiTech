import React, { useState, useEffect, useRef } from 'react';
import {
    FiLayers,
    FiTriangle,
    FiStar,
    FiTarget,
    FiHexagon,
    FiPlus,
} from "react-icons/fi"
import { Link } from 'react-router-dom';
import Scroll from '../components/ui/Scroll';
import TeamSection from '../components/ui/TeamSection ';
function About() {
    const [counters, setCounters] = useState({
        projects: 0,
        awards: 0,
        clients: 0,
        conversions: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);
    const [activeStrengthIndex, setActiveStrengthIndex] = useState(0);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000; // 2 seconds
        const frameRate = 1000 / 60; // 60fps
        const totalFrames = duration / frameRate;

        const targets = {
            projects: 50,
            awards: 16,
            clients: 87,
            conversions: 370
        };

        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3); // Easing function

            setCounters({
                projects: Math.floor(easeOutQuad * targets.projects),
                awards: Math.floor(easeOutQuad * targets.awards),
                clients: Math.floor(easeOutQuad * targets.clients),
                conversions: Math.floor(easeOutQuad * targets.conversions)
            });

            if (frame >= totalFrames) {
                clearInterval(counter);
                setCounters(targets); // Set final values
            }
        }, frameRate);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
<section
  className="relative bg-black 
             py-24 sm:py-32 md:py-40 lg:py-48"
  style={{
    backgroundImage: "url('/vsachibg.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  {/* Black Tint */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Hero Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                   font-bold text-white mb-4 leading-tight">
      BUILDING SCALABLE SOFTWARE SOLUTIONS
    </h1>

    <p className="text-gray-300 text-xs sm:text-sm md:text-base">
      (
      <Link to="/" className="hover:text-red-500 transition-colors">
        HOME
      </Link>{" "}
      - <span className="font-semibold">WHO WE ARE</span>)
    </p>
  </div>

  {/* Stats Glass Card */}
  <div className="relative z-10 mt-10 sm:mt-12 mb-8 px-4">
    <div
      className="max-w-4xl mx-auto 
                 rounded-2xl
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-2xl
                 py-8 sm:py-10 md:py-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center">
        
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
            30+
          </h3>
          <p className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">
            Projects Delivered
          </p>
        </div>

        <div className="sm:border-x border-white/20 px-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-1">
            10x
          </h3>
          <p className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">
            Business Growth
          </p>
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
            24/7
          </h3>
          <p className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">
            Tech Support
          </p>
        </div>

      </div>
    </div>
  </div>

  <Scroll />
</section>


             <TeamSection/>


            {/* Content Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left Column */}
                        <div>
                            <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                                (SUSTAINED SUCCESS)
                            </p>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Not Just Another
                                <span className="text-red-500"> Software Development Company</span>

                            </h2>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 px-5">
                            <p className="text-gray-900 text-xl font-semibold">
                                We are a technology partner focused on building reliable software systems from modern websites to backend platforms, APIs, and automation solutions.

                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                At Vsachi Tech, we combine clean engineering, thoughtful design, and modern technologies to create software that performs in real world conditions. Every solution is built with clarity, performance, and long term scalability in mind.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                We don’t just deliver projects we build systems that support growth. From technical architecture to execution, we help businesses make informed decisions and turn ideas into dependable digital products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animated Marquee Section */}
            <section className="bg-gray-200 py-16 overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-content">
                        <span className="marquee-text">SOFTWARE SYSTEMS • AUTOMATION • APIs • SCALABLE ARCHITECTURE</span>
                        <span className="marquee-text">SOFTWARE SYSTEMS • AUTOMATION • APIs • SCALABLE ARCHITECTURE</span>
                    </div>
                </div>

                <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }
          
          .marquee-content {
            display: flex;
            animation: marquee 20s linear infinite;
            white-space: nowrap;
          }
          
          .marquee-text {
            font-size: 6rem;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.08);
            padding-right: 4rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            letter-spacing: 0.02em;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @media (max-width: 768px) {
            .marquee-text {
              font-size: 3rem;
            }
          }
        `}</style>
            </section>

            {/* Stats Section with Counter Animation */}
            <section ref={statsRef} className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Stat 1 */}
                        <div className="border-b-4 border-gray-900 pb-4">
                            <h3 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">
                                {counters.projects}+
                            </h3>
                            <p className="text-gray-700 text-lg">
                                Software, Web, and Automation Projects Delivered

                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="border-b-4 border-gray-900 pb-4">
                            <h3 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">
                                {counters.awards}+
                            </h3>
                            <p className="text-gray-700 text-lg">
                                Years of Combined Engineering Experience

                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="border-b-4 border-gray-900 pb-4">
                            <h3 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">
                                {counters.clients}%
                            </h3>
                            <p className="text-gray-700 text-lg">
                                Average Increase Conversions and Sales

                            </p>
                        </div>

                        {/* Stat 4 */}
                        <div className="border-b-4 border-gray-900 pb-4">
                            <h3 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">
                                {counters.conversions}%
                            </h3>
                            <p className="text-gray-700 text-lg">
                                Average Performance and Efficiency Improvements

                            </p>
                        </div>
                    </div>
                </div>
            </section>
           {/* OUR STRENGTH SECTION */}
<section className="bg-[#1c1c1c] text-white pb-12 sm:pb-20 pt-5 px-4 sm:px-5">
    <div className="py-12 sm:py-16 text-center text-xs sm:text-sm tracking-widest">
        (OUR STRENGTH)
    </div>

    {[
        {
            id: "001",
            title: "STRATEGY",
            desc: "We design systems with a clear technical roadmap, focusing on scalability, performance, and business goals.",
        },
        {
            id: "002",
            title: "WEB DEVELOP",
            desc: "We build modern, high-performance websites and applications using clean, maintainable code",
        },
        {
            id: "003",
            title: "UX DESIGN",
            desc: "Every interface is crafted for clarity, usability, and intuitive user experience across all devices",
        },
        {
            id: "004",
            title: "ECOMMERCE",
            desc: "Robust, secure e-commerce systems designed to scale and handle real-world traffic and transactions.",
        },
        {
            id: "005",
            title: "DEVELOPMENT",
            desc: "End-to-end development covering frontend, backend, APIs, integrations, and automation workflows.",
        },
    ].map((item, index) => {
        const isActive = activeStrengthIndex === index;

        return (
            <div
                key={index}
                onMouseEnter={() => setActiveStrengthIndex(index)}
                onClick={() => setActiveStrengthIndex(index)}
                className="relative border-t border-white/20 overflow-hidden cursor-pointer"
            >
                {/* Background */}
                <div
                    className={`
                        absolute inset-0 bg-[#e44f39]
                        transition-transform duration-500 ease-out
                        ${isActive ? "translate-y-0" : "translate-y-full"}
                    `}
                />

                {/* DESKTOP LAYOUT (lg and above) */}
                <div className="relative z-10 px-6 sm:px-10 py-5 hidden lg:block">
                    <div className="relative flex items-center">
                        {/* ID (LEFT FIXED) */}
                        <span
                            className={`absolute left-10 border rounded-full px-4 py-1 text-sm transition-colors duration-300
                                ${isActive ? "border-black text-black" : "border-white text-white"}`}
                        >
                            {item.id}
                        </span>

                        {/* TITLE – DEAD CENTER */}
                        <h2
                            className={`
                                mx-auto text-[6vw] tracking-tighter font-bold uppercase leading-none
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

                            <span
                                className={`text-2xl sm:text-3xl rotate-45 transition-colors duration-300
                                    ${isActive ? "text-black" : "text-white"}`}
                            >
                                ↗
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            className={`
                                text-[12vw] sm:text-[10vw] tracking-tighter font-bold uppercase leading-none
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
</section>

            {/* SERVICES GRID */}
            <section className="bg-[#eaeaea] py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3">

                        {[
                            {
                                title: "Expertise",
                                text:
                                    "Our team comprises highly skilled professionals with extensive experience creating visually appealing and user-friendly websites.",
                                icon: <FiLayers />,
                            },
                            {
                                title: "Solutions",
                                text:
                                    "We understand that each business is unique. We offer customized web design services to match your brand identity and business goals perfectly.",
                                icon: <FiTriangle />,
                            },
                            {
                                title: "Experience",
                                text:
                                    "Our experienced design and development teams ensure your website delivers seamless navigation and an engaging visitor experience.",
                                icon: <FiStar />,
                            },
                            {
                                title: "Strategy",
                                text:
                                    "We develop a long-term strategic plan that outlines how to create and establish your company’s online presence.",
                                icon: <FiTarget />,
                            },
                            {
                                title: "Consultation",
                                text:
                                    "Gain a competitive edge with expert advice and insights. Our consulting services help you make informed decisions and achieve success.",
                                icon: <FiHexagon />,
                            },
                            {
                                title: "Support",
                                text:
                                    "We troubleshoot technical issues and provide user support to ensure your site always meets your needs.",
                                icon: <FiPlus />,
                            },
                        ].map((item, i) => {
                            const isLastColumn = (i + 1) % 3 === 0;
                            const isLastRow = i >= 3;

                            return (
                                <div
                                    key={i}
                                    className={`
              px-14 py-20 text-center flex flex-col items-center text-black
              border-black
              ${!isLastColumn ? "md:border-r" : ""}
              ${!isLastRow ? "md:border-b" : ""}
            `}
                                >
                                    {/* ICON */}
                                    <div className="mb-8 text-[#e44f39] text-[34px]">
                                        {item.icon}
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-[22px] font-bold mb-6">
                                        {item.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-[15px] leading-[1.8] text-black/70 max-w-sm">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
            {/* TRUSTED AGENCY SECTION */}
            <section className="bg-[#f4f4f4] py-28">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20">
                    {/* Left */}
                    <div className='text-black'>
                        <p className="text-xs tracking-widest mb-6">(REDEFINING YOUR ONLINE PRESENCE)</p>
                        <h2 className="text-6xl font-extrabold leading-tight">
                            A Trusted Software Development Partner for{' '}
                            <span className="text-red-500">Your Business or Product</span>
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg">
                            Build software that works reliably, scales efficiently, and supports your <span className='text-red-600'>business goals.</span>
                        </p>

                        <p>
                            At Vsachi Tech, we focus on engineering quality, clean architecture, and practical solutions not shortcuts.
                        </p>

                        <p>
                            We work with startups, growing businesses, and teams that value performance and long-term stability.

                        </p>

                        <p>
                            Our team brings deep experience across web, backend, Python, APIs, and automation.

                        </p>

                        <p className="font-bold text-red-600">
                            You work directly with experienced engineers. No fluff. No shortcuts.

                        </p>
                    </div>
                </div>
            </section>




        </div>
    );
}

export default About;