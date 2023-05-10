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
                        <Route path='/admin/:userId' element={<AdminUserPage />} />
                        <Route path='/mis-canciones' element={<Mysongs />} /> 
                    </Routes>
                </BrowserRouter>

            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath