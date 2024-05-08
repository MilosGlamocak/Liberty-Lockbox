import React from 'react'
import { signOut } from '../../lib/appwrite'

function RouteContainer() {

  const handleSignOut = () => {
    signOut().then((res) => console.log(res))
  }
  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )
}

export default RouteContainer