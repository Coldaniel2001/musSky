import React from 'react'
import { Link } from 'react-router-dom'

export default function UserModal() {

   return (
    <div className='sm:w-[13rem] h-[6rem] bg-[#f4f1f7] absolute hover:opacity-100 ml-[-2rem] rounded-md   modal'>
    <p className=' hover:bg-[#7239e526] ml-2 cursor-pointer '>Mi cuenta</p>
    <p className=' hover:bg-[#7239e526] ml-2 cursor-pointer '>Ajustes</p>
   <Link to={"/login"}><p className=' ml-2  hover:bg-[#7239e526] '>Salir</p></Link> 
</div>
  )
}
