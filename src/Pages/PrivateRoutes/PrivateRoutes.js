import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../../App'

const PrivateRoutes = ({children}) => {
 const user=useContext(UserContext)
//  console.log(user)
  return user ?<>{children}</> : <Navigate to='/login'/>
}

export default PrivateRoutes