import React from 'react'
import AntonioJose from '../../assets/images/antonio-jose.jpg'
import next from '../../assets/images/icons/next.png'
import previous from '../../assets/images/icons/previous.png'
import play from '../../assets/images/icons/play.png'

const MusicPlayed = () => {
  return (
    <div className='md:hidden lg:block w-3/4 mx-auto text-white'>
        <img className='w-full mx-auto mt-10 mb-4 rounded-xl' src={AntonioJose} alt="played song" />
        <p className='font-bold text-[2rem] w-[80%]'>Extremoduro</p>
        <p className='text-gray-500'>So payaso</p>
        <div className='grid grid-cols-4 mt-5 items-center mx-8 '>
            <img className='w-12' src={previous} alt="previous song" />
            <img className='w-20 col-span-2 mx-auto' src={play} alt="play song" />
            <div className='flex justify-end '>
            <img className='w-12' src={next} alt="next song" />
            </div>
        </div>
    </div>
  )
}

export default MusicPlayed