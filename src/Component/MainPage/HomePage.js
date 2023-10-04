import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center align-middle'>
    <div className='container max-w-[654px] min-h-[650px] bg-[#FFFFFF] shadow-xl shadow-[#A1D2D5] flex flex-col justify-center items-center align-middle'>
            <h1 className='text-[#010101] font-medium text-[64px] text-center mb-14'>AVIATION</h1>
            <div className='flex flex-col justify-center gap-10 items-center'>
              <button className='bg-[#D9D9D9B5] text-[#010101] text-[20px] font-medium   w-[350px] py-4 rounded-md'>I want to Buy</button>
              <button className='bg-[#D9D9D9B5] text-[#010101] text-[20px] font-medium   w-[350px] py-4 rounded-md'>I want to List</button>
              <button className='bg-[#D9D9D9B5] text-[#010101] text-[20px] font-medium   w-[350px] py-4 rounded-md'>I want to Explore</button>

            </div>
    </div>
    </div>
    </>
  )
}

export default HomePage