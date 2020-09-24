import React, { useContext } from 'react';
import { AnimalsContext } from '../contexts/AnimalsContext';

const CartsItem = (props) => {
    const { removeItem, handleQuantity } = useContext(AnimalsContext);

    return (
        <div className='row'>
            <div className='col'>{props.item.product_title}</div>
            <div className='col'>{props.item.product_price}</div>
            <div className='col'>{props.item.quantity}</div>
            {/* <button onClick={() =>handleQuantity(e) }>
                +1
          </button>
            <button onClick={() =>handleQuantity(e) }>
                -1
          </button> */}
            <button className="removeButton" onClick={() => removeItem(props.item)}><i class="material-icons">remove</i></button>
        </div >
    )
}

export default CartsItem; 