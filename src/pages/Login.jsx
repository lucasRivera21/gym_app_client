import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import PasswordInput from '../components/PasswordInput';
import TextInput from '../components/EmailInput';
import ButtonViolet from '../components/ButtonViolet';

const schema = yup.object({
  email: yup.string().email("Correo inválido").required("Campo requerido"),
  password: yup.string().required("Campo requerido")

})

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  //Data from form
  const onSubmit = data => console.log(data);


  return (
    <div className=' w-screen h-screen flex justify-center items-center'>

      <div className="max-w-xs  h-auto ">

        {/*TITLE */}
        <h1 className="text-[2.5rem] font-bold mb-20">
          Entra a tu Cuenta
        </h1>

        {/*FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className='grid mb-7'>

          {/*EMAIL INPUT */}
          <TextInput register={register} error={errors.email?.message} label={'Email'} placeholder={"Ingrese su correo"} />

          {/*PASSWORD INPUT */}
          <PasswordInput register={register} error={errors.password?.message} label={'Contraseña'} />


          {/*SEND BUTTON */}
          {/*<button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80 mt-7'>Entrar</button> */}
          <ButtonViolet text={'Entrar'} />
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