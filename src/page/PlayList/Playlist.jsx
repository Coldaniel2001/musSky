import { useState } from 'react'
import CenterSection from '../../component/CenterSection/CenterSection'
import FooterNav from '../../component/FooterNav/FooterNav'
import ModalNewPlayList from '../../component/ModalNewPlayList/ModalNewPlayList'
import ModalSearcMusicForPlayList from '../../component/ModalSearcSongForPlayList/ModalSearcMusicForPlayList'
import MusicPlayerPhone from '../../component/MusicPlayerPhone/MusicPlayerPhone'
import SidebarLeft from '../../component/SidebarLeft/SidebarLeft'
import SidebarRight from '../../component/SidebarRight/SidebarRight'
import Top10Phone from '../../component/Top10Phone/Top10Phone'
import TopPhone from '../../component/TopPhone/TopPhone'
import Playlists from '../../component/PlayLists/Playlists'

const Playlist = () => {
  return (
    <>
    <div className='bg-gradient-to-tr from-black via-black to-[#7339E5] lg:min-h-screen xl:flex'>
      <div className=''>
        <TopPhone />
        <Top10Phone />
      </div>
      <div className='hidden w-full xl:block xl:w-[25%] 2xl:w-[19%] pt-10 border-r-2 border-gray-700'>
        <SidebarLeft />
      </div>
      <div className='w-full pt-10 lg:pt-0 lg:w-[100%] xl:w-[75%] 2xl:w-[62%]'>
        <Playlists />
      </div>
      <div className='hidden w-full lg:hidden xl:hidden 2xl:block 2xl:w-[19%]'>
        <SidebarRight />
      </div>
      <div className='lg:hidden'>
        <FooterNav />
      </div>
      {/* {
        openSearchSong ?
        <ModalNewPlayList />
        :
        <ModalSearcMusicForPlayList   />
      } */}
    </div>
    <MusicPlayerPhone />

    </>
  )
}

export default Playlist