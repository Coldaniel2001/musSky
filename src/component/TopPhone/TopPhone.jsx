import React from 'react'
import logo from '../../assets/images/icons/logo.png'
import user from '../../assets/images//user.jpg'
import { Link } from 'react-router-dom'


const TopPhone = () => {
  return (
    <>
    <div className='flex justify-between pl-5 pr-5 w-full bg-black bg-opacity-30  fixed top-0 md:hidden lg:hidden '>
        <img className='w-40 ' src={logo} alt="" />
        <img className='w-10 h-10 rounded-full my-auto border-2 boder-white mx-end' src={user} alt="" />
  </div>
  <div className='w-[10rem] h-[6rem] bg-[#212121] rounded-md  opacity-40 hover:opacity-100 float-right mt-[3rem] mr-[3rem] flex justify-center flex-col  modal'>
  <p className='text-white hover:bg-sky-700 cursor-pointer ml-2'>Mi cuenta</p>
  <p className='text-white hover:bg-sky-700 cursor-pointer ml-2'>Ajustes</p>
 <Link to={"/login"}><p className='text-white hover:bg-sky-700 ml-2'>Salir</p></Link> 
</div>
  
    </>
  )
}

export default TopPhone