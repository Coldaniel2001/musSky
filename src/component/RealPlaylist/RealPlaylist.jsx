import React, { useState } from 'react'
import MyPlaylists from '../MyPlaylists/MyPlaylists'
import plusWhite from '../../assets/images/plusWhite.png'
import ModalNewPlayList from '../ModalNewPlayList/ModalNewPlayList'
import FreePlaylists from '../FreePlaylists/FreePlaylists'


const RealPlaylist = () => {

    const [MyPlaylist, setMyPlaylist] = useState(true)
    const [addNewPlayList, setAddNewPlayList] = useState(false)

    console.log(addNewPlayList)



  return (
    <>
    {
        !addNewPlayList ?
            <div className='flex  '>
                <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center  w-[90%] xl:w-4/6  '>
                    {
                        MyPlaylist?
                        <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center'>
                            <h2 className='text-white sm:text-[1.5rem]  lg:text-[2rem] font-extrabold cursor-pointer' onClick={()=>setMyPlaylist(true)}>Mis playlists</h2>
                            <h2 className='text-gray-500 text-[0.8rem] lg:text-[1.3rem] mt-2 cursor-pointer' onClick={()=>setMyPlaylist(false)}>Playlists gratuitas</h2>
                        </div>
                        :
                        <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center'>
                            <h2 className='text-gray-500 text-[0.8rem] lg:text-[1.3rem] mt-2 cursor-pointer' onClick={()=>setMyPlaylist(true)}>Mis playlists</h2>
                            <h2 className='text-white sm:text-[1.5rem] lg:text-[2rem] font-extrabold cursor-pointer' onClick={()=>setMyPlaylist(false)}>Playlists gratuitas</h2>
                        </div>
                    }
                </div>
                <div className='flex mt-10 ml-10 mr-10 mb-6 gap-5 h-[4rem] items-center justify-end w-[10%] xl:w-2/6 '>
                    <div className='flex px-5 py-1 border-2 rounded-xl gap-5 items-center justify-end hover:bg-green-600 cursor-pointer' onClick={()=>setAddNewPlayList(true)}>
                        <p className='font-bold text-white lg:text-[1.5rem] flex'>Nueva <span className='hidden lg:block'> Playlist</span></p>
                        <img className='w-[15px] h-[15px]' src={plusWhite} alt="upload playlist" />
                    </div>

                </div>
            </div>
            : 
            <ModalNewPlayList addNewPlayList={addNewPlayList} setAddNewPlayList={setAddNewPlayList} />

    }


    {
        MyPlaylist ? 
        <MyPlaylists />
     :
    <FreePlaylists />
    }


    
    </>
  )
}

export default RealPlaylist