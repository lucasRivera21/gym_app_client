import React from 'react'
import Loading from '../components/Loading'

function ButtonViolet({ text, sending }) {
    return (
        <button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80'>{sending ? <Loading /> : text}</button>
    )
}

export default ButtonViolet