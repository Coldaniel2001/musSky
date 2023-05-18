import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'


const SingularPlaylist = ({ playlist }) => {
  const {dataPlayLists} = useContext(PlaylistsContext)

  return (

    <Link to={`/playlist/${playlist?._id}`} >

      <div className='min-w-[18rem] text-center bg-[#8839E5] bg-opacity-20 py-3 rounded-xl h-[320px] cursor-pointer hover:scale-105 transition duration-500'>
        <p className='text-xl font-bold'>{playlist.namePlaylist}</p>
        <p className='text-gray-500'>{playlist.author}</p>
        <img className='rounded-xl min-w-[120px] w-[250px] h-[230px] mx-auto mt-2 ' src={playlist.imagePlaylist} alt="" />
      </div> 
      </Link>

  )
}

export default SingularPlaylist