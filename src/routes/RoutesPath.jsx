import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import UserProvider from '../context/UserProvider'
import SongProvider from '../context/song/SongProvider'

import Skeleton from '../Skeleton/Skeleton'




// import PrivateRouter from './PrivateRouter'

// import Playlist from '../page/PlayList/Playlist'
import AdminPage from '../page/AdminPage/AdminPage'
import Mysongs from '../page/MySongs/Mysongs'
import { AdminUserPage } from '../page/AdminUserPage/AdminUserPage'
import MusicPlayerPhone from '../component/MusicPlayerPhone/MusicPlayerPhone'
import RealPlaylistPage from '../page/RealPlaylistPage/RealPlaylistPage'
import FinalRegister from '../FinalRegister/FinalRegister'
import IconsImg from '../component/IconsImg'

// import PrivateRouter from './PrivateRouter'

const HomePage = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('../page/HomePage/HomePage')), 2000);
    });
});

// const LoginPage = lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import('../page/LoginPage/LoginPage')), 2000);
//     });
// });

const PlayListPage = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('../page/PlayListPage/PlayListPage')), 2000);
    });
});

// const RealPlaylistPage = lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import('../page/RealPlaylistPage/RealPlaylistPage')), 2000);
//     });
// });

const ProfilePage = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('../page/ProfilePage/ProfilePage')), 2000);
    });
});

const GendersPage = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('../page/GendersPage/GendersPage')), 2000);
    });
});




const RoutesPath = () => {
    return (
        <UserProvider>
            <SongProvider>

                    <BrowserRouter>
                        <Routes>
                            {/* <Route path='/' element={
                            <Suspense fallback={<Skeleton/>}>
                                <LoginPage />
                            </Suspense>
                        } /> */}
                        <Route path='/home' element={
                            <Suspense fallback={<Skeleton/>}>
                                <HomePage />
                                <MusicPlayerPhone/>
                            </Suspense>
                        } />
                        <Route path='/profile' element={
                            <Suspense fallback={<Skeleton/>}>
                                <ProfilePage />
                                <MusicPlayerPhone/>
                            </Suspense>
                        } />
                        <Route path='/real-playlist' element={
                            <Suspense fallback={<Skeleton/>}>
                                <RealPlaylistPage />
                            </Suspense>
                        } />
                        <Route path='/real-playlist' element={
                            <Suspense fallback={<Skeleton/>}>
                                <RealPlaylistPage />
                            </Suspense>
                        } />
                        <Route path='/individual-playlist' element={
                            <Suspense fallback={<Skeleton/>}>
                                <PlayListPage />
                                <MusicPlayerPhone/>
                            </Suspense>
                        } />
                        <Route path='/genders' element={
                            <Suspense fallback={<Skeleton/>}>
                                <GendersPage />
                                <MusicPlayerPhone/>
                            </Suspense>
                        } />
                        <Route path='/*' element={<Navigate to={'/home'} />} />
                        <Route path='/admin' element={<AdminPage />} />
                        <Route path='/admin/:userId' element={<AdminUserPage />} />
                        <Route path='/mis-canciones' element={<Mysongs />} /> 
                        <Route path='/final-register' element={<IconsImg />} />
                    </Routes>
                </BrowserRouter>

            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath