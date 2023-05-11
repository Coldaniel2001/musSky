
// import logo from '../../assets/images/icons/logo.png'
// import user from '../../assets/images/icons/icon-account.png'
// import artist from '../../assets/images/icons/icon-playlist.png'
import ArtistModeAdmin from '../../component/ArtistsModeAdmin/ArtistModeAdmin'
import ArtistInformation from '../../component/ArtistInformation/ArtistInformation'
import { useContext, useState } from 'react'
import NavBarAdmin from '../../component/NavBarAdmin/NavBarAdmin'
import UserModeAdmin from '../../component/UserModeAdmin/UserModeAdmin'
import UserContext from '../../context/UserContext'

const AdminPage = () => {

  const {artist, setArtist} = useContext(UserContext)

  console.log(artist)



  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full min-h-screen  '>
      <NavBarAdmin />
        {
            artist ?
            <ArtistModeAdmin />
            :
            <UserModeAdmin />
        }
        
    </div>
  )
}

export default AdminPage