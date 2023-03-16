import './App.css';
import RoutesPath from './routes/RoutesPath';
import Artists from './db/data';
import {  useState } from 'react';


function App() {
  const[artists,setArtists]=useState(Artists);

  
  return (
    <>
      <RoutesPath artists={artists}/>
    </>
  );
}

export default App;
