import Player from "@madzadev/audio-player";
import { useEffect, useState } from "react";

export default function MusicPlayer() {
  const[tracks,setTracks]=useState([]);

  useEffect(() => {
       
      fetch('http://localhost:3000/tracks')
          .then(response => response.json())
          .then(data => setTracks(data))
          .catch(err => console.error(err));
          
        }, [])
        console.log(tracks)

 
  console.log(tracks)
  return (
    <div className="">
    { tracks.length&& <Player
      trackList={tracks}
      includeTags={false}
      includeSearch={false}
      showPlaylist={false}
      autoPlayNextTrack={true}
      />}
 {/* {tracks.length&&
            tracks.map(({id,name,artist,url,thumbnail,genre,liked})=>{
                return <Player key={id} id={id} name={name} artist={artist} url={url} img={thumbnail}
                genre={genre} liked={liked} />
            })
        } */}
    </div>
  )
}
