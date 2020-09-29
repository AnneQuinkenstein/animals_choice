import React, { useContext } from 'react';
import { AnimalsContext } from '../contexts/AnimalsContext';
import CartsItem from './CartsItem'; 
const Cart = () => {

const { cartArray, totalPrice } = useContext(AnimalsContext)

    return(
        <>
        <div className='row'>
            <div className='col'>Item</div>
            <div className='col'>Items Price</div>
            <div className='col'>Quantity</div>
        </div>
        { cartArray.map(item=> <CartsItem item={item} key={item.id}/>)}
        <div>totalPrice: {totalPrice} </div>
        </>

    )
}

export default Cart; 