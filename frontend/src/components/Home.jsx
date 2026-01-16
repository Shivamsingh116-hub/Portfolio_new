import React, { useState } from 'react'
import profileImg from '../assets/profileImg.webp'
import PhotoShow from '../cards/PhotoShow'
const Home = () => {
    const [imagePath, setImagePath] = useState('')
    const [isPhotoshow, setIsPhotoShow] = useState(false)
    return (
        <div className='bg-blue-50 min-h-screen md:flex-row flex flex-col justify-between min-w-screen pt-14 md:pd-24 lg:pt-36 px-2 md:px-8 lg:px-14'>
            <section className='flex flex-1 order-2 md:order-1 md:text-[1.2rem]
             lg:text-[1.4rem] text-[0.8rem] flex-col p-4 md:p-10 
             gap-2 md:w-1/2 w-full '>
                <h3
                    className='text-2xl md:self-start self-center mb-6 md:mb-0 font-medium text-gray-400'
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
                    className='mt-4 text-[1rem] md:text-[1.15rem] w-full md:w-full'
                    style={{ fontFamily: 'var(--font-primary)' }}
                >
                    Final-year B.Tech student focused on bridging real-world problems
                    with practical, technology-driven solutions.
                </p>
            </section>
            <section className='order-1 md:order-2  md:w-1/3 lg:w-1/2  lg:gap-4 flex justify-center md:justify-end xl:justify-center  w-full'>
                <div className='md:w-72 lg:w-96 lg:h-96 w-full md:h-72 h-full m-20 md:m-0 md:mt-20 xl:mt-5 overflow-hidden  
                rounded-full   
                shadow-[0_4px_16px_rgba(0,0,0,0.15)]
                bg-linear-to-br from-slate-200 to-blue-200 
                '>
                    <img
                        onClick={() => {
                            setImagePath(profileImg)
                            setIsPhotoShow(true)
                        }}
                        className='w-full h-full object-cover'
                        src={profileImg}
                        loading="eager"
                        decoding="async"
                        alt='img' />
                </div>
            </section>
            {isPhotoshow && <PhotoShow image={imagePath} setPhotoShow={setIsPhotoShow}/>}
        </div>
    )
}

export default Home