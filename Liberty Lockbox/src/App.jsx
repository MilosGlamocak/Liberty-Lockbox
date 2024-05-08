import { useEffect, useState } from 'react'
import './App.css'
import { checkForUser, createUser, signIn, signOut } from '../lib/appwrite'
import { useAuth } from './store'
import RouteContainer from './components/RouteContainer'
import CustomRoutes from './components/CustomRoutes'

function App() {

  const {sessionId, username} = useAuth((state) => state)
  const [credentials, setCredentials] = useState({email: '', password: '', username:''})

  useEffect(() => {
    checkForUser()
  }, [])

  const handleSetCredentials = (e) => {
    const { id, value } = e.target;
    setCredentials({...credentials, [id]: value});
  }

  const handleSignUp = () => {
    createUser(credentials.email, credentials.password, credentials.username).then((res) => console.log(res))
  }

  /*const handleLogIn = () => {
    signIn(credentials.email, credentials.password).then((res) => console.log(res))
  }

  const handleSignOut = () => {
    signOut().then((res) => console.log(res))
  }*/

  return (/*
    <>
      <input placeholder='email' id='email' onChange={handleSetCredentials}/>
      <input placeholder='username' id='username' onChange={handleSetCredentials}/>
      <input placeholder='password' id='password' onChange={handleSetCredentials} type='password'/>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <h2>{username}</h2>
    </>*/

    <CustomRoutes/>
  )
}

export default App
