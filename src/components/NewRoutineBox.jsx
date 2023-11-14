import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

function NewRoutineBox() {
    return (
        <div className='bg-white h-36 p-4 rounded-lg shadow-md'>
            <h2 className='font-semibold text-xl text-violet text-center mb-4'>Agrega una Nueva Rutina</h2>
            <AiFillPlusCircle className='text-5xl mx-auto text-violet' />
        </div>
    )
}

export default NewRoutineBox