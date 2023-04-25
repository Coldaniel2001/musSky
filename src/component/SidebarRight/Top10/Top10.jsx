import React, { useEffect, useState } from 'react'
import Top10SingularSong from './Top10SingularSong'

const Top10 = () => {
  const MusicUrl = "http://localhost:3004/albums"
  const [dataSong, setDataSong] = useState([])

  useEffect(() => {
      const musicTracks = async() => {
          const data = await fetch(MusicUrl);
          const json = await data.json();
          setDataSong(json)
      } 
      musicTracks()
  }, [MusicUrl])
      console.log(dataSong)

  return (
    
    <div className='flex items-center '>
      <div className='bg-[#2F2F2F] my-auto rounded-xl mr-2 mt-10'>
        <div className=' bg-black w-[94%] mx-auto pb-10 mb-20 max-h-[70vh] lg:overflow-y-scroll ' >
          <p className='text-white font-bold text-3xl pt-5 ml-2'>TOP 10</p>
          <Top10SingularSong dataSong={dataSong} />
        </div>
      </div>
    </div>
  )
}

export default Top10