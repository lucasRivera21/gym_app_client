import React, { useEffect, useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { set } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RoutineBox from '../components/RoutineBox';
import NewRoutineBox from '../components/NewRoutineBox';
import BarMenu from '../components/BarMenu';
import Loading from '../components/Loading';

//env variables
const root = import.meta.env.VITE_API_URL_ROOT

function Routines() {
    const [routineData, setRoutineData] = useState([])
    const [loading, setLoading] = useState(true)

    const token = Cookies.get('token');
    //get user
    const getRoutine = async () => {
        const res = await fetch(root + '/routine/', { method: 'GET', headers: { Authorization: `Bearer ${token}` } })
        const resJson = await res.json()
        setRoutineData(resJson)
        setLoading(false)
        console.log(resJson)
    }

    const navigate = useNavigate();

    const authCookies = () => {
        if (!token) {
            navigate('/login')
        }
    }

    useEffect(() => {
        authCookies()
        getRoutine()
    }, [])

    return (
        <div className='w-full h-screen bg-[#F2F2F4] relative'>
            {loading ? <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'><Loading /></div> : <div className='px-10 py-6'>
                <h1 className='text-3xl font-bold mb-6' >Rutina Diaria</h1>
                <div>
                    {routineData && routineData.map(function (routine) {
                        return (<RoutineBox name={routine.name} exercises={routine.exercises_user} key={routine.id} />)
                    })}
                </div>
                <div>
                    <NewRoutineBox />
                </div>
            </div>}
            <div className='absolute w-full bottom-0'>
                <BarMenu />
            </div>
        </div>

    )
}

export default Routines