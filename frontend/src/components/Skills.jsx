import React from 'react';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const skillsData = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['Python', 'HTML', 'JavaScript'],
    icon: <TerminalOutlinedIcon />,
  },
  {
    id: 'frameworks',
    title: 'Frameworks and Libraries',
    items: ['React', 'Node.js', 'Express.js', 'Flask'],
    icon: <FlutterDashOutlinedIcon />,
  },
  {
    id: 'tools',
    title: 'Tools and Technologies',
    items: ['Git', 'GitHub', 'MongoDB', 'Postman'],
    icon: <ConstructionOutlinedIcon />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className=" lg:bg-gradient-to-r bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent
      bg-surface flex flex-col items-center min-h-screen w-full p-10"
    >
      <header className="mb-12 mt-32">
        <h2 id="skills-heading" className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          02. ARSENAL
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0
              [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]
              bg-blue-500/70 h-0.5 w-full"
          ></span>
        </h2>
      </header>

      <div className="grid gap-20 lg:grid-cols-3">
        {skillsData.map(({ id, title, items, icon }) => (
          <article
            key={id}
            aria-labelledby={`${id}-heading`}
            className="
              bg-surface
              flex flex-col items-center
              p-10 md:p-14 rounded-xl
              transition-transform duration-300 hover:-translate-y-1
              [box-shadow:-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_20px_rgba(0,0,0,0.5)]
            "
          >
            {/* Icon */}
            <span
              aria-hidden="true"
              className="
            relative p-5 rounded-lg
            text-blue-500
            [box-shadow:inset_-8px_-8px_10px_rgba(255,255,255,0.8),inset_8px_8px_8px_rgba(0,0,0,0.2)]
          "
            >
              {icon}
            </span>

            <header className="mt-6">
              <h3 id={`${id}-heading`} className="font-semibold">
                {title}
              </h3>
            </header>

            <ul className="mt-4 flex flex-wrap bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent justify-center gap-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="
                    px-4 py-2 rounded-full text-sm
                    bg-surface tracking-wider
                    [box-shadow:-4px_-4px_6px_rgba(255,255,255,0.8),4px_4px_6px_rgba(0,0,0,0.25)]
                    hover:[box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.2)]
                    hover:cursor-default
                  "
                >
                  <strong>{skill}</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
