import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import UserProvider from '../context/UserProvider'
import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PrivateRouter from './PrivateRouter'
import GendersPage from '../page/GendersPage/GendersPage'


const RoutesPath = () => {
    return (
        <UserProvider>
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
                                <Route path='/*' element={<Navigate to={'/'} />} />
                            </Routes>
                        </PrivateRouter>
                    } />
                    <Route path='/*' element={<Navigate to={'/login'} />} />


                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default RoutesPath