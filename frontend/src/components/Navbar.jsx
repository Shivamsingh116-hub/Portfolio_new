import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import '../style/Navbar.scss'
const Navbar = () => {
    return (
        <div id='navbar-component' >
            <ul id='nav-items'>
                <li>
                    <Link to='/'>
                        <div>
                            <span><HomeOutlinedIcon /></span>
                            <p>Home</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to='/about'>
                        <div>
                            <span><InfoOutlinedIcon /></span>
                            <p>About</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/skills'>
                        <div>
                            <span><BuildCircleOutlinedIcon /></span>
                            <p>Skills</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/project'>
                        <div>
                            <span><DevicesOutlinedIcon /></span>
                            <p>Project</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <div>
                            <span><ChatOutlinedIcon /></span>
                            <p>Contact</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar