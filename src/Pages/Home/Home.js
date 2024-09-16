import React, { useContext } from 'react'
import style from './home.module.css'
import {useNavigate}  from "react-router"
import { UserContext } from '../../App'
const Home = () => {
  const user=useContext(UserContext)
    const navigate=useNavigate()
   
  return (
    <div className={style['home-container']}>
        <button onClick={()=>navigate('/home')}>Home</button>
        <button onClick={()=>navigate('/about')}>About</button>
        <button onClick={()=>navigate('/contact')}>Contact</button>
        {
          user?.userType==='ENGINEER' &&  <button onClick={()=>navigate('/technicalSupport')}>Technical support</button>
        }
       
        <button onClick={()=>navigate('/getAll')}>Get All Details</button>
        <button onClick={()=>navigate('/userProfile')}>User Profile</button>
        <button onClick={()=>navigate('/logout')}>Logout</button>


    </div>
  )
}

export default Home