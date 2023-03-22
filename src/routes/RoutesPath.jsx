import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserProvider from '../context/UserProvider'
import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'
import ProfilePage from '../page/ProfilePage/ProfilePage'


const RoutesPath = () => {
    return (
        <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/*' element={<Navigate to={'/login'}/>}/>
            </Routes>
        </BrowserRouter>
        </UserProvider>
    )
}

export default RoutesPath