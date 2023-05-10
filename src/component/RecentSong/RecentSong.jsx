import React, { useContext, useState } from "react";
import more from "../../assets/images/icons/more.png";
// import purpleHeart from "../../assets/images/icons/purple-heart.png";
import redHeart from "../../assets/images/icons/red-heart.png";
import purpleHeart from "../../assets/images/icons/purple-heart-stroke.png";
import purpleHeartStroke from "../../assets/images/icons/purple-heart.png";

import UserContext from "../../context/UserContext";
import SongContext from "../../context/song/SongContext";
import RecentSongCard from "./RecentSongCard/RecentSongCard";
import DetailModal from "../../Detail Modal/DetailModal";

// import { AiOutlineHeart } from "react-icons/ai";
// import { AiTwotoneHeart } from "react-icons/ai";

const RecentSong = () => {

  const { dataSong} = useContext(SongContext);

 



  return (
    <div className="flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2">
      {dataSong &&
        dataSong.map((song) => {
          return (
            <RecentSongCard/>
          );
        })}
    </div>
  );
};

export default RecentSong;
