import React, { useEffect, useRef, useState } from 'react'

import { FaAirbnb } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

import { Link } from 'react-router-dom';
import DestinationSelectMenu from './DestinationSelectMenu';



const Header = ({ scrollPosition }) => {
    const [searchFilter, setSearchFilter] = useState("accommodation");
    const [ClickedDiv, setClickedDiv] = useState(null);
    const textRef = useRef(null);
    const searchDivRef = useRef(null);

    const searchFilterHandler = () => {
        if (searchFilter === "accommodation") {
            setSearchFilter("experiences");
        } else {
            setSearchFilter("accommodation");
        }
    }
    const ClickDestinationDivHandler = () => {
        setClickedDiv("destination");
        textRef.current.focus();
    }
    const ClickCheckInDivHandler = () => {
        setClickedDiv("checkin");
    }
    const ClickCheckOutDivHandler = () => {
        setClickedDiv("checkout");
    }
    const ClickGuestDivHandler = () => {
        setClickedDiv("guest");
    }
    const ClickDateDivHandler = () => {
        setClickedDiv("date");
    }
    
    useEffect(() => {

        const CloseDivHandler = (event) => {
            if (!searchDivRef.current?.contains(event.target)) {
                setClickedDiv(null);
            }
        }
        document.addEventListener("click", CloseDivHandler);

        return () => {
            document.removeEventListener("click", CloseDivHandler)
        }
    }, [])

    return (

        <div className='border-b fixed z-10 bg-white w-full'>
            <div className='border border- shadow-md rounded-full flex items-center h-14 text-sm  mx-4 my-5 cursor-pointer md:hidden'>
                <IoSearch className='cursor-pointer text-3xl mx-4' />
                <div className='flex flex-col'>
                    <p className='font-medium'>Nereye ?</p>
                    <p className='text-faint-text text-xs'>Herhangi bir yer • Herhangi bir hafta • Misafir ekleyin</p>
                </div>

            </div>
            <div className='items-center justify-between px-4 lg:px-16 py-5 hidden md:flex'>
              <Link to="/"> <div  className='flex items-center cursor-pointer text-2xl text-airbnb-red'>
                    <FaAirbnb className='text-4xl mr-1' />
                    <p className='font-bold hidden lg:block'>airbnb</p>
                </div>
                </Link> 
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
                                <p className='whitespace-nowrap text-faint-text truncate'>Misafir ekleyin</p>
                            </div>
                            <div className='bg-airbnb-red rounded-full w-9 h-9 flex items-center justify-center mr-3'>
                                <IoSearch className='text-white cursor-pointer text-base' />
                            </div>
                        </div>
                    </div>

                    :
                    <div className='flex items-center ml-32'>
                        <p onClick={searchFilter === "accommodation" ? null : searchFilterHandler} className={`${searchFilter === "accommodation" ? "font-medium" : "hover:bg-gray-100 text-faint-text"} p-3 rounded-full cursor-pointer whitespace-nowrap`} >Konaklama Yerleri</p>
                        <p onClick={searchFilter === "experiences" ? null : searchFilterHandler} className={`${searchFilter === "experiences" ? "font-medium" : "hover:bg-gray-100 text-faint-text"} p-3 rounded-full cursor-pointer`}>Deneyimler</p>
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
                <div ref={searchDivRef} className={`border rounded-full items-center space-x-5 lg:w-search-width md:w-11/12 m-auto h-16 mb-6 shadow-md text-sm hidden md:flex ${ClickedDiv === null ? "" : "bg-search-bg"}`}>
                    <div onClick={ClickDestinationDivHandler} className='flex flex-col cursor-pointer flex-1 relative'>
                        <div tabIndex="0" className={`group rounded-full hover:bg-gray-100 h-16 p-3 pl-6 ${ClickedDiv === "destination" ? "bg-white hover:bg-white" : ""}`}>
                            <p>Yer</p>
                            <textarea ref={textRef} className={`text-black outline-none resize-none min-h-6 group-hover:bg-gray-100 group-focus:bg-white placeholder-faint-text ${ClickedDiv !== "destination" && ClickedDiv !== null  ? "bg-search-bg" : "group-hover:bg-white"}`} rows="1" placeholder='Gidilecek yerleri arayın'></textarea>
                        </div>
                        {ClickedDiv === "destination" ? <DestinationSelectMenu></DestinationSelectMenu> : ""}
                    </div>
                    
                    {searchFilter === "accommodation" ?
                        <div className='flex flex-1'>
                            <div onClick={ClickCheckInDivHandler} className="flex flex-col cursor-pointer">
                                <div  className={`h-16 rounded-full  hover:bg-gray-100 p-3 ${ClickedDiv === "checkin" ? "bg-white hover:bg-white" : ""}`}>
                                    <p>Giriş</p>
                                    <p className='text-faint-text whitespace-nowrap'>Tarih ekleyin</p>
                                </div>
                            </div>
                            <div onClick={ClickCheckOutDivHandler} className='flex flex-col cursor-pointer flex-1'>
                                <div  className={`h-16 rounded-full  hover:bg-gray-100 p-3 ${ClickedDiv === "checkout" ? "bg-white hover:bg-white" : ""}`}>
                                    <p>Çıkış</p>
                                    <p className='text-faint-text whitespace-nowrap'>Tarih ekleyin</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div onClick={ClickDateDivHandler} className='flex flex-col cursor-pointer flex-1'>
                            <div className={`h-16 rounded-full  hover:bg-gray-100 p-3 ${ClickedDiv === "date" ? "bg-white hover:bg-white" : ""}`}>
                                <p>Tarih</p>
                                <p className='text-faint-text whitespace-nowrap'>Tarih ekleyin</p>
                            </div>
                        </div>
                    }

                    <div onClick={ClickGuestDivHandler} className={`flex items-center rounded-full justify-between flex-1 h-16 hover:bg-gray-100 ${ClickedDiv === "guest" ? "bg-white hover:bg-white" : ""}`}>
                        <div className="h-full flex flex-col cursor-pointer p-3  ">
                            <p>Kişiler</p>
                            <p className='text-faint-text whitespace-nowrap'>Misafir ekleyin</p>
                        </div>
                        <div className={`bg-airbnb-red rounded-full w-12 h-12 flex items-center justify-center mr-3 hover:bg-rose-600 ${ClickedDiv === null ? "" : "md:bg-rose-600 lg:w-24"}`}>
                            <IoSearch className='text-white text-xl cursor-pointer' />
                            <p className={`text-base pl-1 text-white ${ClickedDiv === null ? "hidden" : " hidden lg:block"}`}>Arama</p>
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}

export default Header