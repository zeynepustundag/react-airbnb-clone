import React, { useEffect, useRef, useState } from 'react'

import { FaAirbnb } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

import { Link } from 'react-router-dom';
import DestinationSelectMenu from './DestinationSelectMenu';
import CalenderSelectMenu from './CalenderSelectMenu';
import AccountMenu from './AccountMenu';
import GuestSelectMenu from './GuestSelectMenu';
import { IoIosClose } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";

import { Skeleton } from '@mui/material';


const Header = ({ scrollPosition, searchFilterHandler, ServiceAnimalHandler, ClickDateDivHandler, DeleteDateHandler, ClickGuestDivHandler, ClickResortSearchHandler, searchFilter, DeleteGuestHandler, total, adults, setAdults, children, setChildren, pets, setPets, infants, setInfants, guestInfo, setGuestInfo, ClickCheckInDivHandler, ClickCheckOutDivHandler, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, loading, placeFilter, MobileSearchHandler, ClickedDiv, ClickDestinationDivHandler, DeleteDestinationHandler, textRef, searchDestination, DestinationSearchHandler, destination, setDestination, setClickedDiv, setSearchDestination, date, setDate }) => {

    const [isAccountClick, setIsAccountClick] = useState(false);

    const searchDivRef = useRef(null);
    const accountDivRef = useRef(null);
    const headerRef = useRef(null);

    const [showSearchBar, setShowSearchBar] = useState(false);

    const ClickAccountHandler = () => {
        setIsAccountClick(true);
    }

    const GuestInfoHandler = () => {
        let guestText = "";

        if (adults > 0 || children > 0) {
            guestText += `${guestText ? ", " : ""} ${total + " misafir"}`
        }
        if (children > 0 && adults === 0) {
            setAdults(1);
        }
        if (infants > 0) {
            if (adults === 0) {
                setAdults(1);
            }
            guestText += `${guestText ? ", " : ""} ${infants + " bebek"}`
        }
        if (pets > 0) {
            if (adults === 0) {
                setAdults(1);
            }
            guestText += `${guestText ? ", " : ""} ${pets + " evcil hayvan"}`
        }
        setGuestInfo(guestText || "Misafir ekleyin");
    }

    const ShowSearchBarHandler = () => {
        setShowSearchBar(true);
        headerRef.current.style.boxShadow = "0 0 0 100vmax rgba(0, 0, 0, .3)";
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

    useEffect(() => {
        const CloseAccountMenu = (event) => {
            if (!accountDivRef.current?.contains(event.target)) {
                setIsAccountClick(false);
            }
        };
        document.addEventListener("click", CloseAccountMenu);
        return () => {
            document.removeEventListener("click", CloseAccountMenu);
        }
    }, [isAccountClick])

    useEffect(() => {
        GuestInfoHandler();
    }, [adults, children, infants, pets])


    useEffect(() => {
        if (checkInDate && ClickedDiv !== "checkout") {
            setClickedDiv("checkout");
        }
    }, [checkInDate]);

    useEffect(() => {
        if (checkOutDate && ClickedDiv !== "guest") {
            setClickedDiv("guest");
        }
    }, [checkOutDate]);
    useEffect(() => {
        if (destination && ClickedDiv !== "checkin") {
            setClickedDiv("checkin");
            textRef.current.blur();
        }
    }, [destination]);

    useEffect(() => {
        const CloseSearchBar = (event) => {
            if (!headerRef.current?.contains(event.target)) {
                setShowSearchBar(false);
                headerRef.current.style.boxShadow = "0 0 #0000";
            }
        }
        document.addEventListener("click", CloseSearchBar);
        return () => {
            document.removeEventListener("click", CloseSearchBar);
        }
    }, [])
    // console.log(showSearchBar);
    // console.log(ClickedDiv);
    // console.log(selectedDate);

    return (

        <div ref={headerRef} className='border-b fixed z-20 bg-white w-full'>
            <div className='w-full flex items-center justify-around'>
                <div onClick={MobileSearchHandler} className='border shadow-md rounded-full flex items-center h-14 text-sm mx-4 my-5 cursor-pointer md:hidden w-full'>
                    <IoSearch className='cursor-pointer text-3xl mx-4' />
                    <div className='flex flex-col'>
                        {loading ? <Skeleton variant='text' width={70}></Skeleton> : <p className='font-medium'>Nereye ?</p>}
                        {loading ? <Skeleton variant='text' width={300}></Skeleton> : <p className='text-faint-text text-xs'>Herhangi bir yer • Herhangi bir hafta • Misafir ekleyin</p>}
                    </div>
                </div>
                {placeFilter !== "Efsaneler" &&
                    <div className='cursor-pointer border rounded-full w-12 h-10 md:hidden flex items-center justify-center mr-6'>
                        <LuSettings2 className='text-xl' />
                    </div>}
            </div>
            <div className='items-center justify-between pl-6 lg:px-20 py-5 hidden md:flex'>
                <Link to="/">
                    <div className='flex items-center cursor-pointer text-2xl text-airbnb-red'>
                        <FaAirbnb className='text-4xl mr-1' />
                        <p className='font-bold hidden lg:block'>airbnb</p>
                    </div>
                </Link>
                <div onClick={ShowSearchBarHandler} className={`border rounded-full flex items-center  m-auto h-12 shadow-sm text-sm hover:shadow-md transition duration-200 w-6/12 ${(scrollPosition > 0 && showSearchBar === false) ? "flex" : "hidden"}`}>
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

                <div className={`flex items-center ml-32  ${(scrollPosition <= 0 || showSearchBar) ? "flex" : "hidden"}`}>
                    <p onClick={searchFilter === "accommodation" ? null : searchFilterHandler} className={`${searchFilter === "accommodation" ? "font-medium" : "hover:bg-gray-100 text-faint-text"} p-3 rounded-full cursor-pointer whitespace-nowrap`} >Konaklama Yerleri</p>
                    <p onClick={searchFilter === "experiences" ? null : searchFilterHandler} className={`${searchFilter === "experiences" ? "font-medium" : "hover:bg-gray-100 text-faint-text"} p-3 rounded-full cursor-pointer`}>Deneyimler</p>
                </div>

                <div className='flex items-center mr-6'>
                    <p className='p-3 cursor-pointer rounded-full hover:bg-gray-100 whitespace-nowrap text-sm'>Evinizi Airbnb'ye taşıyın</p>
                    <TbWorld className='text-xl cursor-pointer rounded-full hover:bg-gray-100' />
                    <div ref={accountDivRef} onClick={ClickAccountHandler} className='relative  p-2 flex items-center border border-gray-400 border-opacity-50 rounded-3xl cursor-pointer hover:shadow-md ml-3'>
                        <IoMdMenu className='text-xl mr-3' />
                        <RxAvatar className='text-3xl ' />
                        {isAccountClick ? <AccountMenu></AccountMenu> : ""}
                    </div>
                </div>
            </div>

            <div ref={searchDivRef} className={`hidden border rounded-full items-center space-x-5 lg:w-search-width md:w-11/12 m-auto h-16 mb-6 shadow-md text-sm  ${ClickedDiv === null ? "" : "bg-search-bg"} ${(scrollPosition <= 0 || showSearchBar) ? "md:flex" : "hidden"}`}>
                <div onClick={ClickDestinationDivHandler} className={`flex items-center cursor-pointer flex-1 relative group rounded-full hover:bg-gray-100 h-16 ${ClickedDiv === "destination" ? "bg-white hover:bg-white" : ""}`}>
                    <div tabIndex="0" className={`flex-col p-3 pl-6`}>
                        {loading ? <Skeleton variant='text' width={30}></Skeleton> : <p>Yer</p>}
                        {loading ? <Skeleton variant='text' width={150}></Skeleton> : <input ref={textRef} value={searchDestination} onChange={DestinationSearchHandler} className={`w-[150px] outline-none resize-none min-h-6 group-hover:bg-gray-100 group-focus:bg-white placeholder-faint-text ${searchDestination !== "" ? "text-black font-semibold" : "text-faint-text"}  ${ClickedDiv !== "destination" && ClickedDiv !== null ? "bg-search-bg" : ""}`} placeholder='Gidilecek yerleri arayın'></input>}
                    </div>
                    <p onClick={DeleteDestinationHandler} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "destination" && searchDestination && <IoIosClose />}</p>
                    {ClickedDiv === "destination" ? <DestinationSelectMenu searchDestination={searchDestination} setDestination={setDestination} setClickedDiv={setClickedDiv} ClickedDiv={ClickedDiv} setSearchDestination={setSearchDestination} destination={destination}></DestinationSelectMenu> : ""}
                    {/* {console.log("Header" + ClickedDiv)} */}
                </div>

                {searchFilter === "accommodation" ?
                    <div className='flex flex-1'>
                        <div onClick={ClickCheckInDivHandler} className={`relative flex cursor-pointer h-16 rounded-full items-center justify-between flex-1 hover:bg-gray-100 ${ClickedDiv === "checkin" ? "bg-white hover:bg-white" : ""}`}>
                            <div className="ml-3 flex-col">
                                {loading ? <Skeleton variant='text' width={50}></Skeleton> : <p>Giriş</p>}
                                {loading ? <Skeleton variant='text' width={60}></Skeleton> : <p className={`w-16 whitespace-nowrap truncate ${checkInDate !== "" ? "text-black font-semibold" : "text-faint-text"}`}>{checkInDate ? checkInDate.format("DD MMMM") : "Tarih ekleyin"}</p>}
                            </div>
                            {ClickedDiv === "checkin" ? <CalenderSelectMenu selectedDate={checkInDate} setSelectedDate={setCheckInDate} ></CalenderSelectMenu> : ""}
                            <p onClick={() => DeleteDateHandler(ClickedDiv)} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "checkin" && checkInDate && <IoIosClose />}</p>
                        </div>
                        <div onClick={ClickCheckOutDivHandler} className={`relative flex items-center justify-between h-16  cursor-pointer flex-1 rounded-full  hover:bg-gray-100 ${ClickedDiv === "checkout" ? "bg-white hover:bg-white" : ""}`}>
                            <div className="ml-3 flex-col">
                                {loading ? <Skeleton variant='text' width={50}></Skeleton> : <p>Çıkış</p>}
                                {loading ? <Skeleton variant='text' width={60}></Skeleton> : <p className={`w-16 whitespace-nowrap truncate ${checkOutDate !== "" ? "text-black font-semibold" : "text-faint-text"}`}>{checkOutDate ? checkOutDate.format("DD MMMM") : "Tarih ekleyin"}</p>}
                            </div>
                            <p onClick={() => DeleteDateHandler(ClickedDiv)} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "checkout" && checkOutDate && <IoIosClose />}</p>
                            {ClickedDiv === "checkout" ? <CalenderSelectMenu selectedDate={checkOutDate} setSelectedDate={setCheckOutDate} checkInDate={checkInDate}></CalenderSelectMenu> : ""}
                        </div>
                    </div>
                    :
                    <div onClick={ClickDateDivHandler} className={`relative flex cursor-pointer flex-1 h-16  hover:bg-gray-100 rounded-full items-center justify-between  ${ClickedDiv === "date" ? "bg-white hover:bg-white" : ""}`}>
                        <div className="flex-col p-3">
                            {loading ? <Skeleton variant='text' width={50}></Skeleton> : <p>Tarih</p>}
                            {loading ? <Skeleton variant='text' width={100}></Skeleton> : <p className={`whitespace-nowrap truncate ${date !== "" ? "text-black font-semibold" : "text-faint-text"}`}>{date ? date.format("DD MMMM") : "Tarih ekleyin"}</p>}
                        </div>
                        <p onClick={() => DeleteDateHandler(ClickedDiv)} className='w-6 h-6 text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "date" && date && <IoIosClose />}</p>
                        {ClickedDiv === "date" ? <CalenderSelectMenu selectedDate={date} setSelectedDate={setDate}></CalenderSelectMenu> : ""}
                    </div>
                }

                <div onClick={ClickGuestDivHandler} className={`relative flex items-center rounded-full justify-between flex-1 h-16 hover:bg-gray-100 ${ClickedDiv === "guest" ? "bg-white hover:bg-white" : ""}`}>

                    <div className="h-full flex flex-col cursor-pointer p-3 ">
                        {loading ? <Skeleton variant='text' width={60}></Skeleton> : <p>Kişiler</p>}
                        {loading ? <Skeleton variant='text' width={100}></Skeleton> : <p className={`whitespace-nowrap truncate w-24 ${guestInfo !== "Misafir ekleyin" ? "text-black font-semibold" : "text-faint-text"}`}>{guestInfo}</p>}
                    </div>
                    <p onClick={DeleteGuestHandler} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "guest" && guestInfo !== "Misafir ekleyin" && <IoIosClose />}</p>

                    <div onClick={ClickResortSearchHandler} className={`bg-airbnb-red rounded-full w-12 h-12 flex items-center justify-center mr-3 hover:bg-rose-600 ${ClickedDiv === null ? "" : "md:bg-rose-600 lg:w-24"}`}>
                        <IoSearch className='text-white text-xl cursor-pointer' />
                        <p className={`text-base pl-1 text-white ${ClickedDiv === null ? "hidden" : " hidden lg:block"}`}>Arama</p>
                    </div>
                    {ClickedDiv === "guest" ? <GuestSelectMenu adults={adults} children={children} infants={infants} pets={pets} setAdults={setAdults} setChildren={setChildren} setInfants={setInfants} setPets={setPets} total={total} searchFilter={searchFilter} ServiceAnimalHandler={ServiceAnimalHandler}></GuestSelectMenu> : ""}
                </div>
            </div>
        </div>
    )
}

export default Header