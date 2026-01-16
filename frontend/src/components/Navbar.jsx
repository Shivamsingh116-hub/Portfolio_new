import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-transparent'>
            <ul className='flex gap-3'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/experience'>Experience</Link></li>
                <li><Link to='/project'>Project</Link></li>
            </ul>
        </div>
    )
}

export default Navbar