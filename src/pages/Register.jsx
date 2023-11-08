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
    weight: yup.string().required("Campo requerido"),
    gender: yup.string().required("Campo requerido")
})

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const [sending, setsending] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const onSubmit = async data => {
        setsending(true)

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
            setsending(false)
        }

        if (res.id) {
            await fetch(`http://127.0.0.1:8000/weights/${res.id}`, { method: 'POST', body: JSON.stringify(userWeight), headers: { 'Content-Type': 'application/json' } })
            setsending(false)
            setError(false)
            navigate("/login")
        }
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='max-w-xs mx-auto '>
                <h1 className="text-[2.5rem] font-bold mb-16">Crea una Cuenta</h1>

                <form className='grid grid-cols-2' onSubmit={handleSubmit(onSubmit)}>

                    {/*NAME INPUT*/}
                    <div className='col-span-full'>
                        <TextInput register={register} error={errors.name?.message} />
                    </div>

                    {/*WEIGHT INPUT*/}
                    <div className='mb-4 '>
                        <WeightInput register={register} error={errors.weight?.message} />
                    </div>

                    {/*GENDER INPUT*/}
                    <div>
                        <GenderInput register={register} error={errors.gender?.message} />
                    </div>

                    {/*EMAIL INPUT*/}
                    <div className='col-span-full mb-4'>
                        <EmailInput register={register} error={errors.email?.message} />
                        {error ? <span className='text-red-500 text-sm block'>Este email ya existe</span> : null}
                    </div>

                    {/*PASSWORD INPUT*/}
                    <div className='col-span-full mb-4'>
                        <PasswordInput register={register} error={errors.password?.message} label={'Contraseña'} />
                    </div>

                    {/*TERMS AND CONDITIONS */}
                    <div className='col-span-full'>
                        <p className='text-sm font-normal text-gray-500'>Al registrarte aceptas los <a className='underline cursor-pointer'>Términos y Condiciones</a> de uso</p>
                    </div>

                    {/*SEND BUTTON */}
                    <div className='col-span-full flex py-5'>
                        <ButtonViolet text={'Registrarse'} sending={sending} />

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