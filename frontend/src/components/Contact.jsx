import React from 'react';

const Contact = () => {
  return (
    <main className="min-h-screen
      lg:bg-gradient-to-r bg-gradient-to-b
      from-blue-500/30 via-blue-500/10 to-transparent
      flex items-center justify-center pb-10"
    >
      <section
        aria-labelledby="contact-heading"
        className="w-[90%] md:w-[70%] max-w-5xl
        rounded-lg px-6 py-8 md:px-14 mt-24
        bg-white/70 backdrop-blur-sm"
      >
        {/* Header */}
        <header className="text-center">
          <h2
            id="contact-heading"
            className="relative text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            04. Contact
            <span
              aria-hidden="true"
              className="absolute -bottom-2 left-0
              bg-gradient-to-r from-blue-500 to-indigo-500 h-0.5 w-full"
            ></span>
          </h2>
          <p className="mt-4 text-gray-700">
            Have a project or opportunity in mind? Let’s talk.
          </p>
        </header>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Info */}
          <section aria-labelledby="contact-info">
            <h3
              id="contact-info"
              className="text-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
            >
              Contact Details
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              I’m open to internships, full-time roles, and freelance projects.
              Reach out via email or send a message directly.
            </p>

            <ul role="list" className="mt-4 space-y-2 text-sm bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              <li>
                <span className="font-medium text-gray-700">Email:</span>{' '}
                <a
                  href="mailto:your@email.com"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent hover:underline"
                >
                  solankishivam116@email.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-700">Location:</span> India
              </li>
            </ul>
          </section>

          {/* Form */}
          <section aria-labelledby="contact-form">
            <h3
              id="contact-form"
              className="text-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
            >
              Send a Message
            </h3>

            <form className="mt-4 flex flex-col gap-4">
              <label className="relative block w-full">
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="
      peer w-full h-12 rounded-md
      border border-gray-500
      bg-transparent px-3 pt-5 pb-1
      bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
      focus:outline-none focus:border-blue-500
    "
                />

                <span
                  className="
      pointer-events-none absolute left-3 top-1/2
      -translate-y-1/2
      text-sm text-blue-500
      transition-all duration-200
      peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
       peer-focus:bg-white peer-focus:rounded-lg peer-focus:px-2 
      peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-500
       peer-valid:bg-white peer-valid:rounded-lg peer-valid:px-2 
    "
                >
                  Name
                </span>
              </label>

              <label className="relative block w-full">
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="
      peer w-full h-12 rounded-md
      border border-gray-500
      bg-transparent px-3 pt-5 pb-1
      bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
      focus:outline-none focus:border-blue-500
    "
                />

                <span
                  className="
      pointer-events-none absolute left-3 top-1/2
      -translate-y-1/2
      text-sm text-blue-500
      transition-all duration-200
      peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
       peer-focus:bg-white peer-focus:rounded-lg peer-focus:px-2 
      peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-500
       peer-valid:bg-white peer-valid:rounded-lg peer-valid:px-2 
    "
                >
                  Email
                </span>
              </label>

              <label className="relative block w-full">
                <textarea
                  rows="4"
                  required
                  placeholder=" "
                  className="
      peer w-full rounded-md
      border border-gray-500
      bg-transparent
      px-3 pt-6 pb-2
      bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent resize-none
      focus:outline-none focus:border-blue-500
    "
                ></textarea>

                <span
                  className="
      pointer-events-none absolute left-3 top-4
      text-sm text-blue-400
      transition-all duration-200
      peer-focus:-top-1.5 peer-focus:text-xs peer-focus:text-blue-500
      peer-focus:bg-white peer-focus:px-2 peer-focus:rounded-lg
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
      peer-placeholder-shown:text-blue-400
      peer-valid:-top-1.5 peer-valid:text-xs peer-valid:text-blue-500
      peer-valid:bg-white peer-valid:px-2 peer-valid:rounded-lg
    "
                >
                  Message
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 self-start rounded-md
                bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2
                text-white text-sm font-medium
                hover:bg-blue-600 hover:cursor-pointer transition"
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Contact;
