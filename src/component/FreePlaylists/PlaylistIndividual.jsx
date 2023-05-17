import React, { useContext, useState } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'

const PlaylistIndividual = ({playlist}) => {
    const[hovered, setHovered] = useState(false)
    console.log(hovered)
console.log({playlist})
  
  return (

    <div key={playlist._id} className=' relative flex justify-end items-end hover:scale-110 transition duration-500 rounded cursor-pointer' onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}>
        <img className='rounded w-[250px] h-[170px]' src={playlist.imagePlaylist} alt="name" />
        <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
            <h2 className='mr-2 text-white text-xl '>{playlist.namePlaylist}</h2>
        </div>
    </div>
  )
}

export default PlaylistIndividual