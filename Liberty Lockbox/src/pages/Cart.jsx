import React from 'react'
import { Container } from '@mui/material'
import '../styles/Cart.css'
import { useItems } from '../store'
import CartItemCard from '../components/CartItemCard'

function Cart() {
    

    const cartItems = useItems((state) => state.cartItems)

    console.log(cartItems)


  return (
    <Container className='cartCont'>
        <Container className='itemsCont'>
        {cartItems.length > 0 ? cartItems.map((item) => {
            return <CartItemCard image={item.image} name={item.name} price={item.price} key={item.itemId}/>
        }) : (<h3>No items in cart</h3>)}
        </Container>
    </Container>
  )
}

export default Cart