import React, { useContext, useState } from 'react'

import rubish from '../../assets/images/icons/rubish.png'
import edit from '../../assets/images/icons/edit.png'
import logo from '../../assets/images/icons/logo.png'

import { toast } from 'react-hot-toast'
import SongContext from '../../context/song/SongContext'


const ArtistInformationUser = ({ infoUser }) => {

    const { dataSong } = useContext(SongContext)


    const tracksUser = dataSong.filter((song) => {
        return song?.nameArtist === infoUser?.nickname
    })

    console.log(tracksUser)




    return (
        <>
            <div className='flex justify-center'>
                <img className='w-32' src={logo} alt="" />
            </div>

            <div className='lg:w-[90%] xl:w-5/6 2xl:w-2/3 mx-auto b'>
                <div className='text-white flex  w-full mt-20 '>
                    <div className='w-3/4  mx-auto lg:flex lg:w-full'>
                        <img className='w-52 sm:w-52 md:w-60 lg:w-52 lg:h-52 xl:h-60 xl:w-60 rounded-full mx-auto' src={infoUser?.picture} alt="" />

                        <div className='lg:ml-10 xl:ml-20 lg:w-[70%]  flex flex-col items-center lg:block '>

                            <div className='flex justify-center lg:block'>
                                <h2 className='lg:text-4xl text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto'>{infoUser?.name}</h2>
                            </div>

                            <div className=' flex flex-col justify-end items-center lg:items-start '>
                                <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Nickname: <span className='text-white'>{infoUser?.name}</span>  </p>
                                <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Email: <span className='text-white'>{infoUser?.email}</span>  </p>
                                <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Fecha Suscripcion: <span className='text-white'>22/02/2021</span></p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='mx-10 lg:mx-0'>
                    <h2 className='text-white mt-10 text-4xl font-semibold mb-7'>Canciones del artista</h2>
                    <div className='lg:h-[30vh] lg:overflow-y-scroll lg:scrollbar-hide'>
                        {
                            tracksUser.map((song) => {
                                return (
                                    <div className='relative flex text-white items-center mb-3 gap-3 hover:bg-[#7239e575] rounded cursor-pointer '>
                                        <div className='w-[3%] flex justify-center'>
                                            <p className='text-white span-col-2 text-xl font-thin justify-center'>{song.id}</p>
                                        </div>

                                        <img className='ml-2 md:ml-0 w-[9%] sm:w-[6%] md:w-[5%] lg:w-[4%] rounded' src={song.picture} alt="" />
                                        <p className='font-semibold 2xl:text-xl w-[66%] sm:w-[42%] pl-10 ' >{song.nameSong}</p>
                                        <p className='sm:w-[42%] 2xl:text-xl font-thin hidden sm:flex'>{song.nameArtist}</p>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default ArtistInformationUser