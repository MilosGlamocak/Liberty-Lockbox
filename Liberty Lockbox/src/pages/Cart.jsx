import React from 'react'
import { Container } from '@mui/material'
import '../styles/Cart.css'
import { useItems } from '../store'

function Cart() {

    const cartItems = useItems((state) => state.cartItems)
  return (
    <Container className='cartCont'>
        <h3>{cartItems}</h3>
    </Container>
  )
}

export default Cart