import React from 'react'
import theBeatles from '../../assets/images/beatles.jpg'
import lodvg from '../../assets/images/lodvg.jpg'
import estopa from '../../assets/images/estopa.jpg'
import fito from '../../assets/images/fito.jpg'

const RecomendationSong = () => {
  return (
    <div className='grid-cols-2 mb-16 grid lg:grid-cols-4 gap-3'>
      <div className='text-center bg-[#8839E5] bg-opacity-20 py-3 rounded-xl'>
        <p className='text-xl font-bold'>THE BEATLES</p>
        <p className='text-gray-500'>Imagine</p>
        <img className='rounded-xl w-[90%] mx-auto mt-2' src={theBeatles} alt="" />
      </div>
      <div className='text-center bg-[#8839E5] bg-opacity-20 py-3 rounded-xl'>
        <p className='text-xl font-bold '>LA OREJA DE VAN GOTH</p>
        <p className='text-gray-500'>Sin noticias de holanda</p>
        <img className='rounded-xl w-[90%] mx-auto mt-2' src={lodvg} alt="" />
      </div>
      <div className='text-center bg-[#8839E5] bg-opacity-20 py-3 rounded-xl'>
        <p className='text-xl font-bold'>ESTOPA</p>
        <p className='text-gray-500'>La calle es tuya</p>
        <img className='rounded-xl w-[90%] mx-auto mt-2' src={estopa} alt="" />
      </div>
      <div className='text-center bg-[#8839E5] bg-opacity-20 py-3 rounded-xl'>
        <p className='text-xl font-bold'>FITO Y FITIPALDIS</p>
        <p className='text-gray-500'>Antes de que cuentes diez</p>
        <img className='rounded-xl w-[90%] mx-auto mt-2' src={fito} alt="" />
      </div>
    </div>
  )
}

export default RecomendationSong