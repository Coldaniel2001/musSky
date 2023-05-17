import React, { useContext, useState } from "react";

import arrowDown from "../../assets/images/icons/arrow-down.png";

import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../../context/UserContext";
import { useLocation } from "react-router-dom";
import ArtistResult from "./ArtistResult/ArtistResult";
import TracksResult from "./TracksResult/TracksResult";
import PlaylistResult from "./PlaylistResult/PlaylistResult";import user from "../../assets/images/icons/user.png";


const Search = () => {
  const location = useLocation();
  const { userLogged } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState({
    playlists: [],
    artists: [],
    tracks: [],
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const { logout } = useAuth0();

//   const isSearchBarVisible = location.pathname === "/search";

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);
    // if (searchValue.length > 2) {
      const response = await fetch(
        `http://localhost:4002/search/${searchValue}`
      );
      const data = await response.json();
      if (data.ok) {
        setSearchResults(data.data);
      }
      // if (searchValue.length === 0) {
      //   return null
      // }
    // }
  };	const {  loginWithRedirect } = useAuth0()


  return (
    <>
      <div className="hidden xl:flex ">
        <div className=" relative hidden w-[100%] lg:block lg:mt-10 ml-10">
          {/* {isSearchBarVisible ? ( */}
            <>
              <input
                value={searchValue}
                type="text"
                className=" w-3/4 py-2 pl-10 pr-4 bg-white rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500 relative"
                placeholder="Artistas, Música, PlayLists, Albums..."
                onChange={handleSearch}
              />
              <div className="absolute top-0 left-0 mt-2 ml-3">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <div className="bg-btnColor rounded w-2/5 absolute z-10 max-h-[30vh] overflow-y-scroll scrollbar-hide">
                {searchResults.tracks.length && 
                <div className="font-bold text-[1.5rem] mt-5 border-b border-gray-600 mb-2 mx-3">
                <p>Canciones</p>
                </div>
                }
                    {searchResults.tracks.length ? (
                searchResults.tracks.map((track) => {
                  return <TracksResult track={track} />;
                })
                ) : (
                  ''
                  )}

              {searchResults.playlists.length && 
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
				{searchResults.artists.length && 
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
            </>
           {/*) : null} */}
        </div>
        <div className="flex flex-col justify-evenly justify-items-end">
          {userLogged ? (
            <div
              className="bg-[#212121] w-3/4 mx-auto mt-8 flex rounded-lg mr-10 2xl:hidden truncate"
              onClick={() => toggleModal(true)}
            >
              <img
                className="w-10 h-10 rounded-full my-2 ml-3"
                src={userLogged?.picture}
                alt="img-profile"
              />
              <div className="w-full flex justify-between mr-3">
                <p className="text-white my-auto ml-3">
                  {userLogged?.nickname}
                </p>
                <img
                  className="w-3 h-2 flex justify-end my-auto"
                  src={arrowDown}
                  alt="arrow"
                />
              </div>
              {showModal && (
                <div className="w-[14rem]  bg-white  hover:opacity-100 float-right  flex justify-center flex-col absolute mt-[3rem] ml-[-3rem] rounded-md text-black ">
                  <p className=" hover:bg-[#7239e526] pl-2 cursor-pointer rounded">
                    Mi cuenta
                  </p>
                  <p className=" hover:bg-[#7239e526] pl-2 cursor-pointer rounded">
                    Ajustes
                  </p>
                  <p
                    onClick={() =>
                      logout({
                        logoutParams: {
                          returnTo: window.location.origin + "/home",
                        },
                      })
                    }
                    className="hover:bg-[#7239e526] pl-2 cursor-pointer rounded"
                  >
                    Salir
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Search;
