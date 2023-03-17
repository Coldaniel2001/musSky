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
            <p className='flex justify-center text-[2rem] font-semibold'>Antonio José</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={shakira} alt="first artist" />
            <p className='flex justify-center text-[2rem] font-semibold'>Shakira</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={melendi} alt="first artist" />
            <p className='flex justify-center text-[2rem] font-semibold'>Melendi</p>
        </div>
        <div>
            <img className='w-[90%] mx-auto rounded' src={extremoduro} alt="first artist" />
            <p className='flex justify-center text-[2rem] font-semibold'>Extremoduro</p>
        </div>
    </>
  )
}

export default Artist