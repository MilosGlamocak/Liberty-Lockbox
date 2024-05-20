import React from 'react'
import { signIn } from '../../lib/appwrite'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import '../styles/SignIn.css'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

function SignIn() {

  const [credentials, setCredentials] = useState({email: '', password: '', username:''})

  const handleSetCredentials = (e) => {
    const { id, value } = e.target;
    setCredentials({...credentials, [id]: value});
  }

  const handleLogIn = () => {
    signIn(credentials.email, credentials.password).then((res) => console.log(res))
  }
  return (
    <Container className='signInCont'>
      <Container className='signInHeader'>
        <h3 className='headerSmall'>Welcome back to</h3>
        <h1 className='headerBig'>Liberty Lockbox</h1>
      </Container>
      <Container className='inputCont'>
        <CustomInput placeholder='Email' id='email' onChange={handleSetCredentials}/>
        <CustomInput placeholder='Password' id='password' onChange={handleSetCredentials} type='password'/>
      </Container>
      
      <CustomButton onClick={handleLogIn} text='Log In'/>
      <Container className='signUpLinkCont'>
        <p className='signUpQuestion'>New here?</p>
        <Link to='signup' className='signUpLink'>Create new Account</Link>
      </Container>
      
      <Outlet />
    </Container>
  )
}

export default SignIn