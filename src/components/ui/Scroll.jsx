import React from 'react'

function Scroll() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
    <div className="flex flex-col items-center gap-2 animate-bounce-slow">
      <div className="w-5 h-8 border-2 border-gray-700 rounded-full flex justify-center">
        <span className="w-1 h-2 bg-gray-700 rounded-full mt-1 animate-scroll-dot"></span>
      </div>
      <span className="text-xs tracking-widest text-gray-700 uppercase">
        Scroll
      </span>
    </div>
    <style jsx>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-25px) rotate(6deg);
    }
  }

  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-18px) rotate(-6deg);
    }
  }

  @keyframes scroll-dot {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(8px);
    }
  }

  .animate-float {
    animation: float 7s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float-delayed 9s ease-in-out infinite;
  }

  .animate-scroll-dot {
    animation: scroll-dot 1.6s infinite;
  }

  .animate-bounce-slow {
    animation: bounce 2.5s infinite;
  }

  .glow-blue {
    filter: drop-shadow(0 0 25px rgba(59,130,246,0.5));
  }

  .glow-cyan {
    filter: drop-shadow(0 0 25px rgba(34,211,238,0.5));
  }

  .glow-red {
    filter: drop-shadow(0 0 25px rgba(239,68,68,0.5));
  }

  .glow-purple {
    filter: drop-shadow(0 0 25px rgba(168,85,247,0.5));
  }
`}</style>
  </div>
  )
}

export default Scroll