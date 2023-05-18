import React,{Suspense, lazy} from 'react'
import FooterNav from '../../component/FooterNav/FooterNav'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'

import TopPhone from '../../component/TopPhone/TopPhone'

import SkeletonMySong from '../../Skeleton/Mysong/SkeletonMySong'

const MySongSection = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../component/MySongSection/MySongSection')), 2000);
  });
});

const Mysongs = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] lg:min-h-screen xl:flex'>
      <div className=''>
        <TopPhone />
      </div>
      <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[20%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-full pt-10 xl:pt-0 lg:w-full xl:w-[75%] 2xl:w-[85%]'>
        <Suspense fallback={<SkeletonMySong />}>
          <MySongSection />
        </Suspense>
      </div>
      <div className='xl:hidden'>
        <FooterNav />
      </div>
    </div>
  )
}

export default Mysongs