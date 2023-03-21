import React from 'react'
import { Link } from 'react-router-dom'

export default function UserModal({visible}) {
if(!visible) return null;
   return (
    <div className='sm:w-[13rem] h-[6rem] bg-[#212121] absolute opacity-40 hover:opacity-100 ml-[-2rem] hidden modal'>
    <p className='text-white hover:bg-sky-700'>Mi cuenta</p>
    <p className='text-white hover:bg-sky-700'>Ajustes</p>
   <Link to={"/login"}><p className='text-white hover:bg-sky-700'>Salir</p></Link> 
</div>
  )
}
