import React, { Suspense, lazy } from 'react'

import FooterNav from '../../component/FooterNav/FooterNav'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import Skeleton from '../../Skeleton/SkeletonSidebarRight'
import TopPhone from '../../component/TopPhone/TopPhone';

const PlayListIndividual = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../component/PlayListIndividual/PlayListIndividual')), 2000);
  });
});

const PlayListPage = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-mainPurple xl:flex min-h-screen'>
        <div>
          <TopPhone />
          </div>
      <div className='hidden xl:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-full pt-10 sm:pt-10 xl:pt-0  xl:w-[85%] 2xl:w-[82%]'>
        <Suspense fallback={<Skeleton />}>
          <PlayListIndividual />
        </Suspense>
      </div>
      <div className='xl:hidden'>
        <FooterNav />
      </div>
    </div>
  )
}

export default PlayListPage