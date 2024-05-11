import React from 'react'
import '../styles/Armory.css'
import {Container} from '@mui/material'
import {useAuth} from '../store'

function Armory() {

  const {label, username} = useAuth((state) => state)
  return (
    <Container className='armoryCont'>
      {label === 'admin' && <h2>Admin</h2>}
    </Container>
  )
}

export default Armory