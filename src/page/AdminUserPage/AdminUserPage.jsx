import React from 'react'
import { useParams } from 'react-router-dom'

export const AdminUserPage = () => {
const {userId} = useParams()
console.log(userId)
//fetch al back usando el userId de los params


  return (
    <div>AdminUserPage</div>
  )
}
