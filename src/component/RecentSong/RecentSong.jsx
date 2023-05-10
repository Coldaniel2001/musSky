import React, { useContext } from "react";
import more from "../../assets/images/icons/more.png";

import purpleHeart from "../../assets/images/icons/purple-heart-stroke.png";
import purpleHeartStroke from "../../assets/images/icons/purple-heart.png";


import SongContext from "../../context/song/SongContext";


const RecentSong = () => {

  const { dataSong, handleLikes, likesByUser, handleOpenSong } = useContext(SongContext);

  



  return (
    <div  className="flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2">
      {dataSong &&
        dataSong.map((song) => {
          return (
            <div
              key={song._id}
              className="min-w-[25rem] flex justify-center mb-4 "
            >
              <div className=" bg-[#7239e546] grid grid-cols-8 w-[90%] rounded ">
                <img
                  className="col-span-2 h-[5rem] w-[90px] rounded-l opacity-90"
                  onClick={()=>{handleOpenSong(song)}}
                  src={song.picture}
                  alt="first artist"
                />
                <div className="col-span-4  grid items-center ml-3 ">
                  <p className="text-[1.2rem] font-bold truncate ">{song.nameArtist}</p>
                  <p className="font-thin">{song.nameSong}</p>
                </div>
                <img
                  onClick={() => handleLikes(song)}
                  className="hidden 2xl:grid my-auto w-[50%] mx-auto"
                  src={likesByUser(song) ? purpleHeartStroke : purpleHeart}
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
