import React from 'react';
import { motion } from 'framer-motion'
const stats = [
  { value: '5+', label: 'PROJECTS BUILT' },
  { value: '7.0+', label: 'CGPA' },
  { value: 'MERN', label: 'CERTIFIED' },
];

const About = ({ ref }) => {
  return (
    <motion.section

      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="
        max-h-screen w-full
        flex  justify-center items-center flex-col
        bg-gradient-to-r 
        from-blue-500/30 via-blue-500/10 to-transparent
        bg-surface p-10
      "
    >
      <header className="mb-16 mt-14 ">
        <h2
          id="about-heading"
          className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          01. IDENTITY
          <span
            aria-hidden="true"
            className="
                absolute bottom-0 left-0 h-0.5 w-full
                bg-blue-500/70
                [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]
              "
          />
        </h2>
      </header>
      <motion.article
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="
          w-full md:max-w-[90%] 
          bg-surface rounded-xl
          p-8 md:p-14
          flex flex-col items-center text-center
          [box-shadow:-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_20px_rgba(0,0,0,0.5)]
        "
      >


        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-600">
          Full-stack developer skilled in the MERN stack—MongoDB, Express.js,
          React, and Node.js—with working experience in Flask for building
          lightweight backend services and APIs. Strong focus on frontend
          engineering, backend integration, database design, and preparing to
          integrate AI capabilities into modern web applications. I learn by
          building, refining, and scaling real-world projects.
        </p>

        {/* Stats */}
        <ul
          role="list"
          className="
            mt-12 grid gap-6
            md:grid-cols-3 w-full max-w-3xl
          "
        >
          {stats.map(({ value, label }) => (
            <li
              key={label}
              className="
                bg-surface rounded-xl p-6
                flex flex-col items-center justify-center
                  transition-transform duration-300 hover:-translate-y-1
                [box-shadow:-6px_-6px_10px_rgba(255,255,255,0.8),6px_6px_12px_rgba(0,0,0,0.25)]
              "
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {value}
              </p>
              <p className="mt-2 text-xs tracking-widest text-gray-600">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </motion.article>
    </motion.section>
  );
};

export default About;
