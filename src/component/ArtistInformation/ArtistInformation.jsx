import React, { useContext, useState } from 'react'

import rubish from '../../assets/images/icons/rubish.png'
import edit from '../../assets/images/icons/edit.png'
import logo from '../../assets/images/icons/logo.png'

import { toast } from 'react-hot-toast'
import SongContext from '../../context/song/SongContext'


const ArtistInformation = ({ infoUser}) => {
    const [editArtist, setEditArtist] = useState(false)
    const [editSong, setEditSong] = useState(false)
    const {dataSong} = useContext(SongContext)


    const tracksUser = dataSong.filter((song) => {
        return song?.nameArtist === infoUser?.email
    })






    const handleDeleteUser = () => {
        toast.custom((t) => (
            <div className={`${t.visible ? 'animate-enter ' : 'animate-leave' } max-w-[70%] border-2 border-white bg-gradient-to-tr from-black via-black to-[#7339E5] shadow-lg rounded-lg pointer-events-auto mt-[40vh] ring-1 ring-black ring-opacity-5`}>
                <div className='flex justify-center'>
                    <img className='w-32' src={logo} alt="" />
                </div>
                <div className='flex p-4'>
                    {/* <img className='w-20 rounded-full mr-3' src={shakira} alt="" /> */}
                    <div className='block text-white'>
                        <p>¿Estás seguro que quieres borrar a Shakira de la base de datos?</p>
                        <div className='flex justify-center items-center mt-3 gap-3'>
                        <button className='bg-[#7C8BBF] px-10 py-2 rounded' >No</button>
                            <button className='bg-[#BF0000] px-10 py-2 rounded' >Si</button>
                        </div>
                    </div>
                </div>
            </div>
          ))
    }


  return (
    <div className='lg:w-[90%] xl:w-5/6 2xl:w-2/3 mx-auto b'>
        <div className='text-white flex  w-full mt-20 '>
            <div className='w-3/4  mx-auto lg:flex lg:w-full'>
                { !editArtist ?
                    <img className='w-52 sm:w-52 md:w-60 lg:w-52 lg:h-52 xl:h-60 xl:w-60 rounded-full mx-auto' src={infoUser?.picture} alt="" />
                    :
                    <div className='relative cursor-pointer '>
                        <img className='w-52 sm:w-52 md:w-60 lg:w-52 lg:h-52 xl:h-auto xl:w-60 rounded-full border-2 border-[#7339E5] opacity-40 mx-auto' src={infoUser?.picture} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-[#7339E5]  font-bold text-4xl'>Cambiar</p>
                        </div>
                    </div>
                }
                <div className='lg:ml-10 xl:ml-20 lg:w-[70%]  flex flex-col items-center lg:block '>
                    {
                        
                        !editArtist ?
                        <div className='flex justify-center lg:block'>
                        <h2 className='lg:text-4xl text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto'>{infoUser?.name}</h2>
                        </div>
                        :
                        <input className=' mb-10 bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-center text-4xl lg:text-5xl ' type="text" placeholder='Shakira' />

                    }
                    <div className=' flex flex-col justify-end items-center lg:items-start '>
                        <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Nickname: { !editArtist ? <span className='text-white'>{infoUser?.name}</span> : <input className='bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-center text-white' placeholder='Shusaki' type="text" /> } </p>
                        <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Email: { !editArtist ? <span className='text-white'>{infoUser?.email}</span> : <input className='bg-transparent border-b focus:outline-none focus:ring-0 border-[#7339E5]  text-center text-white' placeholder='Shusaki' type="text" />  } </p>
                        <p className='lg:text-xl xl:text-2xl 2xl:text-3xl text-[#989898] font-semibold'>Fecha Suscripcion: <span className='text-white'>22/02/2021</span></p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-end gap-3  lg:w-[30%] '>
                    { !editArtist ?
                    <div className='flex lg:flex-col gap-3 w-full mt-8 lg:mt-0 lg:w-[85%] justify-center  '>
                        <button className='bg-[#7C8BBF] px-10 py-2 rounded' onClick={() => setEditArtist(true)}>Editar artista</button>
                        <button className='bg-[#BF0000] px-10 py-2 rounded' onClick={handleDeleteUser}>Borrar artista</button>
                    </div>
                    :
                    <div className=' w-full flex justify-center mt-5 lg:mt-0'>
                        <button className='bg-[#53b55c] px-4 md:px-10 py-2 rounded' onClick={() => setEditArtist(false)}>Guardar cambios</button>
                    </div>
                }
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
                                    {
                                        !editSong ?
                                        <img className='ml-2 md:ml-0 w-[9%] sm:w-[6%] md:w-[5%] lg:w-[4%] rounded' src={song.picture} alt="" />
                                        :
                                         <img className='ml-2 md:ml-0 w-[9%] sm:w-[6%] md:w-[5%] lg:w-[4%] rounded border-2 border-[#7339E5] opacity-50' src={song.thumbnail} alt="" />
                                    }
                                    {
                                        !editSong ?
                                        <p className='font-semibold 2xl:text-xl w-[66%] sm:w-[42%] pl-10 ' >{song.nameSong}</p>
                                        :
                                        <input className='w-[42%]  bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-left ' type="text" placeholder={song.name} />

                                    }
                                    {
                                        !editSong ?
                                        <p className='sm:w-[42%] 2xl:text-xl font-thin hidden sm:flex'>{song.nameArtist}</p>
                                        :
                                        <input className='w-[42%]  bg-transparent border-b focus:outline-none focus:ring-0  border-[#7339E5] text-left ' type="text" placeholder={song.artist} />
                                    }
                                    {
                                        !editSong ?
                                        <>
                                        <img className='w-[4%] sm:w-[2%] mx-5 cursor-pointer' src={rubish} alt=""  />
                                        <img className='w-[4%] sm:w-[2%] mr-5 cursor-pointer' src={edit} alt="" onClick={() => setEditSong(true)} />
                                        </> :
                                        <button className='bg-[#53b55c] px-4 md:px-10 py-2 rounded' onClick={() => setEditSong(false)}>Guardar</button>

                                    }
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    </div>
  )
}

export default ArtistInformation