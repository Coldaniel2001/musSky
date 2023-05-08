import React, {useState, useEffect} from 'react'

import SongContext from './SongContext'

const SongProvider = ({children}) => {
    const MusicUrl = "http://localhost:4002/tracks"
    const [dataSong, setDataSong] = useState([])
    

    useEffect(() => {
      const musicTracks = async () => {
          const response = await fetch(MusicUrl);
          const data = await response.json();
          setDataSong(data.allSong)
      }
      musicTracks()
  }, [MusicUrl, setDataSong])

  

  return (
    <SongContext.Provider value={{dataSong, setDataSong, MusicUrl}}>
        {children}
    </SongContext.Provider>
  )
}

export default SongProvider