import React, { useEffect, useState } from 'react'

import FooterCategory from './footer/FooterCategory';
import FooterPlace from './footer/FooterPlace';
import FooterInfo from './footer/FooterInfo';
import FooterBottom from './footer/FooterBottom';

const Footer = ({ isShowMoreClicked, footerInfoRef, FooterInfoHandler, isFooterInfoClicked, FooterInfoCloseHandler }) => {

    const [categoryNumber, setCategoryNumber] = useState(0);
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [placeIndex, setPlaceIndex] = useState(7);


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

    return (
        <div className={`bg-gray-100 px-4 lg:px-20 bottom-0 relative ${isShowMoreClicked ? "md:bg-white md:border-t md:sticky md:z-30" : "bg-gray-100 py-10"} `}>
            <FooterCategory categoryNumber={categoryNumber} setCategoryNumber={setCategoryNumber} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} isShowMoreClicked={isShowMoreClicked}></FooterCategory>
            <FooterPlace categoryNumber={categoryNumber} placeIndex={placeIndex} setPlaceIndex={setPlaceIndex} isShowMoreClicked={isShowMoreClicked}></FooterPlace>
            {isFooterInfoClicked ? (<>
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 40,
                }}></div><div ref={footerInfoRef} ><FooterInfo FooterInfoCloseHandler={FooterInfoCloseHandler} isShowMoreClicked={isShowMoreClicked} isFooterInfoClicked={isFooterInfoClicked}></FooterInfo></div>  </>)
                :
                <FooterInfo isShowMoreClicked={isShowMoreClicked} FooterInfoCloseHandler={FooterInfoCloseHandler} isFooterInfoClicked={isFooterInfoClicked}></FooterInfo>
            }
            <FooterBottom isShowMoreClicked={isShowMoreClicked} FooterInfoHandler={FooterInfoHandler}></FooterBottom>
        </div>
    )
}

export default Footer