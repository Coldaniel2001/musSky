import React from 'react'

function Top10ModalDetail({handleModal, song}) {

  return (
    <div className='overflow-visible flex jusify-item-center absolute top-[2rem] right-[2rem] z-50 '>
    <div className='w-[11rem] h-[4rem] bg-[#7C8BBF]  hover:opacity-100  rounded border overflow-visible  float-right '>
        <p  onClick={handleModal} className=' hover:bg-[#7239e526] ml-2 mr-2  cursor-pointer border-b-2 text-white'>Añadir a playlist</p>
            <p className=' hover:bg-[#7239e526] ml-2 mr-2  cursor-pointer text-white'>Ir al artista</p>
    </div>
    </div>
  )
}

export default Top10ModalDetail