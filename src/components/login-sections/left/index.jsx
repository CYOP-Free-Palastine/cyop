import React from 'react'
import google from '@assets/icons/google.png'
import { Link } from 'react-router-dom'

export default function Left() {
  return (
    <div className='p-6 bg-card_bg rounded-xl md:min-w-[500px]'>
        <h2 className='font-bold text-[1.8rem] mb-5'>Log in</h2>
        <button className='flex justify-center items-center gap-2 py-2 w-full px-5 rounded-xl border-[1px] border-solid font-[500] border-slate-500 mb-5'>
            <div className='w-6 h-6'>
                <img className='w-full h-full' src={google} alt="" />
            </div>
            Login in with Google
        </button>
        <div className='flex text-secondary_card_color font-[500] gap-6 items-center mb-5'>
            <span className='w-[50%] h-[2px] bg-secondary_card_color/50'></span>
            <p>or</p>
            <span className='w-[50%] h-[2px] bg-secondary_card_color/50'></span>
        </div>
        <form class="space-y-4 md:space-y-6" action="#">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" name="email" id="email" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" required="" />
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="remember" class="text-gray-500">Remember me</label>
                    </div>
                </div>
                <Link to={"/forgot-password"} class="text-sm font-medium text-primaryBlue hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" class="w-full text-white bg-primaryBlue hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700">Log in</button>
            <p class="text-sm font-light text-gray-400">
                Don’t have an account yet? <Link to={"/register"} class="font-medium text-primaryBlue hover:underline text-primary-500">Sign up</Link>
            </p>
            </form>
    </div>
  )
}