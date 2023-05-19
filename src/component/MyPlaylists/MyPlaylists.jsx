import React, {useContext } from 'react'
import { NavLink } from 'react-router-dom'

import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'
import likesPlaylists from '../../assets/images/likesPlaylists.jpg'

const MyPlaylists = () => {

    const { dataPlayLists } = useContext(PlaylistsContext)
    const { userLogged } = useContext(UserContext)

    
    const myPlaylists = dataPlayLists.filter((playlist) => {
        return playlist.author === userLogged?.email
    })

    const myPlaylistsLike = dataPlayLists.filter((playlist) => {
        return playlist?.liked_by?.toString() === userLogged?.email
    })
    
    const myPlaylistComplete = myPlaylists.concat(myPlaylistsLike)




  return (
    <div className='flex justify-between w-full  '>
    <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8  h-[60%] mx-10 mb-7 w-full lg:mx-h-[70%]  lg:overflow-y-scroll lg:scrollbar-hide px-3 cursor-pointer pb-10'>
        <NavLink className='col-span-2  rounded relative flex justify-end items-end h-[320px] hover:scale-110 transition duration-500' to={"/individual-playlist"}>
            <img className='w-full h-full  rounded ' src={likesPlaylists} alt="name" />
            <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                <h2 className='mr-2 text-white text-xl '>Canciones que me gustan</h2>
            </div>
        
        </NavLink>

        {myPlaylistComplete.map((playlist) => {
            return (
                <NavLink className=" flex items-end" to={`/playlist/${playlist?._id}`}  >
                <div key={playlist._id} className=' relative flex justify-end items-end hover:scale-110 transition duration-500 rounded cursor-pointer '>
                    <img className='rounded w-[250px] h-[170px]' src={playlist.imagePlaylist} alt="name" />
                    <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                        <h2 className='mr-2 text-white text-xl '>{playlist.namePlaylist}</h2>
                    </div>
                </div>
        </NavLink>
            )
        })}
    </div>
</div>
  )
}

export default MyPlaylists