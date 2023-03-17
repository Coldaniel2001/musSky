import React from 'react'
import CenterSection from '../../component/CenterSection/CenterSection'
import FooterNav from '../../component/FooterNav/FooterNav'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import SidebarRight from '../../component/SidebarRight/SidebarRight'
import Top10Phone from '../../component/Top10Phone/Top10Phone'
import TopPhone from '../../component/TopPhone/TopPhone'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5]  lg:flex'>
      <TopPhone />
      <Top10Phone />
      <div className='hidden md:block w-full lg:w-[18%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-full pt-10 lg:pt-0 lg:w-[67%]'>
        <CenterSection />
      </div>
      <div className='hidden sm:block md:block lg:block w-full lg:w-[15%]'>
        <SidebarRight />
      </div>
      <div className='lg:hidden'>
        <FooterNav />
      </div>
    </div>
    
  )
}

export default HomePage