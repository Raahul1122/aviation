import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Kyc = () => {
  const { param1, param2 } = useParams();
  return (
    <>
     <div className='w-full h-screen flex justify-center items-center align-middle'>
    <div className='container max-w-[654px] min-h-[650px] bg-[#FFFFFF] shadow-xl shadow-[#A1D2D5] '>
           
            <div className='flex flex-col justify-between '>
            <h1 className='text-[#010101] font-medium text-[30px] text-center mb-4 mt-10 min-h-[460px]'>KYC</h1>
            <Link to="/listing"className="bg-[#D9D9D9]  text-[#000000] center flex justify-center m-auto text-[14px] py-3 px-20 mt-6 rounded-[10px]">Submit</Link>
            </div>
    </div>
    </div>
    </>
  )
}

export default Kyc