import React, { useState, useEffect } from 'react'

import PlayListsContexts from './PlaylistsContexts'



const PlaylistsProvider = ({children}) => {

  const [dataPlayLists, setDataPlayLists] = useState([])

    const addPlayList = async (playlist) => {
      console.log(playlist)
        const res = await fetch("http://localhost:4002/playlists/newplaylist", {
          method: "POST",
          body: playlist
        })
        const data = await res.json();
        console.log(data);
      }

        useEffect(() => {
          const fetchPlaylists = async () => {
            const res = await fetch("http://localhost:4002/playlists/");
            const data = await res.json();

            setDataPlayLists(data.allPlaylists);
          };
          fetchPlaylists();
        }, []);
        console.log(dataPlayLists);
   
    return (
      <PlayListsContexts.Provider 
      value={{
        addPlayList,
        dataPlayLists,
        setDataPlayLists,

        
      }}>
        {children}
      </PlayListsContexts.Provider>
    )
  }

  export default PlaylistsProvider