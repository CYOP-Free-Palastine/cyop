import React from 'react'

export default function Tutorial() {
  return (
    <section className='container py-16'>
        <h1 className='text-[3rem] mb-3 font-[500]'>Tutorial</h1>
        <iframe className='w-full aspect-video rounded-3xl' src="https://www.youtube.com/embed/NoOQtvJ8RoY?si=LXf7pTMxAUzWKukr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
  )
}