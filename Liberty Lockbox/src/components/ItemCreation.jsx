import { Container } from '@mui/material'
import React from 'react'
import '../styles/ItemCreation.css'
import { useState } from 'react'
import { createNewItem } from '../../lib/appwrite'
import CustomButton from '../components/CustomButton'

function ItemCreation() {

    let [itemCred, setItemCred] = useState({
        name: '',
        image: '',
        price: '',
        chamber: '',
        quantity: '',
      })

    const handleUpdateItemCred = (e) => {
        const { id, value } = e.target;
        setItemCred({...itemCred, [id]: value});
        console.log(itemCred);
        
    }

    const handleCreateNewItem = async () => {
        createNewItem(
          itemCred.name,
          itemCred.image,
          parseFloat(itemCred.price),
          itemCred.chamber,
          parseInt(itemCred.quantity)
        ).then(() => {
            window.location.reload();
        })
       
      }

      const inputFields = [
        {type: 'text', id: 'name', placeholder: 'name'},
        {type: 'text', id: 'image', placeholder: 'image'},
        {type: 'number', id: 'price', placeholder: 'price'},
        {type: 'text', id: 'chamber', placeholder: 'chamber'},
        {type: 'number', id: 'quantity', placeholder: 'quantity'},

      ]
  return (
    <Container className='itemCreationCont'>
        <h2>Create new item</h2>
        {inputFields.map((item) => {
            return <input type={item.type} id={item.id} placeholder={item.placeholder} key={item.id} onChange={handleUpdateItemCred}/>
        })}
        <CustomButton onClick={handleCreateNewItem} text='Publish Item'/>
    </Container>
  )
}

export default ItemCreation