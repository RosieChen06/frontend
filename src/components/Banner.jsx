import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className='flex w-full h-auto bg-primary rounded-lg px-6 my-15 mb-10'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
                <h1 className='leading-relaxed'>Book Appointment <br/> With 100+ Trusted Doctors</h1>
            </div>
            <button onClick={()=>navigate('/login')} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105'>Create Account</button>
        </div>
        <div className='hidden md:w-1/2 md:block lg:w-[370px] relative'>
            <img className='w-full absolute right-5 bottom-0' src={assets.appointment_img} />
        </div>
    </div>
  )
}

export default Banner
