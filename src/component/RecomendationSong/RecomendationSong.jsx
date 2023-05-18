import React, { useContext } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import SingularPlaylist from './SingularPlaylist'

const RecomendationSong = () => {
  const {dataPlayLists} = useContext(PlaylistsContext)

  const publicFilter = dataPlayLists.filter((publicPlaylist)=>{
    return  publicPlaylist.private === false
  })


  return (

      <div className='flex overflow-x-scroll scrollbar-hide w-[100%] gap-5 whitespace-no-wrap py-5 px-5 '>
      {
        publicFilter.map((playlist) => {
          return (
            <SingularPlaylist key={playlist._id} playlist={playlist} />
          )
})

}
  </div>
    


        
        
  )
}

export default RecomendationSong