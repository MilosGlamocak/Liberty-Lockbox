import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { checkForUser, createUser, signIn, signOut } from '../../lib/appwrite'
import { useAuth } from '../store'
import Armory from '../pages/Armory'
import Profile from '../pages/Profile'
import { useEffect } from 'react';
import SignUp from '../(auth)/SignUp';

import React from 'react'
import SignIn from '../(auth)/SignIn';
import RouteContainer from './RouteContainer';

function CustomRoutes() {

    const {sessionId, username} = useAuth((state) => state)

    useEffect(() => {
        checkForUser() //checks who is logged in, then updates the zustand
      }, [])


  return (
<BrowserRouter >
    <Routes>

        {!username ? (
        <>
        <Route path='/' index element={<SignIn/>} />
        <Route path='signup' element={<SignUp/>} />
        </>  /*checks if user is logged in, if not, only signup and signin is available */ 
        ) : (
        <Route path='/' element={<RouteContainer/>}>
        <Route path='armory' element={<Armory />}/>
        <Route path='profile' index element={<Profile/>}/>
        </Route>
        )}
        
    </Routes>
</BrowserRouter>
  )
}

export default CustomRoutes