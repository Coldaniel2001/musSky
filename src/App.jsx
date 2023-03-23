import './App.css';

import { tracks } from './db/db';
import { useRef, useState, useEffect } from 'react';

import MusicPlayed from './component/MusicPlayed/MusicPlayed';


const App = () => {
  const [songs, setSongs] = useState(tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(tracks[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isPlaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }


  return (
    <div className="App">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <MusicPlayed songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} 
      id={songs.id}  thumbnail={songs.thumbnail} artist={songs.artist} name={songs.name}/>
    </div>
  );
}

export default App;