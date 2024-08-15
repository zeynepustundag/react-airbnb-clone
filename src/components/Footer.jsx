import React, { useEffect, useRef, useState } from 'react'
import FooterCategories from '../helpers/FooterCategories'
import FooterPlaces from '../helpers/FooterPlaces'
import FooterInfos from '../helpers/FooterInfos';

import { TbWorld } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
FooterInfos
    const [categoryNumber, setCategoryNumber] = useState(0);
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [placeIndex, setPlaceIndex] = useState(7);

     const filteredPlace =FooterPlaces.filter((item) => item.category === FooterCategories[categoryNumber]);

    const categoryHandler = (id) => {
        setCategoryNumber(id);
    }
    const scrollForwardHandler = () => {
        if (categoryIndex <= -FooterCategories.length * 50) {
            setCategoryIndex(0)

        } else {
            setCategoryIndex(categoryIndex - 100)
        }
    }
    const scrollBackHandler = () => {
        if (categoryIndex <= 0) {
            setCategoryIndex(categoryIndex + 100)
        } else {
            setCategoryIndex(0)
        }
    }
    const showMoreHandler = () => {
        setPlaceIndex(filteredPlace.length)
    }
    // console.log(filteredPlace.length);
    useEffect(() => {
        const reSizeHandler = () => {

            if (1024 > window.innerWidth && window.innerWidth >= 768) {
                setPlaceIndex(11);
            } else if (window.innerWidth > 1024) {
                setPlaceIndex(17);
            } else {
                setPlaceIndex(7);
            }
        };
        window.addEventListener('resize', reSizeHandler);
        reSizeHandler();
        return () => {
            window.removeEventListener('resize', reSizeHandler);
        };
    }, [])

    //    console.log(placeIndex);
    return (
        <div className='bg-gray-100 px-4 lg:px-16 pt-14'>
            <p className='font-medium text-2xl tracking-normal'>Gelecek tatilleriniz için fikirler</p>
            <div className="flex border-b pt-6">
                <span onClick={scrollBackHandler} className='cursor-pointer text-2xl mr-8'>{"<"}</span>
                <div className={`relative overflow-hidden`}>
                    <div
                        className="flex space-x-6"
                        style={{ transform: `translateX(${categoryIndex}px)`, transition: 'transform 0.3s ease' }}
                    >
                        {FooterCategories.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p onClick={() => categoryHandler(index)} className={`cursor-pointer text-sm whitespace-nowrap text-faint-text pb-3 ${categoryNumber === index ? "border-black border-b-2 text-black" : ""}`}>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <span onClick={scrollForwardHandler} className='cursor-pointer text-2xl ml-8'>{">"}</span>
            </div>

            <div className='grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 space-y-2 py-12 border-b'>
                {filteredPlace.slice(0, placeIndex).map((item) => {
                    return (
                        <div key={item.id} className='cursor-pointer text-sm'>
                            <p>{item.placeName}</p>
                            <p className='text-faint-text'>{item.placetype}</p>
                        </div> 
                    ) 
                })
                }
                 <p onClick={showMoreHandler} className='hover:underline hover:underline-offset-2 flex items-center cursor-pointer'>Daha fazlasını göster <IoIosArrowDown className='ml-1' /></p>
            </div> 
            <div className='lg:grid lg:grid-cols-3 lg:border-b'>
                {FooterInfos.map((item) => {
                    return (
                        <div key={item.id} className='border-b lg:border-none space-y-2 py-5'>
                            <p className=''>{item.infoCategory}</p>
                            <div className='flex flex-col space-y-2'>
                                {item.infoSubCategories.map((item,index) => {
                                    return (
                                        <p key={index} className='text-faint-text cursor-pointer hover:underline hover:underline-offset-2'>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='pt-5 text-sm md:flex md:justify-center md:flex-col md:items-center lg:flex-row lg:justify-between'>
                <div className='md:flex md:mb-5 '>
                    <div className='flex items-center space-x-5 mb-5 md:mb-0'>
                        <div className='flex items-center'>
                            <TbWorld className='text-xl cursor-pointer mr-2' />
                            <span className='cursor-pointer hover:underline hover:underline-offset-2'>Türkçe (TR)</span>
                        </div>
                        <div>
                            <span className='cursor-pointer hover:underline hover:underline-offset-2'>₺ TRY</span>
                        </div>
                    </div>

                    <div className='md:flex text-xl space-x-3 hidden md:ml-8 md:items-center'>
                        <FaFacebookSquare className='cursor-pointer' />
                        <FaSquareXTwitter className='cursor-pointer' />
                        <FaSquareInstagram className='cursor-pointer' />
                    </div>
                </div>
                <div className=' text-faint-text pb-5 lg:flex lg:space-x-4'>
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
        </div>
    )
}

export default Footer