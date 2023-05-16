import React from 'react'
import { useContext } from 'react'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import UserContext from '../../context/UserContext'

const ModalAddSongToPLaylist = ({setAddSongToPlaylist}) => {
    const {dataPlayLists} = useContext(PlaylistsContext)
    const { userLogged } = useContext(UserContext)
    const myPlaylist = dataPlayLists.filter((playlist) => {
        return playlist.author === userLogged.email 
        // && userLogged.liked === true
    })
    
    console.log(myPlaylist)
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black/70">
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col justify-center bg-gradient-to-tr text-white from-black via-[#7339E5] to-[#7339E5] rounded-lg shadow-lg p-6 w-[90%] sm:w-2/3 md:w-3/6 lg:w-2/6 2xl:w-1/4 border-2 border-white">
                    <p className='font-bold text-3xl mx-auto'>Añadir a playlist</p>
                        <div className='w-full flex justify-center mt-[3vh]' >
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label className='text-xl font-bold'>Playlist</label>
                            <select className='text-black h-[2rem] rounded'>
                            {
                        myPlaylist.map((playlist) => {
                        return(
                        <option key={playlist._id} value={playlist.namePlaylist}>
                            {playlist.namePlaylist}
                            </option>
                                )
                                })
                            }
                            </select>
                        </div>
                        <div className='mt-20 flex justify-center gap-3'>
                            <div className='bg-transparent border py-2 px-4 rounded cursor-pointer  w-[130px] flex justify-center hover:bg-[#f34545]' onClick={() => setAddSongToPlaylist(false)}>
                                <p >Cancelar</p>
                            </div>
                            <button className='bg-[#7339E5] px-4 py-2 rounded border hover:bg-[#2ca72c]'>Añadir a playlist</button>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default ModalAddSongToPLaylist