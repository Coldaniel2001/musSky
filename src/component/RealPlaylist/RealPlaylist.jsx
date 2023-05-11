import React, { useState } from 'react'
import MyPlaylists from '../MyPlaylists/MyPlaylists'
import plusWhite from '../../assets/images/plusWhite.png'
// import ModalNewPlayList from '../ModalNewPlayList/ModalNewPlayList'


const RealPlaylist = () => {

    const [MyPlaylist, setMyPlaylist] = useState(true)
    const [addNewPlayList, setAddNewPlayList] = useState(true)



  return (
    <>
    {
        !addNewPlayList ?
            <div className='flex  '>
                <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center w-1/2 '>
                    {
                        MyPlaylist?
                        <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center'>
                            <h2 className='text-white text-[2rem] font-extrabold cursor-pointer' onClick={()=>setMyPlaylist(true)}>Mis playlists</h2>
                            <h2 className='text-gray-500 text-[1.3rem] font-bold mt-2 cursor-pointer' onClick={()=>setMyPlaylist(false)}>Playlists gratuitas</h2>
                        </div>
                        :
                        <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center'>
                            <h2 className='text-gray-500 text-[1.3rem] font-bold mt-2 cursor-pointer' onClick={()=>setMyPlaylist(true)}>Mis playlists</h2>
                            <h2 className='text-white text-[2rem] font-extrabold cursor-pointer' onClick={()=>setMyPlaylist(false)}>Playlists gratuitas</h2>
                        </div>
                    }
                </div>
                <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center justify-end w-1/2'>
                    <div className='flex px-5 py-1 border-2 rounded-xl gap-5 items-center justify-end hover:bg-btnColor cursor-pointer' onClick={setAddNewPlayList(true)}>
                        <p className='font-bold text-white text-[1.5rem]'>Nueva Playlist</p>
                        <img className='w-[15px] h-[15px]' src={plusWhite} alt="upload playlist" />
                    </div>

                </div>
            </div>
            : ""
            // <ModalNewPlayList />

    }


    {
        MyPlaylist ? 
        <MyPlaylists />
     :
    ""
    }


    
    </>
  )
}

export default RealPlaylist