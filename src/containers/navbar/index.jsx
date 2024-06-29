import { navbarLinks } from '@containers/links/inde';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function NavbarSection() {
  const path = useLocation()
  const [navbar, setNavbar] = useState(false)

  console.log(path) ;

  return (
    <nav className="bg-gray-900 font-montserrat sticky w-full z-20 top-0 mb-10 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <Link to={"/"} className="flex items-center space-x-3">
        <span className='font-bold text-[3rem] leading-none text-white'>C</span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button type="button" className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700">Get started</button>
          <button onClick={() => setNavbar(!navbar)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700" aria-controls="navbar-sticky" aria-expanded="false">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
      </div>
      <div className={`items-center justify-between ${navbar === true ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
          {
            navbarLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={`${path.pathname === item.path ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "block py-2 px-3 rounded md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"}`}>{item.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      </div>
    </nav>
  )
}