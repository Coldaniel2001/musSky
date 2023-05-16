import React, { useContext } from 'react'

// import MusicPlayerPhone from '../MusicPlayerPhone/MusicPlayerPhone'

import home from '../../assets/images/icons/icon-home.png'
import whiteMicro from '../../assets/images/icons/icon-playlist.png'
import liked from '../../assets/images/icons/icon-liked.png'
import search from '../../assets/images/icons/searchPhone.png'
import generoPhone from '../../assets/images/icons/icon-genero.png'
import mySong from '../../assets/images/icons/mySong.png'
import { NavLink } from 'react-router-dom'
import UserContext from '../../context/UserContext'


const FooterNav = () => {
    const {userLogged} = useContext(UserContext)

    const artist = userLogged?.rol === "artist"

    console.log(userLogged)
  return (
    <>
    {/* <MusicPlayerPhone/> */}
    <div className={ artist ? 'fixed bottom-0 w-screen bg-black grid grid-cols-5 py-3 h-[80px] xl:h-[90px] border-t border-gray-700 ' : 'fixed bottom-0 w-screen bg-black grid grid-cols-4 py-3 h-[80px] xl:h-[90px] border-t border-gray-700 ' }>
        <NavLink to={"/home"} className={({ isActive }) => isActive ? 'grid border-b-[0.2rem] mx-2 border-mainPurple ' : "grid border-l-[0.3rem] border-transparent"}>
            <div className='cols-span-1'>
                <img className={ artist ? 'mx-auto w-7 h-8 sm:w-10 md:w-12' : 'mx-auto w-8 h-10 sm:w-10 md:w-12' } src={home} alt="" />
                <p className='flex justify-center text-white font-bold text-sm md:text-lg'>Home</p>
            </div>
        </NavLink>
        {/* <NavLink to={"/genders"} className={({ isActive }) => isActive ? 'grid border-b-[0.2rem] mx-2 border-mainPurple ' : "grid border-l-[0.3rem] border-transparent"}>
            <div className='cols-span-1'>
            <img className={ artist ? 'mx-auto w-7 h-8 sm:w-10 md:w-12' : 'mx-auto w-8 h-10 sm:w-10 md:w-12' } src={generoPhone} alt="" />
                <p className='flex justify-center text-white font-bold text-sm md:text-lg'>Géneros</p>
            </div>
        </NavLink> */}
        <NavLink to={"/real-playlist"} className={({ isActive }) => isActive ? 'grid border-b-[0.2rem] mx-2 border-mainPurple ' : "grid border-l-[0.3rem] border-transparent"}>
            <div className='cols-span-1'>
                <img className={ artist ? 'mx-auto w-7 h-8 sm:w-10 md:w-12' : 'mx-auto w-8 h-10 sm:w-10 md:w-12' }  src={whiteMicro} alt="" />
                <p className='flex justify-center text-white font-bold text-sm md:text-lg'>PlayLists</p>
            </div>
        </NavLink>
        <NavLink to={"/individual-playlist"} className={({ isActive }) => isActive ? 'grid border-b-[0.2rem] mx-2 border-mainPurple ' : "grid border-l-[0.3rem] border-transparent"}>
            <div className='cols-span-1 '>
                <img className={ artist ? 'mx-auto w-7 h-8 sm:w-10 md:w-12' : 'mx-auto w-8 h-10 sm:w-10 md:w-12' }  src={liked} alt="" />
                <p className='flex justify-center text-white font-bold text-sm md:text-lg'>Me gusta</p>
            </div>
        </NavLink>
        {
            artist &&
            <NavLink to={"/mis-canciones"} className={({ isActive }) => isActive ? 'grid border-b-[0.2rem] mx-2 border-mainPurple ' : "grid border-l-[0.3rem] border-transparent"}>
                <div className='cols-span-1'>
                <img className={ artist ? 'mx-auto w-7 h-8 sm:w-10 md:w-12' : 'mx-auto w-8 h-10 sm:w-10 md:w-12' }  src={mySong} alt="" />
                    <p className='flex justify-center text-white font-bold text-sm md:text-lg'>Mias</p>
                </div>
            </NavLink>

        }
        <NavLink to={"/genders"} className={({ isActive }) => isActive ? 'grid border-b-[0.2rem] mx-2 border-mainPurple ' : "grid border-l-[0.3rem] border-transparent"}>
            <div className='cols-span-1'>
            <img className={ artist ? 'mx-auto w-7 h-8 sm:w-10 md:w-12' : 'mx-auto w-8 h-10 sm:w-10 md:w-12' }  src={search} alt="" />
                <p className='flex justify-center text-white font-bold text-sm md:text-lg'>Buscar</p>
            </div>
        </NavLink>
    </div>
    </>
  )
}

export default FooterNav