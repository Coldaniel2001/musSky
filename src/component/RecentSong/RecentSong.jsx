import React, { useContext, useState } from "react";
import more from "../../assets/images/icons/more.png";
import purpleHeart from "../../assets/images/icons/purple-heart.png";
import redHeart from "../../assets/images/icons/red-heart.png";

import UserContext from "../../context/UserContext";
import SongContext from "../../context/song/SongContext";

// import { AiOutlineHeart } from "react-icons/ai";
// import { AiTwotoneHeart } from "react-icons/ai";

const RecentSong = () => {
  const { userLogged } = useContext(UserContext);
  const { dataSong, handleLikes } = useContext(SongContext);

  const likesByUser = (song) => {
    if (userLogged) {
      return song.likedBy?.includes(userLogged._id) 
    }
  };

  return (
    <div className="flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2">
      {dataSong &&
        dataSong.map((song) => {
          return (
            <div
              key={song._id}
              className="min-w-[25rem] flex justify-center mb-4 "
            >
              <div className=" bg-[#7239e546] grid grid-cols-8 w-[90%] rounded">
                <img
                  className="col-span-2 h-[5rem] rounded-l opacity-90"
                  src={song.picture}
                  alt="first artist"
                />
                <div className="col-span-4  grid items-center">
                  <p className="text-[1.5rem] font-bold">{song.nameArtist}</p>
                  <p className="font-thin">{song.nameSong}</p>
                </div>
                <img
                  onClick={() => handleLikes(song)}
                  className="hidden 2xl:grid my-auto w-[50%] mx-auto"
                  src={likesByUser(song) ? redHeart : purpleHeart}
                  alt="play music"
                />
                <img
                  className="col-span-2 2xl:col-span-1 justify-end w-[25%] 2xl:w-[40%] mx-auto my-auto"
                  src={more}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RecentSong;
