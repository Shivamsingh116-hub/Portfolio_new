import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        lg:bg-gradient-to-r bg-gradient-to-b
        from-blue-500/30 via-blue-500/10 to-transparent
        bg-surface min-h-screen w-full
        flex items-center justify-center p-10
      "
    >
      <article
        className="
          w-full max-w-5xl mt-24
          bg-surface rounded-xl
          p-6 md:p-14
          [box-shadow:-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_20px_rgba(0,0,0,0.5)]
        "
      >
        {/* Header */}
        <header className="text-center mb-12">
          <h2
            id="contact-heading"
            className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            04. CONTACT
            <span
              aria-hidden="true"
              className="
                absolute bottom-0 left-0 h-0.5 w-full
                bg-blue-500/70
                [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]
              "
            />
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a project or opportunity in mind? Let’s build something solid.
          </p>
        </header>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <section>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Contact Details
            </h3>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              I’m open to internships, full-time roles, and freelance projects.
              Reach out directly—no forms lost in limbo.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <span className="font-medium text-gray-700">Email:</span>{' '}
                <a
                  href="mailto:solankishivam116@email.com"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent hover:underline"
                >
                  solankishivam116@email.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-700">Location:</span>{' '}
                India
              </li>
            </ul>
          </section>

          {/* Form */}
          <section>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form className="mt-6 flex flex-col gap-5">
              {['Name', 'Email'].map((label) => (
                <label key={label} className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="
                      peer w-full h-12 rounded-md
                      bg-surface px-4
                      focus:outline-none
                      bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
                      [box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.25)]
                    "
                  />
                  <span
                    className="
                      pointer-events-none absolute left-4 top-1/2 -translate-y-1/2
                      text-sm text-blue-500 transition-all
                      peer-focus:top-0 peer-focus:text-xs peer-focus:px-2 peer-focus:bg-white peer-focus:rounded-lg
                      peer-valid:top-0 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-white peer-valid:rounded-lg
                    "
                  >
                    {label}
                  </span>
                </label>
              ))}

              <label className="relative">
                <textarea
                  rows="4"
                  required
                  placeholder=" "
                  className="
                    peer w-full rounded-md resize-none
                    bg-surface px-4 pt-4
                    focus:outline-none
                    bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
                    [box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.25)]
                  "
                />
                <span
                  className="
                    pointer-events-none absolute left-4 top-4
                    text-sm text-blue-400 transition-all 
                    peer-focus:-top-2 peer-focus:text-xs peer-focus:px-2 peer-focus:bg-white peer-focus:rounded-lg
                    peer-valid:-top-2 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-white peer-valid:rounded-lg
                  "
                >
                  Message
                </span>
              </label>

              <button
                type="submit"
                className="
                  self-start mt-2 px-6 py-2 rounded-md
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  text-white text-sm font-medium
                  [box-shadow:-4px_-4px_6px_rgba(255,255,255,0.3),4px_4px_8px_rgba(0,0,0,0.3)]
                  hover:opacity-90 transition
                "
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </article>
    </section>
  );
};

export default Contact;
