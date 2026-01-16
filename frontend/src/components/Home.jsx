import React from 'react'
import profileImg from '../assets/profileImg.webp'
const Home = () => {
    return (
        <div className='bg-blue-50
 min-h-screen flex min-w-screen pt-24 px-14'>
            <section className='flex  text-[1.4rem] flex-col p-10
             gap-2 md:w-1/2 w-full '>
                <h3
                    className='text-2xl font-medium text-gray-400'
                    style={{ fontFamily: 'var(--font-primary)' }}
                >AI-Native Full Stack Devloper
                </h3>
                <h1 className='font-bold'>
                    I Code
                </h1>
                <h1 className='flex gap-3 font-bold'>
                    <span className='text-blue-500'>Intelligence</span>
                    <p>Into</p>
                </h1>
                <h1 className='font-bold'>
                    Solutions.
                </h1>
                <p
                    className='mt-4 text-[1.15rem] w-[70%]'
                    style={{ fontFamily: 'var(--font-primary)' }}
                >
                    Final-year B.Tech student focused on bridging real-world problems
                    with practical, technology-driven solutions.
                </p>
            </section>
            <section className=' md:w-1/2 flex justify-center  w-full'>
                <div className='md:w-96 w-40 md:h-96 h-40  overflow-hidden  
                rounded-full  mt-20 
                shadow-[0_4px_16px_rgba(0,0,0,0.15)]
                bg-linear-to-br from-slate-200 to-blue-200 
                '>
                    <img
                        className='w-full h-full object-cover'
                        src={profileImg}
                        loading="eager"
                        decoding="async"
                        alt='img' />
                </div>
            </section>
        </div>
    )
}

export default Home