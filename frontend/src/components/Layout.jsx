import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header
                className='flex justify-center items-center w-full h-10'>
                <Navbar />
            </header>
            <main className='min-h-screen'
                role="main"
                aria-live="polite">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout