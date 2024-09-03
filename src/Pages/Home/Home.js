import React from 'react'
import style from './home.module.css'
import {useNavigate}  from "react-router"
const Home = () => {
    const navigate=useNavigate()
   
  return (
    <div className={style['home-container']}>
        <button onClick={()=>navigate('/home')}>Home</button>
        <button onClick={()=>navigate('/about')}>About</button>
        <button onClick={()=>navigate('/contact')}>Contact</button>
        <button onClick={()=>navigate('/technicalSupport')}>Technical support</button>
        <button onClick={()=>navigate('/getAll')}>Get All Details</button>
        <button onClick={()=>navigate('/userProfile')}>User Profile</button>


    </div>
  )
}

export default Home