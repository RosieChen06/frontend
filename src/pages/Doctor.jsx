import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctor = () => {

    const {speciality} = useParams();
    const {doctors} = useContext(AppContext);
    const [filterDoc, setFilterDoc] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const navigate = useNavigate();

    const applyFilter = () => {
        if(speciality){
            setFilterDoc(doctors.filter((item)=>(item.speciality===speciality)));
        }else{
            setFilterDoc(doctors);
        }
    }

    useEffect(()=>{
        applyFilter();
    },[doctors, speciality])

  return (
    <div>
        <p className='text-gray-600'>Browsw through the doctors specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
            <button className={`py-1 px-3 border rounded text-sm transition-all ${showFilter?'bg-primary text-white':''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
            <div className={`w-full sm:w-1/3 cursor-pointer flex flex-col gap-4 text-sm text-gray-600 ${showFilter?'':'hidden'}`}>
                <p className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${speciality==='General physician'? 'bg-indigo-100 text-black':''}`} onClick={()=>navigate('/doctors/General physician')}>General physician</p>
                <p className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${speciality==='Gynecologist'? 'bg-indigo-100 text-black':''}`} onClick={()=>navigate('/doctors/Gynecologist')}>Gynecologist</p>
                <p className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${speciality==='Dermatologist'? 'bg-indigo-100 text-black':''}`} onClick={()=>navigate('/doctors/Dermatologist')}>Dermatologist</p>
                <p className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${speciality==='Pediatricians'? 'bg-indigo-100 text-black':''}`} onClick={()=>navigate('/doctors/Pediatricians')}>Pediatricians</p>
                <p className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${speciality==='Neurologist'? 'bg-indigo-100 text-black':''}`} onClick={()=>navigate('/doctors/Neurologist')}>Neurologist</p>
                <p className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded ${speciality==='Gastroenterologist'? 'bg-indigo-100 text-black':''}`} onClick={()=>navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
            </div>
            <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                {
                    filterDoc.map((item, index)=>(
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
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Doctor
