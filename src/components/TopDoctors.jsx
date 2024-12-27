import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);

  return (
    <div className='flex flex-col justify-center items-center my-16 gap-4 text-gray-900'>
      <h1 className='font-bold'>Top Doctors to Book</h1>
      <p className='text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item, index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 font-medium text-lg'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>navigate('/doctors')} className='bg-blue-50 text-gray-600 px-12 py-3 mt-10 rounded-full'>more</button>
    </div>
  )
}

export default TopDoctors
