import React, { useEffect, useState } from 'react'
import style from './signUp.module.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
const [errorMessage,setErrorMessage]=useState('')
const [nameError,setNameError]=useState('')

const [signUpform,setSignUpForm]=useState(
  {
    name:"",
    email:"",
    userId:"",
    password:"",
    userType:"",
  }
)
const onSignupFormUpdate=(e,type)=>{
setSignUpForm((p)=>{
  return{...p,[type]:e.target.value}
})
}


const onsignUpFormSubmit=async(e)=>{
e.preventDefault()
try{
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify({
    "name": signUpform.name,
  "email": signUpform.email,
  "userId":signUpform.userId,
  "password": signUpform.password,
  "userType": signUpform.userType,
  });
//   if(!signUpform.name  || !signUpform.email  || !signUpform.userId  || !signUpform.password  || !signUpform.userType){
//   //  alert('please provide all deatils')
//  setErrorMessage('please provide all details')
  
//   }
let regex = /^[a-zA-Z]+$/;
if(!regex.test(signUpform.name)){
 setNameError('name is not valid')
 return 
}
  else{
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  let fetchingData=await fetch("http://localhost:7777/signUpSignIn/api/v1/user/signUp", requestOptions)
  let result= await fetchingData.json()
  console.log(result)
  if(result){
    setTimeout(()=>{
      alert('signUp successfully')
    },2000)
  }
  }
 

}
catch(err){
console.log(err.message)
}
}
useEffect(()=>{
if(errorMessage!==''){
 setTimeout(()=>{
  setErrorMessage('')
 },3000)
}
},[errorMessage])
console.log(signUpform)
  return (
    <div className={style['app-signUp-container']}>
        <div className={style['signUp-main-container']}>
          <h1> welcome to our website</h1>
          <h2>create an account</h2>
          <form className={style['signUp-form']} onSubmit={onsignUpFormSubmit} >
           <div className={style['input-box']}>
            <label>name:</label>
            <input type='text' placeholder="enter name"  value={signUpform.name} onChange={(e)=>onSignupFormUpdate(e,'name')}/>
            {nameError && <div style={{color:'red'}}>{nameError}</div>}
           </div>
           <div className={style['input-box']}>
            <label>email:</label>
            <input type='text' placeholder="enter email" value={signUpform.email} onChange={(e)=>onSignupFormUpdate(e,'email')} />
           </div>
           <div className={style['input-box']}>
            <label>userId:</label>
            <input type='text' placeholder="enter userId" value={signUpform.userId} onChange={(e)=>onSignupFormUpdate(e,'userId')}/>
           </div>
           <div className={style['input-box']}>
            <label>password:</label>
            <input type='text' placeholder="enter password" value={signUpform.password} onChange={(e)=>onSignupFormUpdate(e,'password')}/>
           </div>
           <div className={style['input-box']}>
            <label>userType:</label>
            <input type='text' placeholder="enter userType" value={signUpform.userType} onChange={(e)=>onSignupFormUpdate(e,'userType')} />
           </div>
           <button type='submit'>Submit</button>
           {errorMessage && <div style={{color:'red'}}>{errorMessage}</div>}
          </form>
          <div className={style['login-navigation']}>
          <h3>Already have an account?</h3>
          <Link to='/login'><b>Login</b></Link>
         </div>

        </div>
    </div>
  )
}

export default SignUp