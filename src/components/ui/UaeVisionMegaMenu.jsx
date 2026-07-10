import {
    FaReact,
    FaPython,
    FaLaravel,
    FaMobileAlt,
    FaCloud,
    FaPalette,
    FaCode,
    FaSearch,
    FaAd,
    FaRobot,
    FaComments,
    FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ---------------- UAE SERVICES ---------------- */
const uaeServices = [
    {
        id: 0,
        icon: FaReact,
        title: "React.js Development",
        desc: "Modern frontend solutions",
        link: "/uaeservices/uae-react-dev"
    },
    {
        id: 1,
        icon: FaPython,
        title: "Python Development",
        desc: "Scalable backend systems",
        link: "/uaeservices/uae-python-dev"
    },
    {
        id: 2,
        icon: FaLaravel,
        title: "Laravel Development",
        desc: "PHP framework experts",
        link: "/uaeservices/uae-laravel-dev"
    },
    {
        id: 3,
        icon: FaMobileAlt,
        title: "Mobile Development",
        desc: "iOS & Android apps",
        link: "/uaeservices/uae-mobile-dev"
    },
    {
        id: 4,
        icon: FaCloud,
        title: "Cloud Engineering",
        desc: "AWS, Azure, GCP",
        link: "/uaeservices/uae-cloud-eng"
    },
    {
        id: 5,
        icon: FaPalette,
        title: "UI/UX Design",
        desc: "User-centered design",
        link: "/uaeservices/uae-uiux-design"
    },
    {
        id: 6,
        icon: FaCode,
        title: "Web Development",
        desc: "Full-stack solutions",
        link: "/uaeservices/uae-web-dev"
    }
];

/* ---------------- UAE MARKETING SERVICES ---------------- */
const uaeMarketingServices = [
    {
        id: 10,
        icon: FaSearch,
        title: "SEO Services",
        subtitle: "UAE market optimization",
        link: "/uaeservices/uae-seo"
    },
    {
        id: 11,
        icon: FaAd,
        title: "PPC Marketing",
        subtitle: "Targeted campaigns",
        link: "/uaeservices/uae-ppc"
    },
    {
        id: 12,
        icon: FaRobot,
        title: "Automation",
        subtitle: "Smart workflows",
        link: "/uaeservices/uae-automation"
    },
    {
        id: 13,
        icon: FaComments,
        title: "AI Chatbots",
        subtitle: "24/7 customer support",
        link: "/uaeservices/uae-chatbots"
    }
];

export default function UaeVisionMegaMenu({ open, onEnter, onLeave }) {
    return (
        <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`
                fixed top-[94px] left-1/2 -translate-x-1/2
                w-[1100px] max-w-[1200px]   
                h-[450px]                  
                z-[130]
                bg-[#121212]/90 backdrop-blur-xl
                rounded-3xl border border-white/10 shadow-2xl
                transition-all duration-300 ease-out overflow-hidden
                ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}
            `}
        >
            <div className="h-full w-full px-12 py-10 flex items-center">
                <div className="grid grid-cols-12 gap-5 w-full h-full">

                    {/* UAE DEVELOPMENT SERVICES */}
                    <div className="col-span-7 flex flex-col">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-5">
                            UAE Tech Services
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {uaeServices.map((service) => {
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

                    {/* UAE MARKETING & AI SERVICES */}
                    <div className="col-span-4 flex flex-col">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-5">
                            UAE Marketing & AI
                        </h3>

                        <div className="space-y-3">
                            {uaeMarketingServices.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <Link
                                        key={service.id}
                                        to={service.link}
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
                                                    {service.title}
                                                </p>
                                                <p className="text-xs text-gray-400 truncate">
                                                    {service.subtitle}
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