import React, { useContext, useState } from 'react'
import Search from '../Search/Search'

import playWhite from '../../assets/images/icons/play-white.png'

import purpleHeart from '../../assets/images/icons/purple-heart.png'
import purpleHeartStroke from "../../assets/images/icons/purple-heart-stroke.png"

import addList from '../../assets/images/icons/add-list.png'
import likesPlaylists from '../../assets/images/likesPlaylists.jpg'

import SongContext from '../../context/song/SongContext'
import UserContext from '../../context/UserContext'
import ModalAddSongToPLaylist from '../ModalAddSongToPlyalist/ModalAddSongToPlaylist'


const PlayListIndividual = () => {

    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false)
    const [sendSong, setSendSong] = useState()
    const { dataSong, handleLikes, handleOpenSong, likesByUser } = useContext(SongContext)
    const { userLogged } = useContext(UserContext)


    const musicLikesToTracks = dataSong.filter((listToLike) => {
        return listToLike.likedBy?.includes(userLogged._id)
    })

    const addToPlaylist = (song) => {
        setAddSongToPlaylist(true)
        setSendSong(song)
    }




    return (
        <div>
            <Search />
            <div className='mt-10 mx-10'>
                <h2 className='text-white text-[2rem] font-extrabold mb-0 sm:mb-4'>PLAYLIST</h2>
                <div className='relative w-full h-[26vh]  '>
                    <img className='w-full h-[24vh] hidden xl:block opacity-20 absolute top-0 left-0 rounded' src={likesPlaylists} alt="" />
                    <img className='relative inset-0 m-auto pt-10 h-[20vh] xl:h-[18vh] xl:w-[20vw] rounded' src={likesPlaylists} alt="" />
                    <p className='text-white relative flex justify-center font-bold text-xl md:text-3xl mt-1'>Canciones que me gustan</p>
                </div>
                <div  >
                    <p className='hidden sm:flex relative text-white font-bold md:text-2xl mt-6 my-5'>Canciones</p>
                    <div className='h-[27vh] lg:h-[37vh] overflow-y-scroll scrollbar-hide  lg:pb-0 ' >

                        {
                            userLogged ?
                                musicLikesToTracks.map((song) => {
                                    return (

                                        <div key={song._id} className='relative flex text-white items-center mb-3 sm:mx-10 hover:bg-[#7239e575] cursor-pointer rounded  '>
                                            {/* <div className='w-[3%] flex justify-center'>
                                                <p className='text-white span-col-2 text-xl font-thin justify-center'>1</p>
                                            </div> */}
                                            <img onClick={() => handleOpenSong(song)} className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded' src={song.picture} alt="images-song" />
                                            <p onClick={() => handleOpenSong(song)} className='font-semibold text-xl w-full md:w-[42%] pl-10 ' >{song.nameSong}</p>
                                            <p onClick={() => handleOpenSong(song)} className='hidden sm:block w-[42%] text-xl font-thin'>{song.nameArtist}</p>
                                            <img onClick={() => handleLikes(song)} className='w-[6%] md:w-[4%] lg:w-[2%] mx-5 cursor-pointer' src={likesByUser(song) ? purpleHeart : purpleHeartStroke} alt="" />
                                            <img className='w-[6%] md:w-[4%] lg:w-[3%] mr-5 cursor-pointer' onClick={() => addToPlaylist(song)} src={addList} alt="" />
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
                <ModalAddSongToPLaylist setAddSongToPlaylist={setAddSongToPlaylist} sendSong={sendSong} />
            }
        </div>
    )
}

export default PlayListIndividual