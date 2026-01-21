import { useState } from "react";
import { Link } from "react-router-dom";

export default function ImageText({ withBackground }) {
  const [hoverImage, setHoverImage] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e) => {
    setPos({ x: e.clientX + 25, y: e.clientY + 25 });
  };

  // Conditional classes based on withBackground
  const sectionBgClass = withBackground ? "bg-transparent" : "bg-white";
  const textColorClass = withBackground ? "text-white" : "text-gray-900";
  const labelColorClass = withBackground ? "text-gray-300" : "text-gray-500";

  const content = (
    <section className={`relative py-32 ${sectionBgClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className={`text-center tracking-wide mb-10 ${labelColorClass}`}>
          (ABOUT AGENCY)
        </p>

        {/* TEXT BLOCK */}
        <div className={`text-center font-extrabold text-[44px] md:text-[64px] leading-tight space-y-2 ${textColorClass}`}>
          <p>
            We design and build{' '}
            <span
              className="text-red-500 cursor-pointer"
              onMouseEnter={() => setHoverImage('/hover1.jpg')}
              onMouseLeave={() => setHoverImage(null)}
              onMouseMove={move}
            >
              intelligent websites
            </span>{' '}
            using modern technologies
          </p>

          <p>
            and powerful{' '}
            <span
              className="text-red-500 cursor-pointer"
              onMouseEnter={() => setHoverImage('/hover2.jpg')}
              onMouseLeave={() => setHoverImage(null)}
              onMouseMove={move}
            >
              automation workflows
            </span>{' '}
            built with
          </p>

          <p>
            multiple programming languages to deliver{' '}
            <span
              className="text-red-500 cursor-pointer"
              onMouseEnter={() => setHoverImage('/hover3.jpg')}
              onMouseLeave={() => setHoverImage(null)}
              onMouseMove={move}
            >
              smarter digital experiences
            </span>{' '}
            that scale with your business.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-20">
          <Link to="/who-we-are">
            <button className={`flex items-center gap-3 px-8 py-4 border rounded-full hover:bg-black hover:text-white transition
              ${withBackground ? "border-white text-white hover:border-white" : "border-black text-black hover:border-black"}`}>
              ABOUT OUR AGENCY
              <span className={`w-2 h-2 rounded-full ${withBackground ? "bg-white" : "bg-black"}`}></span>
            </button>
          </Link>
        </div>
      </div>

      {/* FLOATING IMAGE */}
      {hoverImage && (
        <img
          src={hoverImage}
          alt="hover preview"
          className="pointer-events-none fixed z-50 w-56 rounded-xl shadow-2xl"
          style={{
            top: pos.y,
            left: pos.x,
          }}
        />
      )}
    </section>
  );

  if (!withBackground) {
    return content;
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{ backgroundImage: "url('/textbg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10">{content}</div>
    </section>
  );
}
