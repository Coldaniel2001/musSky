import React from 'react'
// import rihanna from '../../../assets/images/rihanna.png'
import more from '../../../assets/images/icons/more.png'


const Top10SingularSong = ({dataSong}) => {
  return (
    <div>
        {
            dataSong.map((song) => {
                return (
                <div key={song.id} className='grid grid-cols-8 grid-rows-10 mt-4 ml-3'>
                    <img className='col-span-2 w-3/4 rounded-full' src={song.imageUrl} alt="" />
                    <div className='col-span-5 text-white my-auto'>
                        <p className='font-bold text-xl'>{song.artist}</p>
                        <p className=''>{song.name}</p>
                    </div>
                    <img className='w-3/5 my-auto' src={more} alt="" />
                </div>
                )
            })
        }
    </div>
  )
}

export default Top10SingularSong