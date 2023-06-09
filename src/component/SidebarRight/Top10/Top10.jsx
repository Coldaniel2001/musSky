import React from 'react'
import Top10SingularSong from './Top10SingularSong'


const Top10 = () => {

  return (
    
    <div className='flex items-center '>
      <div className='bg-[#2F2F2F] my-auto rounded-xl mr-2 mt-10'>
        <div className=' bg-black w-[94%] mx-auto pb-10 mb-20   ' >
          <p className='text-white font-bold text-3xl pt-5 ml-2'>TOP 10</p>
          <div className='max-h-[65vh] lg:overflow-y-scroll'>
            <Top10SingularSong/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top10