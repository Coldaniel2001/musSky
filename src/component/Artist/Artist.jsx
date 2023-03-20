import React from 'react'
import shakira from '../../assets/images/shakira.jpg'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import melendi from '../../assets/images/melendi.jpg'
import extremoduro from '../../assets/images/extremoduro.jpg'

const Artist = () => {
  return (
    <>
        <div>
            <img className='w-[90%] mx-auto rounded' src={antonioJose} alt="first artist" />
            <p className='flex justify-center text-[1rem] font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[2rem]'>Antonio José</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={shakira} alt="first artist" />
            <p className='flex justify-center text-[1rem] font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[2rem]'>Shakira</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={melendi} alt="first artist" />
            <p className='flex justify-center text-[1rem] font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[2rem]'>Melendi</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={extremoduro} alt="first artist" />
            <p className='flex justify-center text-[1rem] font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[2rem]'>Extremoduro</p>
        </div>
    </>
  )
}

export default Artist