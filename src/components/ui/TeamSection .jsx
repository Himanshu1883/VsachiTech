import React, { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    { 
      name: "Shubh Sharma", 
      role: "Chief Executive Officer", 
      img: "people/p6.jpeg",
      bio: "Visionary leader driving innovation",
    },
    // { 
    //   name: "Himanshu Dubey", 
    //   role: "Full-Stack Engineer", 
    //   img: "people/p3.jpeg",
    //   bio: "Architecting scalable solutions",
    // },
    // { 
    //   name: "Nikhil Sain", 
    //   role: "Business Development", 
    //   img: "people/p2.jpeg",
    //   bio: "Building strategic partnerships",
    // },
    // { 
    //   name: "Priya Singh", 
    //   role: "Frontend Engineer", 
    //   img: "people/p4.jpeg",
    //   bio: "Crafting pixel-perfect experiences",
    // },
    { 
      name: "Ritika Malhotra", 
      role: "Project Manager", 
      img: "people/p5.jpeg",
      bio: "Orchestrating seamless delivery",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, teamMembers.length]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  // Get visible cards for 3D carousel effect
  const getVisibleCards = () => {
    const cards = [];
    const totalCards = teamMembers.length;
    
    // Show 5 cards: 2 left, center, 2 right
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalCards) % totalCards;
      cards.push({
        ...teamMembers[index],
        position: i,
        actualIndex: index
      });
    }
    return cards;
  };

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Original Background */}
      <div
        className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-no-repeat bg-center bg-cover opacity-80"
        aria-hidden="true"
      />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-20 items-end mb-24">
          <div>
            <p className="text-xs tracking-widest mb-6">
              (OUR PEOPLE)
            </p>
            <h2 className="text-6xl font-extrabold leading-tight">
              The people behind
              <br />
              <span className="text-red-500">Vsachi Tech</span>
            </h2>
          </div>

          <div className="text-gray-400 text-lg leading-relaxed max-w-xl">
            We are a team of engineers, designers, and strategists focused on
            building reliable, scalable software systems that perform in
            real-world conditions.
          </div>
        </div>

        {/* 3D CAROUSEL */}
        <div className="relative">
          <div className="relative h-[550px] flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full flex items-center justify-center">
              {getVisibleCards().map((member, idx) => {
                const { position, actualIndex } = member;
                
                // Calculate transforms based on position
                let transform = '';
                let opacity = 0;
                let zIndex = 0;
                let scale = 0.7;
                let pointerEvents = 'none';

                if (position === 0) {
                  // Center card - Featured
                  transform = 'translateX(0) translateZ(0) rotateY(0deg)';
                  opacity = 1;
                  zIndex = 50;
                  scale = 1;
                  pointerEvents = 'auto';
                } else if (position === -1) {
                  // Left card
                  transform = 'translateX(-85%) translateZ(-200px) rotateY(25deg)';
                  opacity = 0.6;
                  zIndex = 30;
                  scale = 0.85;
                  pointerEvents = 'auto';
                } else if (position === 1) {
                  // Right card
                  transform = 'translateX(85%) translateZ(-200px) rotateY(-25deg)';
                  opacity = 0.6;
                  zIndex = 30;
                  scale = 0.85;
                  pointerEvents = 'auto';
                } else if (position === -2) {
                  // Far left
                  transform = 'translateX(-170%) translateZ(-400px) rotateY(35deg)';
                  opacity = 0.3;
                  zIndex = 10;
                  scale = 0.7;
                } else if (position === 2) {
                  // Far right
                  transform = 'translateX(170%) translateZ(-400px) rotateY(-35deg)';
                  opacity = 0.3;
                  zIndex = 10;
                  scale = 0.7;
                }

                return (
                  <div
                    key={actualIndex}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `${transform} scale(${hoveredIndex === actualIndex && position === 0 ? 1.02 : scale})`,
                      opacity,
                      zIndex,
                      pointerEvents,
                    }}
                    onClick={() => position !== 0 && goToSlide(actualIndex)}
                    onMouseEnter={() => setHoveredIndex(actualIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="w-80 group">
                      {/* IMAGE CONTAINER */}
                      <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                        <img
                          src={member.img}
                          alt={member.name}
                          className={`
                            w-full h-[420px] object-cover
                            transition-all duration-700 ease-out
                            ${position === 0 ? 'group-hover:scale-105' : ''}
                          `}
                        />

                        {/* GRADIENT OVERLAY */}
                        <div
                          className={`
                            absolute inset-0
                            bg-gradient-to-t from-black/70 via-black/20 to-transparent
                            ${position === 0 ? 'opacity-100' : 'opacity-50'}
                            transition-opacity duration-500
                          `}
                        />
                        
                      </div>

                      {/* INFO */}
                      <div className={`mt-6 transition-all duration-500 ${position === 0 ? 'opacity-100' : 'opacity-70'}`}>
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                          {member.role}
                        </p>
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                          position === 0 ? 'text-white' : 'text-gray-400'
                        }`}>
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION CONTROLS */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="group p-4 bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-500/50 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous team member"
            >
              <IoChevronBack className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    transition-all duration-300
                    ${currentIndex === index 
                      ? 'w-12 h-3 bg-red-500' 
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                    }
                    rounded-full
                  `}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="group p-4 bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-500/50 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next team member"
            >
              <IoChevronForward className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {isAutoPlay ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>

      {/* CSS for 3D perspective */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;