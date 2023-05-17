import React, { useEffect, useState } from 'react'
// import rihanna from '../../assets/images/rihanna.png'

import logo from '../../assets/images/icons/logo.png'
import Top10Card from './Top10Card/Top10Card'
// import melendi from '../../assets/images/melendi.jpg'
// import shakira from '../../assets/images/shakira.jpg'

const Top10Phone = () => {
    const MusicUrl = "http://localhost:3004/albums"
    const [dataSong, setDataSong] = useState([])

    useEffect(() => {
        const musicTracks = async() => {
            const data = await fetch(MusicUrl);
            const json = await data.json();
            setDataSong(json)
        } 
        musicTracks()
    }, [MusicUrl])

  return (
    <div className='xl:hidden'>
        <div className='pt-14  text-white bg-black  xl:hidden lg:md'>
        </div>
        <img className=' hidden mx-auto pt-6' src={logo} alt="" />
        <p className='mt-10 md:mt-12 ml-5 lg:ml-0 text-3xl font-extrabold mb-5 text-white sm:text-4xl   2xl:hidden'>TOP 10</p>
        <div className=' bg-black mx-5 rounded-md text-white lg:mb-10 '>
        <div className=" hidden overflow-x-scroll w-full whitespace-no-wrap gap-5 ">
           
 
        </div> 
        </div>
    </div>
  )
}

export default Top10Phone