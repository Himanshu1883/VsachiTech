import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhyUsSection() {
  const [openIndex, setOpenIndex] = useState(0);

const sections = [
  {
    title: "WHY US",
    description: "Engineering-first digital solutions built to scale.",
    fullDescription:
      "We focus on building reliable, high-performance websites and systems using clean architecture, modern frameworks, and proven engineering practices. Every project is approached with long-term scalability, maintainability, and business impact in mind not shortcuts or templates.",
    color: "text-black",
    image: "/whyus.jpg",
  },
  {
    title: "BENEFITS",
    description: "Speed, stability, and systems that actually work.",
    fullDescription:
      "Our clients benefit from fast delivery, robust codebases, and solutions designed to evolve with their business. We leverage automation and AI assisted workflows internally to accelerate development, reduce errors, and deliver more value in less time  without compromising quality.",
    color: "text-black",
    image: "/benefits.jpg",
  },
  {
    title: "SERVICES",
    description: "From frontend to backend, automation to APIs.",
    fullDescription:
      "We design and develop modern websites, backend systems, APIs, and Python powered automation. Whether it’s a responsive frontend, a scalable backend, or workflow automation that saves hours of manual work we build systems that integrate smoothly and perform reliably.",
    color: "text-black",
    image: "/services.jpg",
  },
  {
    title: "MISSION",
    description: "Building technology that supports real business growth.",
    fullDescription:
      "Our mission is to help companies move faster and operate smarter through well-engineered digital products. By combining strong development fundamentals with automation and AI-assisted tooling, we create solutions that are efficient, future-ready, and built for real-world use.",
    color: "text-black",
    image: "/mission.jpg",
  },
];


  return (
    <section className="relative w-full pt-20">
      {/* Accordion section - Full width */}
      <div className="mb-16">
        <h2 className="text-4xl text-[#e44f39] md:text-5xl lg:text-7xl font-bold text-center">
          REDEFINING DIGITAL CREATIVITY
        </h2>
      </div>
      <div className="w-full">
        <div className="divide-y divide-black">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-4 px-8 md:px-16 flex justify-between items-center text-left hover:bg-gray-200/50 transition-colors duration-300"
              >
                <div className="flex items-center flex-1">
                  <h3 className={`text-5xl md:text-7xl lg:text-8xl tracking-tighter ${section.color}`}>
                    {section.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 0 : 45 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center ml-8"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={openIndex === index ? "text-[#e44f39]" : "text-gray-400"}
                  >
                    <path
                      d="M5 20 L35 20 M20 5 L20 35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#e8e8e8]"
                  >
                    <div className="px-8 md:px-16 pb-8 pt-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left side - Text content */}
                        <div className="space-y-8">
                          <h4 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-tight max-w-xl">
                            {section.description}
                          </h4>
                          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
                            {section.fullDescription}
                          </p>

                        </div>

                        {/* Right side - Image */}
                        <div className="relative h-[300px] lg:h-[300px] w-full">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                          />

                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}