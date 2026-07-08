import {
  FaInstagram,
  FaVideo,
  FaBullhorn,
  FaPaintBrush,
  FaUsers,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import usePageTitle from "../hooks/usePageTitle";

const services = [
  {
    icon: FaInstagram,
    title: "Social Media Management",
    desc: "Strategic social media planning, posting, engagement, and audience growth across all major platforms.",
    features: [
      "Instagram Growth",
      "LinkedIn Branding",
      "Content Scheduling",
      "Audience Engagement",
    ],
  },

  {
    icon: FaVideo,
    title: "Video Editing & Reels",
    desc: "High-performing short-form videos, cinematic edits, reels, and branded visual storytelling.",
    features: [
      "Reels Editing",
      "Motion Graphics",
      "Short-form Content",
      "YouTube Shorts",
    ],
  },

  {
    icon: FaPaintBrush,
    title: "Creative Branding",
    desc: "Visual identity systems designed to make your business recognizable and memorable.",
    features: [
      "Brand Identity",
      "Graphic Design",
      "Creative Direction",
      "Visual Systems",
    ],
  },

  {
    icon: FaBullhorn,
    title: "Content Strategy",
    desc: "Content frameworks engineered to improve reach, engagement, and conversion.",
    features: [
      "Content Planning",
      "Campaign Strategy",
      "Trend Research",
      "Growth Funnels",
    ],
  },

  {
    icon: FaUsers,
    title: "Community Building",
    desc: "Build strong digital communities through consistent engagement and brand interaction.",
    features: [
      "Community Engagement",
      "Brand Presence",
      "Audience Interaction",
      "Online Reputation",
    ],
  },

  {
    icon: FaRocket,
    title: "Growth Campaigns",
    desc: "Performance-driven campaigns that amplify visibility and accelerate digital growth.",
    features: [
      "Launch Campaigns",
      "Paid Promotions",
      "Viral Strategies",
      "Analytics Tracking",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Research",
    desc: "Understanding your audience, market trends, and brand positioning.",
  },

  {
    number: "02",
    title: "Strategy",
    desc: "Creating a content and engagement roadmap aligned with business goals.",
  },

  {
    number: "03",
    title: "Create",
    desc: "Producing visuals, videos, designs, and engaging digital assets.",
  },

  {
    number: "04",
    title: "Scale",
    desc: "Optimizing campaigns and scaling audience growth consistently.",
  },
];

export default function DigitalEngagement() {
  usePageTitle("Digital Engagement Engine");

  return (
    <section className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('/digital-engagement-bg.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Red Glow */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 blur-[140px] rounded-full" />

        {/* Content */}
        <div className="home-container home-gutter relative z-10 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-6">
            (DIGITAL ENGAGEMENT ENGINE)
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white max-w-5xl mx-auto">

            We build
            <span className="text-[#e44f39]">
              {" "}engaging digital experiences{" "}
            </span>

            through
            <span className="text-[#e44f39]">
              {" "}content, branding, reels{" "}
            </span>

            and
            <span className="text-[#e44f39]">
              {" "}social media growth{" "}
            </span>

            that amplify your online presence.
          </h1>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <Link
              to="/contact"
              className="px-10 py-5 border border-white/30 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Growing
            </Link>

            <Link
              to="/our-work"
              className="px-10 py-5 bg-[#e44f39] rounded-full text-white font-semibold hover:bg-[#cf402c] transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <Scroll />
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-[#f8f8f8]">

        <div className="home-container home-gutter mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              (DIGITAL PRESENCE)
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Engagement <span className="text-[#e44f39]">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#e44f39]/40 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(239,68,68,0.15)]"
              >

                <div className="mb-6">
                  <service.icon className="text-5xl text-[#e44f39] group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3">

                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#e44f39] mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-black text-white">

        <div className="home-container home-gutter mx-auto">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              (OUR PROCESS)
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              How We Build
              <span className="text-[#e44f39]"> Digital Momentum</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {process.map((step, index) => (
              <div
                key={index}
                className="relative border border-white/10 rounded-3xl p-8 hover:border-[#e44f39] transition-all duration-500 group overflow-hidden"
              >

                <div className="absolute inset-0 bg-[#e44f39] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                <div className="relative z-10">

                  <div className="text-6xl font-bold text-white/10 mb-6 group-hover:text-black/20 transition">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-black transition leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">

        <div className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-black/80" />

        <div className="home-container home-gutter relative z-10 text-center">

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Ready to Amplify
            <span className="text-[#e44f39]"> Your Brand Presence?</span>
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            Let’s create impactful digital experiences that attract,
            engage, and convert your audience.
          </p>

          <div className="mt-12">

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#e44f39] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-2xl"
            >
              Boost Your Engagement
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}