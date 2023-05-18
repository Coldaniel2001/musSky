import React, { useContext, useState } from 'react'
import rubish from '../../assets/images/icons/rubish.png'
import edit from '../../assets/images/icons/edit.png'
import UserContext from '../../context/UserContext'
import SongContext from '../../context/song/SongContext'

const SingularSongUploaded = ({song, handleDeleteSong,SongUploaded}) => {
    const {userLogged} = useContext(UserContext)
    const {updateTrack} = useContext(SongContext)
    
    const [editSong, setEditSong] = useState(false)

    const [formData, setFormData] = useState({
        nameArtist: song.nameArtist,
        nameSong: song.nameSong,
        picture: song.picture,
        song: song.song,
        genre: song.genre,
        likedBy: song.likedBy
    })


    const handleChangeForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    
    const handleSave = async (song) => {
        updateTrack(song._id, formData)
        setEditSong(false)
    }


  return (
    <div key={song._id} className='relative flex text-white items-center mb-3 gap-3 hover:bg-[#7239e575] rounded cursor-pointer'>
                  <div className='w-[3%] flex justify-center'>
                    <p className='text-white span-col-2 text-xl font-thin justify-center'>{song.id}</p>
                  </div>

                      <img className='ml-2 md:ml-0 w-[70px] h-[70px] sm:w-[6%] md:w-[5%] lg:w-[4%] rounded' src={song.picture} alt="" />
                      
                  {
                    !editSong ?
                      <p className='font-semibold 2xl:text-xl w-[66%] sm:w-[42%] pl-10 ' >{song.nameSong}</p>
                      :
                      <input className='w-[42%]   bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-left ' 
                      type="text" 
                      placeholder={song.name}
                      name="nameSong"
                      value={formData.nameSong}
                      onChange={handleChangeForm} />
                  }

                      <p className='sm:w-[42%] 2xl:text-xl font-thin hidden sm:flex'>{song.nameArtist}</p>

                  {
                    !editSong ?
                      <>
                        <img onClick={() => { handleDeleteSong(song) }} className='w-[4%] md:w-[3%]  lg:w-[2%] 2xl:w-[1.5%]  mx-5 cursor-pointer' src={rubish} alt="" />
                        <img className='w-[4%] md:w-[3%] lg:w-[2%] 2xl:w-[1.5%]  mr-5 cursor-pointer' src={edit} alt="" onClick={() => setEditSong(true)} />
                      </> :
                      <button className='bg-[#53b55c] px-4 md:px-10 py-2 rounded' onClick={()=>handleSave(song)}>Guardar</button>

                  }
                </div>
  )
}

export default SingularSongUploaded