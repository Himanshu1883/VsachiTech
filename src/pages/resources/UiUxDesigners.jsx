import { FaPalette, FaCheckCircle, FaRocket, FaPencilRuler, FaUsers, FaClock, FaShieldAlt, FaDollarSign, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
    SiFigma,
    SiAdobexd,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiSketch,
    SiInvision,
    SiFramer,
    SiNotion,
    SiMiro,
    SiMaze,
    SiAbstract,
    SiHotjar,
    SiGoogleanalytics,
    SiTailwindcss,
    SiBootstrap,
    SiMaterialdesign,
    SiStorybook,
    SiSlack,
    SiTrello,
    SiJira
} from "react-icons/si";

export default function UiUxDesigners() {
    return (
        <section className="bg-white text-black overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[90vh] flex items-center">
                {/* FLOATING DESIGN ELEMENTS BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Floating shapes */}
                    <div className="absolute top-24 left-16 w-24 h-24 bg-[#e44f39]/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-32 right-20 w-32 h-32 border border-black/10 rounded-full animate-float-slow"></div>
                    <div className="absolute top-40 right-40 w-16 h-16 bg-purple-500/10 rotate-45 animate-float"></div>
                    <div className="absolute bottom-40 left-40 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
                    
                    {[
                        { top: "15%", left: "10%", size: "text-5xl", delay: "0s" },
                        { top: "30%", left: "90%", size: "text-4xl", delay: "1s" },
                        { top: "60%", left: "5%", size: "text-2xl", delay: "2s" },
                        { top: "70%", left: "95%", size: "text-5xl", delay: "3s" },
                        { top: "10%", left: "50%", size: "text-7xl", delay: "1.5s" },
                        { top: "85%", left: "35%", size: "text-4xl", delay: "2.5s" }
                    ].map((icon, i) => (
                        <FaPalette
                            key={i}
                            className={`
                                absolute ${icon.size}
                                text-purple-500/20
                                animate-float
                            `}
                            style={{
                                top: icon.top,
                                left: icon.left,
                                animationDelay: icon.delay
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-32 pb-20">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Hire Industry Ready{" "}
                            <span className="text-[#e44f39]">UI/UX Designers</span>
                        </h1>

                        <p className="text-gray-600 text-lg max-w-xl mb-10">
                            Create human-centered designs that convert users into customers with
                            expert UI/UX designers specializing in research-driven design strategies and modern interfaces.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-[#e44f39] transition">
                                Hire UI/UX Designers
                            </button>
                            <button className="px-8 py-4 border border-black rounded-lg hover:bg-black hover:text-white transition">
                                Talk to an Expert
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="/uiux.webp"
                            alt="UI/UX Designers Team"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ================= BENEFITS / STATS SECTION ================= */}
            <section className="relative py-28 text-white overflow-hidden bg-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="absolute inset-0 bg-[url('/skill-bg.webp')]
               bg-no-repeat bg-center bg-fit opacity-100"
                />

                {/* Content */}
                <div className="container mx-auto px-6 relative z-10">
                    {/* STATS GRID */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            "60% Cost-Savings",
                            "Instant Resource Availability",
                            "10+ Years of Excellence",
                            "Quick Hiring Process in 3 Steps",
                            "NDA Protected Assets",
                            "2X Retention Rate"
                        ].map(item => (
                            <div
                                key={item}
                                className="
                                bg-white/5 backdrop-blur-xl
                                border border-white/10
                                rounded-2xl px-8 py-10
                                text-center text-lg font-semibold
                                shadow-xl hover:shadow-2xl
                                transition-all duration-300
                                hover:-translate-y-1
                            "
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* HEADING */}
                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
                        Create Exceptional User Experiences With
                        <span className="text-[#e44f39]"> Expert UI/UX Designers</span>
                    </h2>

                    {/* CTA */}
                    <div className="flex justify-center">
                        <Link to={"/contact#project-form"}>
                            <button className="
                                px-10 py-4 rounded-full
                                bg-[#e44f39] text-white
                                text-lg font-semibold
                                hover:scale-105 hover:shadow-xl
                                transition-all duration-300
                            ">
                                Ask For CVs
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= UI/UX TOOLS MARQUEE SECTION ================= */}
            <UiUxMarqueeSection />

            {/* ================= DESIGN SERVICES SECTION ================= */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">
                        UI/UX Design Expertise
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "User Research & Persona Development",
                            "Wireframing & Prototyping (Figma, Adobe XD)",
                            "Visual Design & Brand Identity",
                            "Interaction Design & Micro-animations",
                            "Usability Testing & A/B Testing",
                            "Design Systems & Component Libraries"
                        ].map(skill => (
                            <div
                                key={skill}
                                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <FaCheckCircle className="text-[#e44f39] text-xl" />
                                <span className="font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= DESIGN DELIVERABLES SECTION ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What Can Our Designers <span className="text-[#e44f39]">Deliver?</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From research to high-fidelity prototypes, we cover every design need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "User Research & Analysis",
                                desc: "In-depth user interviews, surveys, and competitive analysis",
                                icon: "🔍",
                                color: "from-blue-500 to-cyan-600"
                            },
                            {
                                title: "Wireframes & Prototypes",
                                desc: "Low to high-fidelity wireframes and interactive prototypes",
                                icon: "📐",
                                color: "from-purple-500 to-pink-600"
                            },
                            {
                                title: "Visual Design",
                                desc: "Stunning UI designs with pixel-perfect attention to detail",
                                icon: "🎨",
                                color: "from-orange-500 to-red-600"
                            },
                            {
                                title: "Mobile App Design",
                                desc: "iOS and Android app designs following platform guidelines",
                                icon: "📱",
                                color: "from-green-500 to-emerald-600"
                            },
                            {
                                title: "Design Systems",
                                desc: "Scalable design systems with reusable components",
                                icon: "🧩",
                                color: "from-indigo-500 to-purple-600"
                            },
                            {
                                title: "Usability Testing",
                                desc: "Validate designs with real users and iterate based on feedback",
                                icon: "✅",
                                color: "from-teal-500 to-cyan-600"
                            }
                        ].map((deliverable, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#e44f39] transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                    {deliverable.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{deliverable.title}</h3>
                                <p className="text-gray-600">{deliverable.desc}</p>
                                <div className={`absolute bottom-0 left-2 right-2 h-1 bg-gradient-to-r ${deliverable.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HIRING PROCESS SECTION ================= */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Simple <span className="text-[#e44f39]">3-Step Hiring Process</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get your design team up and running in no time
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#e44f39] via-[#e44f39] to-[#e44f39] opacity-20" 
                             style={{ top: '80px', left: '16.66%', right: '16.66%' }} />

                        {[
                            {
                                step: "01",
                                title: "Share Your Design Needs",
                                desc: "Tell us about your project, target audience, and design goals",
                                icon: FaPencilRuler
                            },
                            {
                                step: "02",
                                title: "Review Designer Portfolios",
                                desc: "Get pre-vetted UI/UX designer profiles within 24 hours",
                                icon: FaUsers
                            },
                            {
                                step: "03",
                                title: "Start Designing",
                                desc: "Onboard designers and kick off your project immediately",
                                icon: FaRocket
                            }
                        ].map((process, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-8 bg-[#e44f39] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                        {process.step}
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className="mt-8 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#e44f39]/10 to-[#e44f39]/20 rounded-xl flex items-center justify-center">
                                            <process.icon className="text-3xl text-[#e44f39]" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                                    <p className="text-gray-600">{process.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= DESIGNER SKILLS BREAKDOWN SECTION ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our UI/UX Designers' <span className="text-[#e44f39]">Skill Set</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive expertise across the design spectrum
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Design Tools & Software */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                    <FaPalette className="text-white text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold">Design Tools</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "Figma & FigJam", level: 96 },
                                    { skill: "Adobe XD & Photoshop", level: 92 },
                                    { skill: "Sketch & InVision", level: 88 },
                                    { skill: "Framer & Protopie", level: 85 }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{item.skill}</span>
                                            <span className="text-purple-600 font-semibold">{item.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-1000"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* UX Research */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                    <FaLightbulb className="text-white text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold">UX Research</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "User Interviews & Surveys", level: 94 },
                                    { skill: "Persona Development", level: 91 },
                                    { skill: "Usability Testing", level: 93 },
                                    { skill: "Analytics & Heatmaps", level: 89 }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{item.skill}</span>
                                            <span className="text-blue-600 font-semibold">{item.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full transition-all duration-1000"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual & UI Design */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-2xl">🎨</span>
                                </div>
                                <h3 className="text-2xl font-bold">Visual Design</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "UI Design & Layout", level: 95 },
                                    { skill: "Typography & Color Theory", level: 93 },
                                    { skill: "Icon Design & Illustration", level: 87 },
                                    { skill: "Brand Identity Design", level: 90 }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{item.skill}</span>
                                            <span className="text-pink-600 font-semibold">{item.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full transition-all duration-1000"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Design Systems & Collaboration */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-2xl">🧩</span>
                                </div>
                                <h3 className="text-2xl font-bold">Systems & Collaboration</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "Design Systems", level: 92 },
                                    { skill: "Component Libraries", level: 90 },
                                    { skill: "Design Handoff", level: 94 },
                                    { skill: "Team Collaboration", level: 96 }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{item.skill}</span>
                                            <span className="text-green-600 font-semibold">{item.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-1000"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ENGAGEMENT MODELS SECTION ================= */}
            <section className="py-24 bg-gradient-to-br from-black to-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Flexible <span className="text-[#e44f39]">Engagement Models</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose the hiring model that best fits your project needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                model: "Full-Time Dedicated",
                                duration: "8 Hours/Day, 5 Days/Week",
                                bestFor: "Long-term design projects requiring consistent work",
                                features: [
                                    "Dedicated designer",
                                    "160 hours/month",
                                    "Direct communication",
                                    "Flexible scaling"
                                ],
                                icon: FaClock,
                                popular: false
                            },
                            {
                                model: "Part-Time Flexible",
                                duration: "4 Hours/Day or Custom",
                                bestFor: "Ongoing design needs and smaller projects",
                                features: [
                                    "Flexible hours",
                                    "Cost-effective",
                                    "Scalable team",
                                    "Quick onboarding"
                                ],
                                icon: FaUsers,
                                popular: true
                            },
                            {
                                model: "Project-Based",
                                duration: "Fixed Scope & Timeline",
                                bestFor: "Well-defined design projects with clear deliverables",
                                features: [
                                    "Fixed pricing",
                                    "Milestone-based",
                                    "Quality assured",
                                    "On-time delivery"
                                ],
                                icon: FaRocket,
                                popular: false
                            }
                        ].map((engagement, idx) => (
                            <div 
                                key={idx} 
                                className={`relative bg-white/5 backdrop-blur-xl border ${
                                    engagement.popular ? 'border-[#e44f39] shadow-2xl' : 'border-white/10'
                                } rounded-2xl p-8 hover:border-[#e44f39] transition-all duration-300 hover:transform hover:-translate-y-2`}
                            >
                                {engagement.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e44f39] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-[#e44f39]/20 rounded-lg flex items-center justify-center">
                                        <engagement.icon className="text-2xl text-[#e44f39]" />
                                    </div>
                                    <h3 className="text-xl font-bold">{engagement.model}</h3>
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-400 text-sm">{engagement.duration}</p>
                                </div>

                                <p className="text-gray-300 mb-6 text-sm">{engagement.bestFor}</p>

                                <div className="space-y-3 mb-8">
                                    {engagement.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2">
                                            <FaCheckCircle className="text-[#e44f39] flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                                    engagement.popular 
                                        ? 'bg-[#e44f39] text-white hover:bg-[#d43d2a]' 
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                    Choose This Model
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SUCCESS METRICS SECTION ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Proven Track Record of <span className="text-[#e44f39]">Excellence</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Numbers that speak for our commitment to quality design
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "20+",
                                label: "Design Projects Delivered",
                                icon: FaRocket,
                                color: "from-purple-500 to-pink-600"
                            },
                            {
                                number: "30+",
                                label: "Expert UI/UX Designers",
                                icon: FaUsers,
                                color: "from-blue-500 to-cyan-600"
                            },
                            {
                                number: "98%",
                                label: "Client Satisfaction Rate",
                                icon: FaShieldAlt,
                                color: "from-green-500 to-emerald-600"
                            },
                            {
                                number: "60%",
                                label: "Average Cost Savings",
                                icon: FaDollarSign,
                                color: "from-orange-500 to-red-600"
                            }
                        ].map((metric, idx) => (
                            <div 
                                key={idx}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-[#e44f39] transition-all duration-300 hover:shadow-xl group"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                                    <metric.icon className="text-white text-2xl" />
                                </div>
                                <div className="text-4xl font-bold text-[#e44f39] mb-2">
                                    {metric.number}
                                </div>
                                <p className="text-gray-600 font-medium">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY HIRE FROM US ================= */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-14">
                        Why Hire UI/UX Designers From Us?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "User-Centered Approach",
                                desc: "Designers who prioritize user needs through research and testing."
                            },
                            {
                                title: "Flexible Engagement Models",
                                desc: "Hire full-time, part-time, or project-based designers."
                            },
                            {
                                title: "Fast & Collaborative",
                                desc: "Seamless collaboration with your team for rapid iterations."
                            }
                        ].map(item => (
                            <div
                                key={item.title}
                                className="p-8 bg-white border rounded-2xl hover:shadow-lg transition"
                            >
                                <FaPalette className="text-3xl text-[#e44f39] mb-5" />
                                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA SECTION ================= */}
            <section className="py-24 bg-gradient-to-br from-[#e44f39] to-red-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to Create Amazing User Experiences?
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Get access to pre-vetted UI/UX designers and start your project within 48 hours
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact#project-form">
                            <button className="px-10 py-4 bg-white text-[#e44f39] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                                Hire UI/UX Designers Now
                            </button>
                        </Link>
                        <button className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#e44f39] transition-all duration-300">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}

// ================= UI/UX TOOLS MARQUEE SECTION COMPONENT =================
function UiUxMarqueeSection() {
    const technologies = [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "Sketch", icon: SiSketch, color: "#F7B500" },
        { name: "InVision", icon: SiInvision, color: "#FF3366" },
        { name: "Framer", icon: SiFramer, color: "#0055FF" },
        { name: "Notion", icon: SiNotion, color: "#000000" },
        { name: "Miro", icon: SiMiro, color: "#FFD02F" },
        { name: "Maze", icon: SiMaze, color: "#000000" },
        { name: "Abstract", icon: SiAbstract, color: "#191A1B" },
        { name: "Hotjar", icon: SiHotjar, color: "#FF3C00" },
        { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Material Design", icon: SiMaterialdesign, color: "#757575" },
        { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
        { name: "Slack", icon: SiSlack, color: "#4A154B" },
        { name: "Trello", icon: SiTrello, color: "#0052CC" },
        { name: "Jira", icon: SiJira, color: "#0052CC" }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Complete <span className="text-[#e44f39]">Design Toolkit</span>
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    Our designers master industry-leading tools and platforms
                </p>
            </div>

            <div className="relative">
                {/* Gradient Fade Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                {/* First Row - Scroll Left */}
                <div className="mb-8 flex">
                    <div className="flex animate-scroll-left">
                        {[...technologies.slice(0, 11), ...technologies.slice(0, 11)].map((tech, idx) => (
                            <TechCard key={`row1-${idx}`} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Second Row - Scroll Right */}
                <div className="flex">
                    <div className="flex animate-scroll-right">
                        {[...technologies.slice(11), ...technologies.slice(11)].map((tech, idx) => (
                            <TechCard key={`row2-${idx}`} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                    width: max-content;
                }

                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                    width: max-content;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float 8s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll-left,
                    .animate-scroll-right,
                    .animate-float,
                    .animate-float-slow {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}

function TechCard({ tech }) {
    const Icon = tech.icon;
    
    return (
        <div className="flex-shrink-0 mx-3 md:mx-4">
            <div 
                className="
                    bg-white rounded-xl md:rounded-2xl 
                    p-4 md:p-6 
                    shadow-md hover:shadow-xl
                    border border-gray-100
                    transition-all duration-300
                    hover:scale-105 hover:-translate-y-1
                    w-[140px] md:w-[180px]
                    group cursor-pointer
                "
            >
                <div className="flex flex-col items-center gap-2 md:gap-3">
                    <Icon 
                        className="text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                    />
                    <span className="font-semibold text-gray-800 text-center text-sm md:text-base">
                        {tech.name}
                    </span>
                </div>
            </div>
        </div>
    );
}