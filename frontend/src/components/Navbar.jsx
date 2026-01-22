import React from "react";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import "../style/Navbar.scss";

const Navbar = ({ onHome, onAbout, onSkills, onProject, onContact }) => {
  // Motion variants for the navbar
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 }, // start above viewport
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.nav
      id="navbar-component"
      aria-label="Main navigation"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <ul id="nav-items">
        <motion.li variants={itemVariants}>
          <button onClick={onHome} className="nav-item" aria-label="Home Page">
            <span aria-hidden="true">
              <HomeOutlinedIcon />
            </span>
            <span>Home</span>
          </button>
        </motion.li>

        <motion.li variants={itemVariants}>
          <button onClick={onAbout} className="nav-item" aria-label="About Page">
            <span aria-hidden="true">
              <InfoOutlinedIcon />
            </span>
            <span>About</span>
          </button>
        </motion.li>

        <motion.li variants={itemVariants}>
          <button onClick={onSkills} className="nav-item" aria-label="Skills Page">
            <span aria-hidden="true">
              <TerminalOutlinedIcon />
            </span>
            <span>Skills</span>
          </button>
        </motion.li>

        <motion.li variants={itemVariants}>
          <button onClick={onProject} className="nav-item" aria-label="Projects Page">
            <span aria-hidden="true">
              <DevicesOutlinedIcon />
            </span>
            <span>Projects</span>
          </button>
        </motion.li>

        <motion.li variants={itemVariants}>
          <button onClick={onContact} className="nav-item" aria-label="Contact page">
            <span aria-hidden="true">
              <ChatOutlinedIcon />
            </span>
            <span>Contact</span>
          </button>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
