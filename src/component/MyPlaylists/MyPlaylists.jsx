import React, {useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import background from '../../assets/images/background.png'

const MyPlaylists = () => {
    const listUrl ="http://localhost:3004/playlists"
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const musicLists = async() => {
            const data = await fetch(listUrl)
            const json = await data.json()
            setDataList(json)
        }
        musicLists()
    }, [listUrl])

  return (
    <div className='flex justify-between w-full '>
    <div className='grid grid-cols-7 gap-8 items-end h-[60%] mx-10 mb-7 w-full lg:h-[70vh] lg:overflow-y-scroll lg:scrollbar-hide px-3 '>
        <NavLink className='col-span-2  rounded relative flex justify-end items-end h-[320px]' to={"/individual-playlist"}>
            <img className='w-full h-full' src={background} alt="name" />
            <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                <h2 className='mr-2 text-white text-xl font-bold'>Canciones que me gustan</h2>
            </div>
        
        </NavLink>

        {dataList.map((list) => {
            return (
        <div key={list.id} className=' relative flex justify-end items-end hover:scale-110 transition duration-500 rounded '>
                <img className='rounded' src={list.thumbnail} alt="name" />
            <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                <h2 className='mr-2 text-white text-xl font-bold'>{list.name}</h2>
            </div>
        </div>
            )
        })}
    </div>
</div>
  )
}

export default MyPlaylists