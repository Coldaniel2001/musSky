import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ArtistInformationUser from '../../component/ArtistInformation/ArtistInformationUser'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import TopPhone from '../../component/TopPhone/TopPhone'
import FooterNav from '../../component/FooterNav/FooterNav'


const ArtistIdPage = () => {
  const { userId } = useParams()
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

  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] min-h-screen xl:flex'>
      <div className=''>
        <TopPhone />
      </div>
      <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[20%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-full pt-10 xl:pt-0 lg:w-full xl:w-[75%] 2xl:w-[85%]'>
        <ArtistInformationUser  infoUser={infoUser} setInfoUser={setInfoUser} />      
      </div>
      <div className='xl:hidden'>
        <FooterNav />
      </div>
    </div>
  )
  //fetch al back usando el userId de los params

}

export default ArtistIdPage

{

}

