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

export default function UaeVisionMobileMegaMenu({ onNavigate }) {
    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-4">
            
            {/* UAE DEVELOPMENT SERVICES SECTION */}
            <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-3 px-2">
                    UAE Tech Services
                </h3>
                
                <div className="space-y-2">
                    {uaeServices.map((service) => {
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

            {/* UAE MARKETING & AI SECTION */}
            <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e44f39] mb-3 px-2">
                    UAE Marketing & AI
                </h3>

                <div className="space-y-2">
                    {uaeMarketingServices.map((service) => {
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
                                    ">
                                        <Icon className="text-white text-base" />
                                    </div>

                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-semibold text-white group-hover:text-[#e44f39] transition-colors">
                                            {service.title}
                                        </p>
                                        <p className="text-xs text-gray-400 truncate">
                                            {service.subtitle}
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