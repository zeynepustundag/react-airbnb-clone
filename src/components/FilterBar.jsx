import React from 'react'
import { useRef } from 'react';

import { PiTicketLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { GiCampingTent } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import { PiSwimmingPoolLight } from "react-icons/pi";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiFireLight } from "react-icons/pi";
import { PiFarmLight } from "react-icons/pi";
import { PiIslandLight } from "react-icons/pi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { PiSnowflakeLight } from "react-icons/pi";
import { PiSailboatLight } from "react-icons/pi";
import { GiPisaTower } from "react-icons/gi";
import { PiPersonSimpleSkiLight } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { MdCheck } from "react-icons/md";

import { Skeleton } from '@mui/material';

const FilterBar = ({ scrollPosition, isTotalPriceClicked, setIsTotalPriceClicked, setPlaceFilter, placeFilter, loading, FiltersHandler }) => {

    const scrollContainerRef = useRef(null);

    const FilterScrollBack = () => {
        if (scrollContainerRef.current) {
            console.log(scrollContainerRef.current)
            scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
        }
    }
    const FilterScrollForward = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
        }
    }

    return (
        <div className={`sticky bg-white h-[4.8rem] z-10 border-b shadow-md w-full ${scrollPosition > 0 ? "top-[89px] md:border-b md:shadow-md" : "md:top-44 top-24"} flex items-center`}>
            <div className={`relative overflow-hidden ml-4 lg:ml-20 h-full ${placeFilter === "Efsaneler" ? "lg:mr-24 mr-6" : "w-auto"}`}>
                <button className='bg-white z-20 absolute left-0 top-5 bottom-0 text-xl border rounded-full w-8 h-8 border-gray-400 flex items-center justify-center hover:scale-105 hover:shadow-lg' onClick={FilterScrollBack}
                ><IoIosArrowBack />
                </button>
                <div ref={scrollContainerRef} className={`flex space-x-10  overflow-hidden h-full items-center`}>
                    <div onClick={() => setPlaceFilter("Efsaneler")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Efsaneler" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiTicketLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Efsaneler</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Odalar")} className={`h-full cursor-pointer border-b-2 p-2 m flex flex-col items-center justify-center m-auto ${placeFilter === "Odalar" ? "text-black  border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }}></Skeleton> : <IoBedOutline className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Odalar</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Kamp")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Kamp" ? "text-black  border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <GiCampingTent className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Kamp</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Sahil")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Sahil" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <TbBeach className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Sahil</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Muhteşem Havuzlar")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Muhteşem Havuzlar" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiSwimmingPoolLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='whitespace-nowrap text-sm font-normal'>Muhteşem Havuzlar</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Şatolar")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Şatolar" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiCastleTurretLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Şatolar</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Popüler")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Popüler" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiFireLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Popüler</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Çiftlikler")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Çiftlikler" ? "text-black  border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiFarmLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Çiftlikler</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Adalar")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Adalar" ? "text-black  border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiIslandLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='text-sm font-normal'>Adalar</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Oda-Kahvaltılar")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Oda-Kahvaltılar" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <MdOutlineFreeBreakfast className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='whitespace-nowrap text-sm font-normal'>Oda-Kahvaltılar</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Kuzey Kutbu")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Kuzey Kutbu" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiSnowflakeLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='whitespace-nowrap text-sm font-normal'>Kuzey Kutbu</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Tekneler")} className={`h-full cursor-pointer border-b-2  p-2 flex flex-col items-center justify-center ${placeFilter === "Tekneler" ? "text-black border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiSailboatLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='whitespace-nowrap text-sm font-normal'>Tekneler</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Simgesel Kentler")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Simgesel Kentler" ? "text-black  border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <GiPisaTower className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='whitespace-nowrap text-sm font-normal'>Simgesel Kentler</p>}
                    </div>
                    <div onClick={() => setPlaceFilter("Kayak")} className={`h-full cursor-pointer border-b-2 p-2 flex flex-col items-center justify-center ${placeFilter === "Kayak" ? "text-black  border-black" : "text-faint-text hover:border-gray-200 hover:text-black border-white"}`}>
                        {loading ? <Skeleton variant='circular' sx={{ width: { xs: 24, lg: 30 }, height: { xs: 24, lg: 30 }, }} ></Skeleton> : <PiPersonSimpleSkiLight className='lg:text-3xl text-2xl' />}
                        {loading ? <Skeleton variant='text' sx={{ width: { xs: 50, lg: 70 } }}></Skeleton> : <p className='whitespace-nowrap text-sm font-normal'>Kayak</p>}
                    </div>
                </div>

                <button className='bg-white z-20 absolute right-0 top-5 bottom-0 text-xl border rounded-full w-8 h-8 border-gray-400 flex items-center justify-center hover:scale-105 hover:shadow-lg' onClick={FilterScrollForward}>
                    <IoIosArrowForward />
                </button>
            </div>
            {placeFilter !== "Efsaneler" &&
                <div /* onClick={FiltersHandler} */ className="bg-white md:flex hidden justify-around items-center rounded-lg border border-opacity-50 hover:border-opacity-100 hover:bg-gray-100 border-faint-text w-28 h-12 cursor-pointer ml-4 p-2">
                    <LuSettings2 className="text-xl mr-2" />
                    <p className="text-sm font-medium">Filtreler</p>
                </div>
            }
            {placeFilter !== "Efsaneler" &&
                <div onClick={() => setIsTotalPriceClicked(!isTotalPriceClicked)} className="bg-white md:flex hidden justify-around items-center rounded-lg border border-opacity-50 hover:border-opacity-100 hover:bg-gray-100  border-faint-text w-72 h-12 cursor-pointer ml-4 mr-4 lg:mr-20 p-2">
                    <p className="text-sm font-medium whitespace-nowrap">Vergiler hariç toplamı göster</p>
                    <div className={`hover:bg-black rounded-3xl w-10 h-6 relative ${isTotalPriceClicked ? "bg-black" : "bg-neutral-400"}`}>
                        {!isTotalPriceClicked && <div className="bg-white rounded-full w-5 h-5 absolute left-[2px] top-[2px] "></div>}
                        {isTotalPriceClicked && <div className="bg-white rounded-full w-5 h-5 absolute right-[2px] top-[2px] flex items-center justify-center"><MdCheck /></div>}
                    </div>
                </div>
            }
        </div>
    )
}

export default FilterBar