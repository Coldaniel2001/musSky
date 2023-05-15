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
import IconsImg from '../component/IconsImg'

import HomePage from '../page/HomePage/HomePage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import GendersPage from '../page/GendersPage/GendersPage'

import ArtistIdPage from '../page/ArtistIdPage/ArtistIdPage'

import HomePage from '../page/HomePage/HomePage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import GendersPage from '../page/GendersPage/GendersPage'

import ArtistIdPage from '../page/ArtistIdPage/ArtistIdPage'

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
                        <Route path='/*' element={<Navigate to={'/home'} />} />
                        <Route path='/admin' element={<AdminPage />} />
                        <Route path='/admin/:userId' element={<AdminUserPage />} />
                        <Route path='/artist/:userId' element={
                            <>
                                <ArtistIdPage/>
                                <MusicPlayerPhone />
                            </>
                        } />
                        <Route path='/mis-canciones' element={<Mysongs />} />
                        <Route path='/final-register' element={<FinalRegister />} />
                    </Routes>
                </BrowserRouter>

            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath