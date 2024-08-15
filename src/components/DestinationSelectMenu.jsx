import React from 'react'
import DestinationMenu from '../helpers/DestinationMenu'

const DestinationSelectMenu = () => {
  return (
    <div className='bg-white w-menu-width h-menu-height shadow-menu-shadow top-20 z-10 absolute rounded-3xl left-2'>
        <p className='mx-7 my-4 font-medium'>Bölgeye göre arayın</p>
        <div className='grid grid-cols-3 mx-5'>
            {DestinationMenu.map((item)=>{
                return(
                    <div key={item.id} className='cursor-pointer w-32 h-44 hover:bg-search-bg rounded-xl mb-2 pt-2'>
                    <img className='m-auto w-28 h-32 rounded-xl' src={item.img} />
                    <p className='ml-2 mt-2'>{item.name}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default DestinationSelectMenu