import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MusicPlayerProvider from '../context/MusicPlayer/MusicPlayerProvider'
import UserProvider from '../context/UserProvider'
import Skeleton from '../Skeleton/Skeleton'

import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PrivateRouter from './PrivateRouter'
import GendersPage from '../page/GendersPage/GendersPage'

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
                <MusicPlayerProvider>

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
                            </Suspense>
                        } />
                        <Route path='/profile' element={
                            <Suspense fallback={<Skeleton/>}>
                                <ProfilePage />
                            </Suspense>
                        } />
                        <Route path='/individual-playlist' element={
                            <Suspense fallback={<Skeleton/>}>
                                <PlayListPage />
                            </Suspense>
                        } />
                        <Route path='/genders' element={
                            <Suspense fallback={<Skeleton/>}>
                                <GendersPage />
                            </Suspense>
                        } />
                        <Route path='/*' element={<Navigate to={'/home'} />} />
                    </Routes>
                </BrowserRouter>

            </MusicPlayerProvider>
            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath