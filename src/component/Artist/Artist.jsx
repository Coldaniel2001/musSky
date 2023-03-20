import React from 'react'
import shakira from '../../assets/images/shakira.jpg'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import melendi from '../../assets/images/melendi.jpg'
import extremoduro from '../../assets/images/extremoduro.jpg'

const Artist = () => {
  return (
    <>
        <div className='mb-6'>
            <img className='w-[90%] mx-auto rounded' src={antonioJose} alt="first artist" />
            <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[2rem] justify-center  font-semibold'>Antonio José</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={shakira} alt="first artist" />
            <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[2rem] justify-center  font-semibold'>Shakira</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={melendi} alt="first artist" />
            <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[2rem] justify-center  font-semibold'>Melendi</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={extremoduro} alt="first artist" />
            <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[2rem] justify-center  font-semibold'>Extremoduro</p>
        </div>
    </>
  )
}

export default Artist