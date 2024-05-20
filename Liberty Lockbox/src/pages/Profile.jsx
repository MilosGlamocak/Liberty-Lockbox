import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { signOut } from '../../lib/appwrite'
import {Container} from '@mui/material'
import '../styles/Profile.css'
import { useAuth } from '../store'
import CustomButton from '../components/CustomButton'


function Profile() {

  const {username, avatar, email, label} = useAuth((state) => state)
  let navigate = useNavigate()

  const handleSignOut = () => {
    signOut().then((res) => {
      navigate('/')
    })
    
  }
  return (
    <Container className='profileCont'>
      <img src={avatar} className='avatarBig'></img>
      <Container className='userInfoText'>
        <h1 className='username'>{username}</h1>
        <h2 className='email'>{email}</h2>
        <h3 className='label'>({label})</h3>
      </Container>
      
      <CustomButton onClick={handleSignOut} text='Sign Out'/>
    </Container>
  )
}

export default Profile