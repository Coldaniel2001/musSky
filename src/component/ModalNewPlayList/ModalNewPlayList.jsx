import React from 'react'
import imgPlayList from '../../assets/images/imgPlayList.png'
import plus from '../../assets/images/plus.png'
import AddSongToPlayList from '../addSongToPlayList/AddSongToPlayList'

const ModalNewPlayList = () => {



  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black/70">
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center bg-gradient-to-tr from-black via-[#7339E5] to-[#7339E5] rounded-lg shadow-lg p-6 w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/2 border-2 border-white">
        <div className='flex justify-between text-white border-b pb-2'>
            <p className='font-light cursor-pointer'>Cancel</p>
            <p className='font-bold text-2xl'>Nueva PlayList</p>
            <p className='font-light cursor-pointer'>Ok</p>
        </div>
        <div className='w-full flex justify-center mt-[3vh]'>
            <img className='w-[30%] cursor-pointer rounded' src={imgPlayList} alt="" />
        </div>
        <div className='w-full flex justify-center mt-[3vh]'>
            <input className='bg-transparent border-b w-1/2 text-center font-bold text-white focus:outline-none focus:ring-0' placeholder='Nombre de la Playlist' type="text"  />
        </div>
        <div className='flex justify-center gap-3 items-center rounded-xl border-2 h-[2rem] border-white hover:bg-[#7339E5] hover:border-[#7339E5] text-white mt-[3vh] cursor-pointer' >
            <p className='font-bold'>Añadir canción</p>
            <img className='h-3/4' src={plus} alt="" />
        </div>
        <AddSongToPlayList />

        
      </div>
    </div>
  </div>
  )
}

export default ModalNewPlayList