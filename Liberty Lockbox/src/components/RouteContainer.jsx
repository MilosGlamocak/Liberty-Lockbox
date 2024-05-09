import React from 'react'
import { signOut } from '../../lib/appwrite'
import { Link, Outlet } from 'react-router-dom'

function RouteContainer() {

  const handleSignOut = () => {
    signOut().then((res) => console.log(res))
  }
  return (
    <>
      <button onClick={handleSignOut}>Sign Out</button>
      <Link to='armory'>Armory</Link>
      <Link to='profile'>Profile</Link>
      <Outlet />
    </>
   
  )
}

export default RouteContainer