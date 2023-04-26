import React from 'react'
import TopPhone from '../../component/TopPhone/TopPhone'
import Top10Phone from '../../component/Top10Phone/Top10Phone'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import FooterNav from '../../component/FooterNav/FooterNav'
import GendersSection from '../../component/GendersSection/GendersSection'

const GendersPage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] lg:min-h-screen lg:flex'>
        <div className=''>
            <TopPhone />
        </div>
        <div className='hidden lg:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
            <SidebarLeft />
        </div>
        <div className='w-full pt-10 lg:pt-0 lg:w-[85%] xl:w-[75%] 2xl:w-[82%]'>
            <GendersSection />
        </div>

        <div className='lg:hidden'>
            <FooterNav />
        </div>
    </div>
  )
}

export default GendersPage