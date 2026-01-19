import React from 'react';

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-slate-900 text-slate-300 px-6 py-10"
    >
      {/* Main footer container */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between">

        {/* Brand / Identity */}
        <section aria-labelledby="footer-about">
          <h2 id="footer-about" className="text-lg font-semibold text-white">
            Shivam Singh
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
            AI-Native Full-Stack Developer focused on building scalable,
            real-world solutions using modern web technologies.
          </p>
        </section>

        {/* Navigation */}
        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="text-lg font-semibold text-white">
            Navigation
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/skills" className="hover:underline">Skills</a></li>
            <li><a href="/project" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Social / Contact */}
        <section aria-labelledby="footer-connect">
          <h2 id="footer-connect" className="text-lg font-semibold text-white">
            Connect
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a
                href="https://github.com/Shivamsingh116-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/shivamsingh116"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="solankishivam@email.com">Email</a>
            </li>
          </ul>
        </section>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-slate-700 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Shivam Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
