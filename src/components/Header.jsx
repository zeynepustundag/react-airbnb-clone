import React, { useEffect, useState } from 'react'

import { FaAirbnb } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    const [searchFilter, setSearchFilter] = useState("accommodation");
    const [scrollPosition, setScrollPosition] = useState(0);

    const searchFilterHandler = () => {
        if (searchFilter === "accommodation") {
            setSearchFilter("experiences");
        } else {
            setSearchFilter("accommodation");
        }
    }
    const ScrollPositionHandler = () => {
        setScrollPosition(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', ScrollPositionHandler);
        return () => {
            window.removeEventListener('scroll', ScrollPositionHandler);
        };
    }, [])
    console.log(scrollPosition);
    return (
      
        <div className='border-b fixed z-10 bg-white w-full'>
            <div className='flex items-center justify-between px-16 py-5'>
                <div className='flex items-center cursor-pointer text-2xl text-airbnb-red'>
                    <FaAirbnb className='text-4xl mr-1' />
                    <p className='font-bold hidden lg:block'>airbnb</p>
                </div>

                {scrollPosition > 0 ?
                    <div className='border rounded-full flex items-center  m-auto h-12 shadow-sm text-sm hover:shadow-md transition duration-200 w-6/12'>
                        <div className='flex flex-col cursor-pointer  w-1/3'>
                            <div className=' rounded-full mr-3 pl-6'>
                                <p className='whitespace-nowrap font-medium truncate'>Herhangi bir yer</p>

                            </div>
                        </div>
                        <div className='flex flex-col cursor-pointer w-1/3'>
                            <div className='rounded-full mr-3'>
                                <p className='whitespace-nowrap font-medium truncate'>Herhangi bir hafta</p>
                            </div>
                        </div>
                        <div className='flex items-center rounded-full justify-between w-1/3'>
                            <div className='h-full flex flex-col cursor-pointer mr-3 overflow-hidden'>
                                <p className='whitespace-nowrap text-gray-400 truncate'>Misafir ekleyin</p>
                            </div>
                            <div className='bg-airbnb-red rounded-full w-9 h-9 flex items-center justify-center mr-3'>
                                <IoSearch className='text-white cursor-pointer text-base'/>
                            </div>
                        </div>
                    </div>

                    :
                    <div className='flex items-center'>
                        <p onClick={searchFilter === "accommodation" ? null : searchFilterHandler} className={`${searchFilter === "accommodation" ? "" : "hover:bg-gray-100"} p-3 rounded-full cursor-pointer whitespace-nowrap`} >Konaklama Yerleri</p>
                        <p onClick={searchFilter === "experiences" ? null : searchFilterHandler} className={`${searchFilter === "experiences" ? "" : "hover:bg-gray-100"} p-3 rounded-full cursor-pointer`}>Deneyimler</p>
                    </div>
                }

                <div className='flex items-center '>
                    <p className='p-3 cursor-pointer rounded-full hover:bg-gray-100 whitespace-nowrap text-sm'>Evinizi Airbnb'ye taşıyın</p>
                    <TbWorld className='text-xl cursor-pointer rounded-full hover:bg-gray-100' />
                    <div className='p-2 flex items-center border border-gray-400 border-opacity-50 rounded-3xl cursor-pointer hover:shadow-md ml-3'>
                        <IoMdMenu className='text-xl mr-3' />
                        <RxAvatar className='text-3xl ' />
                    </div>
                </div>
            </div>
            {scrollPosition > 0
                ?
                null
                :
                <div className='border rounded-full flex items-center space-x-5 w-7/12 m-auto h-16 mb-6 shadow-md text-sm'>
                    <div className='flex flex-col cursor-pointer flex-1'>
                        <div className=' rounded-full hover:bg-gray-100 h-16 p-3 pl-6'>
                            <p>Yer</p>
                            <p className='text-gray-400 whitespace-nowrap'>Gidilecek yerleri arayın</p>
                        </div>
                    </div>
                    {searchFilter === "accommodation" ?
                        <div className='flex flex-1'>
                            <div className='flex flex-col cursor-pointer'>
                                <div className='h-16 rounded-full  hover:bg-gray-100 p-3'>
                                    <p>Giriş</p>
                                    <p className='text-gray-400 whitespace-nowrap'>Tarih ekleyin</p>
                                </div>
                            </div>
                            <div className='flex flex-col cursor-pointer flex-1'>
                                <div className='h-16 rounded-full  hover:bg-gray-100 p-3'>
                                    <p>Çıkış</p>
                                    <p className='text-gray-400 whitespace-nowrap'>Tarih ekleyin</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex flex-col cursor-pointer flex-1'>
                            <div className='h-16 rounded-full  hover:bg-gray-100 p-3'>
                                <p>Tarih</p>
                                <p className='text-gray-400 whitespace-nowrap'>Tarih ekleyin</p>
                            </div>
                        </div>
                    }

                    <div className='flex items-center rounded-full justify-between flex-1 h-16 hover:bg-gray-100 '>
                        <div className='h-full flex flex-col cursor-pointer p-3 '>
                            <p>Kişiler</p>
                            <p className='text-gray-400 whitespace-nowrap'>Misafir ekleyin</p>
                        </div>
                        <div className='bg-airbnb-red rounded-full w-12 h-12 flex items-center justify-center mr-3 hover:bg-rose-600'>
                            <IoSearch className='text-white text-xl cursor-pointer' />
                        </div>
                    </div>
                </div>
            }

        </div>
    
    )
}

export default Header