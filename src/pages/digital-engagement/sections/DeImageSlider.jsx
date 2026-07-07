import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SLIDER_IMAGES } from "../digitalEngagementData";

export default function DeImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) =>
        prev === SLIDER_IMAGES.length - 1 ? 0 : prev + 1,
      );
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[40px] h-[520px] md:h-[700px] shadow-[0_40px_120px_rgba(0,0,0,0.18)] border border-white/20">
      <AnimatePresence mode="sync">
        {SLIDER_IMAGES.map((image, index) =>
          currentImage === index ? (
            <motion.img
              key={image}
              src={image}
              alt="Digital Engagement"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null,
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">
        <p className="uppercase tracking-[0.3em] text-white/70 text-xs md:text-sm mb-4">
          DIGITAL ENGAGEMENT
        </p>

        <h3 className="text-white text-[34px] md:text-5xl font-black leading-[0.95] tracking-[-0.04em] max-w-md">
          Building brands through modern digital storytelling.
        </h3>

        <Link
          to="/contact"
          className="inline-flex mt-8 items-center gap-3 px-7 py-4 rounded-full bg-[#e44f39] text-white font-semibold hover:scale-105 hover:bg-[#d9422d] hover:shadow-[0_0_40px_rgba(228,79,57,0.45)] transition-all duration-500 shadow-lg"
        >
          Start Project
          <span className="text-xl">→</span>
        </Link>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {SLIDER_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentImage === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
