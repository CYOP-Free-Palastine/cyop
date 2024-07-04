import React from 'react'
import { Link } from 'react-router-dom'
import img from '@assets/portfolios/tfpw.png'

export default function ProfileSection({user, portfolios}) {
  return (
    <div>
        <div className='mb-8'>
            <h2 className='font-bold text-3xl mb-2'>Welcome {user.user_name}</h2>
            <p className='font-bold text-secondary_card_color'>{user.email}</p>
        </div>

        <div className='bg-card_bg rounded-xl p-5'>
            <h3 className='text-xl font-[600] mb-7'>Your portfolios: </h3>
            <div>
                {
                    portfolios.length > 0 ? (
                        <div className='flex flex-wrap justify-evenly'>
                            {
                                portfolios.map((portfolio, index) => (
                                    <div key={index} className="w-full flex flex-col  max-w-xs border rounded-lg shadow bg-gray-800 border-gray-700">
                                        <Link to={`/templates/${portfolio.portfolioName}/${portfolio.id}`}>
                                            <img className="rounded-t-lg mb-5" src={img} alt="product image" />
                                        </Link>
                                        <div className="px-5 pb-0">
                                            <Link to={`/templates/${portfolio.portfolioName}/${portfolio.id}`}>
                                                <h5 className="text-xl font-semibold tracking-tight text-white">{portfolio.portfolioName}</h5>
                                            </Link>
                                            <div className="flex items-center mt-2.5 mb-5">
                                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                    <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3">4.0</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-end items-start flex-grow-[1] pt-1 p-5">
                                            <Link to={`/templates/${portfolio.portfolioName}/${portfolio.id}`} class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">see my portfolio</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <>
                            <span class="bg-yellow-100 text-yellow-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">You don't have portfolio let's create it</span>
                            <Link className='text-blue-600 font-[500]' to={"/templaets"}>CREATE PORTFOLIO</Link>
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}