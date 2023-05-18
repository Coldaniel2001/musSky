import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const ArtistPrivateRouter = ({ children }) => {
  const { userLogged } = useContext(UserContext);

  return (
      userLogged.rol === "artist" ? children : <Navigate to="/home" />
  )
}

export default ArtistPrivateRouter