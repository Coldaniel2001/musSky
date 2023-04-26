// import React, { useState } from 'react'
import logo from '../../assets/images/icons/logo.png'
import user from '../../assets/images//user.jpg'
// import { Link } from 'react-router-dom'



const TopPhone = () => {
  // const [modal,setModal]=useState(false)
  // const showModal=()=>{
  //   setModal(!modal)
  // }
  return ( 
    <>
    <div className='flex justify-between pl-5 pr-5 w-full bg-black bg-opacity-30  fixed top-0  lg:hidden '>
        <img className='w-40 ' src={logo} alt="" />
        <img className='w-10 h-10 rounded-full my-auto border-2 boder-white mx-end' src={user} alt="" />
    </div>
    {/* {showModal &&   <div className='w-[13rem]   h-[6rem] bg-[#f4f1f7] mt-[2rem]   hover:opacity-100  rounded-md   modal'>
    <p className=' hover:bg-[#7239e537] ml-2 cursor-pointer '>Mi cuenta</p>
    <p className=' hover:bg-[#7239e537] ml-2 cursor-pointer '>Ajustes</p>
   {/* <Link to={"/login"}><p className=' ml-2  hover:bg-[#7239e537]  '>Salir</p></Link>  */}
{/* </div>} */} 
  
    </>
)}

export default TopPhone