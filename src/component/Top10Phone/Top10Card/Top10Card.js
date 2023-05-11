import React, { useState } from 'react'
import more from '../../../assets/images/icons/more.png'

import Top10ModalDetail from '../Top10ModalDetail/Top10ModalDetail'

function Top10Card(song) {
    const [toogleModal,setToogleModal]=useState(false)

    const handleToogle=()=>{
        setToogleModal(!toogleModal)
      
    }
  return (
    <div key={song.id}className='grid grid-cols-8 grid-rows-10 mt-4 ml-3 relative'>

        <img className='col-span-2 w-3/4 rounded-full' src={song.imageUrl} alt="a" />
        
        <div className='col-span-5 text-white my-auto'>
            <p className='font-bold text-xl'>{song.artist}</p>
            <p className=''>{song.name}</p>
        </div>
        <div className='relative flex flex-col '>

        <img className='w-3/5 my-auto' src={more} alt="" onClick={handleToogle} />
        {
          toogleModal && <Top10ModalDetail/>
        }
    
        </div>
    </div>
  )
}

export default Top10Card