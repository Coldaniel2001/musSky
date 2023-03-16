import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../page/HomePage/HomePage'
import LoginPage from '../page/LoginPage/LoginPage'

const RoutesPath = ({artists}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage artists={artists}/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/*' element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath