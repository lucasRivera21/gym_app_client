import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import PasswordInput from '../components/PasswordInput';
import EmailInput from '../components/EmailInput';
import ButtonViolet from '../components/ButtonViolet';
import Alert from '../components/Alert';

import { TokenContext } from '../context/TokenContext';
import Cookies from 'js-cookie';

const schema = yup.object({
  email: yup.string().email("Correo inválido").required("Campo requerido"),
  password: yup.string().required("Campo requerido")
})

function Login() {

  const { setToken } = useContext(TokenContext)

  const root = import.meta.env.VITE_API_URL_ROOT

  const [loading, setLoading] = useState(false)
  const [errorInput, setErrorInput] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  //Data from form
  const onSubmit = async data => {
    setLoading(true)
    const res = await fetch(root + '/login/', {
      method: 'POST', body: new URLSearchParams({
        username: data.email,
        password: data.password,
      }), headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    const resJson = await res.json()
    if (res.status == 200) {
      setErrorInput(false)
      setToken(await resJson.access_token)
      Cookies.set('token', await resJson.access_token)
      navigate("/routines")
    } else if (res.status == 404 || res.status == 400) {
      setErrorInput(true)
    } else {
      console.log("error")
    }
    setLoading(false)
  }

  return (
    <div className=' w-screen h-screen flex justify-center items-center sm:bg-violet'>

      <div className="w-80 h-auto sm:bg-white sm:rounded-md sm:w-[28rem] sm:py-4 ">

        {/*TITLE */}
        <h1 className="text-[2.5rem] font-bold mb-20 sm:text-center">
          Entra a tu Cuenta
        </h1>

        {/*FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className='grid max-w-xs  mx-auto'>

          {/*ALERT */}
          {errorInput ? <Alert /> : null}

          {/*EMAIL INPUT */}
          <div className='mb-4 max-w-xs'>
            <EmailInput register={register} error={errors.email?.message} placeholder={"Ingrese su correo"} />
          </div>

          {/*PASSWORD INPUT */}
          <div className='mb-4 max-w-xs'>
            <PasswordInput register={register} error={errors.password?.message} label={'Contraseña'} />
          </div>

          {/*SEND BUTTON */}
          <div className='flex py-4'>
            <ButtonViolet text={'Entrar'} loading={loading} />
          </div>
        </form>

        {/*FORGOT PASSWORD LINK*/}
        <a href="#" className="font-normal underline underline-offset-4  flex w-fit mx-auto">¿Olvidaste tu contraseña?</a>

        {/*REGISTER LINK*/}
        <div className='flex justify-center mt-4'>
          <p className="mr-1 font-normal">¿Eres nuevo por acá?</p><a className="font-normal underline underline-offset-4 cursor-pointer" onClick={() => navigate("/register")}>Regístrate</a>
        </div>
      </div>
    </div>
  )
}

export default Login