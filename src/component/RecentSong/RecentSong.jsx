import React, { useEffect, useState } from 'react'
import more from '../../assets/images/icons/more.png'
import purpleHeart from '../../assets/images/icons/purple-heart.png'

const RecentSong = () => {
    const MusicUrl = "http://localhost:3004/playlists"
    const [dataSong, setDataSong] = useState([])

    useEffect(() => {
        const musicTracks = async() => {
            const data = await fetch(MusicUrl);
            const json = await data.json();
            setDataSong(json)
        } 
        musicTracks()
    }, [MusicUrl])

  return (
    
        <div className='flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2'>
                {
                    dataSong.map((song) => {
                        return (
                    <div key={song.id} className='min-w-[25rem] flex justify-center mb-4 '>
                        <div className=' bg-[#7239e546] grid grid-cols-8 w-[90%] rounded'>
                            <img className='col-span-2 h-[5rem] rounded-l opacity-90' src={song.thumbnail} alt="first artist" />
                            <div className='col-span-4  grid items-center'>
                                <p className='text-[1.5rem] font-bold'>{song.name}</p>
                                <p className='font-thin'>Wilson estoy enamorado de ti</p>
                            </div>
                            <img className='hidden 2xl:grid my-auto w-[50%] mx-auto' src={purpleHeart} alt="play music" />
                            <img className='col-span-2 2xl:col-span-1 justify-end w-[25%] 2xl:w-[40%] mx-auto my-auto' src={more} alt="" />
                        </div>
                    </div>
                    )
                        
                    })
                }
      
        </div>
    
  )
}

export default RecentSong