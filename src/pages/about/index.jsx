import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className='container'>
        <h1 className='text-4xl font-bold mb-5'>About the project</h1>
        <p className='text-secondary_card_color mb-5'>This project created by Ammoriddin (khami-dev). The goal of this project is to help people <span class="font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">create great portfolios</span>, you just enter your information and the site itself will create a portfolio of your choice, of course <span class="font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">for free</span>, but we also have paid subscriptions, let's talk about subscriptions and their prices. <Link className='text-blue-700 font-[600] hover:underline' to={"/subscribes"}>Subscribes</Link></p>
        <h1 className='text-4xl font-bold mb-5'>How to create a portfolio</h1>
        <p className='text-secondary_card_color'>First of all you have to register then login to your account and after logging in, go to the <Link className='text-blue-700 font-[600] hover:underline' to={"/"}>tutorial</Link> section to view the <Link className='text-blue-700 font-[600] hover:underline' to={"/"}>tutorial</Link></p>
        <p className='text-secondary_card_color mb-5'>If you want to support us, you can donate to us <Link className='text-blue-700 font-[600] hover:underline' to={"/"}>Donate</Link></p>
        <h1 className='text-4xl font-bold mb-5'>About the Project creator</h1>
        <p className='text-secondary_card_color'>Hello I'm creater of the project, and I'm from Uzbekistan. I started creating this project on June 28, 2024 and I'm still creating. If you want to know more about me you can find me on <a className='text-blue-700 font-[600] hover:underline' href='https://github.com/ammoriddin' target='_blank'>github</a>. I believe you will like this project and subscribe to this project's <a className='text-blue-700 font-[600] hover:underline' href='https://github.com/CYOP-Free-Palastine' target='_blank'>github page</a> thanks in advance</p>
    </section>
  )
}