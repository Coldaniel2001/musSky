import React from 'react'

import { useAuth0 } from "@auth0/auth0-react"

export default function UserModal() {
  const { logout } = useAuth0()
   return (
    <div className='sm:w-[13rem] h-[6rem] bg-[#f4f1f7] absolute hover:opacity-100 ml-[-2rem] rounded-md'>
    <p className=' hover:bg-[#7239e526] ml-2 cursor-pointer '>Mi cuenta</p>
    <p className=' hover:bg-[#7239e526] ml-2 cursor-pointer '>Ajustes</p>
   <p onClick={()=>logout({logoutParams:{returnTo: window.location.origin + '/home'}})} className=' ml-2  hover:bg-[#7239e526] '>Salir</p>
</div>
  )
}
