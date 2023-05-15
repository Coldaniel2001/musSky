import React, {useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import background from '../../assets/images/background.png'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'

const MyPlaylists = () => {

    const { dataPlayLists } = useContext(PlaylistsContext)
    const { userLogged } = useContext(UserContext)
    
    const myPlaylists = dataPlayLists.filter((playlist) => {
        return playlist.author === userLogged?.email
    })


  return (
    <div className='flex justify-between w-full '>
    <div className='grid grid-cols-7 gap-8  h-[60%] mx-10 mb-7 w-full lg:mx-h-[70%]  lg:overflow-y-scroll lg:scrollbar-hide px-3 cursor-pointer pb-10'>
        <NavLink className='col-span-2  rounded relative flex justify-end items-end h-[320px]' to={"/individual-playlist"}>
            <img className='w-full h-full hover:scale-110 transition duration-500 ' src={background} alt="name" />
            <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                <h2 className='mr-2 text-white text-xl font-bold'>Canciones que me gustan</h2>
            </div>
        
        </NavLink>

        {myPlaylists.map((playlist) => {
            return (
        <div key={playlist._id} className=' relative flex justify-end items-end hover:scale-110 transition duration-500 rounded cursor-pointer '>
            <img className='rounded w-[250px] h-[170px]' src={playlist.imagePlaylist} alt="name" />
            <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                <h2 className='mr-2 text-white text-xl '>{playlist.namePlaylist}</h2>
            </div>
        </div>
            )
        })}
    </div>
</div>
  )
}

export default MyPlaylists