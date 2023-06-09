import { useContext, useState } from 'react'
import more from '../../../assets/images/icons/more.png'

import Top10ModalDetail from '../Top10ModalDetail/Top10ModalDetail'
import SongContext from '../../../context/song/SongContext'

import ModalAddSongToPLaylist from '../../ModalAddSongToPlyalist/ModalAddSongToPlaylist'
import { useParams } from 'react-router-dom'



function Top10Card({ song, isDropdownActive,
  setActiveDropdown, activeDropdown }) {

    const {handleOpenSong} = useContext(SongContext)
    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false)
    const [ sendSong, setSendSong ] = useState()

  const handleToogle = () => {
    if (activeDropdown === song._id) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(song._id)
    }
  }

  const addToPlaylist = (song) => {
    setSendSong(song)
  }

  const handleModal = () =>{
    setAddSongToPlaylist(true)
  }


  return (
    <div  key={song.id} className='grid grid-cols-8 grid-rows-10 mt-4 ml-3 relative cursor-pointer'>
      <img onClick={()=>handleOpenSong(song)} className='col-span-2 w-[50px] h-[50px] rounded-full' src={song.picture} alt="images-song" />
      <div onClick={()=>handleOpenSong(song)} className='col-span-5 text-white my-auto cursor-pointer'>
        <p className='font-bold text-xl truncate'>{song.nameSong}</p>
        <p className='text-gray-500'>{song.nameArtist}</p>
      </div>
      <div className='relative flex flex-col '>
        <img className='w-3/5 my-auto' src={more} alt=""  
        onClick={() => {
              handleToogle()
              addToPlaylist(song)
            }} />
        {
          isDropdownActive ? <Top10ModalDetail song={song}  handleModal={handleModal} /> : null
        }

      </div>
      {
        addSongToPlaylist &&
      <ModalAddSongToPLaylist setAddSongToPlaylist={setAddSongToPlaylist} sendSong={sendSong} />
  }
    </div>
  )
}

export default Top10Card