import React from 'react'
import Playlist from '../Playlist/Playlist'
import Search from '../Search/Search'

const PlaylistCenter = () => {
  return (
    <>
    <Search />
    <h2 className='text-white text-[2rem] font-extrabold ml-10 mt-10'>PLAYLISTS</h2>
    <Playlist />
    </>
  )
}

export default PlaylistCenter