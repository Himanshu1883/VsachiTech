import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AiServicesSection() {
  const [hoveredItem, setHoveredItem] = useState(1);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
const services = [
  {
    id: 1,
    title: "Modern Web Development",
    description:
      "We build fast, secure, and scalable websites using modern frameworks and clean, maintainable code.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Responsive UI Engineering",
    description:
      "Pixel perfect interfaces designed to perform seamlessly across mobile, tablet, and desktop devices.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Backend & API Development",
    description:
      "Robust backend systems, APIs, and databases that power reliable and high-performance applications.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Performance & Optimization",
    description:
      "Optimized code, fast load times, and SEO-friendly architecture to maximize speed and conversions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
  },
];



  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    if (hoveredItem) window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [hoveredItem]);

  return (
    <section className="relative bg-white text-[#1c1c1c] py-24 px-5 md:px-12 lg:px-24 overflow-hidden">
      {/* subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.04),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-24 max-w-4xl">
          <span className="text-xs tracking-widest text-gray-500">
  (Web Development Services)
</span>
<h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
  We <span className="text-red-500">design and develop</span> high performance <span className="text-red-500">websites</span> focused on speed,
  usability, and <span className="text-red-500">long term scalability.</span> 
</h2>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-10">
  Our Development Expertise
</h3>


            <div className="space-y-10">
              {services.map((service, index) => {
                const active = hoveredItem === service.id;

                return (
                  <motion.div
                    key={service.id}
                    onMouseEnter={() => setHoveredItem(service.id)}
                    onMouseLeave={() => setHoveredItem(1)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer"
                  >
                    <div className="flex gap-6 items-start">
                      <span
                        className={`mt-2 w-2 h-2 rounded-full transition-all
                        ${active ? "bg-[#e44f39]" : "bg-gray-300"}`}
                      />

                      <div>
                        <h4
                          className={`text-xl font-bold uppercase tracking-tight transition-colors
                          ${active ? "text-[#e44f39]" : "text-[#1c1c1c]"}`}
                        >
                          {service.title}
                        </h4>
                        <p className="mt-2 text-gray-600 max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {index !== services.length - 1 && (
                      <div className="mt-10 h-px bg-gray-200" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="relative h-[420px] md:h-[560px] overflow-hidden rounded-xl bg-gray-100">
            <AnimatePresence mode="wait">
             
                <motion.div
                  key={hoveredItem}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={services.find((s) => s.id === hoveredItem)?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  <div className="absolute p-5 backdrop-blur-sm bg-black/40 bottom-8 left-8 right-8 text-white">
                    <h4 className="text-2xl font-bold">
                      {services.find((s) => s.id === hoveredItem)?.title}
                    </h4>
                    <p className="mt-2 text-l opacity-90 max-w-md">
                      {services.find((s) => s.id === hoveredItem)?.description}
                    </p>
                  </div>
                </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-2xl font-bold text-[#e44f39]">
              Ready to build something intelligent?
            </h3>
            <p className="mt-3 text-gray-600 max-w-xl">
              Let’s craft adaptive experiences that evolve with your users.
            </p>
          </div>
          <Link to={"/contact"}>
          <button className="group flex items-center gap-4 text-lg font-semibold text-[#1c1c1c] border-b border-[#1c1c1c] pb-2 hover:text-[#e44f39] hover:border-[#e44f39] transition-all">
            Start a Project
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          </Link>
        </div>
      </div>

      {/* CURSOR DOT */}
     
    </section>
  );
}
