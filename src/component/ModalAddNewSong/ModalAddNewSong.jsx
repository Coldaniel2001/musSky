import React, { useContext, useState } from 'react'
import updateImgSong from '../../assets/images/updateImgSong.png'

import UserContext from '../../context/UserContext';

const ModalAddNewSong = ({setUploadSong}) => {
    const currentDate = new Date(); const day = currentDate.getDate(); const month = currentDate.getMonth() + 1; const year = currentDate.getFullYear();
    const {user} = useContext(UserContext)

    const formattedDate = `${day}/${month}/${year}`;
 

    const [uploadNewSong,setUploadNewSong] = useState({
        nameArtist: user.email,
        nameSong: "",
        picture: "",
        song: "",
        genres: "Pop español",
        update_at: formattedDate,
        liked: false
      })

    const handleChangeFormData = (e) => {
        setUploadNewSong({...uploadNewSong, [e.target.name]: e.target.value})
    }  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(uploadNewSong)
    }


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black/70">
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center bg-gradient-to-tr from-black via-[#7339E5] to-[#7339E5] rounded-lg shadow-lg p-6 w-[90%] sm:w-2/3 md:w-3/6 lg:w-2/6 2xl:w-1/4 border-2 border-white">
        <p className='font-bold text-3xl mx-auto'>Añadir canción</p>
        <div className='w-full flex justify-center mt-[3vh]'>
            <img className='w-[30%] cursor-pointer rounded' src={updateImgSong} alt="" />
        </div>
        <form onSubmit={handleSubmit} action="">
            <div className='flex flex-col mt-4'>
                <label className='text-xl font-bold'>Nombre de la canción</label>
                <input className='rounded h-[2rem] text-black' 
                type="text"
                name="nameSong"
                id="nameSong"
                value={uploadNewSong.nameSong}
                onChange={handleChangeFormData} />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-xl font-bold'>Género</label>
                <select className='text-black h-[2rem] rounded' 
                value={uploadNewSong.genres}
                name="genres" 
                id="genres"
                onChange={handleChangeFormData}>
                    <option value="Pop español">Pop Español</option>
                    <option value="Urbano latino">Urbano latino</option>
                    <option value="Rock español">Rock español</option>
                    <option value="Hip hop">Hip hop</option>
                    <option value="Electronica">Electrónica</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Pop latino">Pop latino</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Rock">Rock</option>
                    <option value="Flamenco">Flamenco</option>
                </select>
            </div>
            <div className='bg-[#7C8BBF] py-2 px-4 rounded cursor-pointer mt-6 w-[150px] flex justify-center'>
                <p>Subir canción</p>
            </div>
            <div className='mt-20 flex justify-center gap-3'>
                <div className='bg-transparent border py-2 px-4 rounded cursor-pointer  w-[130px] flex justify-center hover:bg-[#f34545]' onClick={()=> setUploadSong(false)}>
                    <p >Cancelar</p>
                </div>
                <button className='bg-[#7339E5] px-4 py-2 rounded border hover:bg-[#2ca72c]' >Subir canción</button>
            </div>
        </form>


        
      </div>
    </div>
  </div>
  )
}

export default ModalAddNewSong