import { FiGrid, FiMenu, FiX } from 'react-icons/fi';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WhatWeDoMegaMenu from '../ui/WhatWeDoMegaMenu';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(true);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);

  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const closeMenu = () => {
  setTimeout(() => setShowWhatWeDo(false), 80);
    };


  const navItems = [
    { label: "Who we are", to: "/who-we-are" },
    { label: "What we do", to: "/what-we-do" },
    { label: "Dev Room", to: "/hiretalents" },/*Resource Pool ,Workforce,Brains for Hire,Code Crew,Expert Stack,Skill Vault  */
    { label: "Contact us", to: "/contact" }
  ];

  /* ---------------- ACTIVE INDICATOR ---------------- */
  const updateIndicator = () => {
    if (location.pathname === "/") {
      setIndicatorStyle({ opacity: 0 });
      return;
    }

    const index = navItems.findIndex(item => item.to === location.pathname);
    if (index === -1) {
      setIndicatorStyle({ opacity: 0 });
      return;
    }

    const el = itemRefs.current[index];
    const navEl = navRef.current;
    if (!el || !navEl) return;

    const navRect = navEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setIndicatorStyle({
      left: `${elRect.left - navRect.left}px`,
      width: `${elRect.width}px`,
      opacity: 1,
      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
    });
  };

  useLayoutEffect(() => {
    requestAnimationFrame(updateIndicator);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, []);

  /* ---------------- SCROLL HANDLING ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > lastScrollY && y > 100) setIsVisible(false);
      else setIsVisible(true);

      if (y < 50) setIsVisible(true);
      setLastScrollY(y);

      if (location.pathname === "/") {
        setIsHeroActive(y < window.innerHeight - 80);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  /* ---------------- ROUTE CHANGE FIX (CRITICAL) ---------------- */
  useEffect(() => {
    // Always close mega menu on navigation
    setShowWhatWeDo(false);
    setMobileOpen(false);

    // Instantly fix navbar background on route change
    if (location.pathname !== "/") {
      setIsHeroActive(false);
    } else {
      setIsHeroActive(window.scrollY < window.innerHeight - 80);
    }
  }, [location.pathname]);

  const handleNavigate = (to) => {
    navigate(to);
    setMobileOpen(false);
    setShowWhatWeDo(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${
            location.pathname !== '/'
              ? 'bg-[#232323] backdrop-blur-md shadow-lg'
              : isHeroActive
                ? 'bg-transparent backdrop-blur-0'
                : 'bg-[#232323] backdrop-blur-md shadow-lg'
          }
        `}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <img src="/Logo.png" width={36} height={36} alt="Logo" />
            VSachi Tech
          </Link>

          {/* DESKTOP NAV */}
          <div
            ref={navRef}
            className="hidden lg:flex relative items-center border border-white/30 rounded-full px-2 py-2"
            onMouseLeave={() => setShowWhatWeDo(false)}
          >
            <div
              className="absolute bg-white rounded-full h-[calc(100%-8px)] top-1"
              style={indicatorStyle}
            />

            {navItems.map((item, i) => {
              const isWhatWeDo = item.label === "What we do";

              return (
                <button
                  key={item.to}
                  ref={el => (itemRefs.current[i] = el)}
                  onClick={() => handleNavigate(item.to)}
                  onMouseEnter={() => {
                    if (isWhatWeDo) {
                        setShowWhatWeDo(true);
                    } else {
                        closeMenu();
                    }
                    }}

                  className={`relative z-10 px-6 py-2 uppercase text-sm font-semibold rounded-full transition-colors
                    ${
                      location.pathname !== "/" &&
                      location.pathname === item.to
                        ? 'text-black'
                        : 'text-white hover:text-white/80'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* DESKTOP ACTION */}
          <div className="hidden lg:flex gap-5 items-center">
            <div className="bg-[#e44f39] p-3 rounded-full cursor-pointer">
              <FiGrid className="text-white" />
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MEGA MENU */}
      <WhatWeDoMegaMenu
        open={showWhatWeDo}
        onEnter={() => setShowWhatWeDo(true)}
        onLeave={() => setShowWhatWeDo(false)}
      />
    </>
  );
}
