import React from 'react'
import TopPhone from '../../component/TopPhone/TopPhone'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import FooterNav from '../../component/FooterNav/FooterNav'
import GendersSection from '../../component/GendersSection/GendersSection'

const GendersPage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] md:min-h-screen xl:flex'>
        <div className=''>
            <TopPhone />
        </div>
        <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
            <SidebarLeft />
        </div>
        <div className='w-full pt-10 lg:pt-0 lg:w-fullxl:w-[75%] 2xl:w-[82%]'>
            <GendersSection />
        </div>

        <div className=''>
            <FooterNav />
        </div>
    </div>
  )
}

export default GendersPage