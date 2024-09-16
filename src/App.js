import React, { createContext, useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import SignUp from './signUp/signUp'
import Login from './logIn/login'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import TechnicalSupport from './Pages/Technical Support/technicalSupport'
import GetallDetails from './Pages/GetAllDetails/getallDetails'
import UserProfile from './Pages/UserProfile/UserProfile'
import PrivateRoutes from './Pages/PrivateRoutes/PrivateRoutes'
import ProtectedEngineerRoutes from './Pages/PotectedEngineerRoutes/ProtectedEngineerRoutes'
import Logout from './Pages/logout/logout'

 export const UserContext=createContext(null)
const App = () => {
  const [user,setUser]=useState('')
  console.log(user)
  console.log('hello')
  return (
 <UserContext.Provider value={user}>
  
   <Routes>
    <Route index element={<SignUp/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login setUser={setUser}/>}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/about' element={<PrivateRoutes><About/></PrivateRoutes>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/technicalSupport' element={<ProtectedEngineerRoutes><TechnicalSupport/></ProtectedEngineerRoutes>}/>
    <Route path='/getAll' element={<GetallDetails/>}/>
    <Route path='/userProfile' element={<UserProfile/>}/>
    <Route path='/logout' element={<Logout setUser={setUser}/>}/>
    
</Routes>
  
 </UserContext.Provider>
  )
}

export default App