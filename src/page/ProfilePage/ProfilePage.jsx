import React from 'react'

import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'

import FooterNav from '../../component/FooterNav/FooterNav'



import Profile from '../../component/Profile/Profile'




const ProfilePage = () => {
    return (
        <div className='bg-gradient-to-tr from-black via-black to-mainPurple xl:flex lg:min-h-screen'>
            <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
                <SidebarLeft />
            </div>
            <div className='w-full pt-10 sm:pt-10 lg:pt-0 lg:w-[100%] xl:w-[75%] 2xl:w-[82%]'>
                <Profile />
            </div>
            <div className='xl:hidden'>
                <FooterNav />
            </div>
        </div>

    )
}

export default ProfilePage