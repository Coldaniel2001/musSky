import React, { useContext } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'

const FreePlaylists = () => {
    const { dataPlayLists } = useContext(PlaylistsContext)
    const {userLogged} = useContext(UserContext)
    const freePlaylist = dataPlayLists.filter((free) => {
        return free.private === false && free.author !== userLogged?.email
    })

    

  return (
    <div className='flex justify-between w-full '>
    <div className='grid grid-cols-7 gap-8  h-[60%] mx-10 mb-7 w-full lg:mx-h-[70%]  lg:overflow-y-scroll lg:scrollbar-hide px-3 cursor-pointer pb-10'>
        {freePlaylist.map((playlist) => {
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

export default FreePlaylists