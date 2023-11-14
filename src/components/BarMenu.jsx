import React from 'react'
import { AiOutlineLineChart } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

function BarMenu() {
    return (
        <div className='grid grid-cols-3 bg-white'>
            <button className='p-1 rounded-t-lg'>
                <AiOutlineLineChart className='text-4xl mx-auto mb-1' />
                <p className='text-xs'>Estadísticas</p>
            </button>
            <button className='bg-violet p-1 rounded-t-lg'>
                <AiFillProfile className='text-4xl mx-auto mb-1 text-white' />
                <p className='text-xs text-white'>Ejercicios</p>
            </button>
            <button className='p-1 rounded-t-lg'>
                <AiOutlineUser className='text-4xl mx-auto mb-1' />
                <p className='text-xs'>yo</p>
            </button>
        </div>
    )
}

export default BarMenu