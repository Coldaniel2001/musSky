import React, { useContext, useState } from 'react'
import Search from '../Search/Search'
import background from '../../assets/images/background.png'
import playWhite from '../../assets/images/icons/play-white.png'
import redHeart from '../../assets/images/icons/red-heart.png'
import purpleHeart from '../../assets/images/icons/purple-heart.png'
import addList from '../../assets/images/icons/add-list.png'
import seeMore from '../../assets/images/icons/see-more.png'
import likesPlaylists from '../../assets/images/likesPlaylists.jpg'

import SongContext from '../../context/song/SongContext'
import UserContext from '../../context/UserContext'


const PlayListIndividual = () => {

    const { dataSong, handleLikes, handleOpenSong } = useContext(SongContext)
    const { userLogged } = useContext(UserContext)

    const musicLikesToTracks = dataSong.filter((listToLike) => {
        return listToLike.likedBy?.includes(userLogged._id)
    })



    return (
        <div>
            <Search />
            <div className='mt-10 mx-10'>
                <h2 className='text-white text-[2rem] font-extrabold mb-4'>PLAYLIST</h2>
                <div className='relative w-full h-[26vh] '>
                    <img className='w-full h-[24vh] hidden xl:block opacity-20 absolute top-0 left-0 rounded' src={likesPlaylists} alt="" />
                    <img className='relative inset-0 m-auto pt-10 h-[20vh] xl:h-[18vh] xl:w-[20vw] rounded' src={likesPlaylists} alt="" />
                    <p className='text-white relative flex justify-center font-bold text-xl md:text-3xl mt-1'>Canciones que me gustan</p>
                </div>
                <div  >
                <p className='relative text-white font-bold md:text-2xl mt-6 my-5'>Canciones</p>
                    <div className='lg:h-[37vh] overflow-y-scroll scrollbar-hide pb-60 lg:pb-0 ' >

                        {
                            userLogged ?
                                musicLikesToTracks.map((song) => {
                                    return (

                                        <div key={song._id} className='relative flex text-white items-center mb-3 sm:mx-10 hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>
                                            {/* <div className='w-[3%] flex justify-center'>
                                                <p className='text-white span-col-2 text-xl font-thin justify-center'>1</p>
                                            </div> */}
                                            <img className='w-[50px] h-[50px]' src={song.picture} alt="images-song" />
                                            <p className='font-semibold text-xl w-full md:w-[42%] pl-10 ' >{song.nameSong}</p>
                                            <p className='w-[42%] font-thin hidden md:block'>{song.nameArtist}</p>
                                            <img onClick={() => handleOpenSong(song)} className='w-[6%] md:w-[4%] lg:w-[3%] cursor-pointer' src={playWhite} alt="" />
                                            <img onClick={() => handleLikes(song)} className='w-[6%] md:w-[4%] lg:w-[2%] mx-5 cursor-pointer' src={purpleHeart} alt="" />
                                            <img className='w-[6%] md:w-[4%] lg:w-[3%] mr-5 cursor-pointer' src={addList} alt="" />
                                            <img className='w-[6%] md:w-[4%] lg:w-[2%] cursor-pointer' src={seeMore} alt="" />
                                        </div>

                                    )
                                })
                                : ""
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayListIndividual