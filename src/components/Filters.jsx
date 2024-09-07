import React from 'react'

import { IoIosClose } from "react-icons/io";

const Filters = ({FiltersCloseHandler}) => {
  return (
    <div className='bg-white z-50 absolute w-[30rem] h-[42rem] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl'>
        <div onClick={FiltersCloseHandler} className='cursor-pointer rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center ml-6 mt-3'>
       <IoIosClose className='text-3xl'></IoIosClose>
       </div>
    </div>
  )
}

export default Filters