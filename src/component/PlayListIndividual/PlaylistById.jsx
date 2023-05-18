import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Search from '../Search/Search'

import plusWhite from '../../assets/images/icons/plusWhite.png'
import menusWhite from '../../assets/images/icons/minusWhite.png'

import playWhite from '../../assets/images/icons/play-white.png'

import purpleHeart from '../../assets/images/icons/purple-heart.png'
import purpleHeartStroke from "../../assets/images/icons/purple-heart-stroke.png"

import addList from '../../assets/images/icons/add-list.png'
import ModalAddSongToPLaylist from '../ModalAddSongToPlyalist/ModalAddSongToPlaylist'

import UserContext from '../../context/UserContext'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import SongContext from '../../context/song/SongContext'


const PlaylistById = () => {
    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false)

    const { infoPlaylist, setInfoPlaylist, addPlaylist, likesByPlaylist } = useContext(PlaylistsContext)
    const { handleLikes, handleOpenSong, likesByUser, dataSong } = useContext(SongContext)
    const { userLogged } = useContext(UserContext)

    const [sendSong, setSendSong] = useState()

    const { userId } = useParams()

    const addToPlaylist = (song) => {
        setAddSongToPlaylist(true)
        setSendSong(song)
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
    }, [userId, dataSong]);


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
                {infoPlaylist?.author !== userLogged?.email && <div onClick={() => { addPlaylist(infoPlaylist) }} className='flex justify-end mt-4  '>
                    <div className={`flex items-center gap-2 border-2 px-4 py-1 rounded-xl ${!likesByPlaylist(infoPlaylist) ? "bg-green-600" : "bg-red-600"}  cursor-pointer`}>
                        {!likesByPlaylist(infoPlaylist) ? <img className='w-4 h-4' src={plusWhite} alt="" /> : <img className='w-4 h-1' src={menusWhite} alt="" />}
                        {infoPlaylist?.author !== userLogged?.email && <p className='text-white flex '>{!likesByPlaylist(infoPlaylist) ? "Añadir a mis playlists" : "Eliminar de mis playlists"}</p>}
                    </div>
                </div>}
                <div  >
                    <p className='relative text-white font-bold text-2xl mt-6 my-5'>Canciones</p>
                    <div className='lg:h-[35vh] overflow-y-scroll scrollbar-hide pb-60 lg:pb-0' >

                        {
                            infoPlaylist ?
                                infoPlaylist.songs.map((song) => {
                                    return (

                                        <div key={song._id} className='relative flex text-white items-center mb-3 sm:mx-10 hover:bg-[#7239e575] cursor-pointer rounded'>
                                            <img onClick={() => handleOpenSong(song)} className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded' src={song.picture} alt="images-song" />
                                            <p onClick={() => handleOpenSong(song)} className='font-semibold text-xl w-full md:w-[42%] pl-10 ' >{song.nameSong}</p>
                                            <p onClick={() => handleOpenSong(song)} className='w-[42%] text-xl font-thin hidden md:block'>{song.nameArtist}</p>
                                            <img onClick={() => handleLikes(song)} className='w-[6%] md:w-[4%] lg:w-[2%] mx-5 cursor-pointer' src={likesByUser(song) ? purpleHeart : purpleHeartStroke} alt="" />
                                            <img onClick={() => addToPlaylist(song)} className='w-[6%] md:w-[4%] lg:w-[3%] mr-5 cursor-pointer' src={addList} alt="" />
                                        </div>

                                    )
                                })
                                : ""
                        }

                        {
                            addSongToPlaylist &&
                            <ModalAddSongToPLaylist setAddSongToPlaylist={setAddSongToPlaylist} sendSong={sendSong} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistById