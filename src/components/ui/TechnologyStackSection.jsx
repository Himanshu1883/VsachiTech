import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stacks = [
  {
    id: 1,
    title: "Frontend",
    description: "Modern, scalable UI built for performance and usability.",
    technologies: [
      { name: "React", logo: "/logos/react1.png" },
      { name: "Next.js", logo: "/logos/nextjs.png" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
      { name: "JavaScript", logo: "/logos/Javascript.png" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    description: "Reliable server-side systems designed to scale.",
    technologies: [
      { name: "Node.js", logo: "/logos/node.png" },
      { name: "Express", logo: "/logos/express.png" },
      { name: "Django", logo: "/logos/django.png" },
      { name: "PostgreSQL", logo: "/logos/postgre.png" },
    ],
  },
  {
    id: 3,
    title: "Python",
    description: "Automation, data processing, and backend intelligence.",
    technologies: [
      { name: "Python", logo: "/logos/python.png" },
      { name: "FastAPI", logo: "/logos/fastapi.png" },
      { name: "Playwright", logo: "/logos/playwright.png" },
      { name: "Selenium", logo: "/logos/selenium.jpg" },
    ],
  },
  {
    id: 4,
    title: "APIs",
    description: "Secure and efficient communication between systems.",
    technologies: [
      { name: "REST APIs", logo: "/logos/api.webp" },
      { name: "GraphQL", logo: "/logos/graphql.png" },
      { name: "JWT Auth", logo: "/logos/jwt.jpg" },
      { name: "Webhooks", logo: "/logos/webhook.png" },
    ],
  },
  {
    id: 5,
    title: "AI Services",
    description: "Practical AI integrations that improve workflows.",
    technologies: [
      { name: "OpenAI", logo: "/logos/openai.svg" },
      { name: "LangChain", logo: "/logos/LangChain.webp" },
      { name: "Claude", logo: "/logos/claude.png" },
      { name: "Copilot", logo: "/logos/copilot.png" },
    ],
  },
];

export default function TechnologyStackSection() {
  const [activeId, setActiveId] = useState(1);
  const activeStack = stacks.find((s) => s.id === activeId);
const stackBackgrounds = {
  Frontend:
    "bg-[radial-gradient(circle_at_20%_10%,rgba(228,79,57,0.18),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(228,79,57,0.08),transparent_50%)]",

  Backend:
    "bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(59,130,246,0.08),transparent_50%)]",

  Python:
    "bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.18),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(34,197,94,0.08),transparent_50%)]",

  APIs:
    "bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(168,85,247,0.08),transparent_50%)]",

  "AI Services":
    "bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.20),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(99,102,241,0.10),transparent_50%)]",
};



  return (
    <section className="bg-gray-50 py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div>
          <span className="text-xs tracking-widest text-gray-500">
            (TECHNOLOGY STACK)
          </span>

          <h2 className="text-black mt-6 text-3xl md:text-5xl font-bold leading-tight">
            Tools and <span className="text-red-600">technologies</span> we use to build<span className="text-red-600"> reliable</span> systems.
          </h2>

          <div className="mt-16 space-y-10">
            {stacks.map((stack, index) => {
              const active = stack.id === activeId;

              return (
                <motion.div
                  key={stack.id}
                  onClick={() => setActiveId(stack.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="cursor-pointer"
                >
                  <div className="flex gap-6 items-start">
                    <span
                      className={`mt-2 w-2 h-2 rounded-full transition-all
                      ${active ? "bg-[#e44f39]" : "bg-gray-300"}`}
                    />

                    <div>
                      <h4
                        className={`text-xl font-bold uppercase transition-colors
                        ${active ? "text-[#e44f39]" : "text-[#1c1c1c]"}`}
                      >
                        {stack.title}
                      </h4>
                      <p className="mt-2 text-gray-600 max-w-md">
                        {stack.description}
                      </p>
                    </div>
                  </div>

                  {index !== stacks.length - 1 && (
                    <div className="mt-10 h-px bg-gray-200" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
<div
  className={`
    text-[#e44f39]
    relative min-h-[460px] rounded-2xl
    border border-gray-200
    overflow-hidden
    ${stackBackgrounds[activeStack.title]}
  `}
>
  {/* subtle grid overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

  <AnimatePresence mode="wait">
    <motion.div
      key={activeId}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative z-10 h-full flex flex-col items-center justify-center px-10"
    >
      <h3 className="text-3xl font-bold mb-3 text-center">
        {activeStack.title} Technologies
      </h3>

      <p className="text-gray-600 text-center max-w-md mb-10">
        {activeStack.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {activeStack.technologies.map((tech) => (
          <div
  key={tech.name}
  className="
    group flex flex-col items-center gap-4
    relative
    bg-black/10
    backdrop-blur-md
    border border-white/20
    rounded-xl px-6 py-5
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    hover:bg-black/20
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
    hover:-translate-y-1
    transition-all duration-300
  "
>
  {/* inner highlight */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-60 pointer-events-none" />

  <img
    src={tech.logo}
    alt={tech.name}
    className="w-12 h-12 object-contain relative z-10"
  />

  <span className="text-sm font-semibold text-gray-900 relative z-10">
    {tech.name}
  </span>
</div>

        ))}
      </div>
    </motion.div>
  </AnimatePresence>
</div>


      </div>
    </section>
  );
}
