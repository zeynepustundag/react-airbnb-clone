import React from 'react'
import DestinationMenu from '../helpers/DestinationMenu'
import DestinationInfos from '../helpers/DestinationInfos'

import { CiLocationOn } from "react-icons/ci";

const DestinationSelectMenu = ({ searchDestination, isMobileSearchClicked, setSearchDestination, setDestination, setClickedDiv }) => {

  const DestinationSelectHandler = (item) => {
    setClickedDiv("checkin");
    setDestination(item);
    setSearchDestination(item);
  };

  // console.log(ClickedDiv);
  // console.log(destination);

  return (
    <div className={`bg-white shadow-menu-shadow absolute top-16 z-20 left-2 rounded-3xl ${searchDestination ? "h-96" : "h-menu-height"} ${isMobileSearchClicked ? "w-full" : "w-menu-width"} ${isMobileSearchClicked ? "h-64" : ""}`}>
      {searchDestination ?
        <div className='py-8 px-4'>
          {DestinationInfos.filter(item => item.toLowerCase().includes(searchDestination.toLowerCase())
          ).slice(0, isMobileSearchClicked ? 3 : 5).map((item, index) => {
            return (
              <div key={index} onClick={() => DestinationSelectHandler(item)} className='flex space-x-3 hover:bg-gray-100 cursor-pointer h-16 items-center rounded-lg'>
                <div className='w-12 h-12 bg-search-bg rounded-lg flex items-center justify-center ml-2'>
                  <CiLocationOn className='text-3xl' />
                </div>
                <p className='text-base font-light' >{item}</p>
              </div>
            )
          })
          }
        </div>
        :
        <div>
          <p className='mx-7 my-4 font-medium'>Bölgeye göre arayın</p>
          <div className={` ${isMobileSearchClicked ? "flex" : "grid grid-cols-3 mx-5"}`}>
            {DestinationMenu.map((item) => {
              return (
                <div key={item.id} onClick={() => DestinationSelectHandler(item.name)} className='cursor-pointer w-32 h-44 hover:bg-search-bg rounded-xl mb-2 pt-2'>
                  <img className='m-auto w-28 h-32 rounded-xl' src={item.img}></img>
                  <p className='ml-2 mt-2'>{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      }
    </div>
  )
}

export default DestinationSelectMenu