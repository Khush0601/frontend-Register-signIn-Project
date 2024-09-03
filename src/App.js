import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './signUp/signUp'
import Login from './logIn/login'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import TechnicalSupport from './Pages/Technical Support/technicalSupport'
import GetallDetails from './Pages/GetAllDetails/getallDetails'
import UserProfile from './Pages/UserProfile/UserProfile'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<SignUp/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/technicalSupport' element={<TechnicalSupport/>}/>
    <Route path='/getAll' element={<GetallDetails/>}/>
    <Route path='/userProfile' element={<UserProfile/>}/>
    

   </Routes>
   </BrowserRouter>
  )
}

export default App