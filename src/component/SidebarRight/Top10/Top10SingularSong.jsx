import React, { useState } from 'react'
import Top10Card from '../../Top10Phone/Top10Card/Top10Card'


const Top10SingularSong = ({ dataSong }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (

    <div>
      {
        dataSong && dataSong.map((song) => {
          const isDropdownActive = activeDropdown === song.id
          return (
            <Top10Card key={song.id} song={song} isDropdownActive={isDropdownActive} setActiveDropdown={setActiveDropdown} 
            activeDropdown={activeDropdown}/>
          )
        })
      }
    </div>
  )
}

export default Top10SingularSong