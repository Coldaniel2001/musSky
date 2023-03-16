import React from 'react'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import SidebarRight from '../../component/SidebarRight/SidebarRight'

const HomePage = ({artists}) => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] h-screen flex'>
      <div className='w-[20%] '>
        <SidebarLeft />
      </div>
      <div className='w-[65%] '>

      </div>
      <div className='w-[15%] '>
<SidebarRight artists={artists}/>
      </div>
    </div>
    
  )
}

export default HomePage