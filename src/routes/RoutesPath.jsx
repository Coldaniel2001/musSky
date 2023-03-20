import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DataProvider from '../context/DataProvider'
import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'


const RoutesPath = () => {
    return (
        <DataProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/*' element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
        </DataProvider>
    )
}

export default RoutesPath