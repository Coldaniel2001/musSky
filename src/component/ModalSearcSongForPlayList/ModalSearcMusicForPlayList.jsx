import React, { useContext, useState } from 'react'
import GendersModal from '../GendersModal/GendersModal'
import SearchSongForPlayList from '../SearchSongForPlayList/SearchSongForPlayList'


const ModalSearcMusicForPlayList = ({setSearchSong, playListComplete, setPlayListComplete, setPlaylistToShow, playlistToShow}) => {
const [searchSongToPlaylist, setfirstSearchSongToPlaylist] = useState(false)

const [searchValue, setSearchValue] = useState("");

const handleSearch = (event) => {
  const value = event.target.value;
  setSearchValue(value);
};


  return (
<<<<<<< HEAD
    <div className="fixed inset-0 overflow-y-auto bg-black/30 z-40 ">
=======
    <div className="fixed z-50 inset-0 overflow-y-auto bg-black/30  ">
>>>>>>> 745535400139eefac70ef8c786eec04dc99d9d25
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-[75vh] flex flex-col bg-gradient-to-tr from-black via-[#7339E5] to-[#7339E5] rounded-lg shadow-lg p-6 w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/2 border-2 border-white">
        <div className='flex justify-between text-white '>
            <p className='font-light cursor-pointer' onClick={()=> setSearchSong(false)}>Cancel</p>
            <p className='font-light cursor-pointer' onClick={()=> setSearchSong(false)} >Ok</p>
        </div>
        <h2 className='text-3xl font-bold text-white mt-4 mb-3 '>Música</h2>
        <div className="w-full lg:relative lg:block mb-4 ">
          <input 
          type="text" 
          className="bg-gray-300 w-full py-2 pl-10 pr-4  rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" 
          placeholder="Artistas, Música, PlayLists, Albums..."
          onChange={handleSearch}
          value={searchValue}
          />
          <div className="absolute top-0 left-0 mt-2 ml-3">
            <i className="fas fa-search text-gray-400"></i>
          </div>
		    </div>
        <div className=' h-[75%] overflow-y-scroll scrollbar-hide'>
          {
            searchSongToPlaylist ?
            <GendersModal /> : 
            <SearchSongForPlayList searchValue={searchValue} playListComplete={playListComplete} setPlayListComplete={setPlayListComplete} setPlaylistToShow={setPlaylistToShow} playlistToShow={playlistToShow}/>
          }
        </div>
      </div>
    </div>
  </div>
)
}

export default ModalSearcMusicForPlayList