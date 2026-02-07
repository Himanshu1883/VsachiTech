import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "I need web design services for my enterprise website. Can you help?",
      answer:
        "Yes, we specialize in enterprise web design with scalable solutions tailored to large organizations. Our team builds high-performance, secure, and future-ready websites aligned with your business goals."
    },
    {
      question: "What will be the turnaround time for my project?",
      answer:
        "Most enterprise projects take 6–12 weeks depending on scope. A detailed roadmap is shared after discovery."
    },
    {
      question: "How much will a web design agency in Dubai charge me?",
      answer:
        "Pricing depends on complexity and integrations. We provide transparent, custom quotes focused on long-term ROI."
    },
    {
      question: "Is responsive web design important?",
      answer:
        "Yes. Responsive design is critical for UX, SEO, performance, and conversions across all devices."
    },
    {
      question: "How many years have you served the UAE market?",
      answer:
        "We have over 8 years of experience delivering enterprise solutions in the UAE."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      {/* SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/skill-bg.webp')] bg-cover bg-center opacity-70"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <header className="grid md:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <p className="text-xs tracking-widest mb-4">(FAQ)</p>
            <h2 className="text-6xl font-extrabold leading-tight">
              Frequently Asked
              <br />
              <span className="text-red-500">Questions</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Clear answers to common questions about our enterprise web design,
            technology stack, and UAE market expertise.
          </p>
        </header>

        {/* BODY */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">
              Transformation with Smart UX & Scalable Tech
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              You bring the vision we engineer the future. We deliver
              AI powered, multilingual, scalable platforms using modern UX
              principles and intelligent UI systems.
            </p>

            <div className="flex gap-4">
              <span className="w-2 h-2 mt-2 bg-red-500 rounded-full" />
              <p className="text-gray-300">
                From AI driven hosting to predictive UX and A/B testing, our
                solutions evolve with your audience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-red-500 text-2xl font-bold">200+</p>
                <p className="text-gray-400 text-sm">Expert Professionals</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-red-500 text-2xl font-bold">AI Powered</p>
                <p className="text-gray-400 text-sm">Enterprise Solutions</p>
              </div>
            </div>
          </div>

          {/* RIGHT – FAQ */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/5 border border-white/10"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium">
                    {item.question}
                  </span>

                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full border transition ${
                      openIndex === index
                        ? "text-red-500 border-red-500 rotate-180"
                        : "border-white/20"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="h-px w-12 bg-red-500 mb-4" />
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 pt-10 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? Speak with our experts.
          </p>

          <Link to="/contact">
            <button className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
