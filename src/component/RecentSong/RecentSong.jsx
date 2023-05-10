import React, { useContext } from "react";
import more from "../../assets/images/icons/more.png";

import purpleHeart from "../../assets/images/icons/purple-heart-stroke.png";
import purpleHeartStroke from "../../assets/images/icons/purple-heart.png";


import SongContext from "../../context/song/SongContext";
import RecentSongCard from "./RecentSongCard/RecentSongCard";
import DetailModal from "../../Detail Modal/DetailModal";
import UserContext from "../../context/UserContext";


const RecentSong = () => {
  const { userLogged} = useContext(UserContext);
  const { dataSong} = useContext(SongContext);

  const likesByUser = (song) => {
    if (userLogged) {
      console.log(song)
      return song.likedBy?.includes(userLogged._id) 
    }
  };



  return (
    <div  className="flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2">
      {dataSong &&
        dataSong.map((song) => {
          return (
            <RecentSongCard key={song._id} song={song}/>
          );
        })}
    </div>
  );
};

export default RecentSong;
