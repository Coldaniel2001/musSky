import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtistInformation from '../../component/ArtistInformation/ArtistInformation'
import NavBarAdmin from '../../component/NavBarAdmin/NavBarAdmin'

export const AdminUserPage = () => {
const {userId} = useParams()
const [user, setUser] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4002/users/${userId}`, {
        method: 'GET',
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, [userId]);


//fetch al back usando el userId de los params
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full min-h-screen'>
      <NavBarAdmin/>
      <ArtistInformation /> 
    </div>
  )
}
