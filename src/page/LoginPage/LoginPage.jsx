import React, { useState, useContext } from 'react'
import Login from '../../component/Login/Login'
import Register from '../../component/Register/Register'
import DataContext from '../../context/DataContext'

const LoginPage = () => {
  
const {isLoggin} = useContext(DataContext)
  
  return (
    <>
      {isLoggin?<Login />:<Register/>}
    </>
  )
}

export default LoginPage