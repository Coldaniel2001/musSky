import React, { useContext, useState } from 'react'


import chica from "../assets/images/bgLoginRegister/MusSkyModel.png"
import logo from "../assets/images/logo/LogoMusSky.png"
import UserContext from '../../context/UserContext';
import toast from "react-hot-toast"
import { useAuth0 } from '@auth0/auth0-react';

function FinalRegister() {
    const { updateUser, userLogged } = useContext(UserContext);
    const { user } = useAuth0();

   

    const currentDate = new Date(); const day = currentDate.getDate(); const month = currentDate.getMonth() + 1; const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const [userComplete, setUserComplete] = useState({
      name: "",
      surname: "",
      nickname: "",
      email: user?.email,
      picture: user?.picture,
      update_at: formattedDate,
      rol: "",
    })

    const handleChangeSubmit = (e) => {
      setUserComplete({...userComplete, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(userLogged._id, userComplete)
    toast.success("El registro ha sido todo un exito")
    }



  
  return (
    

    <div className=' bg-black  bg-gradient-to-b from-[#7339E5] from-10% via-black  to-black h-screen flex flex-col justify-center items-center object-cover  relative overflow-hidden w-full '> 
      <img src={chica} className=' h-screen w-screen absolute left-[25rem] top-[5rem] scale-150 min-xl:w-[100vh]  min-xl:block ' alt='noimage'/>
      <form onSubmit={handleSubmit} className=' gap-y-10 rounded-lg border-2 border-[#7339E5]  h-fit absolute flex flex-col items-center justify-center bg-[#7339E5] bg-opacity-25 w-[22rem]  '>
            <img src={logo} className='w-[10rem] mt-5'alt='noimage'/>
            <h2 className='text-white text-xl font-bold'>Finaliza tu registro</h2>
            <div className='flex flex-col gap-5 w-full px-6'>
              <input className='text-sm text-white border-b bg-transparent focus:outline-none focus:ring-0'
                type='text' 
                placeholder='Nombre' 
                name='name'
                value={userComplete.name}
                onChange={handleChangeSubmit}/>
              <input className='text-sm text-white  border-b bg-transparent focus:outline-none focus:ring-0' 
                type='text'  
                placeholder='Apellidos'
                name='surname'
                value={userComplete.surname}
                onChange={handleChangeSubmit}/>
              <input className=' text-sm text-white border-b bg-transparent focus:outline-none focus:ring-0 ' 
                type='text' 
                placeholder='Nombre de usuario' 
                name='nickname'
                value={userComplete.nickname}
                onChange={handleChangeSubmit}/>   
              <p className='text-white opacity-100 font-bold'>¿Que vas a hacer en MusSky?</p>
              <label className='flex gap-x-3'>
                <input 
                  type='radio' 
                  name='rol'
                  value='user'
                  onChange={handleChangeSubmit}/>
                <p className='text-white text-sm'>Solo escuchar musica</p>
              </label>
              <label className='flex gap-x-3 '>
                <input 
                  type='radio' 
                  name="rol"
                  value="artist" 
                  onChange={handleChangeSubmit} />
                <p className='text-white text-sm none'>Escuchar musica y subir mis canciones</p>
              </label>
            </div>
            <button type='submit' className='rounded-md text-white bg-[#7339E5] w-[12rem] h-[2rem] mb-10'>Acceder</button>
    </form>
    </div>
  )
}

export default FinalRegister
