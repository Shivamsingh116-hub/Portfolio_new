import React from 'react';

const projectsData = [
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description:
      'A full-stack system with authentication, role-based access, and secure patient data handling.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    id: 'file-upload',
    title: 'Secure File Upload System',
    description:
      'Authenticated file upload and access across devices using MongoDB storage.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    description:
      'A personal portfolio website built with accessibility, SEO, and modern UI principles.',
    tech: ['React', 'Tailwind CSS'],
  },
];

const Project = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center
       lg:bg-gradient-to-r bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent pb-10" 
    >
      <section
        aria-labelledby="projects-heading"
        className="w-[85%] md:w-[75%] mt-28 py-10 px-6 lg:px-16
        bg-slate-50 rounded-xl
        [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.35),8px_8px_16px_rgba(255,255,255,0.9)]
        flex flex-col gap-10"
      >
        {/* Section Header */}
        <header className="text-center">
          <h2
            id="projects-heading"
            className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
           "
          >
            03. PROJECTS
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-2 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 "
            ></span>
          </h2>
          <p className="mt-4 text-gray-600">
            Practical, real-world applications built with scalable technologies
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(({ id, title, description, tech }) => (
            <article
              key={id}
              aria-labelledby={`${id}-title`}
              className="rounded-xl p-6 text-center
              bg-white
              [box-shadow:-6px_-6px_12px_rgba(0,0,0,0.25),6px_6px_12px_rgba(255,255,255,0.9)]
              transition-transform duration-300 hover:-translate-y-1"
            >
              <header>
                <h3
                  id={`${id}-title`}
                  className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
                >
                  {title}
                </h3>
              </header>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {description}
              </p>

              <ul
                role="list"
                aria-label="Technologies used"
                className="mt-4 flex flex-wrap justify-center gap-2 text-sm"
              >
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-indigo-100 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
