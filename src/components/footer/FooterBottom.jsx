import React from 'react'

import { TbWorld } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";


const FooterBottom = ({ isShowMoreClicked, FooterInfoHandler }) => {
    return (
        <div className={`text-sm pt-5  ${isShowMoreClicked ? "md:flex md:justify-between md:pt-3" : "md:flex md:justify-center md:flex-col md:items-center lg:flex-row lg:justify-between "}`}>
            <div className='md:flex md:mb-5 font-medium'>
                <div className='flex items-center space-x-5 mb-5 md:mb-0 '>
                    <div className='flex items-center'>
                        <TbWorld className='text-xl cursor-pointer mr-2' />
                        <span className='cursor-pointer hover:underline hover:underline-offset-2'>Türkçe (TR)</span>
                    </div>
                    <div>
                        <span className='cursor-pointer hover:underline hover:underline-offset-2'>₺ TRY</span>
                    </div>
                    {isShowMoreClicked &&
                        <div onClick={FooterInfoHandler} className='text-black font-medium md:flex items-center hidden '>
                            <p className="cursor-pointer hover:underline hover:underline-offset-2">Destek ve kaynaklar</p>
                            <IoIosArrowDown className='ml-2 text-lg'></IoIosArrowDown>
                        </div>}

                </div>

                <div className={`${isShowMoreClicked ? "hidden" : "md:flex text-xl hidden space-x-3 md:ml-8 md:items-center"}`}>
                    <FaFacebookSquare className='cursor-pointer' />
                    <FaSquareXTwitter className='cursor-pointer' />
                    <FaSquareInstagram className='cursor-pointer' />
                </div>
            </div>
            <div className={`text-faint-text pb-5 lg:flex lg:space-x-4 ${isShowMoreClicked && "md:flex"}`}>
                <div className='flex mb-1 md:mb-0'>
                    <span className='md:m-auto'> © 2024 Airbnb, Inc. </span>
                </div>
                <div className='flex'>
                    <p className='cursor-pointer hover:underline hover:underline-offset-2 mr-2'>Gizlilik</p>
                    •<p className='cursor-pointer hover:underline hover:underline-offset-2 mx-2'>Şartlar</p>
                    •<p className='cursor-pointer hover:underline hover:underline-offset-2 mx-2'>Site haritası</p>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom