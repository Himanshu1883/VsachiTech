import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SM_FAQ } from "../socialMediaData";

export default function SmFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { heading, items } = SM_FAQ;

  return (
    <section className="relative w-full bg-[#eeedeb] pt-20">
      <div className="mb-16">
        <h2 className="text-center text-4xl font-bold text-[#e44f39] md:text-5xl lg:text-7xl">
          {heading}
        </h2>
      </div>

      <div className="w-full">
        <div className="divide-y divide-black">
          {items.map((section, index) => (
            <div key={section.id} className="relative">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="home-gutter flex w-full items-center justify-between py-4 text-left transition-colors duration-300 hover:bg-gray-200/50 md:py-4"
              >
                <div className="flex flex-1 items-center">
                  <h3
                    className={`text-5xl tracking-tighter md:text-7xl lg:text-8xl ${section.color}`}
                  >
                    {section.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 0 : 45 }}
                  transition={{ duration: 0.3 }}
                  className="ml-8 flex items-center justify-center"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={
                      openIndex === index ? "text-[#e44f39]" : "text-gray-400"
                    }
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
                    <div className="home-gutter pb-8 pt-8">
                      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                          <h4 className="max-w-xl text-2xl font-normal leading-tight text-black md:text-3xl lg:text-4xl">
                            {section.description}
                          </h4>
                          <p className="max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">
                            {section.fullDescription}
                          </p>
                        </div>

                        <div className="relative h-[300px] w-full lg:h-[300px]">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="absolute inset-0 h-full w-full rounded-lg object-cover"
                            loading="lazy"
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
