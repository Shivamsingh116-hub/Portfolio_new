import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <header className='min-w-screen z-50 fixed top-5 flex justify-center items-center'>
                <Navbar />
            </header>
            <main className='min-h-screen'
                role="main"
                aria-live="polite">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout