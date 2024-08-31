import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './signUp/signUp'
import Login from './logIn/login'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<SignUp/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App