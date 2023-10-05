import React,{useState} from 'react'
import { Link } from "react-router-dom";
import SellerForm from './SellerForm';
const SignIn = () => {
    const [modal, setModal] = useState(false);
    const handleModal=(_value)=>{
        setModal(_value)
    }
    return (
        <>
        <div className="modal relative h-full w-full">
        <div className={`p-3 w-full ${modal == true ? "blur-sm" : ""}`}>
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
                                id="username" type="passowrd" placeholder="User name" />

                        </div>
                        <div className='mb-4 px-2'>
                            <label className="block text-[#111111] text-xl mb-1" for="username">
                                Password
                            </label>
                            <input
                                className="bg-[#EEF2F6] rounded-[50px] 0 w-full py-3 px-5 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#A19D9D]"
                                id="username" type="passowrd" placeholder="password" />

                        </div>
                        <div className='flex flex-col justify-center gap-4 items-center w-[50%] m-auto pt-5'>
                            <button  className='bg-[#D9D9D9B5] text-[#010101] text-[14px] font-medium  w-full py-3 rounded-md flex justify-center items-center' onClick={() => {setModal(true);}}>Sign In</button>
                            <Link to="/signup" className='bg-[#D9D9D9B5] text-[#010101] text-[14px] font-medium  w-full py-3 rounded-md flex justify-center items-center'>Not Register?</Link>
                            <p className='m-0 p-0'>OR</p>
                            <button className='bg-[#D9D9D9B5] text-[#010101] text-[14px] font-medium  w-full py-3 rounded-md'>Login With Google</button>

                        </div>
                    </div>
                </div>
            </div>
            </div>



            {modal && (
          <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="modal-body w-[654px] bg-[#fff]  relative  blur-none text-black shadow-xl shadow-[#A1D2D5] max-w-[654px] min-h-[670px]">
                   <SellerForm handleModal={handleModal}/>
          

             
              
              
            </div>
          </div>
        )}
            </div>
        </>
    )
}

export default SignIn