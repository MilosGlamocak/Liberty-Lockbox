import React from 'react'
import '../styles/ItemCard.css'
import { Container } from '@mui/material'
import CustomButton from './CustomButton'
import { useAuth } from '../store'
import { deleteItem } from '../../lib/appwrite'

function ItemCard({name, chamber, price, quantity, image, itemId}) {

const {label} = useAuth((state) => state)

  return (
    <Container className='itemCardCont'>
        <Container className='cardContLeft'>
            <img src={image} className='itemImg'/>
            <Container className='cardTextLeft'>
                <h2 className='cardName'>{name}</h2>
                <Container className='cardInfoCont'> <p className='cardInfo'>Chamber: </p><p className='cardInfoBold'>{chamber}</p></Container>
                <Container className='cardInfoCont'><p className='cardInfo'>Price per Unit:</p><p className='cardInfoBold'>${price}</p></Container>
                <Container className='cardInfoCont'><p className='cardInfo'>In Stock: </p><p className='cardInfoBold'>{quantity}</p></Container> 
            </Container>
        </Container> 
        <Container className='cardContRight'>
            {label === 'admin' && (
              <>
              <CustomButton text='Remove Item' border='none' backgroundColor='#520909' onClick={() => 
                deleteItem(itemId).then(() => window.location.reload())}/>
              </>      
            )}
            <p>Units: 1</p>
            <CustomButton text='Add to Cart' border='1px solid #365F22'/>
        </Container>
    </Container>
  )
}

export default ItemCard