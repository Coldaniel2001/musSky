import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {isLogged} = useContext(UserContext);
  return (
    isLogged?children:<Navigate to="/"/>
  )
}

export default PrivateRouter