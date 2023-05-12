import React, { useState, useContext, useRef, useEffect } from 'react'
import imgPlayList from '../../assets/images/imgPlayList.png'
import plus from '../../assets/images/plus.png'

import ModalSearcSongForPlayList from '../../component/ModalSearcSongForPlayList/ModalSearcMusicForPlayList'
import PlaylistsContext from '../../context/playlists/PlaylistsContexts'
import { useAuth0 } from '@auth0/auth0-react'
import UserContext from '../../context/UserContext'



const ModalNewPlayList = ({setAddNewPlayList}) => {
  const [playListComplete, setPlayListComplete] = useState([])
  const {addPlayList} = useContext(PlaylistsContext)
  const {user} = useAuth0()
  const {userLogged} = useContext(UserContext)
  
  const [PlayList, setNewPlayList] = useState({
    author: "",
    namePlaylist: "",
    imagePlaylist:"",
    songs: playListComplete,
    liked:"yes",
    private: ""
  })


  const form = useRef(null)

    
    const handleSubmit = (e) => {
     
        const formdata = new FormData(form.current)
        formdata.append("author", userLogged.email)
        formdata.append("liked_by", userLogged._id)
        formdata.append("songs", JSON.stringify(playListComplete))
        console.log(playListComplete)
        

        addPlayList(formdata)
        console.log(formdata)
      e.preventDefault()

    }



  const [searchSong, setSearchSong] = useState(false)
  const [previewImg, setPreviewImg] = useState(null);

  const handlePreviewImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreviewImg(reader.result);
    };
}


  const handleInputChange = (e) => {
    setNewPlayList({...PlayList, [e.target.name]: e.target.value})
  }

  return (
    <>

          <div className="fixed z-10 inset-0 overflow-y-auto bg-black/70">
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col justify-center bg-gradient-to-tr from-black via-[#7339E5] to-[#7339E5] rounded-lg shadow-lg p-6 w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/2 border-2 border-white items-center">
              <form className='flex flex-col items-center text-white pb-2 w-full' ref={form} >
              <div className='flex justify-between text-white border-b pb-2 w-full'>
                  <p className='font-light cursor-pointer' onClick={()=>setAddNewPlayList(false)}>Cancel</p>
                  <p className='font-bold text-2xl'>Nueva PlayList</p>
                  <p className='font-light cursor-pointer' onClick={handleSubmit}>Ok</p>
              </div>
              
              <label className='w-full flex justify-center mt-[3vh]'>
                    <img className='w-[200px]  lg:w-[250px] lg:h-[250px] border  cursor-pointer rounded' src={previewImg ? previewImg : imgPlayList} alt="UP" />
                    <input type="file" className='hidden'
                        required
                        name="imagePlaylist"
                        onChange={handlePreviewImg}
                        // value={PlayList.imagePlaylist}
                    />
              </label>

              <div className='w-full flex justify-center mt-[3vh]'>
                  <input className='bg-transparent border-b w-1/2 text-center font-bold text-white focus:outline-none focus:ring-0' 
                  placeholder='Nombre de la Playlist' 
                  type="text"
                  name="namePlaylist"
                  // onChange={handleInputChange}  
                  // value={PlayList.namePlaylist}
                  />
              </div>
              <div className='flex gap-10 mt-6'>
                <label className='flex gap-3 text-white text-xl' htmlFor="">
                  <input className='w-[16px]' 
                    type="radio"
                    name="private"
                    value="no"
                    // onChange={handleInputChange} 
                    />
                  <p>Playlist pública</p>
                </label>
                <label className='flex gap-3 text-white text-xl' htmlFor="">
                  <input className='w-[16px]' 
                  type="radio"
                  name="private" 
                  value="yes"
                  // onChange={handleInputChange} 
                  />
                  <p>Playlist privada</p>
                </label>
              </div>
              <div className='flex justify-center  gap-3 items-center rounded-xl border-2 h-[2rem] border-white hover:bg-[#7339E5] hover:border-[#7339E5] text-white mt-[3vh] cursor-pointer w-[200px]' onClick={()=>setSearchSong(true)} >
                  <p className='font-bold' >Añadir canción</p>
                  <img className='h-3/4' src={plus} alt="" />
              </div>
              <div className=' w-[90%] mx-10'>

              {/* <AddSongToPlayList /> */}
              </div>
              {/* <button>Crear playlist</button> */}
              </form>
            </div>
          </div>
        </div> 
        {
          searchSong &&
          <div >
            <ModalSearcSongForPlayList setSearchSong={setSearchSong} playListComplete={playListComplete} setPlayListComplete={setPlayListComplete} handleInputChange={handleInputChange}/>
          </div>

        }
      
  </>
  )
}

export default ModalNewPlayList