import React from 'react';

const CartsItem = ({ item }) => {

    return(
        <div className='row'>
            <div className='col'>{item.product_title}</div>
            <div className='col'>{item.product_price}</div>
            <div className='col'>{item.quantity}</div>
        </div>
    )
}

export default CartsItem; 