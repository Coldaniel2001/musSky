import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../context/UserContext'

const Artist = () => {

    const { dataUsers } = useContext(UserContext)

    const filterArtists = dataUsers.filter((artist) => {
        return artist.rol === "artist"
    })




    return (
        <div className=' flex overflow-x-scroll scrollbar-hide w-full h-full whitespace-no-wrap  mt-5 lg:mt-10 '>
            {
                filterArtists.map((artist) => {
                    return (
                        <Link to={`/artist/${artist._id}`} >
                            <div key={artist._id} >
                            <div className='mb-6  min-w-[12rem]  xl:min-w-[15rem] '>
                                <img className='w-[90%] mx-auto rounded h-[12rem]' src={artist.picture} alt="first artist" />
                                <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[1rem] justify-center  font-semibold'>{artist.name}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Artist