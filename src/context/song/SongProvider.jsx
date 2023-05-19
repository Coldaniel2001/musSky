import React, { useState, useEffect, useContext } from "react";

import SongContext from "./SongContext";
import UserContext from "../UserContext";

import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";


const SongProvider = ({ children }) => {
  const [dataSong, setDataSong] = useState([]);


  const [onePlayListSong, setOnePlayListSong] = useState({});
  const [allPlaylistSong, setAllPlaylistSong] = useState([]);
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

  

  const handleLikes = async (liked) => {
    const token = await getIdTokenClaims();
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/tracks/addToLike${userLogged && userLogged._id
      }`,
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
      console.log(data);
      try {
        setOnePlayListSong(song);
        updateRecent(song)
      } catch (error) {
        console.log(error);
        if (data.error === "InvalidTokenError: Invalid Compact JWS") {
          toast.error("Tienes que iniciar sesión para poder añadir me gusta");
        }
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
  }, [setDataSong]);

  const likesByUser = (song) => {
    if (userLogged) {
      console.log(song);
      return song.likedBy?.includes(userLogged._id);
    }
  };

  

 const {userId} = useParams()
 const [infoUser, setInfoUser] = useState(null);
 
 
 
 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch(`http://localhost:4002/users/id/${userId}`)
       const data = await response.json();
       console.log(data)
       setInfoUser(data.user);
     } catch (error) {
       console.error(error);
     }
 
   }
   fetchData();
 }, [userId]);

  return (
    <SongContext.Provider
      value={{
        dataSong,
        setDataSong,
        allPlaylistSong,
        setAllPlaylistSong,
        onePlayListSong,
        setOnePlayListSong,
        recentSong,
        setRecentSong,
        handleLikes: handleLikes,
        likesByUser: likesByUser,
        handleOpenSong: handleOpenSong,
        infoUser
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;
