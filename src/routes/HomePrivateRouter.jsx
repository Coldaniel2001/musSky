import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const HomePrivateRouter = ({ children }) => {
  const { userLogged } = useContext(UserContext);

  return (
    <>
      {userLogged.surname !== "en proceso" ? children : <Navigate to="/final-register" />}
    </>
  )
}

export default HomePrivateRouter