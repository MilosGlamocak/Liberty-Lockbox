import React, { useEffect, useState } from 'react'
import '../styles/Armory.css'
import {Container} from '@mui/material'
import {useAuth} from '../store'
import { getAllItems, createNewItem, } from '../../lib/appwrite'

function Armory() {

  let [items, setItems] = useState([])

  let [itemCred, setItemCred] = useState({
    name: '',
    image: '',
    price: '',
    chamber: '',
    quantity: '',
  })

  useEffect(() => { 
    getAllItems().then((res) => {
      setItems(res.documents);
    })
  }, [])

  const handleUpdateItemCred = (e) => {
      const { id, value } = e.target;
      setItemCred({...itemCred, [id]: value});
      console.log(itemCred)
  }

  const handleCreateNewItem = async () => {
    createNewItem(
      itemCred.name,
      itemCred.image,
      parseFloat(itemCred.price),
      itemCred.chamber,
      parseInt(itemCred.quantity)
    )
  }

  const {label, username} = useAuth((state) => state)
  
  return (
    <Container className='armoryCont'>
      {label === 'admin' && (
        <>
        <h2>Admin</h2>
        <Container>
          <input type="text" placeholder='name' id='name' onChange={handleUpdateItemCred}/>
          <input type="text" placeholder='image' id='image' onChange={handleUpdateItemCred}/>
          <input type="number" placeholder='price' id='price' onChange={handleUpdateItemCred}/>
          <input type="text" placeholder='chamber' id='chamber' onChange={handleUpdateItemCred}/>
          <input type="number" placeholder='quantity' id='quantity' onChange={handleUpdateItemCred}/>
          <button onClick={handleCreateNewItem}>Publish item</button>
        </Container>
        </>
      
      )}
      <Container className='itemsCont'>
        {items.map((item) => {
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