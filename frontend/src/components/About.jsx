import React from 'react'

const About = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center
    lg:bg-gradient-to-r bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent"
    >

      <section
        aria-labelledby="about-heading"
        className="w-[80%] md:w-[70%] mt-8 py-8 md:py-10 px-6 lg:px-16
        [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]
        bg-slate-50 rounded-xl flex flex-col items-center text-center"
      >

        <header>
          <h1
            id="about-heading"
            className="relative not-md:text-3xl
             bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"          >
            01. IDENTITY
            <span
              aria-hidden="true"
              className="absolute not-md:bottom-0 bottom-2 left-0
              bg-gradient-to-r from-blue-500 to-indigo-500  h-0.5 w-full"
            ></span>
          </h1>
        </header>

        <p className="text-sm md:text-lg leading-relaxed tracking-wider mt-5">
          Full stack developer skilled in the MERN stack, including MongoDB,
          Express.js, React, and Node.js. Able to work with Flask for building
          simple backend services and APIs. Focused on frontend development,
          backend integration, database design, and preparing to integrate AI
          technologies into web applications. Continuously learning through
          hands-on projects to build scalable and modern digital solutions.
        </p>

        <ul
          role="list"
          className="flex not-md:flex-col gap-3 md:gap-10 mt-3 md:mt-10
          w-full justify-center"
        >
          <li>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              3+
            </p>
            <p>PROJECTS</p>
          </li>

          <li>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              7.0+
            </p>
            <p>CGPA</p>
          </li>

          <li>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              M E R N
            </p>
            <p>CERTIFICATE</p>
          </li>
        </ul>

      </section>
    </main>
  )
}

export default About
