import React, { useContext, useState } from "react";



import SongContext from "../../context/song/SongContext";
import RecentSongCard from "./RecentSongCard/RecentSongCard";
import UserContext from "../../context/UserContext";


const RecentSong = () => {

  const { recentSong } = useContext(SongContext);
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { userLogged } = useContext(UserContext);
  const likesByUser = (song) => {
    if (userLogged) {
      return song.likedBy?.includes(userLogged._id)
    }
  }

  return (
    <div className="flex overflow-x-scroll scrollbar-hide w-full whitespace-no-wrap 2xl:grid 2xl:grid-cols-2">

      {
        recentSong &&
        recentSong.map((song) => {
          const isDropdownActive = activeDropdown === song._id
          console.log(song)

          return (

            <RecentSongCard key={song._id} song={song} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}
              isDropdownActive={isDropdownActive} likesByUser={likesByUser} />

          );
        }).reverse()
      }
    </div>
  );
};

export default RecentSong;
