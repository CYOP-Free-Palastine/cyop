import React from 'react'
import post from '@assets/cyop/banner-post.png'

export default function Hero() {
  return (
    <section className='container py-20'>
        <div className='flex items-center justify-between'>
            <div className='w-[750px]'>
                <h1 className='text-[3rem] lg:text-[4rem] text-white font-bold lg:mb-0 mb-2'>Create Your Portfolio Without Coding</h1>
                <p className='text-[1.2rem] lg:text-[1.3rem] text-slate-500 mb-5 lg:mb-3'>Project name: CYOP (Create Your Own Portfolio).
                You can create your portfolio with this project,</p>
                <button className='text-white bg-blue-600 py-2 px-5 rounded-xl'>Tutorial &#x2192;</button>
            </div>
            <div className='w-[280px] xl:block hidden h-[380px]'>
                <img className='w-full object-cover h-full rotate-12 rounded-2xl' src={post} alt="free palastine" />
            </div>
        </div>
    </section>
  )
}