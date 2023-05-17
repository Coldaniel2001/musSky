import React from 'react'

const ModalSingularPlaylist = ({playlist}) => {

  return (
                  
                                <div className=' relative flex flex-col justify-end  items-center  hover:scale-105 transition duration-500 cursor-pointer'>
                                    <img className='rounded w-full h-[170px]' src={playlist.imagePlaylist} alt="name" />
                                    <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                                        <h2 className='mr-2 text-white text-xl '>{playlist.namePlaylist}</h2>
                                    </div> 
                                </div> 

  )
}

export default ModalSingularPlaylist