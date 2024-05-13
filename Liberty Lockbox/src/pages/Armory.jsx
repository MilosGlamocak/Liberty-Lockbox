import React, { useEffect, useState } from 'react'
import '../styles/Armory.css'
import {Container} from '@mui/material'
import {useAuth} from '../store'
import { getAllItems, createNewItem, } from '../../lib/appwrite'
import ItemCreation from '../components/ItemCreation'
import ItemCard from '../components/ItemCard'

function Armory() {

  let [items, setItems] = useState([])

  useEffect(() => {
    getAllItems().then((res) => {
      setItems(res.documents);
    })
  }, [])

  const {label} = useAuth((state) => state)
  
  return (
    <Container className='armoryCont'>
      {label === 'admin' && (
        <ItemCreation />
      
      )}
      <Container className='itemsCont'>
        {items.reverse().map((item) => {
          return <ItemCard name={item.name} chamber={item.chamber} image={item.image} price={item.price} quantity={item.quantity} key={item.name} itemId={item.$id} publisher={item.users.username}/>
        })}
      </Container>
    </Container>
  )
}

export default Armory