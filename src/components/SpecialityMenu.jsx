import React from 'react'
import {doctors, specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className='flex flex-col items-center gap-4 py-16 text-gray-800 px-3'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/2 text-center text-sm'>Simply browse through our extensive list if trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex flex-row gap-4 justify-start pt-5 overflow-scroll'>
        {specialityData.map((item, index)=>(
            <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] duration-500' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image}></img>
                <p className='text-[10px] md:text-sm'>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
