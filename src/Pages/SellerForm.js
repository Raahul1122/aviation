import React from 'react'

const SellerForm = () => {
  return (
    <>
     <div className='w-full h-screen flex justify-center items-center align-middle'>
    <div className='container max-w-[654px] min-h-[650px] bg-[#FFFFFF] shadow-xl shadow-[#A1D2D5] '>
            <h1 className='text-[#010101] font-medium text-[30px] text-center mb-14 mt-10'>Sign In</h1>
           <div className=' w-[70%] m-auto'>
           <div className='mb-4 px-2'>
                        <label className="block text-[#111111] text-xl mb-1" for="username">
                        User name
                        </label>
                        <input
                            className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                            id="username" type="passowrd" placeholder=" Emter user name" />
                      
                    </div>
                    <div className='mb-4 px-2'>
                        <label className="block text-[#111111] text-xl mb-1" for="username">
                            Email
                        </label>
                        <input
                            className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                            id="username" type="email" placeholder="Enter your email" />
                        
                    </div>
                    <div className='mb-4 px-2'>
                        <label className="block text-[#111111] text-xl mb-1" for="username">
                         Mobile No.
                        </label>
                        <input
                            className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                            id="username" type="passowrd" placeholder="Enter your mobile no." />
                        
                    </div>
                 
           </div>
    </div>
    </div>
    </>
  )
}

export default SellerForm