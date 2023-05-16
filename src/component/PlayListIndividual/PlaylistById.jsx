import React, { useContext, useEffect, useState } from 'react'
import Search from '../Search/Search'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import background from '../../assets/images/background.png'
import plusWhite from '../../assets/images/plusWhite.png'



import playWhite from '../../assets/images/icons/play-white.png'

import purpleHeart from '../../assets/images/icons/purple-heart.png'
import addList from '../../assets/images/icons/add-list.png'
import seeMore from '../../assets/images/icons/see-more.png'
import SongContext from '../../context/song/SongContext'
import { useParams } from 'react-router-dom'
import { data } from 'autoprefixer'
import ModalAddSongToPLaylist from '../ModalAddSongToPlyalist/ModalAddSongToPlaylist'

const PlaylistById = () => {
    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false)

    const { handleLikes, handleOpenSong } = useContext(SongContext)

    const {userId} = useParams()
    const [infoPlaylist, setInfoPlaylist] = useState(null);

    const addToPlaylist = () => {
        setAddSongToPlaylist(true)
    }




useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4002/playlists/id/${userId}`)
      const data = await response.json();
      setInfoPlaylist(data.playlist);
    } catch (error) {
      console.error(error);
    }

  }
  fetchData();
}, [userId]);



    return (
        <div>
            <Search />
            <div className='mt-10 mx-10'>
                <h2 className='text-white text-[2rem] font-extrabold mb-6'>PLAYLIST</h2>
                <div className='relative w-full h-[23vh]'>
                    <img className='w-full h-[22vh] hidden xl:block opacity-20 absolute top-0 left-0 rounded' src={infoPlaylist?.imagePlaylist} alt="" />
                    <img className='relative inset-0 m-auto pt-10 h-[20vh] xl:h-[15vh] xl:w-[15vw] rounded' src={infoPlaylist?.imagePlaylist} alt="" />
                    <p className='text-white relative flex justify-center font-bold text-3xl mt-1'>{infoPlaylist?.namePlaylist}</p>
                </div>
                <div className='flex justify-end mt-4  '>
                    <div className='flex items-center gap-2 border-2 px-4 py-1 rounded-xl hover:bg-green-600 cursor-pointer'>
                        <img className='w-4 h-4' src={plusWhite} alt="" />
                        <p className='text-white flex '>Añadir<span className='hidden lg:block'>a mis playlists</span> </p>
                    </div>
                </div>
                <div  >
                    <p className='relative text-white font-bold text-2xl mt-6 my-5'>Canciones</p>
                    <div className='lg:h-[35vh] overflow-y-scroll scrollbar-hide pb-60 lg:pb-0' >

                        {
                            infoPlaylist ?
                            infoPlaylist.songs.map((song) => {
                                    return (

                                        <div key={song._id} className='relative flex text-white items-center mb-3 sm:mx-10 hover:bg-[#7239e575] cursor-pointer rounded'>
                                            {/* <div className='w-[3%] flex justify-center'>
                                                <p className='text-white span-col-2 text-xl font-thin justify-center'>1</p>
                                            </div> */}
                                            <img className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded' src={song.picture} alt="images-song" />
                                            <p className='font-semibold text-xl w-full md:w-[42%] pl-10 ' >{song.nameSong}</p>
                                            <p className='w-[42%] text-xl font-thin hidden md:block'>{song.nameArtist}</p>
                                            <img onClick={() => handleOpenSong(song)} className='w-[6%] md:w-[4%] lg:w-[3%] cursor-pointer' src={playWhite} alt="" />
                                            <img onClick={() => handleLikes(song)} className='w-[6%] md:w-[4%] lg:w-[2%] mx-5 cursor-pointer' src={purpleHeart} alt="" />
                                            <img className='w-[6%] md:w-[4%] lg:w-[3%] mr-5 cursor-pointer' onClick={()=>addToPlaylist()}  src={addList} alt="" />
                                            <img className='w-[6%] md:w-[4%] lg:w-[2%] cursor-pointer' src={seeMore} alt="" />
                                        </div>

                                    )
                                })
                                : ""
                        }



                    </div>
                </div>
            </div>
            {
                            addSongToPlaylist &&
                            <ModalAddSongToPLaylist setAddSongToPlaylist={setAddSongToPlaylist}/>
                        }
        </div>
    )
}

export default PlaylistById