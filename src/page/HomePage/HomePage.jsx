// import { useState } from 'react'
import { lazy, Suspense } from 'react'
import FooterNav from '../../component/FooterNav/FooterNav'

import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import Top10Phone from '../../component/Top10Phone/Top10Phone'
import TopPhone from '../../component/TopPhone/TopPhone'

import SkeletonSidebarRight from '../../Skeleton/SkeletonSidebarRight'
import SkeletonCenterSection from '../../Skeleton/SkeletonCenterSection'


const CenterSection = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../component/CenterSection/CenterSection')), 2000);
  });
});
const SidebarRight = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../component/SidebarRight/SidebarRight')), 2200);
  });
});


const HomePage = () => {
  // const [openSearchSong, setOpenSearchSong] = useState(false)


  return (

    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] lg:min-h-screen xl:flex' >

      <div className=''>
        <TopPhone />
        <Top10Phone />
      </div>
      <div className='hidden xl:block w-full  xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>

        <SidebarLeft />

      </div>
      <div className='w-full pt-10 lg:pt-0 lg:w-full xl:w-[75%] 2xl:w-[64%]'>
        <Suspense fallback={<SkeletonCenterSection/>}>
          <CenterSection />
        </Suspense>

      </div>
      <div className='hidden w-full lg:hidden xl:hidden 2xl:block 2xl:w-[18%]'>
        <Suspense fallback={<SkeletonSidebarRight />}>
          <SidebarRight />
        </Suspense>
      </div>
      <div>
        <FooterNav />
      </div>
      {/* {
        openSearchSong ?
        <ModalNewPlayList />
        :
        <ModalSearcMusicForPlayList   />
      } */}
    </div>

  )
}

export default HomePage