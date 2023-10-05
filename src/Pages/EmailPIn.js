import React from 'react'
import { StatefulPinInput } from 'react-input-pin-code'
import { AiOutlineMail } from 'react-icons/ai';
function EmailPIn() {
    return (
        <>
          <div className='w-full h-screen flex justify-center items-center align-middle'>
            <div className='flex justify-center items-center flex-col px-5'>
                <form className='bg-[#FFFFFF] shadow-xl shadow-[#369EA4] sm:w-[25rem]  sm:px-6 py-28'>
                    <p className='text-[#010101] text-[24px] font-medium text-center mb-3'>Verify Email</p>
                    {/* <img src={logo} className='w-[100%] mb-10'></img> */}
                    <AiOutlineMail className='text-[35px] m-auto' />
                    <p className='text-center mb-3 mt-3'>Please Enter the code</p>
                    <div className='flex justify-center'>

                        <StatefulPinInput
                            length={4}
                            size='lg'
                            inputStyle={{
                                border: "none",

                                background: "#fffff",
                                boxShadow: "none",
                                focusBorderColor: "1px solid red",
                                // border: "1px solid black"
                            }}

                        />
                    </div>


                    <div className=''>
                        <button class="bg-[#D9D9D9]  text-[#000000] center flex justify-center m-auto text-[14px] py-3 px-14 mt-6 rounded-[10px]">Continue</button>
                    </div>
                </form>

            </div>

            </div>
        </>
    )
}

export default EmailPIn