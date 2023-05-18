import React, { useContext, useState } from 'react'

import ModalAddNewSong from '../ModalAddNewSong/ModalAddNewSong'
import UserContext from '../../context/UserContext'
import { useAuth0 } from '@auth0/auth0-react'
import SongContext from '../../context/song/SongContext'



import { toast } from "react-hot-toast";
import Search from '../Search/Search'
import SingularSongUploaded from './SingularSongUploaded'


const MySongSection = () => {
  const [uploadSong, setUploadSong] = useState(false)



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
    <div className='text-white px-10 py-10 min-h-screen pb-72 sm:pb-60 lg:pb-0'>
      <div className='border-b border-[#374151]  lg:pb-10 mb-10'>
        <h2 className='text-white text-[2rem] font-extrabold'>MIS CANCIONES</h2>
        <div className='flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-end lg:justify-start'>
           <img className='rounded-full w-40 h-40 sm:w-48 sm:h-48 2xl:w-60 2xl:h-60 mt-10 mr-6' src={userLogged.picture} alt="" />   
           <div className='flex flex-col justify-end gap-5 mt-5 lg:mt-0 items-center lg:items-start'>
              <h3 className='text-2xl md:text-5xl font-bold'>Hola {userLogged.nickname},</h3>
              <p className='text-lg 2xl:text-2xl'>Estas son las canciones que has subido</p>
           </div>
           {
          SongUploaded.length >0 &&
        <div className='flex justify-end mt-4 lg:mt-0 mb-4 lg:mb-0  w-full items-end '>
          <button className='bg-btnColor px-4 py-2 text-white rounded hover:border-2 border-[#fff] border-2 flex' onClick={() => setUploadSong(true)}>Añadir <span className='hidden md:flex'>nueva canción</span></button>
        </div>
        }
        </div>
      </div>

      <div className='xl:mx-10 lg:h-[40vh] lg:overflow-y-scroll lg:scrollbar-hide '>

        {
          SongUploaded.length ?
            SongUploaded.map((song) => {
              return (
              
                
                <SingularSongUploaded key={song._id} song={song}  handleDeleteSong={handleDeleteSong} SongUploaded={SongUploaded} />
                
                
              )
            })
            :
            <div className='w-4/5 lg:3/5  bg-transparent mx-auto rounded-lg bg-black border border-btnColor flex flex-col items-center '>
              <h3 className='text-xl lg:text-4xl font-bold text-white text-center p-10 '>Oops parece que todavia no has creado ninguna canción</h3>
              <h4 className=' text-gray-500 lg:font-bold mb-6 text-center'>¡Comienza tu viaje en musSky subiendo la primera!</h4>
              <button className='bg-[#7339E5] px-4 py-2 lg:w-1/3 text-white rounded hover:border-2 border-[#fff] mb-6' onClick={() => setUploadSong(true)}>Añadir primera canción</button>
            </div>
        }

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