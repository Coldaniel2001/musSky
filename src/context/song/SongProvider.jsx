import React, { useState, useEffect, useContext } from 'react'

import SongContext from './SongContext'
import UserContext from '../UserContext'


const SongProvider = ({ children }) => {

  const [dataSong, setDataSong] = useState([])
  const { userLogged } = useContext(UserContext)

  useEffect(() => {
    const musicTracks = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tracks`);
      const data = await response.json();
      setDataSong(data.allSong)
    }
    musicTracks()
  }, [setDataSong])

  useEffect(() => {
    const musicLikesTracks = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tracks/toLikes${userLogged._id}`);
      const data = await response.json();
      setDataSong(data.allSong)
    }
    musicLikesTracks()
  }, [setDataSong, userLogged._id])

  return (
    <SongContext.Provider value={{ dataSong, setDataSong }}>
      {children}
    </SongContext.Provider>
  )
}

export default SongProvider