import { FaReact, FaCheckCircle, FaRocket, FaCode, FaUsers, FaClock, FaShieldAlt, FaDollarSign, FaMobile } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiRedux,
    SiTailwindcss,
    SiStyledcomponents,
    SiWebpack,
    SiVite,
    SiJest,
    SiCypress,
    SiGraphql,
    SiApollographql,
    SiReactquery,
    SiReacthookform,
    SiFramer,
    SiVercel,
    SiNetlify,
    SiFigma,
    SiGithub,
    SiEslint,
    SiPrettier
} from "react-icons/si";

export default function ReactDevelopers() {
    return (
        <section className="bg-white text-black overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[90vh] flex items-center">
                {/* FLOATING REACT ICONS BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[
                        { top: "15%", left: "10%", size: "text-5xl", delay: "0s" },
                        { top: "30%", left: "90%", size: "text-4xl", delay: "1s" },
                        { top: "60%", left: "5%", size: "text-2xl", delay: "2s" },
                        { top: "70%", left: "95%", size: "text-5xl", delay: "3s" },
                        { top: "10%", left: "50%", size: "text-7xl", delay: "1.5s" },
                        { top: "85%", left: "35%", size: "text-4xl", delay: "2.5s" }
                    ].map((icon, i) => (
                        <FaReact
                            key={i}
                            className={`
                                absolute ${icon.size}
                                text-cyan-500/20
                                animate-spin-slow
                            `}
                            style={{
                                top: icon.top,
                                left: icon.left,
                                animationDelay: icon.delay,
                                animationDuration: '20s'
                            }}
                        />
                    ))}
                </div>

                {/* Animated rotating ring */}
                <div className="absolute top-32 right-20 w-48 h-48 border-2 border-[#e44f39]/20 rounded-full animate-spin-slow"></div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-32 pb-20">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Hire Industry Ready{" "}
                            <span className="text-[#e44f39]">React Developers</span>
                        </h1>

                        <p className="text-gray-600 text-lg max-w-xl mb-10">
                            Build lightning-fast, scalable, and modern frontend applications with
                            expert React engineers specializing in Next.js, TypeScript, and state-of-the-art UI development.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-[#e44f39] transition">
                                Hire React Developers
                            </button>
                            <button className="px-8 py-4 border border-black rounded-lg hover:bg-black hover:text-white transition">
                                Talk to an Expert
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="/react.webp"
                            alt="React Developers Team"
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
                        Build Modern, High-Performance React Applications With
                        <span className="text-[#e44f39]"> Expert Frontend Developers</span>
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

            {/* ================= REACT TECH STACK MARQUEE SECTION ================= */}
            <ReactMarqueeSection />

            {/* ================= TECH STACK SECTION ================= */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">
                        React Development Expertise
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Next.js & Server-Side Rendering",
                            "TypeScript & Type Safety",
                            "Redux & State Management",
                            "Tailwind CSS & Styled Components",
                            "Performance Optimization & Code Splitting",
                            "Testing (Jest, Cypress, React Testing Library)"
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

            {/* ================= REACT USE CASES SECTION ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What Can You Build with <span className="text-[#e44f39]">React?</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From single-page applications to complex enterprise platforms, React powers it all
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Single Page Applications",
                                desc: "Lightning-fast SPAs with seamless user experiences",
                                icon: "⚡",
                                color: "from-cyan-500 to-blue-600"
                            },
                            {
                                title: "E-Commerce Platforms",
                                desc: "High-converting online stores with Next.js commerce",
                                icon: "🛍️",
                                color: "from-purple-500 to-pink-600"
                            },
                            {
                                title: "Progressive Web Apps",
                                desc: "App-like experiences with offline capabilities",
                                icon: "📱",
                                color: "from-green-500 to-teal-600"
                            },
                            {
                                title: "Dashboard & Admin Panels",
                                desc: "Data-rich interfaces with real-time updates",
                                icon: "📊",
                                color: "from-orange-500 to-red-600"
                            },
                            {
                                title: "Social Media Platforms",
                                desc: "Engaging social experiences with real-time features",
                                icon: "💬",
                                color: "from-blue-500 to-indigo-600"
                            },
                            {
                                title: "Enterprise Applications",
                                desc: "Scalable business solutions with complex workflows",
                                icon: "🏢",
                                color: "from-gray-600 to-gray-800"
                            }
                        ].map((useCase, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#e44f39] transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                    {useCase.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                                <p className="text-gray-600">{useCase.desc}</p>
                                <div className={`absolute bottom-0 left-2 right-2 h-1 bg-gradient-to-r ${useCase.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
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
                            Get your React development team up and running in no time
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#e44f39] via-[#e44f39] to-[#e44f39] opacity-20" 
                             style={{ top: '80px', left: '16.66%', right: '16.66%' }} />

                        {[
                            {
                                step: "01",
                                title: "Share Your Requirements",
                                desc: "Tell us about your project needs, tech stack, and timeline",
                                icon: FaCode
                            },
                            {
                                step: "02",
                                title: "Review Developer Profiles",
                                desc: "Get pre-vetted React developer profiles within 24 hours",
                                icon: FaUsers
                            },
                            {
                                step: "03",
                                title: "Start Development",
                                desc: "Onboard developers and kick off your project immediately",
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

            {/* ================= DEVELOPER SKILLS BREAKDOWN SECTION ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our React Developers' <span className="text-[#e44f39]">Skill Set</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive expertise across the React ecosystem
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Core React & Frameworks */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                                    <FaReact className="text-white text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold">Core React & Frameworks</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "React 18 & Hooks", level: 96 },
                                    { skill: "Next.js 14+ (App Router)", level: 93 },
                                    { skill: "TypeScript Integration", level: 91 },
                                    { skill: "Server Components & SSR", level: 89 }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{item.skill}</span>
                                            <span className="text-cyan-600 font-semibold">{item.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* State Management */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-2xl">🔄</span>
                                </div>
                                <h3 className="text-2xl font-bold">State Management</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "Redux & Redux Toolkit", level: 90 },
                                    { skill: "React Context API", level: 94 },
                                    { skill: "Zustand & Jotai", level: 87 },
                                    { skill: "React Query (TanStack)", level: 92 }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{item.skill}</span>
                                            <span className="text-purple-600 font-semibold">{item.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-1000"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* UI & Styling */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-2xl">🎨</span>
                                </div>
                                <h3 className="text-2xl font-bold">UI & Styling</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "Tailwind CSS", level: 95 },
                                    { skill: "Styled Components", level: 88 },
                                    { skill: "Material-UI & Chakra", level: 90 },
                                    { skill: "Framer Motion", level: 86 }
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

                        {/* Testing & Optimization */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-2xl">✅</span>
                                </div>
                                <h3 className="text-2xl font-bold">Testing & Performance</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: "Jest & React Testing Library", level: 89 },
                                    { skill: "Cypress E2E Testing", level: 85 },
                                    { skill: "Performance Optimization", level: 93 },
                                    { skill: "Code Splitting & Lazy Loading", level: 91 }
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
                                bestFor: "Long-term projects requiring consistent development",
                                features: [
                                    "Dedicated developer",
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
                                bestFor: "Ongoing maintenance and smaller projects",
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
                                bestFor: "Well-defined projects with clear deliverables",
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
                            Numbers that speak for our commitment to quality
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "20+",
                                label: "React Projects Delivered",
                                icon: FaRocket,
                                color: "from-cyan-500 to-blue-600"
                            },
                            {
                                number: "30+",
                                label: "Expert React Developers",
                                icon: FaUsers,
                                color: "from-purple-500 to-pink-600"
                            },
                            {
                                number: "99%",
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
                        Why Hire React Developers From Us?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Industry-Ready Engineers",
                                desc: "Pre-vetted developers with proven React expertise and modern best practices."
                            },
                            {
                                title: "Flexible Engagement Models",
                                desc: "Hire full-time, part-time, or dedicated React resources as per your needs."
                            },
                            {
                                title: "Agile & Transparent Delivery",
                                desc: "Clear communication, fast iterations, and on-time delivery guaranteed."
                            }
                        ].map(item => (
                            <div
                                key={item.title}
                                className="p-8 bg-white border rounded-2xl hover:shadow-lg transition"
                            >
                                <FaReact className="text-3xl text-[#e44f39] mb-5" />
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
                        Ready to Build Your React Application?
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Get access to pre-vetted React developers and start your project within 48 hours
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact#project-form">
                            <button className="px-10 py-4 bg-white text-[#e44f39] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                                Hire React Developers Now
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

// ================= REACT MARQUEE SECTION COMPONENT =================
function ReactMarqueeSection() {
    const technologies = [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
        { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Jest", icon: SiJest, color: "#C21325" },
        { name: "Cypress", icon: SiCypress, color: "#17202C" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        { name: "Apollo GraphQL", icon: SiApollographql, color: "#311C87" },
        { name: "React Query", icon: SiReactquery, color: "#FF4154" },
        { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "ESLint", icon: SiEslint, color: "#4B32C3" }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Complete <span className="text-[#e44f39]">React Tech Stack</span>
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    Our developers are proficient in the entire React ecosystem
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

                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll-left,
                    .animate-scroll-right,
                    .animate-spin-slow {
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