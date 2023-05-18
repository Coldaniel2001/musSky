import React from 'react'
import TracksResult from './TracksResult/TracksResult';
import PlaylistResult from './PlaylistResult/PlaylistResult';
import ArtistResult from './ArtistResult/ArtistResult';
import { useState } from 'react';

const SearchForPhone = () => {
	const [searchValue, setSearchValue] = useState("");
	const [searchResults, setSearchResults] = useState({
	  playlists: [],
	  artists: [],
	  tracks: [],
	});

	const handleSearch = async (e) => {
		const value = e.target.value;
		setSearchValue(value);
	
		if (value.trim() === "") {
		  setSearchResults({
			playlists: [],
			artists: [],
			tracks: [],
		  });
		} else {
		  const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/search/${searchValue}`
		  );
		  const data = await response.json();
		  if (data.ok) {
			setSearchResults(data.data);
		  }
		}
	  };	

  return (
    <div className='w-full xl:flex'>
		<div className="w-[100%] xl:hidden  ml-10 pr-20">
		<input
                value={searchValue}
                type="text"
                className=" w-3/4 py-2 pl-10 pr-4 bg-white rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500 relative"
                placeholder="Artistas, Música, PlayLists, Albums..."
                onChange={handleSearch}
              />
              <div className="hidden absolute top-0 left-0 mt-2 ml-3">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <div className="bg-btnColor rounded w-5/6 absolute z-10 max-h-[30vh] overflow-y-scroll scrollbar-hide">
                {searchResults.tracks.length >0 && 
                <div className="font-bold text-[1.5rem] mt-5 border-b border-gray-600 mb-2 mx-3">
                <p>Canciones</p>
                </div>
                }
                    {searchResults.tracks.length ? (
                searchResults.tracks.map((track) => {
                  return <TracksResult key={track._id} track={track} />;
                })
                ) : (
                  ''
                  )}

              {searchResults.playlists.length >0 && 
					<div className="font-bold text-[1.5rem] mt-5 border-b border-gray-600 mb-2 mx-3">
					<p>Playlist</p>
					</div>
					}
                {searchResults.playlists.length ? (
                  searchResults.playlists.map((playlist) => {
                    return <PlaylistResult playlist={playlist}/>;
                  })
                ) : (
                  ''
                )}
				{searchResults.artists.length >0 && 
					<div className="font-bold text-[1.5rem] mt-5 border-b border-gray-600 mb-2 mx-3">
					<p>Artistas</p>
					</div>
					}
                {searchResults.artists.length ? (
                  searchResults.artists.map((artist) => {
                    return <ArtistResult artist={artist}/>;
                  })
                ) : (
                  ''
				  )}
		</div>
    </div>
	</div>
  )
}

export default SearchForPhone