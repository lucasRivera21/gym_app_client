import React from 'react'

function RoutineBox({ name, exercises }) {
    return (
        <div className='bg-white p-2 rounded-lg shadow-md mb-6 h-40 relative'>
            <h2 className='font-bold text-base'>{name}</h2>
            <p className='font-extralight text-xs mb-4'>{exercises.length}{exercises.length == 1 ? ' Ejercicio' : ' Ejercicios'}</p>

            <div className='mb-2'>
                {exercises.map((exercise, index) => {
                    return index < 3 ? <p className='font-light text-sm' key={exercise.exercise.id}>{exercise.exercise.name}</p> : null
                })}

            </div>

            <div className='flex justify-between absolute w-[calc(100%-1rem)] bottom-2'>
                <p className='font-normal text-sm text-violet'>Ver más</p>
                <p className='font-normal text-sm text-violet'>Eliminar</p>
            </div>
        </div>
    )
}

export default RoutineBox