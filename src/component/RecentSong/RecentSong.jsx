import React, { useContext, useEffect, useState } from "react";



import SongContext from "../../context/song/SongContext";
import RecentSongCard from "./RecentSongCard/RecentSongCard";
import UserContext from "../../context/UserContext";


const RecentSong = () => {

  const { recentSong } = useContext(SongContext);
  const [activeDropdown, setActiveDropdown] = useState(null)



  return (
    <div className="flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2  ">

      {
        recentSong &&
        recentSong.map((song) => {
          const isDropdownActive = activeDropdown === song._id
          return (

            <RecentSongCard key={song._id} song={song} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}
              isDropdownActive={isDropdownActive} />

          );
        }).reverse()
      }
    </div>
  );
};

export default RecentSong;
