import React, { useEffect, useState } from 'react'

import addSongToPlayListWhite from '../../assets/images/addSongToPlayListWhite.png'
import checkWhite from '../../assets/images/checkWhite.png'

const PlayListItems = ({song, playListComplete, setPlayListComplete}) => {

    const [songAdd, setsongAdd] = useState(true)

  const handleClick = () => {
    setsongAdd(false)
    setPlayListComplete([...playListComplete, song._id])
  }

  console.log(playListComplete)

  useEffect(() => {

  }, [playListComplete]);


  return (
    <div className='flex h-[6vh] mb-4 w-full border-b border-gray-400 pb-3'>
    <div className='h-full w-[60px] mr-4'>
      <img className='h-full mr-4 rounded w-full' src={song.picture} alt="" />
    </div>
    
    <div className='flex flex-col justify-center w-[50%]'>
      <p className='text-2xl  text-white truncate'>{song.nameArtist}</p>
      <p className='text-xl text-gray-400'>{song.nameSong}</p>
    </div>
    <div className='flex justify-end w-[40%] gap-7 items-center cursor-pointer'>
      { songAdd ?
      <div className='flex items-center gap-3 border h-4/6 px-4 rounded-lg' onClick={handleClick} >
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
  )
}

export default PlayListItems