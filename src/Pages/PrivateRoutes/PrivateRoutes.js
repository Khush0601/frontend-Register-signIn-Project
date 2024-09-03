import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoutes = ({user,children}) => {
 if(user){
    return <>{children}</>
 }
 else{
    return <Navigate to='/login'/>
 }
}

export default PrivateRoutes