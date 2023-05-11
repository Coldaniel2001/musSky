
// import logo from '../../assets/images/icons/logo.png'
// import user from '../../assets/images/icons/icon-account.png'
// import artist from '../../assets/images/icons/icon-playlist.png'
import ArtistModeAdmin from '../../component/ArtistsModeAdmin/ArtistModeAdmin'
import ArtistInformation from '../../component/ArtistInformation/ArtistInformation'
import { useState } from 'react'
import NavBarAdmin from '../../component/NavBarAdmin/NavBarAdmin'

const AdminPage = () => {

  const [showArtist, setshowArtist] = useState(true)



  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full min-h-screen  '>
      <NavBarAdmin />
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