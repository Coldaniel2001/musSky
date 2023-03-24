import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import './musicPlayed.css'
import play from '../../assets/images/icons/play.png'
import next from '../../assets/images/icons/next.png'
import previous from '../../assets/images/icons/previous.png'
import pause from '../../assets/images/icons/pause.png'

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
        <p className='font-bold lg:text-[1.2rem] text-[2rem] text-white w-[80%]'>{dataSong.artist}</p>
        <p className='text-gray-500 '>{dataSong.name}</p>
      </div>
      <div className='mx-auto w-[20rem]'>
        <AudioPlayer className='w-full flex justify-center'
          autoPlay={false}
          customIcons={{
            play: <img className="my-play-icon" src={play} alt="play"></img>,
            pause: <img className="my-pause-icon" src={pause} alt="play"></img>,
            next: <img className="my-next-icon" src={next} alt="play"></img>,
            previous: <img className="my-previous-icon" src={previous} alt="play"></img>,
            forward: <img className="my-forward-icon" src={previous} alt="play"></img>,
            rewind: <img className="my-forward-icon" src={previous} alt="play"></img>,
          }}
          src={dataSong.url}
          showSkipControls={true}
          onClickNext={e => setCurrentSong(currentSong + 1)}
          onClickPrevious={e => currentSong>1? setCurrentSong(currentSong - 1):null}
        />
      </div>
    </>
  )

}

export default MusicPlayed