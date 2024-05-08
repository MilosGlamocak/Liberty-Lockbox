import React from 'react'
import { useState } from 'react';
import { createUser } from '../../lib/appwrite';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function SignUp() {
  let navigate = useNavigate()

  const [credentials, setCredentials] = useState({email: '', password: '', username:''})

  const handleSetCredentials = (e) => {
    const { id, value } = e.target;
    setCredentials({...credentials, [id]: value});
  }

  const handleSignUp = () => {
    createUser(credentials.email, credentials.password, credentials.username).then((res) => {
      console.log(res);
      navigate(-1)
    })
  }
  return (
    <div>
      <input placeholder='email' id='email' onChange={handleSetCredentials}/>
      <input placeholder='username' id='username' onChange={handleSetCredentials}/>
      <input placeholder='password' id='password' onChange={handleSetCredentials} type='password'/>
      <button onClick={handleSignUp}>Sign Up</button>
      <Link to='/'>Already have an Account</Link>
      <Outlet />
    </div>
  )
}

export default SignUp