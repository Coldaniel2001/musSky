import React from 'react'
import logo from '../../assets/images/icons/logo.png'
import user from '../../assets/images//user.jpg'



const TopPhone = () => {
  return ( 
    <div className='flex justify-between pl-5 pr-5 w-full bg-black bg-opacity-30  fixed top-0  lg:hidden '>
        <img className='w-40 ' src={logo} alt="" />
        <img className='w-10 h-10 rounded-full my-auto border-2 boder-white mx-end' src={user} alt="" />
    </div>
  )
}

export default TopPhone