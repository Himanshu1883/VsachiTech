import { useState, useEffect } from "react";
import {
  FaComments,
  FaRobot,
  FaBrain,
  FaCogs,
  FaSync,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaCheckCircle,
  FaPlug,
  FaRocket,
  FaHandshake,
  FaPlus,
  FaMinus,
  FaHeadset,
  FaLanguage,
  FaDatabase,
  FaLightbulb,
  FaCalendar,
  FaShoppingCart,
  FaMicrophone 
} from "react-icons/fa";
import { SiDialogflow } from "react-icons/si";
import { Link } from "react-router-dom";
import Scroll from "../../components/ui/Scroll";
import aichatbot from "../../assets/aichatbot.mp4"
import usePageTitle from "../../components/hooks/usePageTitle";
/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const chatbotTypes = [
  {
    name: "Support",
    items: [
      { label: "Customer Service", icon: FaHeadset },
      { label: "FAQ Automation", icon: FaLightbulb },
      { label: "Ticket Routing", icon: FaSync },
      { label: "24/7 Support", icon: FaUsers },
    ],
  },
  {
    name: "Sales",
    items: [
      { label: "Lead Generation", icon: FaChartLine },
      { label: "Product Q&A", icon: FaComments },
      { label: "Appointment Booking", icon: FaCalendar },
      { label: "Cart Recovery", icon: FaShoppingCart },
    ],
  },
  {
    name: "Advanced",
    items: [
      { label: "Multi-language", icon: FaLanguage },
      { label: "Voice Bots", icon: FaMicrophone },
      { label: "Sentiment Analysis", icon: FaBrain },
      { label: "CRM Integration", icon: FaDatabase },
    ],
  },
];

const process = [
  {
    icon: FaBrain,
    title: "Strategy & Design",
    description: "Define use cases, brand voice, and conversation flows.",
  },
  {
    icon: FaRobot,
    title: "AI Training",
    description: "Train models with your data and industry knowledge.",
  },
  {
    icon: FaCogs,
    title: "Development",
    description: "Build and integrate across your platforms.",
  },
  {
    icon: FaSync,
    title: "Testing & QA",
    description: "Rigorous testing for accuracy and user experience.",
  },
  {
    icon: FaRocket,
    title: "Launch & Optimize",
    description: "Deploy and continuously improve with AI learning.",
  },
];

const services = [
  {
    icon: FaComments,
    title: "Customer Service Bots",
    description: "24/7 automated support that reduces response time.",
    features: ["FAQ Handling", "Ticket Creation", "Issue Resolution", "Escalation"],
  },
  {
    icon: FaChartLine,
    title: "Sales & Lead Bots",
    description: "Convert visitors into qualified leads and customers.",
    features: ["Lead Qualification", "Product Recommendations", "Booking", "Follow-ups"],
  },
  {
    icon: FaBrain,
    title: "AI-Powered Chatbots",
    description: "Advanced NLP for natural, human-like conversations.",
    features: ["Intent Recognition", "Context Awareness", "Sentiment Analysis", "Learning"],
  },
  {
    icon: FaPlug,
    title: "Platform Integration",
    description: "Seamless connection with your existing tools.",
    features: ["CRM Integration", "Helpdesk Systems", "E-commerce", "APIs"],
  },
  {
    icon: FaMobileAlt,
    title: "Omnichannel Bots",
    description: "Consistent experience across all customer touchpoints.",
    features: ["Website Chat", "Mobile Apps", "Social Media", "Messaging Apps"],
  },
  {
    icon: FaShieldAlt,
    title: "Analytics & Security",
    description: "Monitor performance and ensure data protection.",
    features: ["Conversation Analytics", "Compliance", "Data Security", "Reporting"],
  },
];

/* ---------------------------------- */
/* UI HELPERS */
/* ---------------------------------- */

const Section = ({ children, className = "" }) => (
  <section className={`py-28 ${className}`}>{children}</section>
);

const WaveDivider = ({ flip }) => (
  <div className={`overflow-hidden ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" className="w-full">
      <path
        fill="#f3f4f6"
        d="M0,40 C160,80 360,0 560,20 760,40 960,80 1200,60 1320,50 1440,40 1440,40 L1440,0 L0,0 Z"
      />
    </svg>
  </div>
);

/* ---------------------------------- */
/* COMPONENT */
/* ---------------------------------- */

export default function AiChatbots() {
  usePageTitle("AI Chatbot Development Services");

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTab((p) => (p + 1) % chatbotTypes.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-black">
      {/* ================= HERO ================= */}
   <section className="relative overflow-hidden pb-20">
  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0">
    <video
      className="w-full h-full object-cover"
      src={aichatbot}
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />

  <div className="relative lg:grid lg:grid-cols-2 gap-16 items-center px-6 md:px-16 pt-32 pb-64">
    {/* LEFT */}
    <div>
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold mb-6">
        <FaRobot /> AI Chatbots
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
        Intelligent Conversations.
        <br />
        <span className="text-[#e44f39]">24/7 Engagement.</span>
      </h1>

      <p className="text-lg text-gray-300 mb-10 max-w-xl">
        AI-powered chatbots that understand, engage, and convert your customers
        with human-like conversations and instant responses.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center bg-[#e44f39] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition"
      >
        Get AI Chatbot Demo <FaRocket className="ml-2" />
      </Link>

      {/* TRUST SIGNALS */}
      <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> Natural Language Processing
        </span>
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> Multi-platform Integration
        </span>
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> Continuous AI Learning
        </span>
      </div>
    </div>

    {/* RIGHT CARD WITH CHAT INTERFACE */}
    <div className="relative mt-20 lg:mt-0">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* CHAT HEADER */}
        <div className="bg-black p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaRobot className="text-[#e44f39] text-xl" />
            </div>
            <div>
              <h3 className="text-white font-bold">AI Assistant</h3>
              <p className="text-gray-300 text-sm">Online • 24/7 Support</p>
            </div>
          </div>
        </div>

        {/* CHAT MESSAGES */}
        <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
          {/* Bot Message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#e44f39]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FaRobot className="text-[#e44f39]" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
              <p className="text-gray-800">Hi! I'm your AI assistant. How can I help you today?</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#e44f39] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
              <p>What services do you offer?</p>
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#e44f39]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FaRobot className="text-[#e44f39]" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
              <p className="text-gray-800">We offer AI chatbots for customer support, lead generation, and more! Would you like to see a demo?</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#e44f39] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
              <p>Yes, I'd like to learn more!</p>
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#e44f39]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FaRobot className="text-[#e44f39]" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
              <p className="text-gray-800">Great! Let me connect you with our AI specialist. In the meantime, would you like me to show you some capabilities?</p>
            </div>
          </div>
        </div>

        {/* TYPING INDICATOR */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#e44f39] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#e44f39] rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-[#e44f39] rounded-full animate-pulse delay-300"></div>
            <span className="text-gray-500 text-sm ml-2">AI is thinking...</span>
          </div>
        </div>
      </div>

      {/* FLOATING TECH BADGES */}
      <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float">
        <SiDialogflow className="text-2xl text-[#e44f39]" />
      </div>
      <div 
        className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <FaBrain className="text-2xl text-[#e44f39]" />
      </div>

 
    </div>
  </div>


  

  <Scroll />
</section>
      <WaveDivider />

      {/* ================= SERVICES ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI Chatbot <span className="text-[#e44f39]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="text-4xl text-[#e44f39]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center group/item">
                      <div className="w-2 h-2 bg-[#e44f39] rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <WaveDivider flip />

      {/* ================= PROCESS ================= */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#e44f39]">Process</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <div
                key={p.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:-translate-y-2 transition-transform group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  <p.icon className="text-3xl text-[#e44f39] mx-auto" />
                </div>
                <h4 className="font-bold mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 text-purple-100 text-3xl font-bold group-hover:text-[#e44f39] transition-colors">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= CAPABILITIES MARQUEE ================= */}
      <div className="relative w-full overflow-hidden py-8 bg-gray-700 mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[
            "Natural Language Processing",
            "24/7 Customer Support",
            "Lead Generation",
            "Sentiment Analysis",
            "Multi-language Support",
            "CRM Integration",
            "Voice Recognition",
            "Intent Recognition",
            "Conversation Analytics",
            "AI Training",
            "Context Awareness",
            "Omnichannel Deployment",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-white/90 text-lg font-semibold group hover:scale-105 transition-transform"
            >
              <div className="w-2 h-2 bg-[#e44f39] rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="group-hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CHATBOT TYPES ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            AI Chatbot <span className="text-[#e44f39]">Solutions</span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {chatbotTypes.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === i
                    ? "bg-[#e44f39] text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {chatbotTypes[activeTab].items.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  <Icon className="text-4xl text-[#e44f39] mx-auto" />
                </div>
                <div className="font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= BENEFITS ================= */}
      <Section className="bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Key <span className="text-[#e44f39]">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaSync, title: "Instant Responses", desc: "24/7 availability with <2s response time" },
              { icon: FaChartLine, title: "Cost Efficiency", desc: "Reduce support costs by up to 65%" },
              { icon: FaUsers, title: "Scalability", desc: "Handle unlimited conversations simultaneously" },
              { icon: FaBrain, title: "Continuous Learning", desc: "AI improves with every interaction" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <benefit.icon className="text-4xl text-[#e44f39] mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= CTA ================= */}
      <div className="relative bg-black p-14 text-center shadow-2xl overflow-hidden">
          <div
                    className="absolute inset-0 bg-[url('/skill-bg.webp')]
               bg-no-repeat bg-center opacity-100"
                />
          <div className="relative">
            <FaHandshake className="text-6xl text-white/20 mb-8 mx-auto" />
            <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
               Get a free AI chatbot consultation and see how intelligent automation can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Get Free Chatbot Demo <FaLightbulb className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
 
          </div>
        </div>

      {/* ================= FAQ ================= */}
      <Section>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI Chatbot <span className="text-[#e44f39]">FAQs</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How intelligent are your AI chatbots?",
                a: "Our chatbots use advanced NLP and machine learning to understand context, intent, and sentiment. They continuously learn from interactions to improve responses.",
              },
              {
                q: "Can chatbots integrate with my existing systems?",
                a: "Yes, we integrate with most CRMs (Salesforce, HubSpot), helpdesk systems, e-commerce platforms, and custom APIs for seamless workflow automation.",
              },
              {
                q: "How long does it take to implement an AI chatbot?",
                a: "Simple chatbots can be deployed in 2-3 weeks. Complex, custom solutions with advanced AI features typically take 4-8 weeks.",
              },
              {
                q: "Do chatbots work on mobile and social media?",
                a: "Yes, our chatbots are omnichannel and work on websites, mobile apps, Facebook Messenger, WhatsApp, and other messaging platforms.",
              },
              {
                q: "How do you ensure data privacy and security?",
                a: "We follow GDPR, CCPA, and other regulations. All data is encrypted, and we offer on-premise or cloud hosting options based on your security needs.",
              },
              {
                q: "Can chatbots handle multiple languages?",
                a: "Yes, we support multi-language chatbots that can automatically detect and respond in the user's preferred language.",
              },
              {
                q: "What analytics and reporting do you provide?",
                a: "We provide detailed analytics on conversation volume, resolution rates, user satisfaction, common queries, and ROI metrics with real-time dashboards.",
              },
            ].map((faq, index) => {
              const [open, setOpen] = useState(false);

              return (
                <div
                  key={faq.q}
                  className="border rounded-xl bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#e44f39] transition-colors">
                      {faq.q}
                    </h4>

                    <span className="ml-4 text-[#e44f39] group-hover:scale-110 transition-transform">
                      {open ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}