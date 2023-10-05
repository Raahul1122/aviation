import React, { useState } from 'react'
import SellerForm from './SellerForm'

export default function Listing() {
    const [showSellerModal, setShowSellerModal] = useState(true)

    const handleSellerModal = (show) => {
        setShowSellerModal(show)
    }
    return (
        <>
            <div className="modal relative h-full w-full">
                <div className={`p-3 w-full ${showSellerModal === true ? "blur-sm" : ""}`}>
                    <div className='listing min-h-screen'>
                        <div className='container w-full m-auto'>
                            <h2 className='text-[40px] font-[500] text-center pt-[30px] text-[#010101]'>Listing Exclusive</h2>
                            <div className='list_card'>
                                <div class="flex justify-center mt-[32px]">
                                    <div class="flex flex-wrap justify-center gap-[50px]">
                                        <div class="card_box w-(100% ) bg-[#fff] shadow-xl shadow-[#A1D2D5] h-[538px]  rounded-[10px]">
                                            <div class="card_img w-[371px]">
                                                <img src="/Assets/plane_1.png" alt="Aeroplane" className=' rounded-t-[10px]' />
                                            </div>
                                            <div className='card_text text-[20px] font-[400] mt-[23px] ml-[25px]'>
                                                <h5 className='leading-[3rem]'>1995 GIPPSAERO GA 200B</h5>
                                                <h5 className='leading-[3rem]'>Manufacturer:</h5>
                                                <h5 className='leading-[3rem]'>Model:</h5>
                                                <h5 className='leading-[3rem]'>Serial Number:</h5>
                                            </div>
                                        </div>
                                        <div class="card_box w-(100% ) bg-[#fff] shadow-xl shadow-[#A1D2D5] h-[538px]  rounded-[10px]">
                                            <div class="card_img w-[371px]">
                                                <img src="/Assets/plane_2.png" alt="Aeroplane" className=' rounded-t-[10px]' />
                                            </div>
                                            <div className='card_text text-[20px] font-[400] mt-[23px] ml-[25px] text-[#000]'>
                                                <h5 className='leading-[3rem]'>1995 GIPPSAERO GA 200B</h5>
                                                <h5 className='leading-[3rem]'>Manufacturer:</h5>
                                                <h5 className='leading-[3rem]'>Model:</h5>
                                                <h5 className='leading-[3rem]'>Serial Number:</h5>
                                            </div>
                                        </div>
                                        <div class="card_box w-(100% ) bg-[#fff] shadow-xl shadow-[#A1D2D5] h-[538px]  rounded-[10px]">
                                            <div class="card_img w-[371px]">
                                                <img src="/Assets/plane_3.png" alt="Aeroplane" className=' rounded-t-[10px]' />
                                            </div>
                                            <div className='card_text text-[20px] font-[400] mt-[23px] ml-[25px] text-[#000]'>
                                                <h5 className='leading-[3rem]'>1995 GIPPSAERO GA 200B</h5>
                                                <h5 className='leading-[3rem]'>Manufacturer:</h5>
                                                <h5 className='leading-[3rem]'>Model:</h5>
                                                <h5 className='leading-[3rem]'>Serial Number:</h5>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex text-[16px] font-[500] justify-end pt-[40px] text-[#010101] w-[80%] m-[auto]'>
                                    <button className='bg-[#D9D9D9]  rounded-[10px] w-[90px] h-[40px] mr-2'>Byu</button>
                                    <button className='bg-[#D9D9D9] rounded-[10px] w-[90px] h-[40px]' >Seller</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showSellerModal && <SellerForm handleModal={handleSellerModal}/>}

            </div>
        </>
    )
}