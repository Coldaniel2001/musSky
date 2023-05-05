import React from 'react'
import chica from "../assets/images/bgLoginRegister/MusSkyModel.png"
import logo from "../assets/images/logo/LogoMusSky.png"
function FinalRegister() {
  return (
    <div className='bg-black  bg-gradient-to-b from-[#7339E5] from-10% via-black via-30% to-black to-90% h-screen flex flex-col justify-center items-center  relative'> 

    <img src={chica} className='wr-[4rem] h-screen w-screen'/>
    
    <form className='gap-y-5 rounded-lg border-2 border-[#7339E5] w-fit h-fit absolute flex flex-col items-center justify-center bg-[#7339E5] bg-opacity-25 justify-between'>
        
            <img src={logo}/>
            <p className='text-white'>Finaliza tu registro</p>
            <input type='text' placeholder='Nombre' className='text-white border-b-2 bg-transparent'/>
            <input type='text'  placeholder='Apellido' className='text-white  border-b-2 bg-transparent'/>
            <input type='text' placeholder='Nombre de usuario' className='text-white border-b-2 bg-transparent'/>
            <p className='text-white'>¿Que vas a hacer en MusSky</p>

            <label className='flex '>

            <input type='radio' name='uno'/>
            <p className='text-white'>Solo escuchar musica</p>
            
            </label>
    
            <label className='flex '>

          
           <input type='radio' name="uno"  /><p className='text-white'>Escuchar musica i subir mis canciones</p>
           
            
            </label>
            

            <button type='submit'  className='text-white'>Acceder</button>
          
        
    </form>
    </div>
  )
}

export default FinalRegister