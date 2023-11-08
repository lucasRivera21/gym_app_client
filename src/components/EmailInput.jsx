import React from 'react'


function EmailInput({ register, error, label, placeholder }) {

    return (
        <>
            <label htmlFor={"email"} className='text-base font-semibold'>Email:</label>
            <div className=' mt-2'>
                <input type="text" name={"email"} id={"email"} placeholder={"Ingrese su correo"} {...register('email')} className=' border-violet rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-violet w-full' />
                <span className='text-red-500 text-sm block'>{error}</span>
            </div>
        </>

    )
}

export default EmailInput