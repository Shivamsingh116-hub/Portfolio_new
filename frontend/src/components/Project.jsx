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
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="
        lg:bg-gradient-to-r bg-gradient-to-b
        from-blue-500/30 via-blue-500/10 to-transparent
        bg-surface min-h-screen w-full
        flex flex-col items-center p-10
      "
    >
      {/* Header */}
      <header className="mb-12 mt-24  md:mt-32">
        <h2
          id="projects-heading"
          className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          03. PROJECTS
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

      {/* Projects Grid */}
      <div className="grid gap-20 lg:grid-cols-3">
        {projectsData.map(({ id, title, description, tech }) => (
          <article
            key={id}
            aria-labelledby={`${id}-title`}
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
                id={`${id}-title`}
                className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
              >
                {title}
              </h3>
            </header>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-sm">
              {description}
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {tech.map((item) => (
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
