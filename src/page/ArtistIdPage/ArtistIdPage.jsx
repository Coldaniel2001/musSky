import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import NavBarAdmin from '../../component/NavBarAdmin/NavBarAdmin'
import ArtistInformationUser from '../../component/ArtistInformation/ArtistInformationUser'

const ArtistIdPage = () => {
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

  }
  fetchData();
}, [userId]);


//fetch al back usando el userId de los params
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full h-screen'>
      <ArtistInformationUser infoUser={infoUser} setInfoUser={setInfoUser} /> 
    </div>
  )
}

export default ArtistIdPage