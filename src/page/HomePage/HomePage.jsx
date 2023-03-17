import React from 'react'
import CenterSection from '../../component/CenterSection/CenterSection'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import SidebarRight from '../../component/SidebarRight/SidebarRight'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] h-screen  flex'>
      <div className='w-[18%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-[67%]'>
        <CenterSection />
      </div>
      <div className='w-[15%]'>
        <SidebarRight />

      </div>
    </div>
    
  )
}

export default HomePage