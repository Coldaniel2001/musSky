import React from 'react'
import picture from "../../img/eminem.png"

function ProfilePop() {
  return (
    <>
    <div className='w-34 bg-black flex items-center'>
        <p className='text-white'>eminence</p>
        <img className='rounded-full bg-black w-16 mt-6' src={picture} alt=""/>
        
    </div> 
    </>
  )
}

export default ProfilePop