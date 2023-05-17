import React from 'react'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import Search from '../../component/Search/Search'

const SearchPage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-mainPurple min-h-screen  xl:flex'>
        <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
            <SidebarLeft />
        </div>
        <div className='w-full pt-10 sm:pt-10 xl:pt-0 lg:w-[100%] xl:w-[75%] 2xl:w-[82%] lg:min-h-screen'>
            <Search />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default SearchPage