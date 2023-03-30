import React from 'react'

import MusicPlayerPhone from '../MusicPlayerPhone/MusicPlayerPhone'

import home from '../../assets/images/icons/icon-home.png'
import whiteMicro from '../../assets/images/icons/white-micro.png'
import liked from '../../assets/images/icons/liked.png'
import search from '../../assets/images/icons/search.png'
import generoPhone from '../../assets/images/icons/genero-phone.png'


const FooterNav = () => {
  return (
    <>
    <MusicPlayerPhone/>
    <div className='fixed bottom-0 w-screen bg-black grid grid-cols-5 py-3 border-t border-gray-700'>
        <div className='cols-span-1'>
            <img className='mx-auto w-8 sm:w-10 md:w-12' src={home} alt="" />
            <p className='flex justify-center text-white font-bold text-sm md:text-lg'>Home</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8 sm:w-10 md:w-12' src={generoPhone} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm md:text-lg'>Géneros</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8 sm:w-10 md:w-12' src={whiteMicro} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm md:text-lg'>PlayList</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8 sm:w-10 md:w-12' src={liked} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm md:text-lg'>Me gusta</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8 sm:w-10 md:w-12' src={search} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm md:text-lg'>Buscar</p>
        </div>
    </div>
    </>
  )
}

export default FooterNav