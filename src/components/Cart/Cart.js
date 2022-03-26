import React from 'react';

const Cart = (props) => {
    const {name, img, randomItem} = props.cart;
    return (
        <div>
            <h4><img src={img} alt="" />{name}</h4> 
            <h4>{randomItem}</h4>
        </div>
    );
    
};

export default Cart;