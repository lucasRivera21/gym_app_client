import React, { useState } from 'react'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import ButtonViolet from '../components/ButtonViolet'
import TextInput from '../components/TextInput'
import WeightInput from '../components/WeightInput'
import GenderInput from '../components/GenderInput'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
    email: yup.string().email("Correo inválido").required("Campo requerido"),
    password: yup.string().required("Campo requerido"),
    name: yup.string().required("Campo requerido"),
    weight: yup.number().typeError('Solo números').required("Campo requerido").min(10, "Peso inválido"),
    gender: yup.string().required("Campo requerido")
})

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    //send data to api
    const onSubmit = async data => {
        setLoading(true)
        console.log(data)
        const userWeight = {}
        userWeight.weight = parseFloat(data.weight)
        userWeight.magnitude = data.magnitude
        delete data.weight
        delete data.magnitude


        const userRes = await fetch('http://127.0.0.1:8000/users/', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
        const res = await userRes.json()


        if (userRes.status == 201) {
            setError(false)
        } else {
            setError(true)
            setLoading(false)
        }

        if (res.id) {
            await fetch(`http://127.0.0.1:8000/weights/${res.id}`, { method: 'POST', body: JSON.stringify(userWeight), headers: { 'Content-Type': 'application/json' } })
            setLoading(false)
            setError(false)
            navigate("/login")
        }
    }

    return (
        <div className='h-screen w-full flex items-center justify-center p-2 sm:bg-violet'>
            <div className=' h-auto sm:bg-white sm:py-5 sm:rounded-md sm:w-4/5 max-w-2xl sm:px-6'>
                <h1 className="text-[2.5rem] font-bold mb-7 sm:text-center">Crea una Cuenta</h1>

                <form className='grid grid-cols-2 sm:grid-cols-4 sm:gap-x-5  max-sm:max-w-xs p-2' onSubmit={handleSubmit(onSubmit)}>

                    {/*NAME INPUT*/}
                    <div className='col-span-full max-w-xs sm:col-span-2 '>
                        <TextInput register={register} error={errors.name?.message} />
                    </div>

                    {/*WEIGHT INPUT*/}
                    <div className='mb-4'>
                        <WeightInput register={register} error={errors.weight?.message} />
                    </div>

                    {/*GENDER INPUT*/}
                    <div className='w-fit'>
                        <GenderInput register={register} error={errors.gender?.message} />
                    </div>

                    {/*EMAIL INPUT*/}
                    <div className='col-span-full mb-4 max-w-xs sm:col-span-2'>
                        <EmailInput register={register} error={errors.email?.message} />
                        {error ? <span className='text-red-500 text-sm block'>Este email ya existe</span> : null}
                    </div>

                    {/*PASSWORD INPUT*/}
                    <div className='col-span-full mb-4 max-w-xs sm:col-span-2' >
                        <PasswordInput register={register} error={errors.password?.message} label={'Contraseña'} />
                    </div>

                    {/*TERMS AND CONDITIONS */}
                    <div className='col-span-full'>
                        <p className='text-sm font-normal text-gray-500 sm:text-center'>Al registrarte aceptas los <a className='underline cursor-pointer'>Términos y Condiciones</a> de uso</p>
                    </div>

                    {/*SEND BUTTON */}
                    <div className='col-span-full flex py-5'>
                        <ButtonViolet text={'Registrarse'} loading={loading} />

                    </div>

                </form>

                <div className="flex w-fit mx-auto">
                    <p className="mr-1">¿Ya tienes una cuenta?</p><a className="underline-offset-2 underline cursor-pointer" onClick={() => navigate("/login")}>Inicia Sesión</a>
                </div>
            </div>
        </div>
    )
}

export default Register