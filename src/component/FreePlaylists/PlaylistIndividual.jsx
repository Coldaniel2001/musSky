import React, { useContext, useState } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'
import { NavLink } from 'react-router-dom'

const PlaylistIndividual = ({playlist}) => {
    const[hovered, setHovered] = useState(false)
    console.log(hovered)

  
  return (
    <NavLink to={`/playlist/${playlist?._id}`}  >

    <div key={playlist._id} className=' relative rounded flex justify-end items-end hover:scale-110 transition duration-500  cursor-pointer' onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}>
        <img className='rounded w-[250px] h-[170px]' src={playlist.imagePlaylist} alt="name" />
        <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end '>
            <h2 className='mr-2 text-white text-xl '>{playlist.namePlaylist}</h2>
        </div>
    </div>
    </NavLink>
  )
}

export default PlaylistIndividual