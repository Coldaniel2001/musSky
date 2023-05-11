import React from 'react'
import Top10Card from '../../Top10Phone/Top10Card/Top10Card'


const Top10SingularSong = ({dataSong}) => {
  return (

   <div>
        {
        
            dataSong && dataSong.map((song) => {
                
                return (
             <Top10Card key={song.id} name={song.name} imageUrl={song.imageUrl} artist={song.artist}/>
                )
            })
        }
    </div>
  )
}

export default Top10SingularSong