import React, { useState, useEffect, useContext } from 'react'

import PlayListsContexts from './PlaylistsContexts'
import UserContext from '../UserContext'

import { toast } from 'react-hot-toast'


const PlaylistsProvider = ({ children }) => {

  const [dataPlayLists, setDataPlayLists] = useState([])
  const [currentPlaylist, setCurrentPlaylist] = useState(0)
  const [infoPlaylist, setInfoPlaylist] = useState(null);
  const [sendSongToPlaylist, setSendSongToPlaylist] = useState()
  const { userLogged } = useContext(UserContext)

  

  const addPlayList = async (playlist) => {
    const res = await fetch("http://localhost:4002/playlists/newplaylist", {
      method: "POST",
      body: playlist
    })
    const data = await res.json();
    setDataPlayLists([...dataPlayLists, data.newPlaylist])

    if (data.ok) {
      toast.success("Playlist creada con éxito")
    }
  }

  const addPlaylist = async (playlist) => {


    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/playlists/addPlaylist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlist, userEmail: userLogged.email }),
    });
    const data = await res.json();
    
    setInfoPlaylist(data.updateLikePlayList)


  }

  const likesByPlaylist = (likesByPlaylist) => {
    if (userLogged) {
      return likesByPlaylist?.liked_by?.includes(userLogged.email);
    }
  };


  const addSongInPlaylist = async (song, playlist) => {
    const playListRepeat = playlist.songs.find((songRepeat) => {
      return songRepeat === song._id
    })
    if (!playListRepeat) {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/playlists/addSong`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ song, playlist }),
      });
      const data = await res.json();
      console.log("hola")
      toast.success("La canción ha sido añadida a tu Playlist correctamente")
      const filterAuthor = dataPlayLists.find((author) => {
        return author === playlist
      })
      setSendSongToPlaylist(filterAuthor)
    } else {
      toast.error("Esta canción ya está introducida en esa playlist")
    }
  }
  useEffect(() => {
    const fetchPlaylists = async () => {
      const res = await fetch("http://localhost:4002/playlists/");
      const data = await res.json();

      setDataPlayLists(data.allPlaylists);
    };
    fetchPlaylists();
  }, [infoPlaylist,sendSongToPlaylist ]);

  return (
    <PlayListsContexts.Provider
      value={{
        addPlayList,
        dataPlayLists,
        sendSongToPlaylist,
        setSendSongToPlaylist,
        setDataPlayLists,
        infoPlaylist,
        setInfoPlaylist,
        addPlaylist,
        currentPlaylist,
        setCurrentPlaylist,
        addSongInPlaylist,
        likesByPlaylist
        
      }}>
      {children}
    </PlayListsContexts.Provider>
  )
}

export default PlaylistsProvider