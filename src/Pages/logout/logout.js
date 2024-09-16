import React, {  } from 'react'
import {useNavigate}  from "react-router"

const Logout = ({setUser}) => {
    const navigate=useNavigate()
     setTimeout(()=>{
      setUser('')
      navigate('/login')
     alert('logged out please login again')
    },1000)
    
  return (
    <div>
      
    </div>
  )
}

export default Logout