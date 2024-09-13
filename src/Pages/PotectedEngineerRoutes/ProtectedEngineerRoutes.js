import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../../App'

const ProtectedEngineerRoutes = ({children}) => {
    const user=useContext(UserContext)
  return  user?.userType==='ENGINEER'? <>{children}</> :<Navigate to='/home'/>
  
    
}

export default ProtectedEngineerRoutes