import React from 'react';

const Cart = (props) => {
    const {name, img, price, ratings} = props.cart;
    return (
        <div>
            <h4><img src={img} alt="" />{name}</h4> 
        </div>
    );
    
};

export default Cart;