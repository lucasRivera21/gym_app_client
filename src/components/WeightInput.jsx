import React from 'react'

function WeightInput({ register, error }) {
    return (
        <>
            <label htmlFor="weight" className="text-base font-semibold ">Peso:</label>
            <div className='mt-2'>
                <input type="number" name='weight' id="weight" className='w-20 rounded-md h-12 mr-1 pl-3 border-violet border focus:outline-none focus:ring-1 focus:ring-violet appearance-none sm:h-10' placeholder='Ej: 70.5' {...register('weight')} />
                <select name="magnitude" id='magnitude' className="p-3 rounded-md text-base font-bold appearance-none cursor-pointer border-violet border focus:outline-none focus:ring-1 focus:ring-violet sm:py-2 " {...register('magnitude')}>
                    <option value="kg" defaultChecked>Kg</option>
                    <option value="lb">Lb</option>
                </select>
            </div>
            <span className='text-red-500 text-sm block'>{error}</span>
        </>
    )
}

export default WeightInput