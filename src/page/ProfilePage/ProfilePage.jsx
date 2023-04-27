import React from 'react'


import Profile from '../../component/Profile/Profile'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import SidebarRight from '../../component/SidebarRight/SidebarRight'
import FooterNav from '../../component/FooterNav/FooterNav'



const ProfilePage = () => {
    return (
        <div className='bg-gradient-to-tr from-black via-black to-mainPurple lg:flex lg:min-h-screen'>
            <div className='hidden lg:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
                <SidebarLeft />
            </div>
            <div className='w-full pt-10 sm:pt-10 lg:pt-0 lg:w-[85%] xl:w-[75%] 2xl:w-[67%]'>
                <Profile/>
            </div>
            <div className='hidden w-full lg:hidden xl:hidden 2xl:block 2xl:w-[15%]'>
                <SidebarRight />
            </div>
            <div className='lg:hidden'>
                <FooterNav />
            </div>
        </div>

    )
}

export default ProfilePage