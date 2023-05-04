import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MusicPlayerProvider from '../context/MusicPlayer/MusicPlayerProvider'
import UserProvider from '../context/UserProvider'
import Skeleton from '../Skeleton/Skeleton'




// import PrivateRouter from './PrivateRouter'

// import Playlist from '../page/PlayList/Playlist'
import AdminPage from '../page/AdminPage/AdminPage'

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
                        <Route path='/admin' element={<AdminPage />} />
                    </Routes>
                </BrowserRouter>

            </MusicPlayerProvider>
        </UserProvider>
    )
}

export default RoutesPath