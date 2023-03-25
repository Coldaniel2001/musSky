import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

// import MusicSong from '../MusicSong/MusicSong';


// import AntonioJose from '../../assets/images/antonio-jose.jpg'


const MusicPlayed = () => {
  const [dataSong, setDataSong] = useState([])
  const [currentSong, setCurrentSong] = useState(1);
  const urlTracks = `http://localhost:3004/tracks/${currentSong}`;


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(urlTracks)
      const data = await response.json()
      setDataSong(data);
    }
    fetchData()
  }, [urlTracks])

  console.log(dataSong)
  return (
    <>
      <div className='md:hidden lg:block w-3/4 mx-auto text-red'>
        <img className='w-full mx-auto mt-10 mb-4 rounded-xl' src={dataSong.thumbnail} alt="played song" />
        <p className='font-bold lg:text-[1.2rem] text-[2rem] w-[80%]'>{dataSong.artist}</p>
        <p className='text-gray-500'>{dataSong.name}</p>
        {/* <div className='grid grid-cols-4 mt-5 items-center  w-full'>
 				<img className='w-12' src={previous} alt="previous song" />
 				<img className='lg:w-12 xl:w-20 col-span-2 mx-auto' src={play} alt="play song" />
 				<div className='flex justify-end '>
 					<img className='w-12' src={next} alt="next song" />
         				</div>
         			</div> */}
      </div>
      <div className='flex justify-center w-[20rem]'>
        <AudioPlayer
          autoPlay={false}
          src={dataSong.url}
          showSkipControls={true}
          onClickNext={e => setCurrentSong(currentSong + 1)}
          onClickPrevious={e => currentSong>1?setCurrentSong(currentSong - 1):null}
        />
      </div>







      {/* {dataSong.map((song)=>{
					return (
            <>
            <MusicSong
            key={song.id}
            song={song}
            />
         </>
					)
				})} */}


    </>
  )

}

export default MusicPlayed