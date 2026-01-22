import { useState, useEffect } from "react";
import {
  FaRobot,
  FaCogs,
  FaNetworkWired,
  FaChartLine,
  FaLightbulb,
  FaSync,
  FaDatabase,
  FaShieldAlt,
  FaCloud,
  FaCheckCircle,
  FaRocket,
  FaHandshake,
  FaPlus,
  FaMinus,
  FaMicrochip,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiDocker } from "react-icons/si";
import { Link } from "react-router-dom";
import Scroll from "../../components/ui/Scroll";
import automation from "../../assets/automation.mp4"
import usePageTitle from "../../components/hooks/usePageTitle";

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const automationTypes = [
  {
    name: "Process",
    items: [
      { label: "RPA", icon: FaRobot },
      { label: "Workflow Automation", icon: FaSync },
      { label: "Data Processing", icon: FaDatabase },
      { label: "Document AI", icon: FaClipboardCheck },
    ],
  },
  {
    name: "Intelligence",
    items: [
      { label: "Machine Learning", icon: FaMicrochip },
      { label: "Predictive Analytics", icon: FaChartLine },
      { label: "Decision Automation", icon: FaLightbulb },
      { label: "Anomaly Detection", icon: FaShieldAlt },
    ],
  },
  {
    name: "Integration",
    items: [
      { label: "API Automation", icon: FaNetworkWired },
      { label: "Cloud Automation", icon: FaCloud },
      { label: "System Integration", icon: FaCogs },
      { label: "IoT Automation", icon: FaTools },
    ],
  },
];

const process = [
  {
    icon: FaLightbulb,
    title: "Discovery & Analysis",
    description: "Identify automation opportunities and assess ROI.",
  },
  {
    icon: FaCogs,
    title: "Solution Design",
    description: "Design workflows and select appropriate technologies.",
  },
  {
    icon: FaRobot,
    title: "Development",
    description: "Build, test, and train automation systems.",
  },
  {
    icon: FaSync,
    title: "Integration",
    description: "Seamlessly connect with existing systems.",
  },
  {
    icon: FaRocket,
    title: "Deploy & Scale",
    description: "Launch and expand automation across organization.",
  },
];

const services = [
  {
    icon: FaRobot,
    title: "RPA (Robotic Process Automation)",
    description: "Automate repetitive tasks and business processes.",
    features: ["Task Automation", "Screen Scraping", "Rule-based Workflows", "Process Mining"],
  },
  {
    icon: FaChartLine,
    title: "Intelligent Process Automation",
    description: "Combine RPA with AI for cognitive automation.",
    features: ["Document Intelligence", "Decision Automation", "Predictive Workflows", "ML Integration"],
  },
  {
    icon: FaDatabase,
    title: "Data Pipeline Automation",
    description: "Automate data collection, processing, and analysis.",
    features: ["ETL Automation", "Data Validation", "Real-time Processing", "Reporting Automation"],
  },
  {
    icon: FaCloud,
    title: "Cloud Automation",
    description: "Automate cloud infrastructure and deployments.",
    features: ["Infrastructure as Code", "CI/CD Pipelines", "Auto-scaling", "Cost Optimization"],
  },
  {
    icon: FaNetworkWired,
    title: "API & System Integration",
    description: "Automate communication between disparate systems.",
    features: ["API Orchestration", "System Synchronization", "Event-driven Automation", "Legacy Integration"],
  },
  {
    icon: FaShieldAlt,
    title: "Security & Compliance",
    description: "Automate security monitoring and compliance checks.",
    features: ["Security Automation", "Compliance Auditing", "Threat Detection", "Policy Enforcement"],
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

export default function Automation() {
  usePageTitle("Business Automation Solutions");

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTab((p) => (p + 1) % automationTypes.length),
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
            src={automation}
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
              <FaRobot /> AI Automation
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Intelligent Automation.
              <br />
              <span className="text-[#e44f39]">Maximum Efficiency.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 max-w-xl">
              Transform your business with automation that eliminates manual work,
              reduces errors, and accelerates growth through intelligent workflows.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center bg-[#e44f39] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition"
            >
              Get Automation Audit <FaRocket className="ml-2" />
            </Link>

            {/* TRUST SIGNALS */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 70%+ Time Savings
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 99.9% Accuracy
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Seamless Integration
              </span>
            </div>
          </div>

          {/* RIGHT CARD WITH AUTOMATION DASHBOARD */}
          <div className="relative mt-20 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* DASHBOARD HEADER */}
              <div className="bg-black p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#e44f39] rounded-full flex items-center justify-center">
                      <FaRobot className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Automation Dashboard</h3>
                      <p className="text-gray-300 text-sm">Real-time Process Monitoring</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm font-semibold">✓ All Systems Active</div>
                    <div className="text-gray-400 text-xs">98.7% Uptime</div>
                  </div>
                </div>
              </div>

              {/* AUTOMATION METRICS */}
              <div className="p-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Processes Automated", value: "1,247", change: "+12%", color: "#e44f39" },
                  { label: "Time Saved", value: "4,283h", change: "68%", color: "#10B981" },
                  { label: "Error Reduction", value: "99.2%", change: "↑ 45%", color: "#3B82F6" },
                  { label: "ROI", value: "4.8x", change: "+1.2x", color: "#8B5CF6" },
                ].map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold" style={{ color: metric.color }}>
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-green-600">{metric.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PROCESS VISUALIZATION */}
              <div className="px-6 pb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Active Automation Processes</div>
                <div className="flex items-center space-x-2">
                  {["Data Entry", "Invoice Processing", "Report Generation", "Customer Onboarding"].map((process, i) => (
                    <div key={i} className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#e44f39] rounded-full animate-pulse"
                          style={{ width: `${70 + i * 10}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{process}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FLOATING TECH BADGES */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float">
              <SiTensorflow className="text-2xl text-[#e44f39]" />
            </div>
            <div 
              className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex items-center justify-center animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <SiPytorch className="text-2xl text-[#e44f39]" />
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
            AI Automation <span className="text-[#e44f39]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow group hover:border-[#e44f39]/30"
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
                <div className="mt-4 text-gray-300 text-3xl font-bold group-hover:text-[#e44f39] transition-colors">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= TECHNOLOGIES MARQUEE ================= */}
      <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-gray-900 to-gray-800 mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[
            "Robotic Process Automation",
            "Machine Learning",
            "Workflow Orchestration",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
            "API Integration",
            "Cloud Automation",
            "IoT Integration",
            "Document AI",
            "Process Mining",
            "Intelligent Automation",
          ].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-white/90 text-lg font-semibold group hover:scale-105 transition-transform"
            >
              <div className="w-2 h-2 bg-[#e44f39] rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="group-hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= AUTOMATION TYPES ================= */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Automation <span className="text-[#e44f39]">Solutions</span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {automationTypes.map((t, i) => (
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
            {automationTypes[activeTab].items.map(({ label, icon: Icon }) => (
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
      <Section className="bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Key <span className="text-[#e44f39]">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaChartLine, title: "70%+ Time Savings", desc: "Automate repetitive tasks and reclaim valuable time" },
              { icon: FaCogs, title: "99.9% Accuracy", desc: "Eliminate human errors in data entry and processing" },
              { icon: FaShieldAlt, title: "Enhanced Compliance", desc: "Automated auditing and regulatory compliance" },
              { icon: FaLightbulb, title: "Scalable Growth", desc: "Handle increased volume without additional staff" },
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
                     Ready to Transform Your Business with AI Automation?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
               Get a free automation assessment and discover how AI can streamline your operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-white text-gray-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Get Free Automation Audit <FaLightbulb className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
 
          </div>
        </div>

      {/* ================= FAQ ================= */}
      <Section>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI Automation <span className="text-[#e44f39]">FAQs</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What types of processes can be automated?",
                a: "We automate repetitive tasks across departments: data entry, document processing, report generation, customer onboarding, invoice processing, email responses, and complex workflow orchestration.",
              },
              {
                q: "How long does it take to implement automation?",
                a: "Simple automations can be deployed in 2-4 weeks. Complex enterprise-wide automation typically takes 8-16 weeks, including integration, testing, and training.",
              },
              {
                q: "What's the typical ROI for automation projects?",
                a: "Most clients see 3-8x ROI within the first year. Time savings of 70%+ and error reduction of 99%+ are common outcomes across industries.",
              },
              {
                q: "Will automation require replacing our existing systems?",
                a: "No. We build automation around your existing systems. Our solutions integrate with your current software stack including ERPs, CRMs, databases, and legacy systems.",
              },
              {
                q: "How do you ensure security in automated processes?",
                a: "We implement enterprise-grade security: encrypted data handling, role-based access control, audit trails, and compliance with GDPR, HIPAA, SOC2, and other regulations.",
              },
              {
                q: "What's the difference between RPA and AI automation?",
                a: "RPA automates rule-based tasks (like clicking buttons, copying data). AI automation adds intelligence: understanding documents, making decisions, learning patterns, and handling unstructured data.",
              },
              {
                q: "Do you provide ongoing support and optimization?",
                a: "Yes, we offer maintenance, monitoring, and optimization services. Automation systems improve over time as we analyze performance data and implement enhancements.",
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
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e44f39]"
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