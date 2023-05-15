import React, { useContext, useState } from 'react'
import theBeatles from '../../assets/images/beatles.jpg'
import lodvg from '../../assets/images/lodvg.jpg'
import estopa from '../../assets/images/estopa.jpg'
import fito from '../../assets/images/fito.jpg'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import SingularPlaylist from './SingularPlaylist'

const RecomendationSong = () => {
  const {dataPlayLists} = useContext(PlaylistsContext)



  console.log(dataPlayLists)
  return (

      <div className='flex overflow-x-scroll scrollbar-hide w-[100%] gap-5 whitespace-no-wrap py-5 px-5'>
      {
        dataPlayLists.map((playlist) => {
          return (
            <SingularPlaylist key={playlist._id} playlist={playlist} />
           

)
})

}
  </div>
    


        
        
  )
}

export default RecomendationSong