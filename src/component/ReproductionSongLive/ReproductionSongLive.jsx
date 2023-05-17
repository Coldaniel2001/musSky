import React, { useContext } from 'react'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import melendi from '../../assets/images/melendi.jpg'
import MusicPlayerPhone from '../MusicPlayerPhone/MusicPlayerPhone'
import MusicLive from './MusicLive'
import SongContext from '../../context/song/SongContext'


const ReproductionSongLive = () => {
  const { onePlayListSong } = useContext(SongContext)
  return (
    <div className='relative w-full h-screen '>
                    <img className='w-full h-screen  xl:block opacity-10 absolute top-0 left-0 rounded' src={onePlayListSong.picture} alt="" />
                    <img className='relative inset-0 m-auto pt-40 w-[80%] h-[60%] lg:h-[70vh] lg:w-[50vh] xl:h-[70vh] xl:w-[50vw] rounded ' src={onePlayListSong.picture} alt="" />
                    <p className='text-white relative flex justify-center font-bold text-xl md:text-3xl mt-1'>{onePlayListSong.nameSong}</p>
                    <div className='opacity-90'>
                    <MusicLive />

                    </div>
                </div>
  )
}

export default ReproductionSongLive