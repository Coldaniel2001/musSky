import React,{Suspense, lazy} from 'react'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import FooterNav from '../../component/FooterNav/FooterNav'
import Search from '../../component/Search/Search'
import TopPhone from '../../component/TopPhone/TopPhone'

import SkeletonPlaylist from '../../Skeleton/Playlist/SkeletonPlaylist'

const RealPlaylist = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../component/RealPlaylist/RealPlaylist')), 2000);
  });
});

const RealPlaylistPage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-mainPurple min-h-screen  xl:flex'>
      <div className=''>
                <TopPhone />
          </div>
      <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-full pt-10 sm:pt-10 xl:pt-0 lg:w-[100%] xl:w-[75%] 2xl:w-[82%] pb-60 '>
        <Suspense fallback={<SkeletonPlaylist />}>
          <Search />
          <RealPlaylist />
        </Suspense>
      </div>
      <div className='xl:hidden'>
        <FooterNav />
      </div>

    </div>
  )
}

export default RealPlaylistPage