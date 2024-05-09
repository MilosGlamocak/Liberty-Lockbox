import React from 'react'
import { signOut } from '../../lib/appwrite'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import {Container} from '@mui/material'
import '../styles/RouteContainer.css'
import { useAuth } from '../store'

function RouteContainer() {

  const username = useAuth((state) => state.username)
  const avatar = useAuth((state) => state.avatar)
  /*let navigate = useNavigate()

  const handleSignOut = () => {
    signOut().then((res) => console.log(res))
    navigate('/')
  }*/
  return (
    <>
      <Container className='routeCont'>
        <Link to='/' className='link'><h3>Armory</h3></Link>
        <Link to='profile' className='link'>
          <img src={avatar} className='avatarSmall'></img>
          <h3>{username}</h3>
        </Link>
      </Container>
      <Outlet />
    </>
    
   
  )
}

export default RouteContainer