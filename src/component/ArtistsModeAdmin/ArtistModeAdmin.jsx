import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'

const ArtistModeAdmin = () => {

    const {dataUsers} = useContext(UserContext)

    const artists = dataUsers.filter((artist) => {
        return artist.rol === "artist"
    })

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9   mx-[8vh]  justify-center gap-6 h-[70vh] overflow-y-scroll scrollbar-hide  '>
            {
                artists.map((artist) => {
                return (
                <Link to={`/admin/${artist._id}`} >
                    <div className=' flex flex-col items-center mt-[5vh]' >
                        <img className='rounded-full cursor-pointer w-[160px] h-[160px] border-2 hover:border-4 hover:border-green-400 object-cover' src={artist.picture} alt="" />
                        <p className='text-white mt-2 font-bold text-xl'>{artist.nickname}</p>
                    </div> 
                </Link>
                )

                   })
            }
            
            
        </div>
  )
}

export default ArtistModeAdmin