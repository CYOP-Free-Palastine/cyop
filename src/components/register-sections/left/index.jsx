import React, { useState } from 'react';
import google from '@assets/icons/google.png';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '@api/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Left() {
    const [isLoading, setIsLoading] = useState(false);
    const [registerData, setRegisterData] = useState({
        user_name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        if (registerData.password !== registerData.confirm_password) {
            toast.warning("Passwords do not match", {
                position: "top-right"
            });
            setIsLoading(false);
            return;
        }
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password);
            const user = userCredential.user;
            
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    user_name: registerData.user_name,
                    email: user.email,
                });

                await sendEmailVerification(user);
                toast.success("User registered successfully! Please check your email to verify your account.", {
                    position: "top-right"
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "top-right"
            });
            setIsLoading(false);
        }
    };

    return (
        <div className='p-6 bg-card_bg rounded-xl md:min-w-[500px]'>
            <h2 className='font-bold text-[1.8rem] mb-5'>Register</h2>
            <button className='flex justify-center items-center gap-2 py-2 w-full px-5 rounded-xl border-[1px] border-solid font-[500] border-slate-500 mb-5'>
                <div className='w-6 h-6'>
                    <img className='w-full h-full' src={google} alt="Google" />
                </div>
                Login in with Google
            </button>
            <div className='flex text-secondary_card_color font-[500] gap-6 items-center mb-5'>
                <span className='w-[50%] h-[2px] bg-secondary_card_color/50'></span>
                <p>or</p>
                <span className='w-[50%] h-[2px] bg-secondary_card_color/50'></span>
            </div>
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-white">User name</label>
                    <input 
                        type="text" 
                        name="user_name" 
                        id="user_name" 
                        value={registerData.user_name} 
                        onChange={handleChange} 
                        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" 
                        placeholder="John Doe" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={registerData.email} 
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
                        value={registerData.password} 
                        onChange={handleChange} 
                        placeholder="••••••••" 
                        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                    <input 
                        type="password" 
                        name="confirm_password" 
                        id="confirm_password" 
                        value={registerData.confirm_password} 
                        onChange={handleChange} 
                        placeholder="••••••••" 
                        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none text-white" 
                        required 
                    />
                </div>
                <button type="submit" className="w-full text-white bg-primaryBlue hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700">{isLoading ? "Loading ..." : "Create an account"}</button>
                <p className="text-sm font-light text-gray-400">
                    Already have an account? <Link to={"/login"} className="font-medium text-primaryBlue hover:underline text-primary-500">Login here</Link>
                </p>
            </form>
        </div>
    );
}