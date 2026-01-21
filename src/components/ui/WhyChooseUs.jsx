export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left content */}
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            (Working together)
          </p>
          <h2 className="text-6xl font-bold leading-tight text-gray-900">
            Why Choose <span className="text-red-500">Vsachi Tech?</span>
          </h2>
          <div className="mt-8 inline-flex items-center rounded-full border border-red-500 px-6 py-2 text-sm font-medium text-red-500">
            hello@vsachitech.com
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            Vsachi Tech is a technology driven development studio focused on building
            reliable, high performance digital products. We specialize in designing
            and engineering systems that are clean, scalable, and built to last.
          </p>

          <p>
            Our work spans modern websites, backend systems, APIs, Python automation,
            and intelligent workflows. Every solution is designed with performance,
            maintainability, and real world usage in mind.
          </p>

          <p>
            We partner with startups, growing businesses, and teams that value
            thoughtful engineering, clear communication, and long term scalability.
            We don’t chase trends we build systems that solve real problems.
          </p>

          <p>
            At Vsachi Tech, collaboration is core to our process. From planning to
            execution, we work closely with our clients to deliver products that are
            dependable, efficient, and aligned with business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
