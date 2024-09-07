import React from 'react'

const AccountMenu = () => {
  return (
    <div className='absolute bg-white w-56 h-56 right-0 top-14 shadow-menu-shadow z-10 rounded-3xl px-5 py-2 text-sm'>
      <div className='border-b'>
        <div className='hover:bg-gray-100 h-12 flex items-center'>
          <p>Kaydolun</p>
        </div>
        <div className='hover:bg-gray-100 h-12 mb-2 flex items-center'>
          <p className=''>Oturum açın</p>
        </div>
      </div>
      <div className='hover:bg-gray-100 h-12 mt-2 flex items-center'>
        <p>Evinizi Airbnb'ye taşıyın</p>
      </div>
      <div className='hover:bg-gray-100 h-12 flex items-center'>
        <p>Yardım Merkezi</p>
      </div>
    </div>
  )
}

export default AccountMenu