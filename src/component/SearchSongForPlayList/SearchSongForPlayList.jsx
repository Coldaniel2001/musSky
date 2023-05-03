import React, { useState } from 'react'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import addSongToPlayListWhite from '../../assets/images/addSongToPlayListWhite.png'
import checkWhite from '../../assets/images/checkWhite.png'

const SearchSongForPlayList = () => {
    const [songAdd, setsongAdd] = useState(true)
    console.log(songAdd)

    

  return (
    <>
    <div className='flex h-[6vh] mb-4 w-full border-b border-gray-400 pb-3'>
      <div className='h-full w-[60px] mr-4'>
        <img className='h-full mr-4 rounded w-full' src={antonioJose} alt="" />
      </div>
      
      <div className='flex flex-col justify-center w-[50%]'>
        <p className='text-2xl  text-white'>Melendi</p>
        <p className='text-xl text-gray-400'>Déjala que baile</p>
      </div>
      <div className='flex justify-end w-[40%] gap-7 items-center cursor-pointer'>
        { songAdd ?
        <div className='flex items-center gap-3 border h-4/6 px-4 rounded-lg' onClick={() => setsongAdd(false)} >
          <img className='h-2/3' src={addSongToPlayListWhite} alt="" />
          <p className='text-white'>Añadir</p>
        </div> :
        <div className='flex items-center gap-3 border h-4/6 px-4 rounded-lg bg-green-600' onClick={() => setsongAdd(true)} >
          <img className='h-1/3' src={checkWhite} alt="" />
          <p className='text-white'>Añadida</p>
        </div>  
    }

      </div>
    </div>

    </>
  )
}

export default SearchSongForPlayList