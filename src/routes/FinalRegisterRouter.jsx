import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const FinalRegisterRouter = ({ children }) => {
  const { userLogged } = useContext(UserContext);

  return (
    <>
      {userLogged.surname === "en proceso" ? children : <Navigate to="/home" />}
      {userLogged.rol !== "admin" ? children : <Navigate to="/admin" />}
    </>
  )
}

export default FinalRegisterRouter