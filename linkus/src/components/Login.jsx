import React from 'react'
import img from '../images/mock2.png';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
  return (
    <>
        <h1 className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-5xl col-p2 tracking-widest text-white text-center pt-7 ' >LinkUs</h1>
      <div className="h-[91vh] flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <div className="bg-white p-8  shadow-md rounded-2xl flex">
        {/* Your form goes here */}
        <form className="space-y-4">
        <h2 className="text-3xl  text-pink-600 col-p2 mb-6">Login</h2>

          <div>
            <label htmlFor="email" className="block col-p2 text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block col-p2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 text-white col-p2 p-2 rounded-lg hover:bg-pink-600"
          >
            Login
          </button>
          <a onClick={() => navigate('/signup')}  className='text-blue-400 text-xs col-p2 underline hover:cursor-pointer'>
            Don't have an account? Sign up
          </a>
        </form>
        <img className='w-80 hidden md:block ' src={img} alt="..." />
      </div>
    </div>
    </>
  )
}
