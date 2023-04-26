import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import background from '../../assets/images/background.png'
import playWhite from '../../assets/images/icons/play-white.png'
import redHeart from '../../assets/images/icons/red-heart.png'
import addList from '../../assets/images/icons/add-list.png'
import seeMore from '../../assets/images/icons/see-more.png'

const PlayListIndividual = () => {
    const MusicUrl = "http://localhost:3004/tracks"
    const [dataSong, setDataSong] = useState([])

    useEffect(() => {
        const musicTracks = async() => {
            const data = await fetch(MusicUrl);
            const json = await data.json();
            setDataSong(json)
        } 
        musicTracks()
    }, [MusicUrl])
    console.log(dataSong)

  return (
    <div>
        <Search />
        <div className='mt-10 mx-10'>
        <h2 className='text-white text-[2rem] font-extrabold'>PLAYLIST</h2>
        <div className='relative w-full h-[45vh]'>
            <img className='w-full h-[45vh] opacity-20 absolute top-0 left-0' src={background} alt="" />
            <img className='relative inset-0 m-auto pt-10 h-[30vh] w-[26vw] ' src={background} alt="" />
            <p className='text-white relative flex justify-center font-bold text-3xl mt-7'>Canciones que me gustan</p>
        </div>
        <div  >
            <p className='relative text-white font-bold text-2xl mt-6 my-5'>Canciones</p>
            <div className='lg:h-[27vh] lg:overflow-y-scroll lg:scrollbar-hide' >
            
                {
                    dataSong.map((song) => {
                        return (
                            <div className='relative flex text-white items-center mb-3 mx-10 '>
                            <div className='w-[3%] flex justify-center'>
                                <p className='text-white span-col-2 text-xl font-thin justify-center'>{song.id}</p>
                            </div>
                            <img className='w-[3%]' src={song.thumbnail} alt="" />
                            <p className='font-semibold text-xl w-[42%] pl-10 ' >{song.name}</p>
                            <p className='w-[42%] text-xl font-thin'>{song.artist}</p>
                            <img className='w-[3%]' src={playWhite} alt="" />
                            <img className='w-[2%] mx-5' src={redHeart} alt="" />
                            <img className='w-[3%] mr-5' src={addList} alt="" />
                            <img className='w-[2%]' src={seeMore} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default PlayListIndividual