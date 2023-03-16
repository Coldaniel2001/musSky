import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import musicWoman from '../../assets/images/bgLoginRegister/modelPortada.png'
import logo from '../../assets/images/logo/LogoMusSky.png'
import Button from '../Button/Button'

const Login = () => {
  
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const navigate = useNavigate()

    const handleEmail = ({target}) => {
        setEmail(target.value);
    }
    const handlePassword = ({target}) => {
        setPassword(target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      if (email==="wilson@gmail.com" && password==="1234"){
        navigate('/')
      } else {
        console.log("correo incorrecto")
      };
    }

    return (
    <>
    <div className='w-full h-screen bg-gradient-to-t from-black via-black to-mainPurple flex justify-end overflow-hidden'>
        <img className='w-3/4 h-screen -mr-40 opacity-20' src={musicWoman} alt="MW" />
    </div>
    <div className='flex flex-col justify-center items-center fixed inset-0'>
        <img className='mb-12' src={logo} alt="Logo" />
    <div className='w-1/6 h-2/5 bg-opacity-20 bg-mainPurple border-2 border-purple-900 z-10 overflow-y-auto' >
        
        <form className='w-full h-full flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <div className='flex flex-col justify-between h-full w-4/5' >
            <input className='text-black outline-none' type="email" value={email} onChange={handleEmail} required/>
            <input className='text-white bg-transparent outline-none' type="password" value={password} onChange={handlePassword} required/>
            <Button type="submit" value="Login" classButton="bg-mainPurple rounded" />
            </div>
        </form>
    </div>
    </div>
    </>
    )
}

export default Login