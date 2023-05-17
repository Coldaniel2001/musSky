import React, { useContext, useState } from 'react'
import logo from '../../assets/images/icons/logo.png'
import userPicture from "../../assets/images/icons/user.png";


import { useAuth0 } from "@auth0/auth0-react"
import UserContext from '../../context/UserContext'
import { NavLink } from 'react-router-dom';

const TopPhone = () => {
  const {userLogged} = useContext(UserContext)
  const [modal, setModal] = useState(false)
  // const showModal = () => {
  //   setModal(!modal)
  // }
  const {  loginWithRedirect } = useAuth0()
  const {  user, logout } = useAuth0()

  
  return (
    <>
      <div className='flex justify-between pl-5 pr-5 w-full bg-black bg-opacity-30  fixed top-0  xl:hidden '>
        <NavLink to={"/home"}>
          <img className='w-40 ' src={logo} alt="" />
        </NavLink>
        {userLogged ?
          <>
            <img className='w-10 h-10 rounded-full my-auto border-2 boder-white mx-end' onClick={()=>setModal(true)} src={userLogged?.picture} alt="" />
            {
              modal && 
              <div className='w-[13rem]   h-[6rem] bg-[#f4f1f7] mt-[2rem]   hover:opacity-100  rounded-md   modal'>
                <p className=' hover:bg-[#7239e537] ml-2 cursor-pointer '>Mi cuenta</p>
                <p className=' hover:bg-[#7239e537] ml-2 cursor-pointer '>Ajustes</p>
                <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/home'} })} className=' ml-2  hover:bg-[#7239e537]  '>Salir</p>
              </div>}
          </>
          : 
          <div className='bg-green-600 flex items-center p-2 rounded text-white cursor-pointer' onClick={() => loginWithRedirect()} >
            <img className='w-10 h-10 rounded-full my-auto  boder-white mx-end' src={userPicture} alt="" />
            <p>Inicia sesión</p>


          </div>
          }
      </div>

    </>
  )
}

export default TopPhone