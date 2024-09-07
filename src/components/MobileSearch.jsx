import React from 'react'
import { useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import DestinationSelectMenu from './DestinationSelectMenu';
import CalenderSelectMenu from './CalenderSelectMenu';
import GuestSelectMenu from './GuestSelectMenu';

const MobileSearch = ({ MobileSearchCloseHandler, searchFilterHandler,date,setDate, ClickDateDivHandler, DeleteDateHandler, isMobileSearchClicked, ClickResortSearchHandler, setGuestInfo, searchFilter, DeleteGuestHandler, ServiceAnimalHandler, total, adults, setAdults, children, setChildren, pets, setPets, infants, setInfants, guestInfo, ClickMobileDestinationDivHandler, ClickGuestDivHandler, DeleteDestinationHandler, ClickedDiv, mobileTextRef, searchDestination, DestinationSearchHandler, setDestination, setClickedDiv, setSearchDestination, destination, ClickCheckInDivHandler, ClickCheckOutDivHandler, checkInDate, setCheckInDate, setCheckOutDate, checkOutDate }) => {

    const ClickMobileResortSearchHandler = () => {
        ClickResortSearchHandler();
        MobileSearchCloseHandler();
    }
    const ClearAll = () => {
        setSearchDestination("");
        setCheckInDate("");
        setCheckOutDate("");
        setDate("");
        setGuestInfo("Misafir ekleyin");
    }
    useEffect(() => {
        const reSizeHandler = () => {

            if (window.innerWidth > 768) {
                MobileSearchCloseHandler();
            }
        };
        window.addEventListener('resize', reSizeHandler);
        reSizeHandler();
        return () => {
            window.removeEventListener('resize', reSizeHandler);
        };
    }, [MobileSearchCloseHandler])

    useEffect(() => {
        if (destination && ClickedDiv !== "checkin") {
            setClickedDiv("checkin");
            mobileTextRef.current.blur();
        }
    }, [destination]);

    return (
        <div className='bg-gray-100 z-50 absolute w-full h-[100vh] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <div onClick={MobileSearchCloseHandler} className='bg-white cursor-pointer rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center  border border-black border-opacity-30 absolute left-6 top-4'>
                <IoIosClose className='text-xl'></IoIosClose>
            </div>
            <div className='flex items-center justify-center pt-5 space-x-4'>
            <p onClick={searchFilter === "accommodation" ? null : searchFilterHandler} className={`${searchFilter === "accommodation" ? "font-medium border-b-2 border-black" : "text-faint-text"} mx-3 pb-2 cursor-pointer whitespace-nowrap`} >Konaklama Yerleri</p>
            <p onClick={searchFilter === "experiences" ? null : searchFilterHandler} className={`${searchFilter === "experiences" ? "font-medium border-b-2 border-black" : "text-faint-text"} mx-3 pb-2 cursor-pointer whitespace-nowrap`} >Deneyimler</p>
            </div>

            <div onClick={ClickMobileDestinationDivHandler} className={`shadow-md ml-5 mr-5 mt-2 bg-white flex items-center justify-between cursor-pointer flex-1 relative group rounded-full h-14 ${ClickedDiv === "destination" ? "bg-white hover:bg-white" : ""}`}>
                <div tabIndex="0" className={`flex-col p-3 pl-6`}>
                    <p>Yer</p>
                    <input ref={mobileTextRef} value={searchDestination} onChange={DestinationSearchHandler} className={`outline-none resize-none min-h-6 group-focus:bg-white placeholder-faint-text ${searchDestination !== "" ? "text-black font-semibold" : "text-faint-text"} `} placeholder='Gidilecek yerleri arayın'></input>
                </div>
                <p onClick={DeleteDestinationHandler} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "destination" && searchDestination && <IoIosClose />}</p>
                {ClickedDiv === "destination" ? <DestinationSelectMenu isMobileSearchClicked={isMobileSearchClicked} searchDestination={searchDestination} setDestination={setDestination} setClickedDiv={setClickedDiv} ClickedDiv={ClickedDiv} setSearchDestination={setSearchDestination} destination={destination}></DestinationSelectMenu> : ""}
                {console.log(ClickedDiv)}
            </div>
            {searchFilter === "accommodation" ?
                <div>
                    <div onClick={ClickCheckInDivHandler} className={`shadow-md ml-5 mr-5 bg-white flex items-center justify-between  cursor-pointer flex-1 relative group rounded-full h-14 ${ClickedDiv === "checkin" ? "bg-white hover:bg-white" : ""} ${ClickedDiv === "destination" ? "mt-[17rem]" : "mt-2"}`}>
                        <div className="ml-3 flex-col">
                            <p>Giriş</p>
                            <p className={`whitespace-nowrap truncate ${checkInDate !== "" ? "text-black font-semibold" : "text-faint-text"}`}>{checkInDate ? checkInDate.format("DD MMMM") : "Tarih ekleyin"}</p>
                        </div>
                        {ClickedDiv === "checkin" ? <CalenderSelectMenu isMobileSearchClicked={isMobileSearchClicked} selectedDate={checkInDate} setSelectedDate={setCheckInDate} ></CalenderSelectMenu> : ""}
                        <p onClick={() => DeleteDateHandler(ClickedDiv)} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "checkin" && checkInDate && <IoIosClose />}</p>
                    </div>

                    <div onClick={ClickCheckOutDivHandler} className={`shadow-md ml-5 mr-5 bg-white flex items-center justify-between  cursor-pointer flex-1 relative group rounded-full h-14 ${ClickedDiv === "checkout" ? "bg-white hover:bg-white" : ""} ${ClickedDiv === "checkin" ? "mt-[21rem]" : "mt-2"}`}>
                        <div className="ml-3 flex-col">
                            <p>Çıkış</p>
                            <p className={`whitespace-nowrap truncate ${checkOutDate !== "" ? "text-black font-semibold" : "text-faint-text"}`}>{checkOutDate ? checkOutDate.format("DD MMMM") : "Tarih ekleyin"}</p>
                        </div>
                        <p onClick={() => DeleteDateHandler(ClickedDiv)} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "checkout" && checkOutDate && <IoIosClose />}</p>
                        {ClickedDiv === "checkout" ? <CalenderSelectMenu isMobileSearchClicked={isMobileSearchClicked} selectedDate={checkOutDate} setSelectedDate={setCheckOutDate} checkInDate={checkInDate}></CalenderSelectMenu> : ""}
                    </div>
                </div>
                :
                 <div onClick={ClickDateDivHandler} className={`shadow-md ml-5 mr-5 bg-white flex items-center justify-between  cursor-pointer flex-1 relative group rounded-full h-14 ${ClickedDiv === "date" ? "bg-white hover:bg-white" : ""} ${ClickedDiv === "destination" ? "mt-[17rem]" : "mt-2"}`}>
                    <div className="flex-col p-3">
                        <p>Tarih</p>
                        <p className={`whitespace-nowrap truncate ${date !== "" ? "text-black font-semibold" : "text-faint-text"}`}>{date ? date.format("DD MMMM") : "Tarih ekleyin"}</p>
                    </div>
                    <p onClick={() => DeleteDateHandler(ClickedDiv)} className='w-6 h-6 text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "date" && date && <IoIosClose />}</p>
                    {ClickedDiv === "date" ? <CalenderSelectMenu isMobileSearchClicked={isMobileSearchClicked} selectedDate={date} setSelectedDate={setDate}></CalenderSelectMenu> : ""}
                </div>
                }

            <div onClick={ClickGuestDivHandler} className={`shadow-md ml-5 mr-5 bg-white flex items-center justify-between  cursor-pointer flex-1 relative group rounded-full h-14 ${ClickedDiv === "guest" ? "bg-white hover:bg-white" : ""} ${( ClickedDiv === "checkout" ||ClickedDiv === "date" ) ? "mt-[21rem]" : "mt-2"}`}>
                <div className="flex flex-col cursor-pointer p-3">
                    <p>Kişiler</p>
                    <p className={`whitespace-nowrap truncate ${guestInfo !== "Misafir ekleyin" ? "text-black font-semibold" : "text-faint-text"}`}>{guestInfo}</p>
                </div>
                <p onClick={DeleteGuestHandler} className='text-2xl mr-1 cursor-pointer hover:bg-gray-100 rounded-xl'>{ClickedDiv === "guest" && guestInfo !== "Misafir ekleyin" && <IoIosClose />}</p>
                {ClickedDiv === "guest" ? <GuestSelectMenu isMobileSearchClicked={isMobileSearchClicked} adults={adults} children={children} infants={infants} pets={pets} setAdults={setAdults} setChildren={setChildren} setInfants={setInfants} setPets={setPets} total={total} searchFilter={searchFilter} ServiceAnimalHandler={ServiceAnimalHandler}></GuestSelectMenu> : ""}
            </div>

            <div className='bg-white absolute bottom-0 w-full h-20 flex items-center justify-between border-t'>
                <p onClick={ClearAll} className='font-medium ml-6 underline cursor-pointer'>Hepsini temizle</p>
                <div onClick={ClickMobileResortSearchHandler} className={`bg-airbnb-red rounded-md w-32 h-12 flex items-center justify-center mr-3 hover:bg-rose-600 ${ClickedDiv === null ? "" : "md:bg-rose-600 lg:w-24"}`}>
                    <IoSearch className='text-white text-xl cursor-pointer' />
                    <p className="text-base pl-1 text-white" >Arama</p>
                </div>
            </div>
        </div>
    )
}

export default MobileSearch
