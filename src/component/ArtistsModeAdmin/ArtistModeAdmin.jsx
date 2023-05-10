import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'

const ArtistModeAdmin = () => {

    const {dataUsers} = useContext(UserContext)

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9   mx-[8vh]  justify-center gap-6 h-[70vh] overflow-y-scroll scrollbar-hide  '>
            {
                dataUsers.map((user) => {
                return (
                <Link to={`/admin/${user._id}`} >
                    <div className='h-[14vh] flex flex-col items-center mt-[5vh]' >
                        <img className='rounded-full cursor-pointer w-[160px] h-[160px] border-2 hover:border-4 hover:border-green-400 ' src={user.picture} alt="" />
                        <p className='text-white mt-2 font-bold text-xl'>{user.nickname}</p>
                    </div> 
                </Link>
                )

                   })
            }
            
            
            
            
            
            

            
            
        </div>
  )
}

export default ArtistModeAdmin