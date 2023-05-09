
import logo from '../../assets/images/icons/logo.png'
import user from '../../assets/images/icons/icon-account.png'
import artist from '../../assets/images/icons/icon-playlist.png'
import ArtistModeAdmin from '../../component/ArtistsModeAdmin/ArtistModeAdmin'
import ArtistInformation from '../../component/ArtistInformation/ArtistInformation'
import { useState } from 'react'









const AdminPage = () => {

  const [showArtist, setshowArtist] = useState(true)



  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full min-h-screen  '>
        <div className='flex justify-center'>
            <img className='w-40 h-[6vh] my-[2vh]' src={logo} alt="" />
        </div>
        <div className="w-2/3 lg:relative lg:block mb-4 mx-auto ">
          <input type="text" className="bg-gray-300 w-full py-2 pl-10 pr-4  rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" placeholder="Buscar"/>
          <div className="absolute top-0 left-0 mt-2 ml-3">
            <i className="fas fa-search text-gray-400"></i>
          </div>
		</div>
        <div className=' text-white flex gap-20 justify-center mt-10 mb-5'>
            <div className='flex items-center font-bold text-xl gap-3'>
                <img className='w-10 h-8' src={artist} alt="" />
                <h2>Artistas</h2>
            </div>
            <div className='flex items-center font-bold text-xl gap-3'>
                <img className='w-10 h-8' src={user} alt="" />
                <h2>Usuarios</h2>
            </div>
            
        </div>
        {
            showArtist ?
            <ArtistModeAdmin />
            :
            <ArtistInformation />
        }
        
    </div>
  )
}

export default AdminPage