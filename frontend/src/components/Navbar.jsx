import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import '../style/Navbar.scss'

const Navbar = () => {
  return (
    <nav id="navbar-component" aria-label="Main navigation">
      <ul id="nav-items">
        <li>
          <Link className='nav-item' to="/" aria-label="Home page">
            <span aria-hidden="true"><HomeOutlinedIcon /></span>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link className='nav-item' to="/about" aria-label="About page">
            <span aria-hidden="true"><InfoOutlinedIcon /></span>
            <span>About</span>
          </Link>
        </li>

        <li>
          <Link className='nav-item' to="/skills" aria-label="Skills page">
            <span aria-hidden="true"><TerminalOutlinedIcon /></span>
            <span>Skills</span>
          </Link>
        </li>

        <li>
          <Link className='nav-item' to="/project" aria-label="Projects page">
            <span aria-hidden="true"><DevicesOutlinedIcon /></span>
            <span>Projects</span>
          </Link>
        </li>

        <li>
          <Link className='nav-item' to="/contact" aria-label="Contact page">
            <span aria-hidden="true"><ChatOutlinedIcon /></span>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
