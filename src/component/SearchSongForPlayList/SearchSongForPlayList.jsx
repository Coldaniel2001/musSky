import React, { useContext, useState } from 'react'

import SongContext from '../../context/song/SongContext'
import PlayListItems from './PlayListItems'

const SearchSongForPlayList = ({playListComplete, setPlayListComplete, setPlaylistToShow, playlistToShow}) => {
  const {dataSong} = useContext(SongContext)

  return (
    <>
    {
      dataSong.map((song) => {
        return (
          <PlayListItems song={song} playListComplete={playListComplete} setPlayListComplete={setPlayListComplete} setPlaylistToShow={setPlaylistToShow} playlistToShow={playlistToShow}/>
        )
      })
    }

    </>
  )
}

export default SearchSongForPlayList