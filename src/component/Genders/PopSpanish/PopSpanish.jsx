import React, { useContext, useState } from 'react'
import SidebarLeft from '../../SidebarLeft/SidebarLeft'
import leiva from '../../../assets/images/genders.artists/leiva.png'
import TopPhone from '../../TopPhone/TopPhone'
import PopSpanishCard from "./PopSpanishCard/PopSpanishCard"
import SongContext from '../../../context/song/SongContext'
import Search from '../../Search/Search'
import { User } from '@auth0/auth0-react'

function PopSpanish() {
  const { dataSong } = useContext(SongContext)
  console.log(dataSong)
  // console.log(dataSong[0].genre)
  const popSpanish=dataSong.filter(dataSong=>dataSong.genre==="Pop español")
  console.log(popSpanish)
  return (
    
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] lg:min-h-screen xl:flex h-fit overflow-hidden relative w-full'>
        <div className='absolute left-[25rem] z-50 w-[60rem] overflow-hidden' >

        <Search/>
        </div>
       
        <div className='hidden xl:block w-full xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
          <SidebarLeft />
        </div>
        <div className='overflow-y-scroll scrollbar-hide' >
          

          <div className='ml-10 rounded-lg bg-gradient-to-t 2xl:mt-[12rem] 2xl:w-[74rem] from-[#FFB61D] via-[#FFB61D] to-transparent hover:bg-[#FFB61D] hover:border-yellow-600 transition-all duration-500 cursor-pointer flex flex-wrap 2xl:h-[10rem] justify-around relative'>
            
            <img className='absolute left-[2rem] bottom-[0rem] 2xl:w-[15rem] 2xl:h-[15rem]' src={leiva} alt='' /><br />

            <p className='absolute bottom-[2rem] text-white font-bold xl:text-2xl 2xl:text-5xl ml-[2rem]'>Pop <br /> español</p>
            
            <div className='flex flex-col  absolute top-[20rem] w-[60rem]'>
              
              {popSpanish.map(({ nameArtist, nameSong, _id, picture }) => {
                console.log(popSpanish)
                return <PopSpanishCard key={_id} nameSong={nameSong} nameArtist={nameArtist} picture={picture} />
              })}

            
            </div>
          
          </div>
        
          <div className='w-[10%] h-full'></div>
        
        </div>
    </div>
    
  
  

  
  )
}

export default PopSpanish