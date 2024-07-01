import React from 'react'
import { Link } from 'react-router-dom'

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
                        portfolios.map((portfolio, index) => (
                            <div key={index}>
                                <h4>{portfolio.title}</h4>
                                <p>{portfolio.description}</p>
                            </div>
                        ))
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