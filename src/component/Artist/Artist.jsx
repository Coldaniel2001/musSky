import React, { useEffect, useState } from 'react'

const Artist = () => {
    const MusicUrl = "http://localhost:3004/artists"
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
    <div className=' flex overflow-x-scroll scrollbar-hide w-full h-full whitespace-no-wrap  mt-5 lg:mt-10 '>
    {
        dataSong.map((song) => {
            return (
                <div key={song.id}>
                   <div className='mb-6  min-w-[12rem]  xl:min-w-[15rem] '>
                        <img className='w-[90%] mx-auto rounded h-[12rem]' src={song.photoUrl} alt="first artist" />
                        <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[1rem] justify-center  font-semibold'>{song.name}</p>
                    </div>
                </div>
                )
        })
    }
    </div>
  )
}

export default Artist