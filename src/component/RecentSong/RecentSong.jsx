import React, { useContext } from "react";



import SongContext from "../../context/song/SongContext";
import RecentSongCard from "./RecentSongCard/RecentSongCard";



const RecentSong = () => {

  const { dataSong} = useContext(SongContext);





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
