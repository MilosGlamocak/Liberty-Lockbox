import React, { useState } from 'react'
import '../styles/ItemCard.css'
import { CircularProgress, Container } from '@mui/material'
import CustomButton from './CustomButton'
import { useAuth } from '../store'
import { deleteItem, getAllItems } from '../../lib/appwrite'
import LoadingAnimation from './LoadingAnimation'

function ItemCard({name, chamber, price, quantity, image, itemId, publisher}) {

  const [loading, setLoading] = useState(false)

  const handleDeleteItem = () => {
    
    setLoading(true)
    deleteItem(itemId).then(() => {
      getAllItems().then(() => setLoading(false))
    })
  }

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
                <Container className='cardInfoCont'><p className='cardInfo'>Added by: </p><p className='cardInfoBold'>{publisher}</p></Container>  
            </Container>
        </Container> 
        <Container className='cardContRight'>
            {label === 'admin' && (
              <>
              <CustomButton text={loading ? <CircularProgress style={{color: 'white', scale: '0.5'}} /> : 'Delete item'} border='1px solid #520909' onClick={handleDeleteItem}/>
              </>      
            )}
            <p>Units: 1</p>
            <CustomButton text='Add to Cart' border='1px solid #365F22'/>
        </Container>
    </Container>
  )
}

export default ItemCard