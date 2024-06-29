import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="rounded-lg shadow bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to={"/"} className="flex items-center space-x-3">
                    <span className='font-bold text-[3rem] leading-none text-white'>CYOP</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                    <li>
                        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="/subscribe" className="hover:underline me-4 md:me-6">Subscribes</Link>
                    </li>
                    <li>
                        <Link to="/support" className="hover:underline me-4 md:me-6">Support</Link>
                    </li>
                    <li>
                        <a href="https://github.com/CYOP-Free-Palastine" target='_blank' className="hover:underline">Github</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <span className="block text-sm sm:text-center text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">CYOP™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}