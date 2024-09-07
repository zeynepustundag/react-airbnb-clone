import React from 'react'
import { useState } from 'react';
import PlaceInfos from '../helpers/PlaceInfos'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Skeleton } from '@mui/material';
import ExperiencesInfos from '../helpers/ExperiencesInfos';

const Home = ({ scrollPosition, isTotalPriceClicked, searchFilter, placeFilter, searchedDestination, checkInDate, checkOutDate, loading, isShowMoreClicked, setIsShowMoreClicked }) => {

  const [showPlaceIndex, setShowPlaceIndex] = useState(8);


  const FilteredPlaces = PlaceInfos.filter((item) => {
    if (searchedDestination === "Esnek arama") {
      if (placeFilter) {
        return item.category === placeFilter
      }
      return true;
    } if (searchedDestination && placeFilter) {
      return item.destination.includes(searchedDestination) && item.category === placeFilter;
    } if (searchedDestination) {
      return item.destination.includes(searchedDestination);
    } if (placeFilter) {
      return item.category === placeFilter;
    }
    return true;
  })

  const FilteredExperiences = ExperiencesInfos.filter((item) => {
    if (searchedDestination === "Esnek arama") {
      return item;
    }
    return item.destination.includes(searchedDestination);
  })

  const ShowMoreHandler = () => {
    setShowPlaceIndex(filteredActivity.length)
    setIsShowMoreClicked(true);
  }

  let filteredActivity = searchFilter === "accommodation" ? FilteredPlaces : FilteredExperiences;

  // console.log("true: "+ checkInDate);
  return (
    <div className={`bg-white px-6 py-10 mb-20 lg:px-20 relative ${scrollPosition > 0 ? "top-28" : "md:top-44 top-24"} ${filteredActivity.length <= 4 ? "md:pb-40" : ""}`}>
      <div className='grid mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-5 grid-cols-1'>
        {filteredActivity.length > 0 ? filteredActivity.slice(0, showPlaceIndex).map((item) => {
          return (
            <div key={item.id} className='w-full h-[22rem] cursor-pointer swiper-div'>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {item.img.map((item, index) => (
                  <SwiperSlide key={index} className='h-[16rem]'>
                    {loading ? <Skeleton variant='rectangular' height={256} sx={{ borderRadius: '16px' }} ></Skeleton> : <img className='w-full rounded-2xl h-full object-cover' src={item} alt="" />}
                  </SwiperSlide>
                )
                )}
              </Swiper>
              {(loading && (item.destination || item.content)) ? <Skeleton variant='text'></Skeleton> : <p className='pt-2 font-medium'>{searchFilter === "accommodation" ? item.destination : item.content}</p>}
              {loading ? <Skeleton variant='text'></Skeleton> : <p className='text-faint-text'>{(searchedDestination && checkInDate && checkOutDate) ? checkInDate.format("DD MMM") + "-" + checkOutDate.format("DD MMM") : ""}</p>}
              {(loading && item.price) ? <Skeleton variant='text'></Skeleton> : <p className='pt-1 font-medium inline'>{(searchFilter === "accommodation" && isTotalPriceClicked && checkOutDate && checkInDate ) ? (item.price * (checkOutDate.diff(checkInDate, 'day'))) : item.price} ₺ <span className='inline font-light'>{(searchFilter === "accommodation" && !isTotalPriceClicked && placeFilter !== "Efsaneler") ? "gece" : ""} {searchFilter === "accommodation" && isTotalPriceClicked && placeFilter !== "Efsaneler" ? "vergi hariç toplam" : ""}</span></p>}
             
            </div>
          
          )
        }) :
          <div className={`bg-white h-80 flex flex-col justify-center`}>
            {loading ? <Skeleton variant='text' width={100}></Skeleton> : <p p className='text-black xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl whitespace-nowrap'>Üzgünüz!</p>}
            {loading ? <Skeleton variant='text' width={400}></Skeleton> : <p className='text-black xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl whitespace-nowrap'>  Aradığınız kriterlere uygun yer bulunamadı.</p>}
          </div>
        }
      </div>
      {(filteredActivity.length > 8 && !isShowMoreClicked) &&
        <div className='flex flex-col items-center space-y-4'>
          {loading ? <Skeleton variant='text' width={400}></Skeleton> : <p className='font-medium text-lg'> Airbnb'de {placeFilter} kategorisini keşfetmeye devam edin </p>}
          {loading ? <Skeleton variant='rounded' width={100} height={30}></Skeleton> : <button onClick={ShowMoreHandler} className='bg-gray-800 hover:bg-black text-white py-3 px-6 rounded-lg'>Daha fazlasını göster</button>}
        </div>
      }
    </div>
  )
}

export default Home
