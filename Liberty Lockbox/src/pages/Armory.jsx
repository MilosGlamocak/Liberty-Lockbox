import React, { useEffect, useState } from 'react'
import '../styles/Armory.css'
import {Container} from '@mui/material'
import {useAuth} from '../store'
import { getAllItems, createNewItem, } from '../../lib/appwrite'
import ItemCreation from '../components/ItemCreation'

function Armory() {

  let [items, setItems] = useState([])

  

  useEffect(() => { 
    getAllItems().then((res) => {
      setItems(res.documents);
    })
  }, [])

  const {label, username} = useAuth((state) => state)
  
  return (
    <Container className='armoryCont'>
      {label === 'admin' && (
        <>
        <h2>Admin</h2>
        <ItemCreation />
        </>
      
      )}
      <Container className='itemsCont'>
        {items.reverse().map((item) => {
          return <Container key={item.name} style={{display: 'flex', flexDirection: 'row', maxWidth: '60%', justifyContent: 'center', alignItems: 'center'}}>
            <img src={item.image} style={{width: '300px'}}/>
            <Container>
              <h2>{item.name}</h2>
              <h5>{item.chamber}</h5>
              <h3>${item.price}</h3>
              <h4>Units left: {item.quantity}</h4>
            </Container>
           
          </Container>
        })}
      </Container>
    </Container>
  )
}

export default Armory