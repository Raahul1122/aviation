import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { Link } from "react-router-dom";
const SellerForm = (props) => {
  return (
    <>
     
     <div className='absolute right-8 top-8 text-[25px]'><RxCross1  onClick={(e) => { e.preventDefault(); props.handleModal(false) }} /></div>
          <h1 className='text-[#010101] font-medium text-[30px] text-center mb-4 mt-10'>Seller Form</h1>
          <div className=' w-[65%] m-auto'>
            <div className='mb-4'>
              <label className="block text-[#111111] text-[14px] mb-1" for="username">
                User name
              </label>
              <input
                className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                id="username" type="passowrd" placeholder=" Emter user name" />

            </div>
            <div className='mb-4 '>
              <label className="block text-[#111111] text-[14px] mb-1" for="username">
                Email
              </label>
              <input
                className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                id="username" type="email" placeholder="Enter your email" />

            </div>
            <div className='mb-4 '>
              <label className="block text-[#111111] text-[14px] mb-1" for="username">
                Mobile No.
              </label>
              <input
                className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                id="username" type="passowrd" placeholder="Enter your mobile no." />

            </div>
            <div className=' mb-3 justify-between'>
              <label className='  text-[14px] '>Item Description:</label>
              <textarea className="  w-[100%] rounded-[8px] min-h-[122px] bg-[#EEF2F6]" />
            </div>
            <div className=''>
              <Link to ="/kyc"className="bg-[#D9D9D9]  text-[#000000] center flex justify-center m-auto text-[14px] py-3 w-[58%] mt-6 rounded-[10px] flex justify-center items-center">Submit</Link>
            </div>


          </div>
        
     
    </>
  )
}

export default SellerForm