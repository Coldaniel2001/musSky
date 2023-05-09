import React, { useEffect, useState } from 'react'
import background from '../../assets/images/background.png'

const RealPlaylist = () => {
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
    
    console.log(dataList)


  return (
    <>
    <div className='flex justify-between h-full w-full'>
        <div className='grid grid-cols-4 gap-8 items-end h-[60%] mx-10 my-7'>
            <div className='col-span-2 h-full rounded relative flex justify-end items-end'>
                <img className='w-full' src={background} alt="name" />
                <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2 text-white text-xl font-bold'>Canciones que te gustan</h2>
                </div>
            </div>

            {dataList.map((list) => {
                return (
            <div className=' relative flex justify-end items-end'>
                    <img className='rounded' src={list.thumbnail} alt="name" />
                <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2 text-white text-xl font-bold'>{list.name}</h2>
                </div>
            </div>
                )

})}

            {/* <div className='bg-red-500 h-2/3 rounded relative flex justify-end items-end'>
                <div className='bg-green-500 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2'>Ejemplo</h2>
                </div>
            </div>

            <div className= 'bg-red-500 h-2/3 rounded relative flex justify-end items-end'>
                <div className='bg-green-500 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2'>Ejemplo</h2>
                </div>
            </div>

            <div className= 'bg-red-500 h-2/3 rounded relative flex justify-end items-end'>
                <div className='bg-green-500 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2'>Ejemplo</h2>
                </div>
            </div>

            <div className= 'bg-red-500 h-2/3 rounded relative flex justify-end items-end'>
                <div className='bg-green-500 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2'>Ejemplo</h2>
                </div>
            </div>

            <div className= 'bg-red-500 h-2/3 rounded relative flex justify-end items-end'>
                <div className='bg-green-500 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2'>Ejemplo</h2>
                </div>
            </div>

            <div className= 'bg-red-500 h-2/3 rounded relative flex justify-end items-end'>
                <div className='bg-green-500 w-full h-10 absolute flex items-center justify-end'>
                    <h2 className='mr-2'>Ejemplo</h2>
                </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default RealPlaylist