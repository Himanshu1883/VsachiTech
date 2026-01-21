import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import heroVideo from "../../assets/herovideo.mp4"
export default function HomeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 200,
        y: (e.clientY / window.innerHeight - 0.5) * 200,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ANIMATED ORBS */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]
          rounded-full bg-gradient-to-r from-[#e44f39]/25 to-orange-500/20 blur-3xl"
          style={{ x: -mousePosition.x * 0.8, y: -mousePosition.y * 0.8 }}
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px]
          h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]
          rounded-full bg-gradient-to-r from-blue-500/15 to-[#e44f39]/20 blur-3xl"
          style={{ x: mousePosition.x * 0.6, y: mousePosition.y * 0.6 }}
          animate={{ x: [0, -80, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* SCANLINES */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)'
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        style={{ opacity, scale }}
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center lg:text-left"
        >
          <p className="text-[0.65rem] sm:text-xs tracking-[0.35em] text-gray-400 mb-4">
            (INNOVATION • TECHNOLOGY • TRANSFORMATION)
          </p>

          <h1 className="font-bold text-white leading-[1.05]
            text-[2.4rem]
            sm:text-[3rem]
            md:text-[3.8rem]
            lg:text-[4.5rem]
            xl:text-[5.2rem]"
          >
            CODE THAT <br />
            <span className="text-[#e44f39]">CONQUERS</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
            Transforming ideas into powerful digital solutions that drive growth and innovation for forward thinking businesses.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 items-center sm:justify-center lg:justify-start">
            <Link to="/what-we-do">
              <Button>WHAT WE BUILD</Button>
            </Link>

            <div className="flex gap-6 text-xs text-gray-400">
              <div className="text-center sm:text-left">
                <span className="block text-xl sm:text-2xl font-bold text-[#e44f39]">100+</span>
                PROJECTS
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xl sm:text-2xl font-bold text-[#e44f39]">99%</span>
                SATISFIED
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-right"
        >
          <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:ml-auto">
            THE TECHNICAL PARTNER OF CHOICE FOR COMPANIES BUILDING THE NEXT BIG THING.
          </p>

          <h2 className="mt-10 sm:mt-14 font-bold leading-none text-[#e44f39]
            text-[3.5rem]
            sm:text-[4.5rem]
            md:text-[5.5rem]
            lg:text-[6rem]
            xl:text-[7rem]"
          >
            FLAWLESSLY
          </h2>
        </motion.div>

      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent z-20" />
      <motion.div
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[0.65rem] sm:text-xs tracking-widest text-gray-400 font-semibold">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#e44f39] sm:w-6 sm:h-6">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}