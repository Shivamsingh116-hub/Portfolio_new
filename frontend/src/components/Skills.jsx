import React, { forwardRef } from "react";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import FlutterDashOutlinedIcon from "@mui/icons-material/FlutterDashOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import { motion } from "framer-motion";

/* -------------------- DATA -------------------- */
const skillsData = [
  {
    id: "languages",
    title: "Programming Languages",
    items: ["Python", "HTML", "JavaScript"],
    icon: <TerminalOutlinedIcon fontSize="large" />,
  },
  {
    id: "frameworks",
    title: "Frameworks and Libraries",
    items: ["React", "Node.js", "Express.js", "Flask"],
    icon: <FlutterDashOutlinedIcon fontSize="large" />,
  },
  {
    id: "tools",
    title: "Tools and Technologies",
    items: ["Git", "GitHub", "MongoDB", "Postman"],
    icon: <ConstructionOutlinedIcon fontSize="large" />,
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
    scale: 0.85,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,

    },
  },
};

const iconVariants = {
  hidden: { scale: 0.8, rotate: -8 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  },
};

/* -------------------- COMPONENT -------------------- */
const Skills = forwardRef(function Skills(_, ref) {
  return (
    <section
      ref={ref}
      id="skills"
      aria-labelledby="skills-heading"
      className="
        bg-gradient-to-r from-blue-500/30 via-blue-500/10 to-transparent
        bg-surface flex flex-col items-center min-h-screen w-full p-10
      "
    >
      {/* -------- Heading -------- */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 mt-32"
      >
        <h2
          id="skills-heading"
          className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          02. ARSENAL
          <span
            aria-hidden="true"
            className="
              absolute bottom-0 left-0 h-0.5 w-full bg-blue-500/70
              [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]
            "
          />
        </h2>
      </motion.header>

      {/* -------- Cards -------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid gap-20 lg:grid-cols-3"
      >
        {skillsData.map(({ id, title, items, icon }) => (
          <motion.article
            key={id}
            variants={cardVariants}
            aria-labelledby={`${id}-heading`}
            className="
              bg-surface flex flex-col items-center
              p-10 md:p-14 rounded-xl
              transition-transform duration-300 hover:-translate-y-1
              [box-shadow:-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_20px_rgba(0,0,0,0.5)]
            "
          >
            {/* Icon */}
            <motion.span
              variants={iconVariants}
              className="
                relative p-5 rounded-lg text-blue-500
                [box-shadow:inset_-8px_-8px_10px_rgba(255,255,255,0.8),inset_8px_8px_8px_rgba(0,0,0,0.2)]
              "
              aria-hidden="true"
            >
              {icon}
            </motion.span>

            <header className="mt-6">
              <h3 id={`${id}-heading`} className="font-semibold">
                {title}
              </h3>
            </header>

            <ul className="mt-4 flex flex-wrap justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="
                    px-4 py-2 rounded-full text-sm tracking-wider bg-surface
                    [box-shadow:-4px_-4px_6px_rgba(255,255,255,0.8),4px_4px_6px_rgba(0,0,0,0.25)]
                    hover:[box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.2)]
                    hover:cursor-default
                  "
                >
                  <strong>{skill}</strong>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
});

export default Skills;
