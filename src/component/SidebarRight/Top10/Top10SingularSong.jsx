import React, { useState, useContext } from 'react'
import Top10Card from '../../Top10Phone/Top10Card/Top10Card'

import SongContext from '../../../context/song/SongContext'


const Top10SingularSong = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const {dataSong} = useContext(SongContext)

const top10SongByLiked = dataSong.sort((a, b) => (a.likedBy?.length > b.likedBy?.length ? -1 : a.likedBy?.length < b.likedBy?.length ? 1 : 0)).slice(0,10)

  return (

    <div>
      {
        top10SongByLiked.map((song) => {
          const isDropdownActive = activeDropdown === song._id

          return (
            <Top10Card key={song._id} song={song} isDropdownActive={isDropdownActive} setActiveDropdown={setActiveDropdown} 
            activeDropdown={activeDropdown}/>
          )
        })
      }
    </div>
  )
}

export default Top10SingularSong