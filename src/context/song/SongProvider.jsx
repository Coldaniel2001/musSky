import React, { useState, useEffect, useContext } from "react";

import SongContext from "./SongContext";
import UserContext from "../UserContext";

import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-hot-toast";

const SongProvider = ({ children }) => {
  const [dataSong, setDataSong] = useState([]);
  const [updateSong, setUpdateSong] = useState()


  const [onePlayListSong, setOnePlayListSong] = useState({});
  const [recentSong, setRecentSong] = useState([]);
  const { userLogged } = useContext(UserContext);
  const { getIdTokenClaims } = useAuth0()
  

  // Recient
  useEffect(() => {
    const getAllRecient = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/recents/${userLogged._id}`)
        const data = await response.json();
        setRecentSong(data.allRecent.tracks)

      } catch (error) {
        console.log(error);
      }
    };
    getAllRecient()

  }, [userLogged, dataSong])

  //song

  const handleLikes = async (liked) => {
    const token = await getIdTokenClaims();

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/tracks/addToLike${userLogged._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token ? token.__raw : "Not Auth"}`,
        },
        body: JSON.stringify({ liked }),
      }
    );
    const data = await response.json();
    console.log(data)
    try {
      const updateDataSongFilter = dataSong.filter((update) => {
        return update._id !== data.updateLike._id;
      });

      setDataSong([...updateDataSongFilter, data.updateLike].sort((a, b) => a._id.localeCompare(b._id))
      );

    } catch (error) {
      console.log(error);
      if (data.error === "InvalidTokenError: Invalid Compact JWS") {
        toast.error("Tienes que iniciar sesión para poder añadir me gusta");
      }
    }
  };

  const handleOpenSong = (song) => {

    const addSongRecent = async () => {
      const token = await getIdTokenClaims();
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/recents/${userLogged._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token ? token.__raw : "Not Auth"}`,
          },
          body: JSON.stringify({ song }),
        }
      );
      const data = await response.json();
      try {
     
      if (data.error === "InvalidTokenError: Invalid Compact JWS") {
        toast.error("Tienes que iniciar sesión para poder escuchar música");
      }else{
        setOnePlayListSong(song);
        updateRecent(song)

      }
      } catch (error) {
        console.log(error);
      }
    };
    addSongRecent();
  };

  const updateRecent = (song) => {
    const repeatRecent = recentSong.find((tracks) => {
      return tracks.nameSong === song.nameSong
    })

    if (!repeatRecent) {
      if (recentSong.length === 8) {
        const deleteRecent = recentSong.slice(0, 1)

        const filterRecentDelete = recentSong.filter((recent) => {
          return recent.nameSong !== deleteRecent[0].nameSong
        })
        setRecentSong([...filterRecentDelete, song])
      }
      if (recentSong.length < 8) {
        setRecentSong([...recentSong, song])
      }

    } else {
      const filterTop = recentSong.filter((deleteSong) => {
        return deleteSong.nameSong !== song.nameSong
      })
      setRecentSong([...filterTop, song])
    }
  }


  useEffect(() => {
    const musicTracks = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tracks`
      );
      const data = await response.json();
      setDataSong(data.allSong);
    };
    musicTracks();

  }, [setDataSong, updateSong]);

  const deleteSong = async (song) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tracks/${song._id}`,{
        method: "DELETE"
      }
      )
      const data = await response.json();
      console.log(data)
      const deleteSong = dataSong.filter((song)=>{
        return song._id !== data.deleteTracks._id
      })
      setDataSong(deleteSong)

    } catch (error) {
      console.log(error);
    }
  };

  const likesByUser = (song) => {
    if (userLogged) {
      return song.likedBy?.includes(userLogged._id);
    }
  };

  const updateTrack = async (userId, newValue) => {
    
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/tracks/update-track`, {
        method: "PATCH", 
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({userId, newValue})
    })
    const data = await res.json()
    setUpdateSong(data.songChanged)
}

  return (
    <SongContext.Provider
      value={{
        dataSong,
        setDataSong,
        onePlayListSong,
        setOnePlayListSong,
        recentSong,
        setRecentSong,
        handleLikes: handleLikes,
        likesByUser: likesByUser,
        handleOpenSong: handleOpenSong,
        deleteSong: deleteSong,
        updateTrack
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;
