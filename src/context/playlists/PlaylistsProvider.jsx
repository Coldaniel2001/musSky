import React, { useState, useEffect } from 'react'

import PlayListsContexts from './PlaylistsContexts'
import { toast } from 'react-hot-toast'



const PlaylistsProvider = ({children}) => {

  const [dataPlayLists, setDataPlayLists] = useState([])
  const [infoPlaylist, setInfoPlaylist] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(0)
  

    const addPlayList = async (playlist) => {
        const res = await fetch("http://localhost:4002/playlists/newplaylist", {
          method: "POST",
          body: playlist
        })
        const data = await res.json();
        setDataPlayLists([...dataPlayLists, data.newPlaylist])

        if(data.ok){
          toast.success("Playlist creada con éxito")
        }
      }

        useEffect(() => {
          const fetchPlaylists = async () => {
            const res = await fetch("http://localhost:4002/playlists/");
            const data = await res.json();

            setDataPlayLists(data.allPlaylists);
          };
          fetchPlaylists();
        }, []);
   
    return (
      <PlayListsContexts.Provider 
      value={{
        addPlayList,
        dataPlayLists,
        setDataPlayLists,
        infoPlaylist,
        setInfoPlaylist,
        currentPlaylist, 
        setCurrentPlaylist
      }}>
        {children}
      </PlayListsContexts.Provider>
    )
  }

  export default PlaylistsProvider