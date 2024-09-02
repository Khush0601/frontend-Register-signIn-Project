import React, { useState } from 'react'
import style from './login.module.css'
const Login = () => {
  const [error,setError]=useState('')
  const [loginUser,setLoginUser]=useState(
    {
      userId:"",
      password:"",
    }
  )

  const onLoginFormUpdate=(e,type)=>{
  setLoginUser((p)=>{
    return{...p,[type]:e.target.value}
  })
  }
  const onLoginFormSubmit=async(e)=>{
    e.preventDefault()
    
  try{
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
   let response=await saveUser.json()
   console.log(response)
   if(response){
    setTimeout(()=>{
      alert('login successfully')
    },2000)
   }
  }
  catch(err){
    console.log(err.message)
   setError(err.message)
  }
  }
  console.log(loginUser)
  console.log(error)
  return (
    <div className={style['login-container']}>
      <div className={style['login-main-container']}>
        <h2>Login</h2>
        <form onSubmit={onLoginFormSubmit}>
          <div className={style['login-details']}>
            <label>userId:</label>
            <input type='text' placeholder='enter userId' value={loginUser.userId} onChange={(e)=>onLoginFormUpdate(e,'userId')}/>
          </div>
          <div className={style['login-details']}>
            <label>password:</label>
            <input type='text' placeholder='enter password' value={loginUser.password} onChange={(e)=>onLoginFormUpdate(e,'password')}/>
          </div>
          {error && <div style={{color:"red"}}>{error}</div>}
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login