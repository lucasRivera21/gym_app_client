import React from 'react'

function TextInput({ register, error }) {
    return (
        <>
            <label htmlFor={"name"} className='text-base font-semibold'>Nombre:</label>
            <div className='mb-4 mt-2'>
                <input type="text" name={"name"} id={"name"} placeholder={"Ingrese su nombre"} {...register('name')} className=' border-violet rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-violet w-full' />
                <span className='text-red-500 text-sm block'>{error}</span>
            </div>
        </>
    )
}

export default TextInput