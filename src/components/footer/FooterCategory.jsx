import React from 'react'

import FooterCategories from '../../helpers/FooterCategories'

const FooterCategory = ({ categoryNumber, setCategoryNumber, categoryIndex, setCategoryIndex, isShowMoreClicked }) => {

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

    return (
        <div>
            <p className={`font-medium text-2xl tracking-normal ${isShowMoreClicked && "md:hidden"}`}>Gelecek tatilleriniz için fikirler</p>
            <div className={`flex border-b ${isShowMoreClicked && "md:hidden"}`}>
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
        </div>
    )
}

export default FooterCategory
