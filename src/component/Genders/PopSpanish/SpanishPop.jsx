import React, { Suspense, lazy } from 'react'

import FooterNav from '../../../component/FooterNav/FooterNav'
import SidebarLeft from '../../../component/SidebarLeft/SidebarLeft'
import Skeleton from '../../../Skeleton/SkeletonSidebarRight'
import PopSpanishCard from './PopSpanishCard/PopSpanishCard';


const PlayListIndividual = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../../component/PlayListIndividual/PlayListIndividual')), 2000);
  });
});
const SpanishPop = () => {
  return (
    <div className='bg-gradient-to-tr from-black via-black to-mainPurple xl:flex lg:min-h-screen'>
      <div className='hidden lg:block w-full lg:w-[15%] xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>

        <SidebarLeft />

      </div>
      <div className='w-full pt-10 sm:pt-10 lg:pt-0 lg:w-[85%] xl:w-[75%] 2xl:w-[82%]'>
        <Suspense fallback={<Skeleton />}>
          <PlayListIndividual/>
        </Suspense>
      </div>
      <div className='lg:hidden'>
        <FooterNav />
      </div>
    </div>
  )
}

export default SpanishPop