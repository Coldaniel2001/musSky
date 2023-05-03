import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MusicPlayerProvider from '../context/MusicPlayer/MusicPlayerProvider'
import UserProvider from '../context/UserProvider'

import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PrivateRouter from './PrivateRouter'
import GendersPage from '../page/GendersPage/GendersPage'
import Playlist from '../page/PlayList/Playlist'
import AdminPage from '../page/AdminPage/AdminPage'


const RoutesPath = () => {
    return (
        <UserProvider>
            <MusicPlayerProvider>

                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={
                            <PrivateRouter>
                                <Routes>
                                    <Route path='/' element={<HomePage />} />
                                    <Route path='/profile' element={<ProfilePage />} />
                                <Route path='/individual-playlist' element={<PlayListPage />} />
                                <Route path='/genders' element={<GendersPage />} />
                                <Route path='/playlist' element={<Playlist />} />
                                <Route path='/admin' element={<AdminPage />} />
                                
                                <Route path='/*' element={<Navigate to={'/'} />} />
                            </Routes>
                        </PrivateRouter>
                    } />
                    <Route path='/*' element={<Navigate to={'/login'} />} />
                </Routes>
            </BrowserRouter>        
                
            </MusicPlayerProvider>
        </UserProvider>
    )
}

export default RoutesPath