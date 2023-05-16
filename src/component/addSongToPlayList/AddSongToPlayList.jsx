import React, { useContext } from 'react'

import deleteSong from '../../assets/images/deleteSong.png'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import play from '../../assets/images/play.png'
import heart from '../../assets/images/heart.png'
import mas from '../../assets/images/mas.png'
import SongContext from '../../context/song/SongContext'

const AddSongToPlayList = ({playListComplete, playlistToShow}) => {
    const {dataSong} = useContext(SongContext)
    console.log(playListComplete)
    console.log(dataSong)
    console.log(playlistToShow)

    
  return (
    
    <div className='mt-[2vh] max-h-[35vh] lg:max-h-[25vh] overflow-y-scroll scrollbar-hide'>
        {
            playlistToShow.length ?
                    playlistToShow.map((songs) => {
                        return (
                            <div className=' h-14 w-full flex gap-8 lg:gap-4 sm:px-4 border-b border-gray-500 py-2'>
                                <div className='flex h-full items-center w-[15%] gap-2'>
                                    <img className='h-2/5' src={deleteSong} alt="" />
                                    <img className='h-[40px] w-[50px]  rounded' src={songs.picture} alt="" />
                                </div>
                                <div className='w-[60%] flex flex-col justify-center'>
                                    <p className='text-white text-[0.8rem] sm:text-[1rem] font-bold'>{songs.nameArtist}</p>
                                    <p className='text-gray-500 truncate text-[0.8rem] sm:text-md'>{songs.nameSong}</p>
                                </div>
                                <div className='flex h-full w-[25%] items-center justify-end gap-1 sm:gap-2'>
                                    <img className='w-8 cursor-pointer h-1/2 sm:h-4/6' src={play} alt="" />
                                    <img className='w-8 cursor-pointer h-1/2 sm:h-4/6' src={heart} alt="" />
                                    <img className='w-6 cursor-pointer h-[5%] sm:h-[10%]' src={mas} alt="" />
                                </div>
                                
                            </div> 
                        )
                    }): null
        }
        
   
    </div>
    
    
  )
}

export default AddSongToPlayList