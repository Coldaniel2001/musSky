import React, { useContext } from 'react'
import chica from "../assets/images/bgLoginRegister/MusSkyModel.png"
import logo from "../assets/images/logo/LogoMusSky.png"
import UserContext from '../context/UserContext';
import toast from "react-hot-toast"

function FinalRegister() {
    const { userLogged } = useContext(UserContext);
    console.log(userLogged)
    
    const handleUserLogged=(e)=>{
      e.preventDefault()
     if(!userLogged){
      
        toast.error("error:Validate email")
     }
    }
  return (
    

    <div className=' bg-black  bg-gradient-to-b from-[#7339E5] from-10% via-black via-30% to-black to-90% h-screen flex flex-col justify-center items-center object-cover  relative overflow-hidden w-full h-full '> 

    <img src={chica} className=' h-screen w-screen absolute left-[25rem] top-[5rem] scale-150 min-xl:w-[100vh]  min-xl:block ' alt='noimage'/>
    
    <form className=' gap-y-5 rounded-lg border-2 border-[#7339E5]  h-fit absolute flex flex-col items-center justify-center bg-[#7339E5] bg-opacity-25 justify-between w-[19rem] '>
        
            <img src={logo} className='w-[10rem] 'alt='noimage'/>
            <p className='text-white text-xl font-bold'>Finaliza tu registro</p>
            <div>

            </div>
            <div className='flex flex-col gap-5'>

            <input type='text' placeholder='Nombre' className='text-sm text-white border-b-2 bg-transparent w-[14rem]'/>
            <input type='text'  placeholder='Apellido' className='text-sm text-white  border-b-2 bg-transparent w-[14rem]'/>
            <input type='text' placeholder='Nombre de usuario' className=' text-sm text-white border-b-2 bg-transparent w-[14rem] text-[#7339E5] '/>
            <p className='text-white opacity-100 font-bold'>¿Que vas a hacer en MusSky?</p>

            <label className='flex gap-x-3'>

            <input type='radio' name='uno'/>
            <p className='text-white text-sm '>Solo escuchar musica</p>
            
            </label>
    
            <label className='flex gap-x-3 '>

          
           <input type='radio' name="uno"  /><p className='text-white text-sm none'>Escuchar musica i subir mis<br></br>  canciones</p>
           
            
            </label>
            
            </div>

            <button type='submit' onClick={handleUserLogged} className='rounded-md text-white bg-[#7339E5] w-[12rem] h-[2rem] mb-[2rem]'>Acceder</button>
          
           
    </form>
    </div>
    
  )
}

export default FinalRegister
