import React from 'react'
import picture from "../../assets/images/eminem.png"
import picture2 from "../../assets/images/flechita.png"

function ProfilePop() {
  return (
    <>
    <div className='w-34 bg-zinc-800 flex items-center mt-6 rounded-lg'>
        <img className='rounded-full bg-black w-12 ' src={picture} alt=""/>
        <p className='text-white ml-3'>eminence</p>
        <img className='text-white ml-auto mr-6 w-11' alt='' src={picture2}/>
    </div>
    </>
  )
}

export default ProfilePop