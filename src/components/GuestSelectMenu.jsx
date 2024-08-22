import React from 'react'
import Counter from './Counter'

const GuestSelectMenu = ({adults,children,infants,pets,setAdults,setChildren,setInfants,setPets,total,searchFilter}) => {
  
   

  return (
    <div className={`bg-white ${searchFilter === "accommodation" ? "h-[28rem]" : "h-80" }  w-menu-width absolute top-20 shadow-menu-shadow  z-10 rounded-3xl right-0 px-10 py-4`}>
        <div className='flex border-b items-center py-5 justify-between'>
            <div>
                <p className='text-xl pb-1'>Yetişkinler</p>
                <p className='text-faint-text'>13 yaş ve üstü</p>
            </div>
            <div>
                <Counter count={adults} setCount={setAdults} maxLimit={total >= 16 ? adults: null}></Counter>
            </div>
        </div>
        <div className='flex border-b items-center py-5 justify-between'>
            <div>
                <p className='text-xl pb-1'>Çocuklar</p>
                <p className='text-faint-text'>2-12 yaş</p>
            </div>
            <div>
                <Counter count={children} setCount={setChildren} maxLimit={total >= 16 ? children: null}></Counter>
            </div>
        </div>
        <div className={`flex ${searchFilter === "accommodation" ? "border-b" : "" } items-center py-6 justify-between`}>
            <div>
                <p className='text-xl pb-1'>Bebekler</p>
                <p className='text-faint-text'>2 yaş altı</p>
            </div>
            <div>
                <Counter count={infants} setCount={setInfants} maxLimit={5}></Counter>
            </div>
        </div>
        {searchFilter === "accommodation" ? 
        <div className='py-6'>
        <div>
            <p className='text-xl pb-1'>Evcil Hayvanlar</p>
            <p className='text-faint-text cursor-pointer underline'>Yanınızda hizmet hayvanı mı getiriyorsunuz ?</p>
        </div>
        <div className='pt-2'>
            <Counter count={pets} setCount={setPets} maxLimit={5}></Counter>
        </div>
    </div>
     : ""
     }
        
    </div>
  )
}

export default GuestSelectMenu