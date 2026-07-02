import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaLayerGroup,
  FaMobileAlt,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const UI_ICONS = [FaPalette, FaMobileAlt, FaLayerGroup, FaRocket];

export default function ProjectCaseStudy({
  project,
  reverse = false,
  onOpenGallery,
}) {
  return (
    <motion.article
      id={project.id}
      className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.03] overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 lg:items-stretch ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Visual column — 3 screens fill full column height */}
        <div
          className={`flex flex-col gap-2 sm:gap-2.5 p-2 sm:p-3 lg:p-4 min-h-[420px] lg:min-h-0 lg:h-full bg-black/25 ${
            reverse ? "lg:[direction:ltr]" : ""
          }`}
        >
          {project.images.slice(0, 3).map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => onOpenGallery(project.id, idx)}
              className="group relative flex-1 min-h-[120px] sm:min-h-[140px] overflow-hidden rounded-2xl border border-white/15 hover:border-[#de6b58]/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#de6b58]"
              aria-label={`View ${project.name} screenshot ${idx + 1}`}
            >
              <img
                src={src}
                alt={`${project.name} website screenshot ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition" />
              <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 px-2 py-0.5 rounded-md bg-black/55">
                Screen {idx + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Copy column */}
        <div
          className={`p-6 sm:p-8 lg:p-10 flex flex-col ${
            reverse ? "lg:[direction:ltr]" : ""
          }`}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/15 text-gray-200/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.28em] text-[#de6b58]">
            {project.industry}
          </p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em]">
            {project.name}
          </h3>
          <p className="mt-4 text-gray-300/85 leading-[1.85] text-sm sm:text-base">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`/our-work/${project.id}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#de6b58] text-black text-sm font-semibold hover:brightness-110 transition"
            >
              View full case study
            </Link>
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/20 text-white text-sm font-semibold hover:border-[#de6b58]/60 transition"
            >
              Visit live site
              <FaExternalLinkAlt className="text-xs" />
            </a> */}
            <button
              type="button"
              onClick={() => onOpenGallery(project.id, 0)}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/15 text-gray-200 text-sm font-semibold hover:border-white/30 transition"
            >
              All screens
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                The challenge
              </h4>
              <ul className="space-y-2.5">
                {project.problem.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-300/80 leading-[1.7] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#de6b58]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                What we delivered
              </h4>
              <ul className="space-y-2.5">
                {project.solution.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-300/80 leading-[1.7] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#de6b58]/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Key functionality
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="mt-1.5 text-xs text-gray-400 leading-[1.65]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              UI / UX focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.uiux.map((item, i) => {
                const Icon = UI_ICONS[i % UI_ICONS.length];
                return (
                  <div key={item.title} className="flex gap-3 items-start">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#de6b58]/15 text-[#de6b58]">
                      <Icon className="text-sm" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-400 leading-[1.65]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-200/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
              Outcomes
            </h4>
            <ul className="space-y-2">
              {project.outcomes.map((o) => (
                <li key={o} className="text-sm text-[#de6b58]/90">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}



