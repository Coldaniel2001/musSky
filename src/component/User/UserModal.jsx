import React from 'react'
import { Link } from 'react-router-dom'

export default function UserModal({}) {

   return (
    <div className='sm:w-[13rem] h-[6rem] bg-[#ebe9ed] absolute opacity-40 hover:opacity-100 ml-[-2rem] rounded-md   modal'>
    <p className=' hover:bg-sky-700 ml-2 cursor-pointer'>Mi cuenta</p>
    <p className=' hover:bg-sky-700 ml-2 cursor-pointer'>Ajustes</p>
   <Link to={"/login"}><p className=' ml-2 hover:bg-sky-700'>Salir</p></Link> 
</div>
  )
}
