import React, { Suspense, useRef } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

const Layout = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header className='min-w-screen z-50 fixed top-5 flex justify-center items-center'>
                <Navbar
                    onHome={() => { scrollTo(homeRef) }}
                    onAbout={() => { scrollTo(aboutRef) }}
                    onSkills={() => { scrollTo(skillsRef) }}
                    onProject={() => { scrollTo(projectRef) }}
                    onContact={() => { scrollTo(contactRef) }} />
            </header>
            <main className='min-h-screen'>
                <Home ref={homeRef} />
                <About ref={aboutRef} />
                <Skills ref={skillsRef} />
                <Project ref={projectRef} />
                <Contact ref={contactRef} />
            </main >
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout