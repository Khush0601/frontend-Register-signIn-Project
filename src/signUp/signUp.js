import React, { useEffect, useState } from 'react'
import style from './signUp.module.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const initForm={
    name:"",
    email:"",
    userId:"",
    password:"",
    userType:"",
  }
const [errorMessage,setErrorMessage]=useState(initForm)
// const [nameError,setNameError]=useState('')
// const [emailError,setEmailError]=useState('')
// const [userIdError,setuserIdError]=useState('')
// const [passwordError,setPasswordError]=useState('')
// const [userType,setUserType]=useState('')


const [signUpform,setSignUpForm]=useState(initForm)
const validator=(formdata)=>{
  let error={}
  let regex = /^[a-zA-Z]+$/;
if(!regex.test(formdata?.name)){
//  setNameError('name is not valid')
// setErrorMessage((p)=>{
// return {...p,name:'name is not valid'}
// })
error.name='name is not valid'
 
}
if(!formdata?.email?.includes('@gmail.com')){
  // setErrorMessage((p)=>{
  //   return {...p,email:'emailis not valid'}
  //   })
error.email='email is not valid'
}
if((formdata?.userId?.length<6)){
  // setuserIdError('userId should not be less than 6 character')
  // setErrorMessage((p)=>{
  //   return {...p,userId:'userId is not valid'}
  //   })
 error.userId='userId is not valid'
 
}
if(formdata?.password==='' || formdata?.password.length <8){
// setPasswordError('password should be of 8 character')
// setErrorMessage((p)=>{
//   return {...p,password:'password should be of 8 character'}
//   })
error.password='password is not valid'
}
if(!roles.includes(formdata?.userType)){
// setUserType('provide right userType')
// setErrorMessage((p)=>{
//   return {...p,userType:'userType is not valid'}
//   })
// }
error.userType='userType is not valid'
}
return error
}
const roles=['ENGINEER',"CUSTOMER"]
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
// //   //  alert('please provide all deatils')
// //  setErrorMessage('please provide all details')
  
// //   }
let error=validator(signUpform)
if(Object.keys(error).length>0){
 setErrorMessage(error)
}
  else{
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  let fetchingData=await fetch("http://localhost:7777/signUpSignIn/api/v1/user/signUp", requestOptions)
  let result= await fetchingData?.json()
  console.log(result)
  if(result && result?.message!=='some internal error while registering'){
    setTimeout(()=>{
      alert('signUp successfully')
    },2000)
  }
  }
 

}
catch(err){
console.log(err?.message)
}
}
useEffect(()=>{
if(errorMessage.name!=='' ||errorMessage.email!=='' || errorMessage.password!=='' || errorMessage.userId!=='' || errorMessage.userType!==''){
 setTimeout(()=>{
  setErrorMessage(initForm)
 },3000)
}
},[errorMessage])
console.log(signUpform)
// console.log(emailError)
  return (
    <div className={style['app-signUp-container']}>
        <div className={style['signUp-main-container']}>
          <h1> welcome to our website</h1>
          <h2>create an account</h2>
          <form className={style['signUp-form']} onSubmit={onsignUpFormSubmit} >
           <div className={style['input-box']}>
           <label>name:</label>
            <input type='text' placeholder="enter name"  value={signUpform?.name} onChange={(e)=>onSignupFormUpdate(e,'name')} />
           {/* {nameError && <div style={{color:'red'}}>{nameError}</div>} */}
           {errorMessage?.name && <div  style={{color:'red'}}>{errorMessage?.name}</div>}
           </div>
           <div className={style['input-box']}>
            <label>email:</label>
            <input type='text' placeholder="enter email" value={signUpform?.email} onChange={(e)=>onSignupFormUpdate(e,'email')} />
            {/* {emailError && <div style={{color:'red'}}>{emailError}</div>} */}
            {errorMessage?.email && <div  style={{color:'red'}}>{errorMessage?.email}</div>}
           </div>
           <div className={style['input-box']}>
            <label>userId:</label>
            <input type='text' placeholder="enter userId" value={signUpform?.userId} onChange={(e)=>onSignupFormUpdate(e,'userId')}/>
            {/* {userIdError && <div style={{color:'red'}}>{userIdError}</div>} */}
            {errorMessage?.userId && <div  style={{color:'red'}}>{errorMessage?.userId}</div>}
           </div>
           <div className={style['input-box']}>
            <label>password:</label>
            <input type='text' placeholder="enter password" value={signUpform?.password} onChange={(e)=>onSignupFormUpdate(e,'password')}/>
            {/* {passwordError && <div style={{color:'red'}}>{passwordError}</div>} */}
            {errorMessage?.password && <div  style={{color:'red'}}>{errorMessage?.password}</div>}
           </div>
           <div className={style['input-box']}>
            <label>userType:</label>
            <input type='text' placeholder="enter userType" value={signUpform?.userType} onChange={(e)=>onSignupFormUpdate(e,'userType')} />
            {/* {userType && <div style={{color:'red'}}>{userType}</div>} */}
            {errorMessage?.userType && <div  style={{color:'red'}}>{errorMessage?.userType}</div>}
           </div>
           <button type='submit'>Submit</button>
          
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