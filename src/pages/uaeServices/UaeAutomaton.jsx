import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRobot, FaCog, FaChartLine, FaCheckCircle,
  FaArrowRight, FaClock, FaDollarSign, FaUsers,
  FaShieldAlt, FaHandshake, FaTrophy, FaRocket,
  FaMobileAlt, FaEnvelope, FaShoppingCart, FaDatabase,
  FaClipboardCheck, FaChartBar, FaBrain, FaCloud,
  FaSync, FaBell, FaFileInvoiceDollar, FaCalendarAlt,
  FaComments, FaWhatsapp, FaSlack, FaGoogle
} from 'react-icons/fa';
import { MdLocationOn, MdAutoGraph, MdSpeed, MdIntegrationInstructions } from 'react-icons/md';
import { SiZapier, SiMake, SiAirtable } from 'react-icons/si';

// Divider Component
const WaveDivider = ({ flip }) => (
  <div className={`overflow-hidden ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" className="w-full" aria-hidden="true">
      <path
        fill="#f3f4f6"
        d="M0,40 C160,80 360,0 560,20 760,40 960,80 1200,60 1320,50 1440,40 1440,40 L1440,0 L0,0 Z"
      />
    </svg>
  </div>
);

const UaeAutomation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);
  const [costSaved, setCostSaved] = useState(0);
  const [tasksAutomated, setTasksAutomated] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setHoursSaved(prev => {
        if (prev < 480) return prev + 12;
        return 480;
      });
      setCostSaved(prev => {
        if (prev < 75000) return prev + 1875;
        return 75000;
      });
      setTasksAutomated(prev => {
        if (prev < 1200) return prev + 30;
        return 1200;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    "AI-Powered Business Automation",
    "Workflow Optimization for UAE",
    "WhatsApp Business Integration",
    "CRM & Sales Automation"
  ];

  const automationServices = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email Marketing Automation",
      description: "Automate your email campaigns with personalized sequences, triggers, and Arabic content for UAE audience",
      features: [
        "Drip Campaigns",
        "Behavior Triggers",
        "A/B Testing",
        "Arabic Templates",
        "Lead Scoring",
        "Analytics Dashboard"
      ],
      roi: "300-500%",
      timeframe: "2-4 weeks",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp Business Automation",
      description: "Automate customer interactions on WhatsApp with chatbots, broadcasts, and CRM integration for UAE market",
      features: [
        "Chatbot Integration",
        "Auto-Responses",
        "Broadcast Messages",
        "CRM Sync",
        "Order Tracking",
        "24/7 Support"
      ],
      roi: "400-700%",
      timeframe: "1-2 weeks",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-commerce Automation",
      description: "Streamline order processing, inventory management, and customer communications for UAE online stores",
      features: [
        "Order Processing",
        "Inventory Sync",
        "Abandoned Cart",
        "Customer Emails",
        "Invoice Generation",
        "Shipping Updates"
      ],
      roi: "250-450%",
      timeframe: "2-3 weeks",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "CRM & Sales Automation",
      description: "Automate lead management, follow-ups, and sales pipeline for UAE businesses to never miss opportunities",
      features: [
        "Lead Capture",
        "Auto Follow-ups",
        "Pipeline Management",
        "Deal Tracking",
        "Task Automation",
        "Reports & Analytics"
      ],
      roi: "500-900%",
      timeframe: "3-4 weeks",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: <FaFileInvoiceDollar className="w-8 h-8" />,
      title: "Accounting & Finance Automation",
      description: "Automate invoicing, expense tracking, and financial reporting for UAE companies with local compliance",
      features: [
        "Auto Invoicing",
        "Expense Tracking",
        "VAT Calculation",
        "Payment Reminders",
        "Bank Reconciliation",
        "Financial Reports"
      ],
      roi: "200-400%",
      timeframe: "2-3 weeks",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Scheduling & Appointment Automation",
      description: "Automate booking, reminders, and calendar management for UAE service businesses and professionals",
      features: [
        "Online Booking",
        "Auto Reminders",
        "Calendar Sync",
        "Confirmation Emails",
        "Rescheduling",
        "No-show Reduction"
      ],
      roi: "300-600%",
      timeframe: "1-2 weeks",
      color: "from-teal-500 to-teal-700"
    }
  ];

  const automationPlatforms = [
    { 
      name: "Zapier", 
      icon: SiZapier, 
      color: "text-orange-600",
      apps: "5000+",
      bestFor: "Multi-app Integration"
    },
    { 
      name: "Make (Integromat)", 
      icon: SiMake, 
      color: "text-purple-600",
      apps: "1000+",
      bestFor: "Complex Workflows"
    },
    { 
      name: "Google Workspace", 
      icon: FaGoogle, 
      color: "text-blue-600",
      apps: "All Google Apps",
      bestFor: "Document Automation"
    },
    { 
      name: "Airtable", 
      icon: SiAirtable, 
      color: "text-yellow-600",
      apps: "Database + Apps",
      bestFor: "Custom Databases"
    },
    { 
      name: "Slack", 
      icon: FaSlack, 
      color: "text-purple-700",
      apps: "2000+",
      bestFor: "Team Communication"
    },
    { 
      name: "WhatsApp Business", 
      icon: FaWhatsapp, 
      color: "text-green-600",
      apps: "CRM Integration",
      bestFor: "UAE Customer Service"
    },
    { 
      name: "HubSpot", 
      icon: FaRocket, 
      color: "text-orange-500",
      apps: "1000+",
      bestFor: "Marketing & Sales"
    },
    { 
      name: "Salesforce", 
      icon: FaCloud, 
      color: "text-blue-500",
      apps: "3000+",
      bestFor: "Enterprise CRM"
    }
  ];

  const automationProcess = [
    {
      step: "01",
      title: "Workflow Analysis & Discovery",
      description: "Deep dive into your UAE business processes to identify automation opportunities and pain points",
      icon: FaClipboardCheck,
      duration: "1 Week",
      deliverables: ["Process Mapping", "Pain Point Analysis", "Automation Roadmap", "ROI Projection"]
    },
    {
      step: "02",
      title: "Platform Selection & Setup",
      description: "Choose the right automation tools and platforms based on your UAE business needs and budget",
      icon: FaCog,
      duration: "3-5 Days",
      deliverables: ["Platform Selection", "Account Setup", "Integration Planning", "Security Configuration"]
    },
    {
      step: "03",
      title: "Workflow Design & Mapping",
      description: "Design automated workflows with clear logic, triggers, and actions tailored for UAE operations",
      icon: FaBrain,
      duration: "1-2 Weeks",
      deliverables: ["Workflow Diagrams", "Logic Trees", "Trigger Setup", "Action Mapping"]
    },
    {
      step: "04",
      title: "Integration & Implementation",
      description: "Connect all your tools and implement automation workflows with proper testing and validation",
      icon: MdIntegrationInstructions,
      duration: "2-3 Weeks",
      deliverables: ["App Connections", "Workflow Build", "Testing", "Error Handling"]
    },
    {
      step: "05",
      title: "Training & Documentation",
      description: "Train your UAE team on using and maintaining automation workflows with comprehensive guides",
      icon: FaUsers,
      duration: "3-5 Days",
      deliverables: ["Team Training", "User Guides", "Video Tutorials", "Best Practices"]
    },
    {
      step: "06",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and improvement of automated workflows for maximum efficiency and ROI",
      icon: FaChartLine,
      duration: "Ongoing",
      deliverables: ["Performance Reports", "Error Monitoring", "Optimization", "Scaling Support"]
    }
  ];

  const automationUseCases = [
    {
      title: "Lead Generation to CRM",
      description: "Automatically capture leads from forms, ads, and website, then add to CRM with email sequence",
      steps: ["Form Submission", "CRM Entry", "Welcome Email", "Sales Notification", "Follow-up Sequence"],
      timeSaved: "15 hrs/week",
      icon: FaUsers
    },
    {
      title: "Order Processing",
      description: "Automate entire order fulfillment from payment to shipping notification for UAE e-commerce",
      steps: ["Payment Received", "Inventory Update", "Invoice Generation", "Warehouse Alert", "Tracking Email"],
      timeSaved: "20 hrs/week",
      icon: FaShoppingCart
    },
    {
      title: "Customer Support Tickets",
      description: "Route support requests, assign to team, track responses, and close tickets automatically",
      steps: ["Ticket Creation", "Auto-Assignment", "Response Templates", "Follow-up", "Satisfaction Survey"],
      timeSaved: "12 hrs/week",
      icon: FaComments
    },
    {
      title: "Social Media Management",
      description: "Schedule posts, respond to comments, track mentions across platforms for UAE audience",
      steps: ["Content Calendar", "Auto-Posting", "Comment Alerts", "DM Management", "Analytics Report"],
      timeSaved: "10 hrs/week",
      icon: FaBell
    },
    {
      title: "Invoice & Payment Collection",
      description: "Generate invoices, send reminders, track payments, and update accounting for UAE businesses",
      steps: ["Invoice Creation", "Email Delivery", "Payment Reminders", "Payment Recording", "Accounting Sync"],
      timeSaved: "8 hrs/week",
      icon: FaFileInvoiceDollar
    },
    {
      title: "Employee Onboarding",
      description: "Automate new hire documentation, training schedules, and access provisioning in UAE companies",
      steps: ["Welcome Email", "Document Collection", "Account Creation", "Training Schedule", "Manager Alert"],
      timeSaved: "6 hrs/week",
      icon: FaClipboardCheck
    }
  ];

  const industries = [
    {
      name: "Real Estate Agencies",
      topAutomations: ["Lead capture from portals", "Property alert emails", "Viewing appointments", "Follow-up sequences"],
      timeSaved: "30-40 hrs/week",
      costSaving: "AED 15,000/month",
      potential: "Excellent"
    },
    {
      name: "E-commerce Stores",
      topAutomations: ["Order processing", "Inventory sync", "Abandoned cart emails", "Review requests"],
      timeSaved: "40-50 hrs/week",
      costSaving: "AED 20,000/month",
      potential: "Excellent"
    },
    {
      name: "Healthcare Clinics",
      topAutomations: ["Appointment booking", "Reminders", "Patient records", "Billing automation"],
      timeSaved: "25-35 hrs/week",
      costSaving: "AED 12,000/month",
      potential: "High"
    },
    {
      name: "Restaurants & Cafes",
      topAutomations: ["Online orders", "Table reservations", "Inventory tracking", "Staff scheduling"],
      timeSaved: "20-30 hrs/week",
      costSaving: "AED 10,000/month",
      potential: "High"
    },
    {
      name: "Digital Agencies",
      topAutomations: ["Client onboarding", "Report generation", "Project management", "Invoice automation"],
      timeSaved: "35-45 hrs/week",
      costSaving: "AED 18,000/month",
      potential: "Excellent"
    },
    {
      name: "Education & Training",
      topAutomations: ["Student enrollment", "Course reminders", "Certificate generation", "Payment tracking"],
      timeSaved: "30-40 hrs/week",
      costSaving: "AED 14,000/month",
      potential: "High"
    },
    {
      name: "Legal & Consulting",
      topAutomations: ["Client intake", "Document generation", "Billing & invoicing", "Meeting scheduling"],
      timeSaved: "25-35 hrs/week",
      costSaving: "AED 15,000/month",
      potential: "High"
    },
    {
      name: "Fitness & Wellness",
      topAutomations: ["Membership management", "Class booking", "Payment collection", "Attendance tracking"],
      timeSaved: "20-30 hrs/week",
      costSaving: "AED 10,000/month",
      potential: "Good"
    },
    {
      name: "Financial Services",
      topAutomations: ["Lead qualification", "Document collection", "Compliance checks", "Report generation"],
      timeSaved: "30-40 hrs/week",
      costSaving: "AED 20,000/month",
      potential: "Excellent"
    }
  ];

  const automationBenefits = [
    {
      title: "Save Time",
      description: "Automate repetitive tasks and free up 20-40 hours per week for strategic work",
      icon: FaClock,
      metric: "40+ hrs/week"
    },
    {
      title: "Reduce Costs",
      description: "Cut operational expenses by up to 70% through process automation",
      icon: FaDollarSign,
      metric: "70% savings"
    },
    {
      title: "Eliminate Errors",
      description: "Remove human error from routine tasks with 99.9% accuracy",
      icon: FaCheckCircle,
      metric: "99.9% accuracy"
    },
    {
      title: "Scale Faster",
      description: "Handle 10x more volume without hiring additional staff",
      icon: MdAutoGraph,
      metric: "10x capacity"
    },
    {
      title: "24/7 Operations",
      description: "Automated workflows run round the clock, even while you sleep",
      icon: FaRobot,
      metric: "24/7 uptime"
    },
    {
      title: "Better Customer Experience",
      description: "Instant responses and faster service delivery for UAE customers",
      icon: FaUsers,
      metric: "Instant response"
    },
    {
      title: "Data-Driven Insights",
      description: "Automatic tracking and reporting for better business decisions",
      icon: FaChartBar,
      metric: "Real-time data"
    },
    {
      title: "Competitive Advantage",
      description: "Move faster than competitors still doing manual processes",
      icon: FaTrophy,
      metric: "Market edge"
    }
  ];

  const integrations = [
    {
      category: "Communication Tools",
      tools: ["WhatsApp Business", "Slack", "Microsoft Teams", "Gmail", "Outlook", "Telegram"],
      icon: FaComments,
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "CRM & Sales",
      tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com", "Copper"],
      icon: FaUsers,
      color: "from-green-500 to-green-600"
    },
    {
      category: "E-commerce Platforms",
      tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Amazon", "Noon"],
      icon: FaShoppingCart,
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Marketing Tools",
      tools: ["Mailchimp", "ActiveCampaign", "SendGrid", "Google Ads", "Facebook Ads", "HubSpot"],
      icon: FaEnvelope,
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Accounting & Finance",
      tools: ["QuickBooks", "Xero", "Zoho Books", "FreshBooks", "Wave", "Sage"],
      icon: FaFileInvoiceDollar,
      color: "from-red-500 to-red-600"
    },
    {
      category: "Project Management",
      tools: ["Asana", "Trello", "ClickUp", "Jira", "Basecamp", "Monday.com"],
      icon: FaClipboardCheck,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const caseStudies = [
    {
      client: "Dubai Real Estate Agency",
      industry: "Real Estate",
      challenge: "Manual lead management causing 40% lead loss and slow follow-ups",
      solution: "Automated lead capture from portals, instant CRM entry, auto-response emails, and sales team notifications",
      results: {
        leadLoss: "-95%",
        responseTime: "5 mins",
        conversions: "+180%",
        timeSaved: "35 hrs/week"
      },
      platforms: ["Zapier", "HubSpot", "WhatsApp Business"]
    },
    {
      client: "Abu Dhabi E-commerce Store",
      industry: "Fashion Retail",
      challenge: "Order processing taking 3-4 hours daily, frequent inventory errors",
      solution: "Complete order-to-shipment automation with inventory sync, invoice generation, and tracking emails",
      results: {
        processingTime: "-90%",
        errors: "-98%",
        satisfaction: "+85%",
        costSaved: "AED 18K/mo"
      },
      platforms: ["Shopify", "Zapier", "Google Sheets"]
    },
    {
      client: "Dubai Healthcare Network",
      industry: "Medical Services",
      challenge: "30% no-show rate, manual appointment scheduling overwhelming staff",
      solution: "Online booking system with auto-reminders via SMS, email, and WhatsApp",
      results: {
        noShows: "-75%",
        bookings: "+140%",
        staffTime: "-60%",
        revenue: "+AED 45K/mo"
      },
      platforms: ["Calendly", "Twilio", "WhatsApp API"]
    }
  ];

  const whyChooseUs = [
    "5+ years automation expertise in UAE",
    "Certified Zapier & Make experts",
    "100+ successful implementations",
    "Arabic & English support",
    "Local UAE business understanding",
    "No-code & custom solutions",
    "Ongoing optimization included",
    "Fast turnaround times"
  ];

  const automationROI = [
    {
      investment: "Small Business Package",
      cost: "AED 3,000 - 8,000",
      monthlySavings: "AED 5,000 - 12,000",
      paybackPeriod: "1-2 months",
      annualROI: "400-600%"
    },
    {
      investment: "Medium Business Package",
      cost: "AED 8,000 - 20,000",
      monthlySavings: "AED 15,000 - 35,000",
      paybackPeriod: "1 month",
      annualROI: "600-900%"
    },
    {
      investment: "Enterprise Package",
      cost: "AED 20,000 - 50,000",
      monthlySavings: "AED 40,000 - 100,000",
      paybackPeriod: "2-3 weeks",
      annualROI: "800-1200%"
    }
  ];

  const stats = [
    { value: `${hoursSaved}+`, label: "Hours Saved Monthly", icon: FaClock },
    { value: `AED ${costSaved.toLocaleString()}`, label: "Cost Savings", icon: FaDollarSign },
    { value: `${tasksAutomated}+`, label: "Tasks Automated", icon: FaRobot },
    { value: "99.9%", label: "Uptime Reliability", icon: FaShieldAlt }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="text-white/10 text-4xl">⚙️</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
            <div className="text-white/10 text-3xl">🤖</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
            <div className="text-white/10 text-2xl">⚡</div>
          </div>
          
          {/* Dynamic Grid */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 62, 62, 0.3) 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              {/* Automation Badge */}
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-full">
                <FaRobot className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
                  Business Automation • Dubai • UAE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Automate & Scale</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Your UAE Business
                </span>
              </h1>

              {/* Rotating Feature Display */}
              <div className="mb-8">
                <div className="relative h-12 overflow-hidden">
                  {heroFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full text-xl sm:text-2xl font-bold text-white transition-all duration-1000 ${
                        index === activeFeature
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Transform your UAE business with intelligent automation. Save time, reduce costs, 
                and scale operations with AI-powered workflows tailored for the Emirates market.
              </p>

              {/* Live Metrics Demo */}
              <div className="mb-8 bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Hours Saved</div>
                    <div className="text-2xl font-bold text-green-400">{hoursSaved}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Cost Saved</div>
                    <div className="text-2xl font-bold text-white">AED {costSaved.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Tasks Automated</div>
                    <div className="text-2xl font-bold text-red-400">{tasksAutomated}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact#project-form" aria-label="Get automation consultation">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      START AUTOMATION
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="#services" aria-label="View automation services">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-base font-semibold">
                    VIEW SERVICES
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>

      <WaveDivider />

      {/* Automation Services Section - Timeline Layout */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UAE Business <span className="text-red-600">Automation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions to streamline every aspect of your UAE operations
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-red-500 to-red-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {automationServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 ${
                        activeService === index ? 'scale-105 border-red-500 shadow-2xl' : ''
                      }`}
                    >
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>

                      <div className={`mb-6 inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-sm text-gray-500 block mb-1">Expected ROI</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full inline-block">
                            {service.roi}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 block mb-1">Timeframe</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full inline-block">
                            {service.timeframe}
                          </span>
                        </div>
                      </div>

                      <div className={`absolute top-1/2 ${
                        index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                      } hidden lg:block transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <FaArrowRight className={`w-6 h-6 text-red-500 ${
                          index % 2 !== 0 ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block w-2/12 flex-shrink-0">
                    <div className="relative flex justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl transition-all duration-500 ${
                        activeService === index ? 'scale-125' : 'scale-100'
                      }`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      {activeService === index && (
                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Platforms - Marquee */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Platforms</span> We Automate With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert integration across all major automation and business platforms
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex animate-marquee hover:pause-marquee">
            {[...automationPlatforms, ...automationPlatforms].map((platform, index) => (
              <div key={index} className="flex-shrink-0 mx-4 group">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-300 w-72 h-56 flex flex-col items-center justify-center hover:-translate-y-2">
                  <platform.icon className={`w-16 h-16 mb-4 ${platform.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 mb-2">{platform.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{platform.apps}</div>
                    <div className="text-xs text-gray-500 italic">{platform.bestFor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
          .pause-marquee {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <WaveDivider flip={true} />

      {/* Automation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">6-Step Automation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for implementing automation that delivers measurable ROI
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 lg:w-1.5 bg-gradient-to-b from-red-400 via-red-500 to-red-600 rounded-full"></div>

            <div className="space-y-12">
              {automationProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                >
                  <div className={`absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-xl`}>
                    <div className="text-sm font-bold text-gray-900">{step.step}</div>
                  </div>

                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} ml-20 lg:ml-0 lg:mt-0`}>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500">
                      <div className={`mb-4 inline-flex p-4 bg-red-100 rounded-xl ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
                        <step.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">Deliverables:</div>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                        <FaClock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Popular <span className="text-red-600">Automation Workflows</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world automation examples that save UAE businesses time and money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationUseCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                  <useCase.icon className="w-10 h-10 text-red-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{useCase.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Workflow Steps:</div>
                  <div className="space-y-2">
                    {useCase.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Time Saved</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                      {useCase.timeSaved}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">1000+</span> App Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect and automate all your favorite business tools seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-500"
              >
                <div className={`mb-6 inline-flex p-5 bg-gradient-to-br ${integration.color} rounded-2xl shadow-lg`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{integration.category}</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {integration.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm truncate">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Automation by <span className="text-red-600">UAE Industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific automation solutions with proven ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                  <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                    industry.potential === 'Excellent' 
                      ? 'bg-green-100 text-green-700'
                      : industry.potential === 'High'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {industry.potential}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Top Automations:</div>
                  <div className="space-y-2">
                    {industry.topAutomations.map((automation, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{automation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Time Saved</div>
                    <div className="text-sm font-bold text-green-600">{industry.timeSaved}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Cost Saving</div>
                    <div className="text-sm font-bold text-red-600">{industry.costSaving}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Automation <span className="text-red-600">ROI Calculator</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the potential return on investment for your UAE business automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationROI.map((package_info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_info.investment}</h3>
                  <div className="text-3xl font-bold text-red-600">{package_info.cost}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
                    <div className="text-xl font-bold text-green-600">{package_info.monthlySavings}</div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-sm text-gray-600 mb-1">Payback Period</div>
                    <div className="text-xl font-bold text-blue-600">{package_info.paybackPeriod}</div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="text-sm text-gray-600 mb-1">Annual ROI</div>
                    <div className="text-xl font-bold text-purple-600">{package_info.annualROI}</div>
                  </div>
                </div>

                <Link to="/contact#project-form">
                  <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UAE <span className="text-red-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real automation results from UAE businesses across different industries
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
                      <FaTrophy className="w-4 h-4" />
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h3>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Challenge:</div>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">Solution:</div>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <div className="md:col-span-1 flex items-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {Object.entries(study.results).map(([key, value], idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                          <div className="text-3xl font-bold text-red-600 mb-1">{value}</div>
                          <div className="text-sm text-gray-600 uppercase tracking-wide">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-1 flex flex-col justify-center">
                    <div className="text-sm font-semibold text-gray-700 mb-4">Tools Used:</div>
                    <div className="space-y-3">
                      {study.platforms.map((platform, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip={true} />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-red-600">Automate</span> Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformative benefits of business automation for UAE companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{benefit.description}</p>
                <div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full inline-block">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-red-600">Our Automation Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise and experience that ensures successful automation implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white shadow-2xl shadow-red-500/30">
              <FaRobot className="w-16 h-16 mx-auto mb-6 text-white/90" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your UAE Business?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's transform your operations with intelligent automation that saves time, 
                reduces costs, and scales your business effortlessly
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact#project-form" aria-label="Get automation consultation">
                  <button className="group relative px-12 py-5 bg-white text-red-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/40 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      START AUTOMATING NOW
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-5 h-5" />
                    <span>Certified Automation Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHandshake className="w-5 h-5" />
                    <span>Ongoing Support Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartLine className="w-5 h-5" />
                    <span>Guaranteed ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UaeAutomation;