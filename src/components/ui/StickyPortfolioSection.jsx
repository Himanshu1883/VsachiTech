import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    meta: "AI · WEB ENGINEERING · PERFORMANCE",
    title: "AI-Enhanced Web Platforms",
    description:
      "High-performance websites engineered with AI-driven optimization, modern UI systems, and scalable architecture for growing businesses.",
    image: "pf1.jpg",
  },
  {
    meta: "SOFTWARE · CLOUD · AUTOMATION",
    title: "Scalable Software Solutions",
    description:
      "Custom-built software products designed to scale—from MVPs to enterprise platforms with cloud-native architecture.",
    image: "pf2.jpg",
  },
  {
    meta: "ENGINEERING · STACK · INFRASTRUCTURE",
    title: "Modern Technology Stack",
    description:
      "We work with React, Next.js, Node.js, Python, Django, AWS, Docker, and modern DevOps to build reliable systems.",
    image: "pf3.jpg",
  },
  {
    meta: "AI · AUTOMATION · INNOVATION",
    title: "Built for Intelligent Automation",
    description:
      "We combine AI models, Python automation, and engineering expertise to eliminate manual work and optimize operations.",
    image: "pf4.jpg",
  },
];

export default function StickyPortfolioSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // ✅ DESKTOP ONLY
      "(min-width: 1024px)": () => {
        const scrollHeight =
          rightRef.current.scrollHeight - window.innerHeight;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: scrollHeight > 0 ? `+=${scrollHeight}` : "+=1",
          pin: leftRef.current,
          pinSpacing: true,
          invalidateOnRefresh: true,
        });

        itemRefs.current.forEach((el, index) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f4f3f1] text-[#1c1c1c] border-t border-[#1c1c1c]"
    >
      {/* DESKTOP LAYOUT */}
      <div className="relative hidden lg:block">
        {/* LEFT — PINNED PANEL */}
        <div
          ref={leftRef}
          className="absolute left-0 top-0 w-[40%] h-screen px-16 py-24
                     border-r border-[#1c1c1c] bg-[#f4f3f1]"
        >
          <span className="text-sm tracking-wide opacity-60">
            {projects[activeIndex].meta}
          </span>

          <h2 className="mt-6 text-6xl font-semibold leading-tight">
            {projects[activeIndex].title}
          </h2>

          <p className="mt-6 text-lg opacity-80 max-w-md">
            {projects[activeIndex].description}
          </p>
        </div>

        {/* RIGHT — SCROLL CONTENT */}
        <div ref={rightRef} className="ml-[40%]">
          {projects.map((item, i) => (
            <div
              key={i}
              ref={el => (itemRefs.current[i] = el)}
              className="relative h-[60vh] grid grid-cols-2 border-b border-[#1c1c1c]"
            >
              {/* CENTER DIVIDER */}
              <span className="absolute left-1/2 top-0 h-full w-px bg-[#1c1c1c]" />

              {/* TEXT */}
              <div
                className={`p-16 flex items-center ${
                  i % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-60">
                    {item.meta}
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div
                className={`relative flex items-center justify-center ${
                  i % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute max-w-[80%] shadow-xl
                              transition-opacity duration-700
                              ${activeIndex === i ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE LAYOUT - Card Stack */}
      <div className="lg:hidden px-4 sm:px-6 py-12">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="text-xs sm:text-sm tracking-widest opacity-60 uppercase">
            (Our Portfolio)
          </span>

        </div>

        {/* Card Stack */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-[#1c1c1c]/10
                         hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Meta Badge */}
                <div className="absolute top-4 left-4 right-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full 
                                 text-xs font-medium text-[#1c1c1c] tracking-wider">
                    {item.meta}
                  </span>
                </div>

                {/* Number Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                                 bg-[#e44f39] text-white font-bold text-lg sm:text-xl rounded-full">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>

              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#e44f39] to-transparent" />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}