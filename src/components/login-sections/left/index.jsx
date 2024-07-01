import React, { useState, useEffect } from 'react'
import google from '@assets/icons/google.png'
import { Link } from 'react-router-dom'
import { handleLogin } from '@hooks/useLogin/useLogin';

export default function Left() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className='p-6 bg-card_bg rounded-xl md:min-w-[500px]'>
      <h2 className='font-bold text-[1.8rem] mb-5'>Log in</h2>
      <button className='flex justify-center items-center gap-2 py-2 w-full px-5 rounded-xl border-[1px] border-solid font-[500] border-slate-500 mb-5'>
        <div className='w-6 h-6'>
          <img className='w-full h-full' src={google} alt="Google" />
        </div>
        Log in with Google
      </button>
      <div className='flex text-secondary_card_color font-[500] gap-6 items-center mb-5'>
        <span className='w-[50%] h-[2px] bg-secondary_card_color/50'></span>
        <p>or</p>
        <span className='w-[50%] h-[2px] bg-secondary_card_color/50'></span>
      </div>
      <form onSubmit={(e) => handleLogin(e, setIsLoading, loginData)} className="space-y-4 md:space-y-6" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={loginData.email} 
            onChange={handleChange} 
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" 
            placeholder="name@company.com" 
            required 
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={loginData.password} 
            onChange={handleChange} 
            placeholder="••••••••" 
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" 
            required 
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="rememberMe" 
                name="rememberMe" 
                type="checkbox" 
                checked={loginData.rememberMe} 
                onChange={handleChange} 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="rememberMe" className="text-gray-500">Remember me</label>
            </div>
          </div>
          <Link to={"/forgot-password"} className="text-sm font-medium text-primaryBlue hover:underline">Forgot password?</Link>
        </div>
        <button type="submit" className="w-full text-white bg-primaryBlue hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700">{isLoading ? "Loading..." : "Log in"}</button>
        <p className="text-sm font-light text-gray-400">
          Don’t have an account yet? <Link to={"/register"} className="font-medium text-primaryBlue hover:underline text-primary-500">Sign up</Link>
        </p>
      </form>
    </div>
  )
}