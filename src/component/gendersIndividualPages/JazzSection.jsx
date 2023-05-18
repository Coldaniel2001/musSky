import React, { useContext, useState } from 'react'
import fito from '../../assets/images/genders.artists/fito.png'
import jazz from '../../assets/images/genders.artists/jazz.png'
import Search from '../Search/Search'
import SongContext from '../../context/song/SongContext'
import purpleHeart from '../../assets/images/icons/purple-heart.png'
import purpleHeartStroke from '../../assets/images/icons/purple-heart-stroke.png'
import addList from '../../assets/images/icons/add-list.png'
import playWhite from '../../assets/images/icons/play-white.png'
import UserContext from '../../context/UserContext'
import ModalAddSongToPLaylist from '../ModalAddSongToPlyalist/ModalAddSongToPlaylist'

const JazzSection = () => {
    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false)
    const {userLogged} = useContext(UserContext)
    const { dataSong, handleLikes, handleOpenSong, likesByUser } = useContext(SongContext)

    const [sendSong, setSendSong] = useState()

    const addToPlaylist = (song) => {
        setAddSongToPlaylist(true)
        setSendSong(song)
    }
    const jazzMusic=dataSong.filter(dataSong=>dataSong.genre==="Jazz")


  return (

    <div className='overflow-y-scroll scrollbar-hide' >
        <Search />
        <div className='ml-10  xl:mt-10'>
            <h2 className='text-white text-[2rem] font-extrabold mb-6'>GÉNERO</h2>
        </div>
        <div className='mx-10 2xl:mx-20 mt-20 xl:mt-16 2xl:mt-28 rounded-lg bg-gradient-to-t  from-[#FE6A6A] via-[#FE6A6A] to-transparent   flex flex-wrap h-[6rem] xl:h-[8rem] 2xl:h-[10rem] justify-end relative pr-10'>
            <img className='absolute left-[2rem] bottom-[0rem] xl:w-[10rem] h-[10rem] 2xl:w-[15rem] 2xl:h-[15rem]' src={jazz} alt='' /><br />
            <p className='absolute bottom-[2rem] text-white font-bold text-3xl 2xl:text-5xl ml-[2rem]'>Jazz</p>
        </div>
        <div className='mx-6 sm:mx-10 2xl:mx-20border-b border-gray-600 mb-6 '>
            <p className='text-white font-bold text-[1.5rem] mt-16 '>Canciones</p>
        </div>
        <div className='mx-6 md:mx-10 2xl:mx-20 h-[35vh] lg:overflow-y-scroll lg:scrollbar-hide'>
    {
        userLogged ?
            jazzMusic.map((song) => {
                return (

                    <div key={song._id} className='relative flex text-white items-center mb-3 sm:mx-10 hover:bg-[#7239e575] cursor-pointer rounded  '>
                        {/* <div className='w-[3%] flex justify-center'>
                            <p className='text-white span-col-2 text-xl font-thin justify-center'>1</p>
                        </div> */}
                        <img className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded' src={song.picture} alt="images-song" />
                    <p className='font-semibold text-xl w-full md:w-[42%] pl-10 ' >{song.nameSong}</p>
                    <p className='hidden md:block w-[42%] text-xl font-thin'>{song.nameArtist}</p>
                        <img onClick={() => handleOpenSong(song)} className='w-[6%] md:w-[4%] lg:w-[3%] cursor-pointer' src={playWhite} alt="" />
                        <img onClick={() => handleLikes(song)} className='w-[6%] md:w-[4%] lg:w-[2%] mx-5 cursor-pointer' src={likesByUser(song) ? purpleHeart  : purpleHeartStroke} alt="" />
                        <img onClick={()=>addToPlaylist(song)} className='w-[6%] md:w-[4%] lg:w-[3%] mr-5 cursor-pointer'  src={addList} alt="" />
                    </div>

                )
            })
            : ""
    }
    </div>
    {
                            addSongToPlaylist &&
                            <ModalAddSongToPLaylist setAddSongToPlaylist={setAddSongToPlaylist} sendSong={sendSong}/>
                        }
    </div>
    



  )
}

export default JazzSection