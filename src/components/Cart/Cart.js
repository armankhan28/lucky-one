import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name, img} = props.cart;
    return (
        <div className='cart'>
            <h4><img src={img} alt="" />{name}</h4> 
        </div>
    );
    
};

export default Cart;