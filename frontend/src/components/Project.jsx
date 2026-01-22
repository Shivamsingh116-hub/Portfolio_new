import React, { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* -------------------- DATA -------------------- */
const projectsData = [
  {
    id: "gramhub",
    title: "Gramhub",
    description:
      "A secure full-stack file upload and management system with authentication and cross-device access.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://gramhub.netlify.app",
  },
  {
    id: "ai-resume-screener",
    title: "AI Resume Screener",
    description:
      "An AI-powered system that analyzes resumes, scores candidates, and shortlists profiles based on job requirements.",
    tech: ["Python", "MERN", "Flask", "NLP"],
    liveUrl: "https://airesumescreener.vercel.app",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A high-performance personal portfolio showcasing projects, skills, and experience with modern UI and SEO best practices.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://shivamsingh116.vercel.app",
  },
];

/* -------------------- ANIMATION VARIANTS -------------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -30,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

/* -------------------- CARD COMPONENT -------------------- */
function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      aria-labelledby={`${project.id}-title`}
      className="
        bg-surface
        flex flex-col items-center text-center
        p-10 md:p-14 rounded-xl
        [box-shadow:-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_20px_rgba(0,0,0,0.5)]
        transition-transform duration-300 hover:-translate-y-1
      "
    >
      <header>
        <h3
          id={`${project.id}-title`}
          className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          {project.title}
        </h3>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-sm">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {project.tech.map((item) => (
          <li
            key={item}
            className="
              px-4 py-2 rounded-full text-sm font-medium
              bg-surface tracking-wider
              bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
              [box-shadow:-4px_-4px_6px_rgba(255,255,255,0.8),4px_4px_6px_rgba(0,0,0,0.25)]
              hover:[box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.2)]
              cursor-default
            "
          >
            <strong>{item}</strong>
          </li>
        ))}
      </ul>

      {project.liveUrl && (
        <div className="mt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-2 rounded-lg text-sm font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-500
              text-white transition-transform duration-200
              hover:-translate-y-0.5
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            "
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
          </a>
        </div>
      )}
    </motion.article>
  );
}

/* -------------------- MAIN SECTION -------------------- */
const Project = forwardRef(function Project(_, ref) {
  return (
    <section
      ref={ref}
      id="projects"
      aria-labelledby="projects-heading"
      className="
        bg-gradient-to-r from-blue-500/30 via-blue-500/10 to-transparent
        bg-surface min-h-screen w-full
        flex flex-col items-center p-10
      "
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 mt-24 md:mt-32"
      >
        <h2
          id="projects-heading"
          className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          03. PROJECTS
          <span
            aria-hidden="true"
            className="
              absolute bottom-0 left-0 h-0.5 w-full bg-blue-500/70
              [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]
            "
          />
        </h2>
      </motion.header>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-20 lg:grid-cols-3"
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
});

export default Project;
