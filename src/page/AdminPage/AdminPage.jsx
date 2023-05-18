import ArtistModeAdmin from '../../component/ArtistsModeAdmin/ArtistModeAdmin'
import { useContext } from 'react'
import NavBarAdmin from '../../component/NavBarAdmin/NavBarAdmin'
import UserModeAdmin from '../../component/UserModeAdmin/UserModeAdmin'
import UserContext from '../../context/UserContext'

const AdminPage = () => {

  const {artist} = useContext(UserContext)




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