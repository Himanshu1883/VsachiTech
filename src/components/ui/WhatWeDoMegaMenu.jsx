import {
    FaCode,
    FaSearch,
    FaAd,
    FaRobot,
    FaComments,
    FaPython,
    FaLaravel,
    FaReact,
    FaPalette,
    FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ---------------- SERVICES ---------------- */
const services = [
    {
        id: 0,
        icon: FaCode,
        title: "Web Development",
        desc: "Custom solutions",
        link: "/what-we-do/web-development"
    },
    {
        id: 1,
        icon: FaSearch,
        title: "SEO Services",
        desc: "Organic growth",
        link: "/what-we-do/seo-services"
    },
    {
        id: 2,
        icon: FaAd,
        title: "PPC Advertising",
        desc: "Paid campaigns",
        link: "/what-we-do/ppc-advertising"
    },
    {
        id: 3,
        icon: FaRobot,
        title: "Automation",
        desc: "Smart workflows",
        link: "/what-we-do/automation"
    },
    {
        id: 4,
        icon: FaComments,
        title: "AI Chatbots",
        desc: "24/7 support",
        link: "/what-we-do/ai-chatbots"
    }
];
/* ---------------- HIRING ---------------- */
const hiringResources = [
    {
        id: 10,
        icon: FaPython,
        title: "Python Developers",
        subtitle: "Django • FastAPI • Flask",
        link: "/hiretalents/python-developers"
    },
    {
        id: 11,
        icon: FaLaravel,
        title: "Laravel Developers",
        subtitle: "PHP Backend Experts",
        link: "/hiretalents/laravel-developers"
    },
    {
        id: 12,
        icon: FaReact,
        title: "React Developers",
        subtitle: "Next.js • TypeScript",
        link: "/hiretalents/react-developers"
    },
    {
        id: 13,
        icon: FaPalette,
        title: "UI/UX Designers",
        subtitle: "Figma • Product Design",
        link: "/hiretalents/uiux-designers"
    }
];


export default function WhatWeDoMegaMenu({ open, onEnter, onLeave }) {
    return (
        <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`
        fixed top-[94px] left-1/2 -translate-x-1/2
        w-[1100px] max-w-[1100px]   
        h-[420px]                  
        z-40
        bg-[#121212]/90 backdrop-blur-xl
        rounded-3xl border border-white/10 shadow-2xl
        transition-all duration-300 ease-out overflow-hidden
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}
      `}
        >
            <div className="h-full w-full px-12 py-10 flex items-center"> 
                <div className="grid grid-cols-12 gap-10 w-full h-full">

                    {/* SERVICES */}
                    <div className="col-span-7 flex flex-col">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-5">
                            Our Services
                        </h3>

                        <div className="grid grid-cols-2 gap-4"> 
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <Link
                                        key={service.id}
                                        to={service.link}
                                        onClick={onLeave}
                                        className="group"
                                    >
                                        <div className="
                                            flex items-start gap-4 p-4 rounded-xl
                                            bg-white/5 border border-white/10
                                            transition-all duration-300
                                            hover:bg-white/10 hover:border-[#e44f39]/40
                                        ">
                                            <div className="
                                                w-11 h-11 rounded-xl bg-white/10
                                                flex items-center justify-center
                                                transition-transform duration-300
                                                group-hover:scale-110
                                            ">
                                                <Icon className="text-white text-lg" />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-white group-hover:text-[#e44f39]">
                                                    {service.title}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {service.desc}
                                                </p>
                                            </div>

                                            <FaArrowRight className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="col-span-1 flex items-center justify-center">
                        <div className="h-full w-px bg-white/10" /> 
                    </div>

                    {/* HIRE TALENTS */}
                    <div className="col-span-4 flex flex-col">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-5">
                            Hire Experts
                        </h3>

                        <div className="space-y-3">
                            {hiringResources.map((resource) => {
                                const Icon = resource.icon;
                                return (
                                    <Link
                                        key={resource.id}
                                        to={resource.link}
                                        onClick={onLeave}
                                        className="group"
                                    >
                                        <div className="
                                            flex items-center gap-4 p-4 rounded-xl
                                            bg-white/5 border border-white/10
                                            transition-all duration-300
                                            hover:bg-white/10 hover:border-[#e44f39]/40
                                        ">
                                            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                                                <Icon className="text-white text-base" />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-white group-hover:text-[#e44f39]">
                                                    {resource.title}
                                                </p>
                                                <p className="text-xs text-gray-400 truncate">
                                                    {resource.subtitle}
                                                </p>
                                            </div>

                                            <FaArrowRight className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

