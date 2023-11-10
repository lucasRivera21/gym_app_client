import React from 'react'
import Loading from '../components/Loading'

function ButtonViolet({ text, loading = false }) {
    return (
        <button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80'>{loading ? <Loading /> : text}</button>
    )
}

export default ButtonViolet