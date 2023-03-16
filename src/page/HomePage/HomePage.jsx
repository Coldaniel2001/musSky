import React from 'react'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] h-screen flex'>
      <div className='w-[20%] border border-r-white'>
        <SidebarLeft />
      </div>
      <div className='w-[65%] border border-r-white'>

      </div>
      <div className='w-[15%] border border-r-white'>

      </div>
    </div>
    
  )
}

export default HomePage