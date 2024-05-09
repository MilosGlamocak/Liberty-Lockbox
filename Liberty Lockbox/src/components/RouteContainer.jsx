import React from 'react'
import { signOut } from '../../lib/appwrite'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import {Container} from '@mui/material'
import '../styles/RouteContainer.css'
import { useAuth } from '../store'

function RouteContainer() {

  const username = useAuth((state) => state.username)
  let navigate = useNavigate()

  const handleSignOut = () => {
    signOut().then((res) => console.log(res))
    navigate('/')
  }
  return (
    <>
      <Container className='routeCont'>
        <button onClick={handleSignOut}>Sign Out</button>
        <Link to='armory'>Armory</Link>
        <Link to='profile'>Profile</Link>
        <h2>{username}</h2>
      </Container>
      <Outlet />
    </>
    
   
  )
}

export default RouteContainer