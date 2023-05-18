import React, { useState } from 'react'
import { useContext } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'
import ModalSingularPlaylist from './ModalSingularPlaylist'
import close from '../../assets/images/icons/close.png'

const ModalAddSongToPLaylist = ({setAddSongToPlaylist, sendSong}) => {
    const {dataPlayLists} = useContext(PlaylistsContext)
    const { userLogged } = useContext(UserContext)
    const myPlaylist = dataPlayLists.filter((playlist) => {
        return playlist.author === userLogged.email 
    })

const falseState = () => {
    setAddSongToPlaylist(false)
}
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black/70">
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className="flex flex-col justify-center bg-gradient-to-tr text-white from-black via-[#7339E5] to-[#7339E5] rounded-lg shadow-lg p-6 w-[90%] sm:w-2/3 md:w-3/6 xl:w-3/6 2xl:w-2/5 border-2 border-white z-30">
                    <div className='flex'>
                        <p className='font-bold text-2xl mx-auto mb-8 '>¿En qué Playlist quieres introducir esta canción?</p>
                        <img className='w-4 h-4 cursor-pointer' onClick={()=>falseState()} src={close} alt="" />

                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-center max-h-[40vh] overflow-y-scroll scrollbar-hide pb-8 '>
                            {
                        myPlaylist.map((playlist) => {
                            
                        return(
                                <ModalSingularPlaylist playlist={playlist} sendSong={sendSong} setAddSongToPlaylist={setAddSongToPlaylist}/>
                                )
                            })
                        }
                        
                    </div>
                {/* <div className='mt-20 flex justify-center gap-3'>
                    <div className='bg-transparent border py-2 px-4 rounded cursor-pointer  w-[130px] flex justify-center hover:bg-[#f34545]' onClick={() => setAddSongToPlaylist(false)}>
                        <p >Cancelar</p>
                    </div>
                    <button className='bg-[#7339E5] px-4 py-2 rounded border hover:bg-[#2ca72c]'>Añadir a playlist</button>
                </div> */}
                </div>
            </div>
    </div>
            

  )
}

export default ModalAddSongToPLaylist