import React from 'react'

const PlaylistResult = ({ playlist }) => {
  return (
    <div className="text-black rounded mb-1 hover:bg-[#7239e575] cursor-pointer">
        <div className='flex gap-5 p-1 pl-5'>
            <img src={playlist.imagePlaylist} alt="picture" className='w-[60px] h-[60px] rounded' />
            <div className='flex flex-col justify-center'>
            <p className='font-bold text-[1.3rem]'>{playlist.namePlaylist}</p>
            <p className='text-gray-800 font-semibold text-[1.2rem]'>{playlist.author}</p>
            </div>
        </div>
    </div>
  )
}

export default PlaylistResult