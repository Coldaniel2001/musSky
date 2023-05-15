import React, { useContext } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'
import PlaylistIndividual from './PlaylistIndividual'

const FreePlaylists = () => {
    const { dataPlayLists } = useContext(PlaylistsContext)
    const {userLogged} = useContext(UserContext)
    const freePlaylist = dataPlayLists.filter((free) => {
        return free.private === false && free.author !== userLogged?.email
    })

    

  return (
    <div className='flex justify-between w-full  mt-4'>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 gap-8  h-[60%] mx-10 mb-7 w-full lg:mx-h-[70%]  lg:overflow-y-scroll lg:scrollbar-hide px-3 cursor-pointer pb-10'>
        {freePlaylist.map((playlist) => {
            return (
                <PlaylistIndividual playlist={playlist} />
            )
        })}
    </div>
</div>
  )
}

export default FreePlaylists