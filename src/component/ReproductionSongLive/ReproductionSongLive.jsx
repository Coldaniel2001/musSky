import React from 'react'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import melendi from '../../assets/images/melendi.jpg'
import MusicPlayerPhone from '../MusicPlayerPhone/MusicPlayerPhone'
import MusicLive from './MusicLive'


const ReproductionSongLive = () => {
  return (
    <div className='relative w-full h-screen '>
                    <img className='w-full h-screen  xl:block opacity-10 absolute top-0 left-0 rounded' src={antonioJose} alt="" />
                    <img className='relative inset-0 m-auto pt-40 w-[70%] h-[60%] lg:h-[70vh] lg:w-[50vh] xl:h-[70vh] xl:w-[50vw] ' src={antonioJose} alt="" />
                    <p className='text-white relative flex justify-center font-bold text-xl md:text-3xl mt-1'>Canciones que me gustan</p>
                    <div className='opacity-90'>
                    <MusicLive />

                    </div>
                </div>
  )
}

export default ReproductionSongLive