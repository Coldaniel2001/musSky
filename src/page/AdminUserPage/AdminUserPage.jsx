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
      const response = await fetch(`http://localhost:4002/users/id/${userId}`)
      const data = await response.json();
      console.log(data)
      setInfoUser(data.user);
    } catch (error) {
      console.error(error);
    }
console.log(infoUser)
  }
  fetchData();
}, []);


//fetch al back usando el userId de los params
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full min-h-screen'>
      <NavBarAdmin/>
      <ArtistInformation infoUser={infoUser} setInfoUser={setInfoUser} /> 
    </div>
  )
}
