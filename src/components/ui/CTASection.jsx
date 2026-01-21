import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="bg-[#1A1A1A]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="
          relative overflow-hidden
          bg-[#242424]
          p-12 md:p-16 lg:p-20
        "
      >


        <div className="relative grid lg:grid-cols-2 gap-12 items-center bg-[#242424]">
          {/* LEFT */}
          <div>
            <span className="text-xs tracking-widest text-gray-400">
              (LET’S WORK TOGETHER)
            </span>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight text-white">
              Ready to build a{" "}
              <span className="text-[#e44f39]">system</span> that actually{" "}
              <span className="text-[#e44f39]">scales</span>?
            </h2>

            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              Whether you need a high-performance website, backend systems,
              APIs, or Python automation — we design and build solutions that
              are reliable, maintainable, and ready for real-world use.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex lg:justify-end">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="
                  group flex items-center gap-4
                  px-10 py-5
                  text-lg font-semibold
                  text-black
                  bg-[#e44f39]
                  rounded-xl
                  transition-all
                "
              >
                Let’s Connect
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
