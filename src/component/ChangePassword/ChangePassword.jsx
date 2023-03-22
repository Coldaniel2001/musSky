import React from 'react'

const ChangePassword = () => {
  return (
    <div>
        <h2 className='text-white text-[2rem] font-extrabold'>CONFIGURATION</h2>
        <p className='font-bold text-xl mt-5'>Contraseña</p>
        <p className='text-[#a1a1a1]'>Si cambias tu contraseña, tendrás que volver a iniciar sesión en otros dispositivos.</p>
        <form className='flex gap-5 mt-5'>
            <div className='flex flex-col'>
                <label htmlFor="">Contraseña actual</label>
                <input className='rounded h-[2rem] w-[14rem]' type="password" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Nueva contraseña</label>
                <input className='rounded h-[2rem] w-[14rem]' type="password" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Confirma nueva contraseña</label>
                <input className='rounded h-[2rem] w-[14rem]' type="password" />
            </div>
            <div className='flex items-end'>
                <button className='bg-[#7C8BBF] h-[2rem] px-3 rounded'>Actualizar contraseña</button>
            </div>
            
        </form>
        
    </div>
  )
}

export default ChangePassword