import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const AdminPrivateRouter = ({children}) => {
  const {userLogged} = useContext(UserContext);
  console.log(userLogged)
return (
  userLogged.rol === "admin"?children:<Navigate to="/home"/>
)
}

export default AdminPrivateRouter