import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId,speciality}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc,setRelDocs] = useState([])

    //filter the props and display in relDoc
    useEffect(()=> {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    }, [doctors, docId, speciality])



  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 '>
        <h1 className='text-3xl font-medium'>Top Doctors to Book!</h1>
        <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0,5).map((item,index)=>(
                <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 round-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                        </div>
                        <p className='text-lg text-gray-900 font-medium'>{item.name}</p>
                        <p className='text-sm text-gray-600'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RelatedDoctors