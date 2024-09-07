import React from 'react'
import ServiceAnimalFoto from "../assets/serviceAnimal.jpg";
import { IoIosClose } from "react-icons/io";

const ServiceAnimal = ({ ServiceAnimalCloseHandler }) => {
  return (
    <div className='bg-white z-50 absolute w-[30rem] h-[42rem] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl'>
      <div onClick={ServiceAnimalCloseHandler} className='cursor-pointer rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center ml-6 mt-3'>
        <IoIosClose className='text-3xl'></IoIosClose>
      </div>
      <img className='w-[26rem] h-[28rem] mx-auto mt-2 mb-5' src={ServiceAnimalFoto} alt="" />
      <p className='font-semibold mb-3 text-xl pl-8'>Hizmet hayvanları</p>
      <p className='font-light mb-4 pl-8 leading-tight'>Hizmet hayvanları evcil hayvan değildir, bu nedenle onları buraya eklemenize gerek yoktur.</p>
      <p className='font-light pl-8 leading-tight'>Duygusal destek hayvanıyla mı seyahat ediyorsunuz? <p className='inline underline font-semibold cursor-pointer'>Erişilebilirlik Politikamıza</p> göz atın.</p>
    </div>
  )
}

export default ServiceAnimal