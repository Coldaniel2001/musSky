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
import ArtistIdPage from '../page/ArtistIdPage/ArtistIdPage'

import PlaylistIdPage from '../page/PlaylistIdPage/PlaylistIdPage'
import MusicReproductionLive from '../page/MusicReproductionLive/MusicReproductionLive'
import { AdminArtistPage } from '../page/AdminPage/AdminArtistsPage'

import FinalRegisterRouter from './FinalRegisterRouter'
import HomePrivateRouter from './HomePrivateRouter'
import ArtistPrivateRouter from './ArtistPrivateRouter'
import AdminPrivateRouter from './AdminPrivateRouter'





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
                                <HomePrivateRouter>
                                    <HomePage />
                                    <MusicPlayerPhone />
                                </HomePrivateRouter>
                            } />
                            <Route path='/profile' element={
                                <HomePrivateRouter>
                                    <ProfilePage />
                                    <MusicPlayerPhone />
                                </HomePrivateRouter>
                            } />
                            <Route path='/real-playlist' element={
                                <Suspense fallback={<Skeleton />}>
                                    <HomePrivateRouter>
                                        <RealPlaylistPage />
                                        <MusicPlayerPhone />
                                    </HomePrivateRouter>
                                </Suspense>
                            } />
                            <Route path='/individual-playlist' element={

                                <HomePrivateRouter>
                                    <PlayListPage />
                                    <MusicPlayerPhone />
                                </HomePrivateRouter>
                            } />
                            <Route path='/genders' element={
                                <HomePrivateRouter>
                                    <GendersPage />
                                    <MusicPlayerPhone />
                                </HomePrivateRouter>
                            } />
                            <Route path='/artist/:userId' element={
                                <HomePrivateRouter>
                                    <ArtistIdPage />
                                    <MusicPlayerPhone />
                                </HomePrivateRouter>
                            } />
                            <Route path='/playlist/:userId' element={
                                <HomePrivateRouter>
                                    <PlaylistIdPage />
                                    <MusicPlayerPhone />
                                </HomePrivateRouter>
                            } />
                            <Route path='/*' element={<Navigate to={'/home'} />} />

                            <Route path='/admin/:userId' element={
                                <AdminPrivateRouter>
                                    <AdminUserPage />
                                </AdminPrivateRouter>
                            } />
                            <Route path='/admin/:userId' element={
                                <AdminPrivateRouter>
                                    <AdminArtistPage />
                                </AdminPrivateRouter>
                            } />
                            <Route path='/admin' element={
                                <AdminPrivateRouter>
                                    <AdminPage />
                                </AdminPrivateRouter>
                            } />
                            <Route path='/mis-canciones' element={
                                <ArtistPrivateRouter>
                                    <Mysongs />
                                    <MusicPlayerPhone />
                                </ArtistPrivateRouter>
                            } />
                            <Route path='/final-register' element={
                                <FinalRegisterRouter>
                                    <FinalRegister />
                                </FinalRegisterRouter>
                            } />
                            <Route path='/reproduction-live' element={
                                <HomePrivateRouter>
                                    <MusicReproductionLive />
                                </HomePrivateRouter>
                            } />
                        </Routes>
                    </BrowserRouter>
                </PlaylistsProvider>
            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath