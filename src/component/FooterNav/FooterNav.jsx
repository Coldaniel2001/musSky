import React from 'react'
import home from '../../assets/images/icons/icon-home.png'
import whiteMicro from '../../assets/images/icons/white-micro.png'
import liked from '../../assets/images/icons/liked.png'
import search from '../../assets/images/icons/search.png'
import generoPhone from '../../assets/images/icons/genero-phone.png'

const FooterNav = () => {
  return (
    <div className='fixed bottom-0 w-screen bg-black grid grid-cols-5 py-3 border-t border-gray-700'>
        <div className='cols-span-1'>
            <img className='mx-auto w-8' src={home} alt="" />
            <p className='flex justify-center text-white font-bold text-sm'>Home</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8' src={generoPhone} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm'>Géneros</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8' src={whiteMicro} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm'>PlayList</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8' src={liked} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm'>Me gusta</p>
        </div>
        <div className='cols-span-1'>
            <img className='mx-auto w-8' src={search} alt="" />
            <p className='flex justify-center text-[#373737] font-bold text-sm'>Buscar</p>
        </div>
    </div>
  )
}

export default FooterNav