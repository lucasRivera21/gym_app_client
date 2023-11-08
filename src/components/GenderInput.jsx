import React from 'react'

function GenderInput({ register, error }) {
    return (
        <>
            <label htmlFor="gender" className='text-base font-semibold'>Sexo:</label>
            <ul className="grid w-full grid-cols-2 mt-2" >
                <li>
                    <input type="radio" name="gender" id='gender-m' value='M' className='hidden peer'  {...register('gender')} />
                    <label htmlFor="gender-m" className='inline-flex items-center justify-between p-4 text-base h-12 font-semibold bg-white border border-violet rounded-lg cursor-pointer  peer-checked:border-violet peer-checked:text-white peer-checked:bg-violet' >
                        <div>
                            <p>M</p>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="radio" name="gender" id='gender-f' value='F' className='hidden peer' {...register('gender')} />
                    <label htmlFor="gender-f" className='inline-flex items-center justify-between p-4 min-w-[3rem] text-base h-12 font-semibold bg-white border border-violet rounded-lg cursor-pointer  peer-checked:border-violet peer-checked:text-white peer-checked:bg-violet'>
                        <div className='mx-auto'>
                            <p>F</p>
                        </div>
                    </label>
                </li>
            </ul>
            <span className='text-red-500 text-sm block'>{error}</span>
        </>
    )
}

export default GenderInput