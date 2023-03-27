import React, { useState, useEffect } from "react";

import MusicPlayerContext from "./MusicPlayerContext";



const MusicPlayerProvider = ({ children }) => {

    const [allSong, setAllSong] = useState([])
    const [oneSong, setOneSong] = useState([])
    const [currentSong, setCurrentSong] = useState(1);

    const urlOneTracks = `http://localhost:3004/tracks/${currentSong}`;
    const urlAllTracks = 'http://localhost:3004/tracks';
    
    useEffect(() => {
        const fetchAllSong = async () => {
            const response = await fetch(urlAllTracks)
            const data = await response.json()
            setAllSong(data);
        }
        fetchAllSong()

    }, [urlAllTracks])

    useEffect(() => {
        const fetchOneSong = async () => {
            const response = await fetch(urlOneTracks)
            const data = await response.json()
            setOneSong(data);
        }
        fetchOneSong()
    }, [urlOneTracks])
    return (
        <MusicPlayerContext.Provider
            value={{
                allSong,
                oneSong,
                currentSong,
                setCurrentSong
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );

}

export default MusicPlayerProvider