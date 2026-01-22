import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HoverSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);

  const sections = [
    {
      number: "001",
      title: "Web Development",
      description: "We build fast, secure, and scalable websites using modern technologies, ensuring smooth performance, clean code, and seamless user experiences across all devices.",
      image: "/logos/webdev.avif"
    },
    {
      number: "002",
      title: "Web Designing",
      description: "Our creative design team crafts visually appealing, intuitive, and user-centric designs that reflect your brand identity and engage your audience effectively.",
      image: "/hs2.jpg"
    },
    {
      number: "003",
      title: "Automation",
      description: "We develop intelligent automation solutions to streamline workflows, reduce manual effort, and increase efficiency using advanced tools and AI-driven systems.",
      image: "/logos/automation.jpg"
    },
    {
      number: "004",
      title: "Python",
      description: "Our Python expertise enables powerful backend systems, data processing, scripting, and AI-driven solutions tailored to your business requirements.",
      image: "/logos/Python1.jpg"
    }
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-24">
      {/* Top section with title */}
      <div className="mb-12 sm:mb-16 flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide">(WHAT WE OFFER)</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className='text-black'>Our </span>
            <span className="text-[#e44f39]">Agency </span>
            <span className='text-black'>Offers</span>
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-400 mb-6 sm:mb-8"></div>

      {/* Hover sections */}
      <div className="space-y-0">
        {sections.map((section, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setExpandedMobile(expandedMobile === index ? null : index)}
            className="relative border-b border-gray-400 last:border-b-0 transition-all duration-300 cursor-pointer lg:cursor-default"
          >
            {/* DESKTOP LAYOUT (lg and above) */}
            <div className="hidden lg:flex items-center gap-8 overflow-hidden min-h-[200px]">
              {/* Left side - Image (appears on hover and pushes content) */}
              <div className="flex-shrink-0 overflow-hidden">
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, width: 0, marginRight: 0, x: -20 }}
                      animate={{ opacity: 1, width: 192, marginRight: 32, x: 0 }}
                      exit={{ opacity: 0, width: 0, marginRight: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="h-32 rounded overflow-hidden"
                    >
                      <motion.img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content wrapper */}
              <motion.div 
                className="flex items-center justify-between gap-8 flex-1"
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Middle - Number and Title */}
                <div className="flex items-center gap-6 flex-shrink-0">
                  <motion.span 
                    className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black text-sm font-semibold transition-all duration-300"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      borderColor: hoveredIndex === index ? '#e44f39' : '#000000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.number}
                  </motion.span>
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300"
                    animate={{
                      color: hoveredIndex === index ? '#e44f39' : '#000000'
                    }}
                  >
                    {section.title}
                  </motion.h3>
                </div>

                {/* Right side - Description */}
                <motion.div 
                  className="flex-1 max-w-2xl ml-auto"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* MOBILE LAYOUT (below lg) */}
            <div className="lg:hidden py-6">
              {/* Number, Title, and Image in a row */}
              <div className="flex items-center gap-4 mb-4">
                <motion.span 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  animate={{
                    borderColor: expandedMobile === index ? '#e44f39' : '#000000',
                    color: expandedMobile === index ? '#e44f39' : '#000000'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.number}
                </motion.span>

                <motion.h3 
                  className="text-xl sm:text-2xl font-bold flex-1"
                  animate={{
                    color: expandedMobile === index ? '#e44f39' : '#000000'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.title}
                </motion.h3>

                {/* Mobile Image Thumbnail */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Expandable Description */}
              <AnimatePresence>
                {expandedMobile === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-14 sm:pl-16 pr-4">
                      {section.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand indicator */}
              <div className="flex justify-end mt-3">
                <motion.div
                  animate={{ rotate: expandedMobile === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}