import React, { useContext } from 'react'
import theBeatles from '../../assets/images/beatles.jpg'
import lodvg from '../../assets/images/lodvg.jpg'
import estopa from '../../assets/images/estopa.jpg'
import fito from '../../assets/images/fito.jpg'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'

const RecomendationSong = () => {
  const {dataPlayLists} = useContext(PlaylistsContext)



  console.log(dataPlayLists)
  return (

      <div className='flex overflow-x-scroll scrollbar-hide w-[100%] gap-5 whitespace-no-wrap '>
      {
        dataPlayLists.map((playlist) => {
          return (
              <div className='min-w-[18rem] text-center bg-[#8839E5] bg-opacity-20 py-3 rounded-xl h-[320px] '>
                <p className='text-xl font-bold'>{playlist.namePlaylist}</p>
                <p className='text-gray-500'>{playlist.author}</p>
                <img className='rounded-xl min-w-[120px] w-[250px] h-[230px] mx-auto mt-2' src={playlist.imagePlaylist} alt="" />
              </div>

)
})

}
  </div>
    


        
        
  )
}

export default RecomendationSong