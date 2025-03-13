import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()

    const navigateLoginPage=()=>{
        navigate("/login")
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-linear-to-t from-pink-400 to-indigo-500'>
        <div className='bg-white rounded-2xl p-[30px]'>
            <div className='text-3xl'>Sign up</div>

            <div className='flex'>
                <div className='text-[13px]'>Create an account or</div>
                <button className='text-[13px] pl-1 text-pink-500 hover:underline cursor-pointer' onClick={navigateLoginPage}>Login</button>
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <span><label htmlFor="email" className='text-[13px] cursor-pointer'>Username</label></span>
                <input className=' w-[26vw] p-2 border-gray-300 border-2 rounded-[5px]' type="email" name="email" id="email" />
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <span><label htmlFor="email" className='text-[13px] cursor-pointer'>Email address</label></span>
                <input className=' w-[26vw] p-2 border-gray-300 border-2 rounded-[5px]' type="email" name="email" id="email" />
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <span><label htmlFor="email" className='text-[13px] cursor-pointer'>Password</label></span>
                <input className=' w-[26vw] p-2 border-gray-300 border-2 rounded-[5px]' type="email" name="email" id="email" />
            </div>
            <button className='m-auto w-[100%] mt-7 hover:bg-pink-400 cursor-pointer text-white bg-pink-500 p-2 rounded-2xl font-bold'>
                Sign up
            </button>
        </div>
    </div>
  )
}

export default Signup