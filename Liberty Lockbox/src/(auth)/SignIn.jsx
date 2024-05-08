import React from 'react'
import { signIn } from '../../lib/appwrite'
import { useState } from 'react'

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
    <div>
      <input placeholder='email' id='email' onChange={handleSetCredentials}/>
      <input placeholder='password' id='password' onChange={handleSetCredentials} type='password'/>
      <button onClick={handleLogIn}>Log In</button>
    </div>
  )
}

export default SignIn