import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import UserProvider from '../context/UserProvider'
import SongProvider from '../context/song/SongProvider'

import Skeleton from '../Skeleton/SkeletonSidebarRight'




// import PrivateRouter from './PrivateRouter'

// import Playlist from '../page/PlayList/Playlist'
import AdminPage from '../page/AdminPage/AdminPage'
import Mysongs from '../page/MySongs/Mysongs'
import { AdminUserPage } from '../page/AdminPage/AdminUserPage'
import MusicPlayerPhone from '../component/MusicPlayerPhone/MusicPlayerPhone'
import RealPlaylistPage from '../page/RealPlaylistPage/RealPlaylistPage'
import FinalRegister from '../FinalRegister/FinalRegister'


import HomePage from '../page/HomePage/HomePage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import GendersPage from '../page/GendersPage/GendersPage'
import PlaylistsProvider from '../context/playlists/PlaylistsProvider'
import ArtistIdPage from '../component/ArtistInformation/ArtistIdPage'
import PopSpanish from '../component/Genders/PopSpanish/PopSpanish'
import UrbanLatin from '../component/Genders/UrbanLatin/UrbanLatin'
import Reggae from '../component/Genders/Reggae/Reggae'
import Rock from '../component/Genders/Rock/Rock'
import Flamenco from '../component/Genders/Flamenco/Flamenco'
import RockSpanish from '../component/Genders/RockSpanish/RockSpanish'
import Electronic from '../component/Genders/Electronic/Electronic'
import PopLatin from '../component/Genders/PopLatin/PopLatin'
import Jazz from '../component/Genders/Jazz/Jazz'
import HipHop from '../component/Genders/HipHop/HipHop'
import SpanishPop from '../component/Genders/PopSpanish/SpanishPop'
// import PrivateRouter from './PrivateRouter'


// const LoginPage = lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import('../page/LoginPage/LoginPage')), 2000);
//     });
// });

// const RealPlaylistPage = lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import('../page/RealPlaylistPage/RealPlaylistPage')), 2000);
//     });
// });


const RoutesPath = () => {
    return (
        <UserProvider>
            <SongProvider>
                <PlaylistsProvider >
                    <BrowserRouter>
                        <Routes>
                            <Route path='/home' element={
                                <>
                                    <HomePage />
                                    <MusicPlayerPhone />
                                </>
                            } />
                            <Route path='/profile' element={
                                <>
                                    <ProfilePage />
                                    <MusicPlayerPhone />
                                </>

                            } />
                            <Route path='/real-playlist' element={
                                <Suspense fallback={<Skeleton />}>
                                    <RealPlaylistPage />
                                </Suspense>
                            } />
                            <Route path='/individual-playlist' element={
                                <>
                                    <PlayListPage />
                                    <MusicPlayerPhone />
                                </>

                            } />
                            <Route path='/genders' element={
                                <>
                                    <GendersPage />
                                    <MusicPlayerPhone />
                                </>

                            } />
                            <Route path='/artist/:userId' element={
                            <>
                                <ArtistIdPage/>
                                <MusicPlayerPhone />
                            </>
                        } />
                   
                            <Route path='/*' element={<Navigate to={'/home'} />} />
                            <Route path='/admin' element={<AdminPage />} />
                            <Route path='/admin/:userId' element={<AdminUserPage />} />
                            <Route path='/mis-canciones' element={<Mysongs />} />
                            <Route path='/final-register' element={<FinalRegister />} />
                            <Route path='/1' element={<PopSpanish/>} />
                            <Route path='/2' element={<UrbanLatin/>} />
                            <Route path='/3' element={<RockSpanish/>} />
                            <Route path='/4' element={<HipHop/>} />
                            <Route path='/5' element={<Electronic/>} />
                            <Route path='/6' element={
<>
                            <SpanishPop/>
                            <MusicPlayerPhone />
</>}/>
                            
                            <Route path='/7' element={<PopLatin/>} />
                            <Route path='/8' element={<Jazz/>} />
                            <Route path='/9' element={<Rock/>} />
                            <Route path='/10' element={<Flamenco/>} />
                        </Routes>
                    </BrowserRouter>
                </PlaylistsProvider>
            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath