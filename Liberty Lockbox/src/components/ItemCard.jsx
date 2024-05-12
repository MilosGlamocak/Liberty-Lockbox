import React from 'react'
import '../styles/ItemCard.css'
import { Container } from '@mui/material'
import CustomButton from './CustomButton'

function ItemCard({name, chamber, price, quantity, image}) {
  return (
    <Container className='itemCardCont'>
        <Container className='cardContLeft'>
            <img src={image} className='itemImg'/>
            <Container className='cardTextLeft'>
                <h2 className='cardName'>{name}</h2>
                <p className='cardInfo'>Chamber: <p className='cardInfoBold'>{chamber}</p></p>
                <p className='cardInfo'>Price per Unit:<p className='cardInfoBold'>${price}</p></p>
                <p className='cardInfo'>In Stock:<p className='cardInfoBold'>{quantity}</p></p>
            </Container>
        </Container>
        <Container className='cardContRight'>
            <p>Units: 1</p>
            <CustomButton text='Add to Cart'/>
        </Container>
    </Container>
  )
}

export default ItemCard