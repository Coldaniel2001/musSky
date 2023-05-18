import React, { useContext, useState } from 'react'
import rubish from '../../assets/images/icons/rubish.png'
import edit from '../../assets/images/icons/edit.png'
import ModalAddNewSong from '../ModalAddNewSong/ModalAddNewSong'
import UserContext from '../../context/UserContext'
import { useAuth0 } from '@auth0/auth0-react'
import SongContext from '../../context/song/SongContext'

import { toast } from "react-hot-toast";
import Search from '../Search/Search'


const MySongSection = () => {
  const [uploadSong, setUploadSong] = useState(false)
  const [editSong, setEditSong] = useState(false)

  const { userLogged } = useContext(UserContext)
  const { dataSong, deleteSong, handleOpenSong } = useContext(SongContext)


  const SongUploaded = dataSong.filter((song) => {
    return song.nameArtist === userLogged?.nickname

  })

  const ConfirmDeleteSong = (song) => {
    console.log(song)
    deleteSong(song)
  }

  const handleDeleteSong = (song) => {
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter ' : 'animate-leave'} max-w-[70%] border-2 border-white bg-gradient-to-tr from-black via-black to-[#7339E5] shadow-lg rounded-lg pointer-events-auto mt-[40vh] ring-1 ring-black ring-opacity-5`}>
        <div className='flex justify-center'>
          <img className='w-32' src={song.picture} alt="" />
        </div>
        <div className='flex p-4'>
          {/* <img className='w-20 rounded-full mr-3' src={shakira} alt="" /> */}
          <div className='block text-white'>
            <p>¿Estás seguro que quieres borrar a {song.nameSong} de la base de datos?</p>
            <div className='flex justify-center items-center mt-3 gap-3'>
              <button onClick={()=> toast.dismiss(t._id)} className='bg-[#7C8BBF] px-10 py-2 rounded' >No</button>
              <button onClick={()=>{
                ConfirmDeleteSong(song)
                toast.dismiss(t._id)
                }
                } className='bg-[#BF0000] px-10 py-2 rounded' >Si</button>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>
    <Search />
    <div className='text-white px-10 py-10 min-h-screen'>
      <div className='border-b border-[#374151]  pb-10 mb-10'>
        <h2 className='text-white text-[2rem] font-extrabold'>MIS CANCIONES</h2>
        <div className='flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-end lg:justify-start'>
           <img className='rounded-full w-40 h-40 sm:w-48 sm:h-48 2xl:w-60 2xl:h-60 mt-10 mr-6' src={userLogged.picture} alt="" />   
           <div className='flex flex-col justify-end gap-5 mt-5 lg:mt-0 items-center lg:items-start'>
              <h3 className='text-2xl md:text-5xl font-bold'>Hola {userLogged.nickname},</h3>
              <p className='text-lg 2xl:text-2xl'>Estas son las canciones que has subido</p>
           </div>
        </div>
      </div>

      <div className='xl:mx-10 lg:h-[40vh] lg:overflow-y-scroll lg:scrollbar-hide '>

        {
          SongUploaded.length ?
            SongUploaded.map((song) => {
              return (
                <div onClick={()=>handleOpenSong(song)} key={song._id} className='relative flex text-white items-center mb-3 gap-3 hover:bg-[#7239e575] rounded cursor-pointer'>
                  {
                    !editSong ?
                      <img className='ml-2 md:ml-0 w-[70px] h-[70px] sm:w-[6%] md:w-[5%] lg:w-[4%] rounded' src={song.picture} alt="" />
                      :
                      <img className='ml-2 md:ml-0 w-[9%] sm:w-[6%] md:w-[5%] lg:w-[4%] rounded border-2 border-[#7339E5] opacity-50' src={song.thumbnail} alt="" />
                  }
                  {
                    !editSong ?
                      <p className='font-semibold 2xl:text-xl w-[66%] sm:w-[42%] pl-10 ' >{song.nameSong}</p>
                      :
                      <input className='w-[42%]  bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-left ' type="text" placeholder={song.name} />

                  }
                  {
                    !editSong ?
                      <p className='sm:w-[42%] 2xl:text-xl font-thin hidden sm:flex'>{song.nameArtist}</p>
                      :
                      <input className='w-[42%]  bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-left ' type="text" placeholder={song.artist} />
                  }
                  {
                    !editSong ?
                      <>
                        <img onClick={() => { handleDeleteSong(song) }} className='w-[4%] md:w-[3%]  lg:w-[2%] 2xl:w-[1.5%]  mx-5 cursor-pointer' src={rubish} alt="" />
                        <img className='w-[4%] md:w-[3%] lg:w-[2%] 2xl:w-[1.5%]  mr-5 cursor-pointer' src={edit} alt="" onClick={() => setEditSong(true)} />
                      </> :
                      <button className='bg-[#53b55c] px-4 md:px-10 py-2 rounded' onClick={() => setEditSong(false)}>Guardar</button>

                  }
                </div>
              )
            })
            :
            <div className='w-3/5  bg-[#F1F5F9] mx-auto rounded-lg border-2 border-[#E2E8F0] flex flex-col items-center'>
              <h3 className='text-4xl font-bold text-black text-center p-10 '>Oops parece que todavia no has creado ninguna canción</h3>
              <h4 className='text-gray-500 font-bold mb-6'>¡Comienza tu viaje en musSky subiendo la primera!</h4>
              <button className='bg-[#7339E5] px-4 py-2 w-1/3 text-white rounded hover:border-2 border-[#fff] mb-6' onClick={() => setUploadSong(true)}>Añadir primera canción</button>
            </div>
        }

        <div className='flex justify-end mr-10 mt-10 mb-20 '>
          <button className='bg-[#7339E5] px-4 py-2 text-white rounded hover:border-2 border-[#fff]' onClick={() => setUploadSong(true)}>Añadir canción</button>
        </div>
      </div>

      {
        uploadSong &&
        <ModalAddNewSong setUploadSong={setUploadSong} SongUploaded={SongUploaded} />

      }

    </div>
    </div>


  )
}

export default MySongSection