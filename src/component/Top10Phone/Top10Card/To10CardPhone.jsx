import React, { useContext } from 'react'
import more from '../../../assets/images/icons/more.png'
import bluePlay from '../../../assets/images/icons/blue-play.png'
import SongContext from '../../../context/song/SongContext'
import Top10ModalDetail from '../Top10ModalDetail/Top10ModalDetail'
import purpleHeart from '../../../assets/images/icons/purple-heart.png'
import purpleHeartStroke from '../../../assets/images/icons/purple-heart-stroke.png'

const To10CardPhone = ({ song, isDropdownActive, setActiveDropdown, activeDropdown }) => {
  const {handleLikes, handleOpenSong, likesByUser } = useContext(SongContext)

    const handleToogle = () => {
        if (activeDropdown === song._id) {
          setActiveDropdown(null)
        } else {
          setActiveDropdown(song._id)
        }
      }


  return (
    <div key={song.id} className='w-full min-w-[25rem] grid grid-cols-9 cursor-pointer  bg-[#D9D9D9] items-center rounded bg-opacity-20 m-2 mx-auto'>
    <img className='col-span-2 w-[50px] h-[50px] ml-2 rounded-full cursor-pointer' onClick={()=>handleOpenSong(song)} src={song.picture} alt="" />
        <div className='col-span-5 my-4' onClick={()=>handleOpenSong(song)}>
            <p className='text-xl font-bold'>{song.nameArtist}</p>
            <p>{song.nameSong}</p>
        </div>
        <div className='flex'>
        <img onClick={() => handleLikes(song)} className='w-4/5 mx-5 cursor-pointer mr-4' src={likesByUser(song) ? purpleHeart  : purpleHeartStroke} alt="" />
        <div className='relative flex flex-col '>
        <img className='w-3/5 my-auto' src={more} alt="" onClick={handleToogle} />
        <div className='z-50'>
        </div>
        {
        
          isDropdownActive ? <Top10ModalDetail /> : null
        }
        </div>
        </div>
</div>
  )
}

export default To10CardPhone