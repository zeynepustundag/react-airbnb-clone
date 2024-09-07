import React from 'react'
import { useEffect } from 'react';

import FooterInfos from '../../helpers/FooterInfos'

import { IoIosClose } from "react-icons/io";

const FooterInfo = ({ isShowMoreClicked, FooterInfoCloseHandler, isFooterInfoClicked }) => {


    useEffect(() => {
        const reSizeHandler = () => {

            if (window.innerWidth < 768) {
                FooterInfoCloseHandler();
            }
        };
        window.addEventListener('resize', reSizeHandler);
        reSizeHandler();
        return () => {
            window.removeEventListener('resize', reSizeHandler);
        };
    }, [FooterInfoCloseHandler])

    return (

        <div className={`lg:grid lg:grid-cols-3 lg:border-b ${(isShowMoreClicked && isFooterInfoClicked) && "md:grid md:grid-cols-3 lg:grid grid-cols-3 w-full h-[37rem] absolute bg-white z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl"} ${(isShowMoreClicked && !isFooterInfoClicked) && "md:hidden lg:hidden"} `}>
            {isFooterInfoClicked &&
                <div onClick={FooterInfoCloseHandler} className='absolute top-0 cursor-pointer rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center ml-6 mt-3'>
                    <IoIosClose className='text-3xl'></IoIosClose>
                </div>
            }
            {FooterInfos.map((item) => {
                return (
                    <div key={item.id} className={`border-b lg:border-none space-y-2 ${(isShowMoreClicked && isFooterInfoClicked) && "pt-12 pl-10"}`}>
                        <p className=''>{item.infoCategory}</p>
                        <div className='flex flex-col space-y-2'>
                            {item.infoSubCategories.map((item, index) => {
                                return (
                                    <p key={index} className='text-faint-text cursor-pointer hover:underline hover:underline-offset-2'>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FooterInfo
