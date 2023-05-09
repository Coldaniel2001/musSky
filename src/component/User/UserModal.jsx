import React from 'react'

import { useAuth0 } from "@auth0/auth0-react"

export default function UserModal() {
  const { logout } = useAuth0()
   return (
    <div className='sm:w-[13rem]  bg-[#f4f1f7] absolute hover:opacity-100 ml-[-2rem] rounded-md'>
      <p className=' hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>Mi cuenta</p>
      <p className=' hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>Ajustes</p>
      <p onClick={()=>logout({logoutParams:{returnTo: window.location.origin + '/home'}})} className='hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>Salir</p>
  </div>
  )
}
