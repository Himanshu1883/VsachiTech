import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ScrollToHash from '../components/ScrollToHash';
import { scrollToTop } from '../utils/lenisController';

export default function Layout({ children }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isFullBleedHero =
    location.pathname === '/digital-engagement' ||
    location.pathname === '/social-media';

  // Jump to top on route change (Lenis pages keep scroll unless reset explicitly).
  useLayoutEffect(() => {
    if (location.hash) return;
    scrollToTop({ immediate: true });
  }, [location.pathname]);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTopButton = () => {
    scrollToTop({ behavior: 'smooth', immediate: false });
  };

  return (
    <div className="min-h-screen flex flex-col text-white overflow-x-hidden">
      <ScrollToHash/>
      <Navbar />

      {/* MAIN CONTENT */}
      <main
        className={`flex-1 ${
          isHome || isFullBleedHero ? 'pt-0' : 'pt-[72px]'
        }`}
      >
        {children}

        {/* BACK TO TOP */}
        <button
          onClick={scrollToTopButton}
          className={`fixed bottom-8 right-8 flex items-center gap-2 text-[#e44f39] hover:text-[#ff6b52]
            transition-all duration-300 cursor-pointer group z-40
            ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
          `}
          aria-label="Back to top"
        >
          <div className="flex flex-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-1 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
            <span
              className="text-xs font-semibold tracking-wider"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              BACK TO TOP
            </span>
          </div>
        </button>
      </main>

      <Footer />
    </div>
  );
}
