import React from 'react'

import deleteSong from '../../assets/images/deleteSong.png'


const AddSongToPlayList = ({playlistToShow, setPlaylistToShow, setPlayListComplete}) => {
  

    console.log(playlistToShow)

    const deleteSongForPlaylist = (songs) => {
        const deleteSong = playlistToShow.filter((song)=>{
            return song._id !== songs._id
        })
        setPlaylistToShow(deleteSong)
        setPlayListComplete(deleteSong)
    }

  return (
    
    <div className='mt-[2vh] max-h-[35vh] lg:max-h-[25vh] overflow-y-scroll scrollbar-hide'>
        {
        playlistToShow.length ?
            playlistToShow.map((songs) => {
                return (
                    <div className=' h-14 w-full flex gap-8 lg:gap-4 sm:px-4 border-b border-gray-500 py-2'>
                        <div className='flex h-full items-center w-[15%] gap-2'>
                            <img className='h-2/5' src={deleteSong} onClick={()=>deleteSongForPlaylist(songs)} alt="delete" />
                            <img className='h-[40px] w-[50px]  rounded' src={songs.picture} alt="cover" />
                        </div>
                        <div className='w-[60%] flex flex-col justify-center'>
                            <p className='text-white text-[0.8rem] sm:text-[1rem] font-bold'>{songs.nameArtist}</p>
                            <p className='text-gray-500 truncate text-[0.8rem] sm:text-md'>{songs.nameSong}</p>
                        </div>
                    </div> 
                )
            }): null
        }
    </div>
  )
}

export default AddSongToPlayList