import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

// import MusicSong from '../MusicSong/MusicSong';


// import AntonioJose from '../../assets/images/antonio-jose.jpg'


const MusicPlayed = () => {
  const[allSong, setAllSong] = useState([])
  const [oneSong, setOneSong] = useState([])
  const [currentSong, setCurrentSong] = useState(1);
  const urlOneTracks = `http://localhost:3004/tracks/${currentSong}`;
  const urlAllTracks = 'http://localhost:3004/tracks';



  useEffect(() => {
    const fetchAllSong = async () => {
      const response = await fetch(urlAllTracks)
      const data = await response.json()
      setAllSong(data);
    }
    fetchAllSong()
    
  }, [urlAllTracks])

  useEffect(() => {
    const fetchOneSong = async () => {
      const response = await fetch(urlOneTracks)
      const data = await response.json()
      setOneSong(data);
    }
    fetchOneSong()
  }, [urlOneTracks])

  const handlePrevious = () =>{
    if(allSong[0].id===currentSong){
      setCurrentSong(allSong[0].id)
    }else{
      setCurrentSong(currentSong-1)
    }
  }

  const handleNext = () =>{
    if(allSong.length===currentSong){
      setCurrentSong(allSong[0].id)
    }else{
      setCurrentSong(currentSong+1)
    }
  }



  return (
    <>
      <div className='md:hidden lg:block w-3/4 mx-auto text-red'>
        <img className='w-full mx-auto mt-10 mb-4 rounded-xl' src={oneSong.thumbnail} alt="played song" />
        <p className='font-bold lg:text-[1.2rem] text-[2rem] w-[80%]'>{oneSong.artist}</p>
        <p className='text-gray-500'>{oneSong.name}</p>
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
          src={oneSong.url}
          showSkipControls={true}
          onClickNext={(e) => handleNext() }
          onClickPrevious={(e) => handlePrevious()}
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