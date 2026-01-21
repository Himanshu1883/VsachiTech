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
      <div className="relative">

        {/* LEFT — PINNED PANEL */}
        <div
          ref={leftRef}
          className="absolute left-0 top-0 w-[40%] h-screen px-16 py-24
                     border-r border-[#1c1c1c] bg-[#f4f3f1]
                     hidden lg:block"
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
        <div
          ref={rightRef}
          className="lg:ml-[40%]"
        >
          {projects.map((item, i) => (
            <div
              key={i}
              ref={el => (itemRefs.current[i] = el)}
              className="relative h-[60vh] grid grid-cols-1 lg:grid-cols-2
                         border-b border-[#1c1c1c]"
            >
              {/* CENTER DIVIDER */}
              <span className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[#1c1c1c]" />

              {/* TEXT */}
              <div
                className={`p-16 flex items-center ${
                  i % 2 === 0 ? "lg:order-1" : "lg:order-2"
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
                  i % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute max-w-[80%] shadow-xl
                              transition-opacity duration-700
                              ${
                                activeIndex === i
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
