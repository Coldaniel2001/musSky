import React, { Suspense } from 'react'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import PlayListIndividual from '../../component/PlayListIndividual/PlayListIndividual'
import FooterNav from '../../component/FooterNav/FooterNav'
import Skeleton from '../../Skeleton/SkeletonSidebarRight'
import PlaylistById from '../../component/PlayListIndividual/PlaylistById'
import TopPhone from '../../component/TopPhone/TopPhone'

const PlaylistIdPage = () => {
    return (
      <div className='bg-gradient-to-tr from-black via-black to-mainPurple xl:flex lg:min-h-screen'>
          <div>
          <TopPhone />
          </div>
        <div className='hidden xl:block w-full  xl:w-[25%] 2xl:w-[18%] pt-10 border-r-2 border-gray-700'>
          <SidebarLeft />
        </div>
        <div className='w-full pt-10 sm:pt-10 xl:pt-0 xl:w-[85%]  2xl:w-[82%]'>
          <Suspense fallback={<Skeleton />}>
            <PlaylistById />
          </Suspense>
        </div>
        <div className='xl:hidden'>
          <FooterNav />
        </div>
      </div>
    )
  }

export default PlaylistIdPage