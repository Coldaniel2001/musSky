import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ArtistInformationUser from '../../component/ArtistInformation/ArtistInformationUser'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'


const ArtistIdPage = () => {
  const { userId } = useParams()
  const [infoUser, setInfoUser] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4002/users/id/${userId}`)
        const data = await response.json();
        setInfoUser(data.user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [userId]);


  //fetch al back usando el userId de los params
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] lg:min-h-screen xl:flex' >
      <div className='hidden xl:block w-full  xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] w-full h-screen pt-10 lg:pt-0 lg:w-full xl:w-[75%] 2xl:w-[82%]'>
        <ArtistInformationUser  infoUser={infoUser} setInfoUser={setInfoUser} />
      </div>
    </div>
  )
}

export default ArtistIdPage