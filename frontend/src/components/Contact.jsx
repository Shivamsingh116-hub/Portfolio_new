import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const apiUrl = import.meta.env.VITE_API_URL;

const Contact = ({ ref: sectionRef }) => {
  const [formData, setFormData] = useState({
    Name: "",
    ContactNo: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/form_data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit form");

      setFormData({ Name: "", ContactNo: "", Message: "" });
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  // -------------------- Framer Motion Setup --------------------
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.6 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
    exit: { opacity: 0, y: -50, scale: 0.7, transition: { duration: 0.4 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.4 } },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gradient-to-r from-blue-500/30 via-blue-500/10 
      to-transparent bg-surface min-h-screen w-full flex items-center justify-center p-10 pb-20"
    >
      
      <motion.article
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        className="w-full max-w-6xl mt-12 bg-surface rounded-xl p-6 md:p-10 [box-shadow:-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_20px_rgba(0,0,0,0.5)]"
      >
        {/* Header */}
        <motion.header
          variants={childVariants}
          className="text-center mb-8"
        >
          <h2
            id="contact-heading"
            className="relative text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            04. CONTACT
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500/70 [box-shadow:-8px_-8px_16px_rgba(0,0,0,0.4),8px_8px_16px_rgba(255,255,255,0.8)]"
            />
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a project or opportunity in mind? Let’s build something solid.
          </p>
        </motion.header>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <motion.section variants={childVariants}>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Contact Details
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              I’m open to internships, full-time roles, and freelance projects.
              Reach out directly—no forms lost in limbo.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <span className="font-medium text-gray-700">Email:</span>{" "}
                <a
                  href="mailto:solankishivam116@email.com"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent hover:underline"
                >
                  solankishivam116@email.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-700">Location:</span> India
              </li>
            </ul>
          </motion.section>

          {/* Form */}
          <motion.section variants={childVariants}>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              {[
                { label: "Name", key: "Name", type: "text" },
                { label: "Contact No", key: "ContactNo", type: "tel" },
              ].map(({ label, key, type }) => (
                <motion.label
                  key={key}
                  variants={childVariants}
                  className="relative"
                >
                  <input
                    type={type}
                    required
                    placeholder=" "
                    value={formData[key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    className="
                      peer w-full h-12 rounded-md bg-surface px-4
                      focus:outline-none
                      bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
                      [box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.25)]
                    "
                  />
                  <span className="
                      pointer-events-none absolute left-4 top-1/2 -translate-y-1/2
                      text-sm text-blue-500 transition-all
                      peer-focus:top-0 peer-focus:text-xs peer-focus:px-2 peer-focus:bg-white peer-focus:rounded-lg
                      peer-valid:top-0 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-white peer-valid:rounded-lg
                    ">
                    {label}
                  </span>
                </motion.label>
              ))}

              <motion.label variants={childVariants} className="relative">
                <textarea
                  rows="4"
                  required
                  placeholder=" "
                  value={formData["Message"]}
                  onChange={(e) =>
                    setFormData({ ...formData, Message: e.target.value })
                  }
                  className="
                    peer w-full rounded-md resize-none
                    bg-surface px-4 pt-4
                    focus:outline-none
                    bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent
                    [box-shadow:inset_-4px_-4px_6px_rgba(255,255,255,0.8),inset_4px_4px_6px_rgba(0,0,0,0.25)]
                  "
                />
                <span className="
                    pointer-events-none absolute left-4 top-4
                    text-sm text-blue-400 transition-all
                    peer-focus:-top-2 peer-focus:text-xs peer-focus:px-2 peer-focus:bg-white peer-focus:rounded-lg
                    peer-valid:-top-2 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-white peer-valid:rounded-lg
                  ">
                  Message
                </span>
              </motion.label>

              <motion.button
                variants={childVariants}
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
              </motion.button>
            </form>
          </motion.section>
        </div>
      </motion.article>
    </section>
  );
};

export default Contact;
