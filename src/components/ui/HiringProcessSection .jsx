import React, { useState } from "react";
import {
    FaEnvelope,
    FaUsers,
    FaCogs,
    FaChartLine,
} from "react-icons/fa";

const HiringProcessSection = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    const hiringSteps = [
        {
            number: 1,
            title: "Thorough CV Evaluation",
            description: "We meticulously review each application to identify top talent.",
        },
        {
            number: 2,
            title: "Interview With HR Specialist",
            description: "Initial conversation to assess culture fit and expectations.",
        },
        {
            number: 3,
            title: "Technical Assessment",
            description: "Hands-on coding challenges to evaluate problem-solving skills.",
        },
        {
            number: 4,
            title: "Interview With Technical Lead",
            description: "Deep-dive technical discussion with senior engineers.",
        },
        {
            number: 5,
            title: "Final Evaluation & Offer",
            description: "Comprehensive review leading to competitive offer.",
        },
    ];

    const clientSteps = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            step: "STEP 1",
            title: "Initial Consultation",
            description: "We analyze your requirements and project scope for optimal alignment.",
            color: "from-red-500 to-red-600",
        },
        {
            icon: <FaUsers className="w-6 h-6" />,
            step: "STEP 2",
            title: "Team Assembly",
            description: "Hand-picked developers matched to your specific technical needs.",
            color: "from-red-600 to-red-700",
        },
        {
            icon: <FaCogs className="w-6 h-6" />,
            step: "STEP 3",
            title: "Seamless Integration",
            description: "Rapid onboarding with direct access to your development workflow.",
            color: "from-red-700 to-red-800",
        },
        {
            icon: <FaChartLine className="w-6 h-6" />,
            step: "STEP 4",
            title: "Scale & Optimize",
            description: "Flexible team scaling with continuous performance monitoring.",
            color: "from-red-800 to-red-900",
        },
    ];

    return (
        <section className="relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-center bg-no-repeat opacity-100" />

            <div className="relative max-w-7xl mx-auto px-6 py-32">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* LEFT — HIRING FUNNEL */}
                    <div>
                        <h2 className="text-5xl font-bold mb-6">
                            How We Hire <br />
                            <span className="text-red-500">Developers?</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-16 max-w-lg">
                            With a rigorous five-step hiring process, we onboard only exceptional engineers.
                        </p>

                        <div className="space-y-8">
                            {hiringSteps.map((step, index) => {
                                const isHovered = hoveredStep === index;

                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                        className="relative"
                                    >
                                        <div className="flex items-center gap-6">

                                            {/* NUMBER */}
                                            <div className="relative w-24 h-24 flex-shrink-0 overflow-visible">
                                                <div
                                                    className={`
                            absolute inset-0 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-gray-800 to-gray-900
                            border border-white/10
                            transition-transform duration-500
                            will-change-transform
                            ${isHovered && "scale-110 "}
                          `}
                                                >
                                                    <span className="text-3xl font-bold text-white">
                                                        {step.number}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* CONTENT (FIXED SIZE) */}
                                            <div className="relative w-full max-w-[520px] h-28 bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden">

                                                {/* TITLE */}
                                                <h3
                                                    className={`
                                                            absolute left-6 right-6 text-lg font-bold text-white
                                                            transition-all duration-400 ease-out
                                                            will-change-transform
                                                            ${isHovered
                                                            ? "top-4 translate-y-0 text-l"
                                                            : "top-1/2 -translate-y-1/2"}
                                                        `}
                                                >
                                                    {step.title}
                                                </h3>

                                                {/* DESCRIPTION */}
                                                <p
                                                    className={`
      absolute left-6 right-6 bottom-6 text-sm text-gray-300
      transition-all duration-300 delay-100
      will-change-transform will-change-opacity
      ${isHovered
                                                            ? "opacity-100 translate-y-0"
                                                            : "opacity-0 translate-y-2 pointer-events-none"}
    `}
                                                >
                                                    {step.description}
                                                </p>
                                            </div>

                                        </div>

                                        {/* CONNECTOR */}
                                        {index !== hiringSteps.length - 1 && (
                                            <div className="ml-12 mt-4 h-10 w-px bg-gradient-to-b from-red-500/40 to-transparent" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT — CLIENT FLOW */}
                    <div>
                        <h2 className="text-5xl font-bold mb-6 ">
                            Hire Developers from <br />
                            <span className="text-red-500">Vsachi Tech</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-16 max-w-lg">
                            A simple, transparent process designed for speed and quality.
                        </p>

                        <div className="relative">
                            <div className="absolute left-14 top-0 bottom-0 w-px bg-red-500/30" />

                            {clientSteps.map((item, index) => (
                                <div key={index} className="flex gap-8 mb-14 group">
                                    <div
                                        className={`
                      w-28 h-28 clip-hexagon bg-gradient-to-br ${item.color}
                      flex items-center justify-center
                      transition-transform duration-500
                      will-change-transform
                      group-hover:scale-110 group-hover:rotate-12
                      shadow-lg shadow-red-500/30
                    `}
                                    >
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="text-yellow-500 text-xs font-bold mb-2">
                                            {item.step}
                                        </p>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* HEXAGON CLIP */}
            <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
      `}</style>
        </section>
    );
};

export default HiringProcessSection;
