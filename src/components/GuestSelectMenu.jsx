import React from 'react'
import Counter from './Counter'

const GuestSelectMenu = ({ isMobileSearchClicked, adults, children, infants, pets, setAdults, setChildren, setInfants, setPets, total, searchFilter, ServiceAnimalHandler }) => {

    return (
        <div className={`bg-white ${(!isMobileSearchClicked && searchFilter === "accommodation") ? "h-[28rem]" : "h-80"}  absolute top-16 shadow-menu-shadow z-20 rounded-3xl right-0 px-10 py-4 ${isMobileSearchClicked ? "w-full" : "w-menu-width"} ${isMobileSearchClicked ? (searchFilter === "experiences" ? "h-60" : "h-[20rem]") : ""} `}>
            <div className={`flex border-b items-center justify-between ${isMobileSearchClicked ? "py-2" : "py-5"}`}>
                <div>
                    <p className={`pb-1 ${isMobileSearchClicked ? "text-base font-medium" : "text-xl "}`}>Yetişkinler</p>
                    <p className={`text-faint-text ${isMobileSearchClicked ? "text-sm" : ""}`}>13 yaş ve üstü</p>
                </div>
                <div>
                    <Counter count={adults} setCount={setAdults} maxLimit={total >= 16 ? adults : null}></Counter>
                </div>
            </div>
            <div className={`flex border-b items-center justify-between ${isMobileSearchClicked ? "py-2" : "py-5"}`}>
                <div>
                    <p className={`pb-1 ${isMobileSearchClicked ? "text-base font-medium" : "text-xl "}`}>Çocuklar</p>
                    <p className={`text-faint-text ${isMobileSearchClicked ? "text-sm" : ""}`}>2-12 yaş</p>
                </div>
                <div>
                    <Counter count={children} setCount={setChildren} maxLimit={total >= 16 ? children : null}></Counter>
                </div>
            </div>
            <div className={`flex ${searchFilter === "accommodation" ? "border-b" : ""} items-center justify-between ${isMobileSearchClicked ? "py-2" : "py-6"}`}>
                <div>
                    <p className={`pb-1 ${isMobileSearchClicked ? "text-base font-medium" : "text-xl "}`}>Bebekler</p>
                    <p className={`text-faint-text ${isMobileSearchClicked ? "text-sm" : ""}`}>2 yaş altı</p>
                </div>
                <div>
                    <Counter count={infants} setCount={setInfants} maxLimit={5}></Counter>
                </div>
            </div>
            {searchFilter === "accommodation" ?
                <div className='${isMobileSearchClicked ? "py-2" : "py-5"}'>
                    <div>
                        <p className={`pb-1 ${isMobileSearchClicked ? "text-base font-medium" : "text-xl "}`}>Evcil Hayvanlar</p>
                        <p onClick={ServiceAnimalHandler} className={`text-faint-text  ${isMobileSearchClicked ? "text-sm" : ""} cursor-pointer underline`}>Yanınızda hizmet hayvanı mı getiriyorsunuz ?</p>
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