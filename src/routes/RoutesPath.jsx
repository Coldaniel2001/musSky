import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DataProvider from '../context/DataProvider'
import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'
import ProfilePage from '../page/ProfilePage/ProfilePage'


const RoutesPath = () => {
    return (
        <DataProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/*' element={<Navigate to={'/login'}/>}/>
            </Routes>
        </BrowserRouter>
        </DataProvider>
    )
}

export default RoutesPath