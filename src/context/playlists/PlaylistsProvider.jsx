import React, { useState, useEffect, useContext } from 'react'

// import SongContext from '../song/SongContext'
// import UserContext from '../UserContext'
import PlayListsContexts from './PlaylistsContexts'

// import { useAuth0 } from '@auth0/auth0-react'
// import { toast } from 'react-hot-toast'


const PlaylistsProvider = ({children}) => {

    const addPlayList = async (playlist) => {
      console.log(playlist)
        const res = await fetch("http://localhost:4002/playlists/newplaylist", {
          method: "POST",
          body: playlist
        })
        const data = await res.json();
        console.log(data);
      }
   
    return (
      <PlayListsContexts.Provider value={{
        addPlayList,
        
      }}>
        {children}
      </PlayListsContexts.Provider>
    )
  }

  export default PlaylistsProvider