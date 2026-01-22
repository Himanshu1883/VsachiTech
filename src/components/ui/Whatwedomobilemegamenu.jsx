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

export default function WhatWeDoMobileMegaMenu({ onNavigate }) {
    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-4">
            
            {/* SERVICES SECTION */}
            <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-3 px-2">
                    Our Services
                </h3>
                
                <div className="space-y-2">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <button
                                key={service.id}
                                onClick={() => onNavigate(service.link)}
                                className="w-full group"
                            >
                                <div className="
                                    flex items-center gap-3 p-3 rounded-lg
                                    bg-white/5 border border-white/10
                                    transition-all duration-300
                                    hover:bg-white/10 hover:border-[#e44f39]/40
                                ">
                                    <div className="
                                        w-10 h-10 rounded-lg bg-white/10
                                        flex items-center justify-center flex-shrink-0
                                        transition-transform duration-300
                                        group-hover:scale-110
                                    ">
                                        <Icon className="text-white text-base" />
                                    </div>

                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-semibold text-white group-hover:text-[#e44f39] transition-colors">
                                            {service.title}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <FaArrowRight className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/10 my-6" />

            {/* HIRE TALENTS SECTION */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-3 px-2">
                    Hire Experts
                </h3>

                <div className="space-y-2">
                    {hiringResources.map((resource) => {
                        const Icon = resource.icon;
                        return (
                            <button
                                key={resource.id}
                                onClick={() => onNavigate(resource.link)}
                                className="w-full group"
                            >
                                <div className="
                                    flex items-center gap-3 p-3 rounded-lg
                                    bg-white/5 border border-white/10
                                    transition-all duration-300
                                    hover:bg-white/10 hover:border-[#e44f39]/40
                                ">
                                    <div className="
                                        w-10 h-10 rounded-lg bg-white/10
                                        flex items-center justify-center flex-shrink-0
                                    ">
                                        <Icon className="text-white text-base" />
                                    </div>

                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-semibold text-white group-hover:text-[#e44f39] transition-colors">
                                            {resource.title}
                                        </p>
                                        <p className="text-xs text-gray-400 truncate">
                                            {resource.subtitle}
                                        </p>
                                    </div>

                                    <FaArrowRight className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}