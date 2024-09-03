import React, { useState } from 'react'
import style from './login.module.css'
const Login = () => {

  const initLoginForm={
    userId:"",
    password:"",
  }
  const [loginUser,setLoginUser]=useState(initLoginForm)
  const [error,setError]=useState(initLoginForm)
  const onLoginFormUpdate=(e,type)=>{
  setLoginUser((p)=>{
    return{...p,[type]:e.target.value}
  })
  }

  const validator=(loginFormData)=>{
   let error={}
   if(loginFormData.userId===''){
    error.userId='userId cannot be empty'
   }
   if(loginFormData.password===''){
    error.password='password cannot be empty'
   }
  // console.log(error)
   return error
  }
  const onLoginFormSubmit=async(e)=>{
    e.preventDefault()
    
  try{
   let loginError=validator(loginUser)
   if(Object.keys(loginError).length>0){
   setError(loginError)
   }
   else{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "userId": loginUser.userId,
      "password": loginUser.password,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
   let saveUser=await fetch("http://localhost:7777/signUpSignIn/api/v1/user/signIn", requestOptions)
  //  console.log(saveUser.status)
   let response=await saveUser.json()
   console.log(response)

   if(saveUser.status!==200){
   setError({
    serverErrorMessage:response.message
   })
   }
   else{
    setTimeout(()=>{
      alert('login successfully')
    },2000)
   }
   }
  }
  catch(err){
    console.log(err.message)
   setError({
    serverErrorMessage:err.message
   })
  }
  }
  console.log(loginUser)
  // console.log(error)
  return (
    <div className={style['login-container']}>
      <div className={style['login-main-container']}>
        <h2>Login</h2>
        <form onSubmit={onLoginFormSubmit}>
          <div className={style['login-details']}>
            <label>userId:</label>
            <input type='text' placeholder='enter userId' value={loginUser.userId} onChange={(e)=>onLoginFormUpdate(e,'userId')}/>
            {error.userId && <div style={{color:"red"}}>{error.userId}</div>}
          </div>
          <div className={style['login-details']}>
            <label>password:</label>
            <input type='text' placeholder='enter password' value={loginUser.password} onChange={(e)=>onLoginFormUpdate(e,'password')}/>
            {error.password && <div style={{color:"red"}}>{error.password}</div>}
          </div>
          {error.serverErrorMessage && <div style={{color:"red"}}>{error.serverErrorMessage}</div>}
          <button type='submit'>Submit</button>
          
        </form>
      </div>
    </div>
  )
}

export default Login