import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profileImg.webp";
import PhotoShow from "../cards/PhotoShow";

/* -------------------- VARIANTS -------------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* -------------------- COMPONENT -------------------- */
const Home = forwardRef(function Home(_, ref) {
  const [isPhotoShow, setIsPhotoShow] = useState(false);

  return (
    <motion.main
      ref={ref}
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-r from-blue-500/30 via-blue-500/10 to-transparent
        px-4 pt-2 flex flex-col items-center justify-between gap-12
        sm:px-8 lg:flex-row lg:px-24
      "
    >
      {/* ---------------- Left Content ---------------- */}
      <section
        aria-labelledby="home-heading"
        className="
          order-2 flex flex-1 flex-col text-center
          lg:order-1 lg:justify-center lg:text-left
        "
      >
        <motion.h1
          variants={textVariants}
          id="home-heading"
          className="mb-4 text-lg font-medium text-gray-400 sm:text-xl"
        >
          AI-Native Full Stack Developer
        </motion.h1>

        <motion.div variants={textVariants} aria-hidden="true">
          <p className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            I Code
          </p>

          <p
            className="flex justify-center gap-3 text-4xl font-bold leading-tight
              sm:text-5xl md:text-6xl lg:justify-start"
          >
            <span className="text-blue-500">Intelligence</span>
            <span>Into</span>
          </p>

          <p className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Solutions.
          </p>
        </motion.div>

        <motion.p
          variants={textVariants}
          className="
            mx-auto mt-6 max-w-xl text-base text-gray-700
            sm:text-lg md:mx-0 md:text-xl
          "
        >
          Final-year B.Tech student focused on bridging real-world problems
          with practical, technology-driven solutions.
        </motion.p>

        <motion.a
          variants={textVariants}
          href="/ShivamResume1.pdf"
          download
          aria-label="Download Shivam Singh resume"
          className="
            mt-6 inline-block rounded-lg
            bg-gradient-to-r from-blue-500 to-indigo-500
            px-6 py-3 text-white font-semibold
            shadow-lg shadow-blue-400/30
            transition-all duration-300
            hover:scale-105 hover:shadow-xl
            lg:mt-3 lg:py-2
          "
        >
          Download Resume
        </motion.a>
      </section>

      {/* ---------------- Right Image ---------------- */}
      <section
        className="
          order-1 flex justify-center pt-28
          lg:order-2 lg:flex-1 lg:pt-0 xl:justify-center
        "
      >
        <motion.button
          variants={imageVariants}
          type="button"
          onClick={() => setIsPhotoShow(true)}
          aria-label="Open profile photo"
          className="
            h-56 z-40 w-56 cursor-pointer overflow-hidden rounded-full
            bg-gradient-to-br from-slate-200 to-blue-200 shadow-lg
            sm:h-64 sm:w-64 lg:h-96 lg:w-96
          "
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={profileImg}
            alt="Shivam Singh AI-Native Full Stack Developer profile photo"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </motion.button>
      </section>

      {/* ---------------- Photo Modal ---------------- */}
      <AnimatePresence>
        {isPhotoShow && (
          <PhotoShow
            image={profileImg}
            setPhotoShow={setIsPhotoShow}
          />
        )}
      </AnimatePresence>
    </motion.main>
  );
});

export default Home;
