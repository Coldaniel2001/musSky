import React, { useContext, useState } from 'react'
import logo from '../../assets/images/icons/logo.png'


import { useAuth0 } from "@auth0/auth0-react"
import UserContext from '../../context/UserContext'

const TopPhone = () => {
  const { userLogged } = useContext(UserContext)
  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(!modal)
  }

  const {  user, logout } = useAuth0()


  return (
    <>
      <div className='flex justify-between pl-5 pr-5 w-full bg-black bg-opacity-30  fixed top-0  xl:hidden cursor-pointer '>
        <img className='w-40 ' src={logo} alt="" />
        {user ?
          <>
            <img className='w-10 h-10 rounded-full my-auto border-2 boder-white mx-end' onClick={()=>showModal()} src={userLogged.picture} alt="" />
            {
              modal && 
              <div className='w-[7rem]  xl:w-[10rem] lg:w-[10rem] h-20 md:h-20 md:w-[10rem] bg-[#f4f1f7] mt-8 md:mt-10 hover:opacity-100 rounded-md modal absolute right-2'>
              <p className='hover:bg-[#7239e537] ml-2 cursor-pointer'>Mi cuenta</p>
              <p className='hover:bg-[#7239e537] ml-2 cursor-pointer'>Ajustes</p>
              <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/home' } })} className='ml-2 hover:bg-[#7239e537]'>Salir</p>
            </div>}
          </>
          : null}
      </div>

    </>
  )
}

export default TopPhone