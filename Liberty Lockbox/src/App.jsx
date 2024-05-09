import { useEffect, useState } from 'react'
import { checkForUser, createUser, signIn, signOut } from '../lib/appwrite'
import { useAuth } from './store'
import RouteContainer from './components/RouteContainer'
import CustomRoutes from './components/CustomRoutes'

function App() {
  return (
    <CustomRoutes/>
  )
}

export default App
