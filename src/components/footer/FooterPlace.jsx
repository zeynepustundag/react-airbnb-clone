import React from 'react'

import FooterCategories from '../../helpers/FooterCategories'
import FooterPlaces from '../../helpers/FooterPlaces'

import { IoIosArrowDown } from "react-icons/io";

const FooterPlace = ({ categoryNumber, placeIndex, setPlaceIndex, isShowMoreClicked }) => {

    const filteredPlace = FooterPlaces.filter((item) => item.category === FooterCategories[categoryNumber]);

    const showMoreHandler = () => {
        setPlaceIndex(filteredPlace.length)
    }
    return (
        <div className={`grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 space-y-2 py-12 border-b ${isShowMoreClicked && "md:hidden"}`}>
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
    )
}

export default FooterPlace