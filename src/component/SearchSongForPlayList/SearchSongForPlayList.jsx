import React, { useContext, useEffect, useState } from 'react'

import SongContext from '../../context/song/SongContext'
import PlayListItems from './PlayListItems'

const SearchSongForPlayList = ({playListComplete, setPlayListComplete, setPlaylistToShow, playlistToShow, searchValue}) => {
  const {dataSong} = useContext(SongContext)

  const [resultSearch, setResultSearch] = useState(dataSong)


  useEffect(() => {
    if (searchValue !== ""){
         const filteredResults = dataSong.filter((song) =>
        song.nameSong.toLowerCase().includes(searchValue.toLowerCase()))
      setResultSearch(filteredResults)
    }
  }, [searchValue])
  

  return (
    <>
    {
      resultSearch.map((song) => {
        return (
          <PlayListItems song={song} playListComplete={playListComplete} setPlayListComplete={setPlayListComplete} setPlaylistToShow={setPlaylistToShow} playlistToShow={playlistToShow}/>
        )
      })
    }

    </>
  )
}

export default SearchSongForPlayList