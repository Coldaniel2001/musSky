import React, { useEffect, useState } from 'react'
// import rihanna from '../../assets/images/rihanna.png'
import more from '../../assets/images/icons/more.png'
import bluePlay from '../../assets/images/icons/blue-play.png'
import logo from '../../assets/images/icons/logo.png'
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
    <div className='lg:hidden'>
        <div className='pt-14  text-white bg-black  xl:hidden lg:md'>
        </div>
        <img className=' hidden mx-auto pt-6' src={logo} alt="" />
        <p className='mt-10 md:mt-12 ml-5 lg:ml-0 text-3xl font-extrabold mb-5 text-white sm:text-4xl   2xl:hidden'>TOP 10</p>
        <div className=' bg-black mx-5 rounded-md text-white lg:mb-10 '>
        <div className="flex overflow-x-scroll w-full whitespace-no-wrap gap-5 ">
        {
            dataSong.map((song) => {
                return (   
                    <div key={song.id} className='w-full min-w-[25rem] grid grid-cols-9  bg-[#D9D9D9] items-center rounded bg-opacity-20 m-2 mx-auto'>
                        <img className='col-span-2 w-3/4 ml-2 rounded-full' src={song.imageUrl} alt="" />
                            <div className='col-span-5 my-4'>
                                <p className='text-xl font-bold'>{song.artist}</p>
                                <p>{song.name}</p>
                            </div>
                            <img className='pr-2' src={bluePlay} alt="" />
                            <img className='col-span-1 pr-2 w-10 flex my-auto' src={more} alt="" />
                    </div>  
                )
                })
                }
        </div> 
        </div>
    </div>
  )
}

export default Top10Phone