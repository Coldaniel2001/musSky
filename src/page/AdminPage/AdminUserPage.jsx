import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtistInformation from '../../component/ArtistInformation/ArtistInformation'
import NavBarAdmin from '../../component/NavBarAdmin/NavBarAdmin'

export const AdminUserPage = () => {
const {userId} = useParams()
const [infoUser, setInfoUser] = useState(null);



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/id/${userId}`)
      const data = await response.json();
      setInfoUser(data.user);
    } catch (error) {
      console.error(error);
    }

  }
  fetchData();
}, []);

  return (
    <div className='bg-gradient-to-tr from-black via-black to-mainPurple w-full min-h-screen'>
      <NavBarAdmin/>
      <ArtistInformation userId={userId} infoUser={infoUser} setInfoUser={setInfoUser} /> 
    </div>
  )
}
