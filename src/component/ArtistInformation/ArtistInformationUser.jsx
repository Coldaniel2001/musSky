import React, { useContext, useEffect, useState } from 'react'

import playWhite from '../../assets/images/icons/play-white.png'
import addList from '../../assets/images/icons/add-list.png'
import purpleHeartStroke from "../../assets/images/icons/purple-heart-stroke.png"
import purpleHeart from '../../assets/images/icons/purple-heart.png'
import Search from '../Search/Search'

import { toast } from 'react-hot-toast'
import SongContext from '../../context/song/SongContext'
import UserContext from '../../context/UserContext'

import ModalAddSongToPLaylist from '../ModalAddSongToPlyalist/ModalAddSongToPlaylist'





const ArtistInformationUser = ({ infoUser }) => {


    const { dataSong, handleOpenSong, handleLikes, likesByUser } = useContext(SongContext)
    const { userLogged } = useContext(UserContext)
    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false)
    const [sendSong, setSendSong] = useState()

    const tracksUser = dataSong.filter((song) => {
        return song?.nameArtist === infoUser?.nickname
    })


    const addToPlaylist = (song) => {
        setAddSongToPlaylist(true)
        setSendSong(song)
    }



    return (
        <div>
            <Search />
            <div className='mt-10 xl:mx-10 '>
                <div className='w-3/4  mx-auto lg:flex lg:w-full border-b border-gray-700 pb-10'>
                    <img className='w-40 h-40 lg:w-52 lg:h-52 xl:h-60 xl:w-60 rounded-full mx-auto' src={infoUser?.picture} alt="" />

                    <div className='lg:ml-10 w-ful xl:ml-20 lg:w-[70%]  flex flex-col items-center lg:block '>

                        <div className='flex justify-center lg:block'>
                            <h2 className='text-white lg:text-4xl text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto'>{infoUser?.name}</h2>
                        </div>

                        <div className=' flex flex-col justify-end items-center lg:items-start  w-full'>
                            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Nickname:<span className='text-white'>{infoUser?.nickname}</span> </p>
                            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Email: <span className='text-white'>{infoUser?.email}</span>  </p>
                            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Fecha Suscripcion: <span className='text-white'>22/02/2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col' >
                <p className='relative text-white font-bold text-3xl mt-10 mb-6 mx-10 '>Canciones del artista</p>
                <div className='lg:h-[35vh]  lg:overflow-y-scroll lg:scrollbar-hide' >

                    {
                        userLogged ?
                            tracksUser.map((song) => {
                                return (

                                    <div key={song._id} className='relative flex text-white items-center mb-3 mx-10 hover:bg-[#7239e575] cursor-pointer rounded  '>
                                        <img onClick={() => handleOpenSong(song)} className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded' src={song.picture} alt="images-song" />
                                        <p onClick={() => handleOpenSong(song)} className='font-semibold text-xl w-full md:w-[42%] pl-10 ' >{song.nameSong}</p>
                                        <p onClick={() => handleOpenSong(song)} className='hidden sm:block w-[42%] text-xl font-thin'>{song.nameArtist}</p>
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
    )
}

export default ArtistInformationUser