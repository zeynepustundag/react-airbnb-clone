import React from 'react'

import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const Counter = ({ count, setCount, maxLimit }) => {

    const IncreseCounter = () => {
        setCount((prevState) => {
            if (prevState === maxLimit) {
                return prevState;
            }
            return prevState + 1;
        })
    }
    const DecreaseCounter = () => {
        setCount((prevState) => {
            if (prevState > 0) {
                return prevState - 1
            }
            return prevState;
        })
    }
    return (
        <div className='flex items-center space-x-5'>
            <CiCircleMinus onClick={DecreaseCounter} className={`cursor-pointer text-4xl  text-gray-400  ${count > 0 ? "hover:text-black" : "cursor-not-allowed text-opacity-30"}`} />
            <p className='text-base'>{`${count === 16 ? count + "+" : count}`}</p>
            <CiCirclePlus onClick={IncreseCounter} className={`cursor-pointer text-4xl  text-gray-400  ${count === maxLimit ? "cursor-not-allowed text-opacity-30" : "hover:text-black"}`} />
        </div>
    )
}

export default Counter