import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToClick = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        setCart(newCart);   
    }
   //Random item
    const randomItem = () => {
        if (cart.length > 0  ){
            const randomValue = Math.floor(Math.random() * cart.length);
            const luckyNumber = cart[randomValue];
            setCart([luckyNumber]);
        }
    }
  //Remove item    
    const remove = () =>{
        setCart ([]);
    }
    return (
        <div className='shop'>
            <div className="products">
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddToClick = {handleAddToClick}
                        ></Product>)
                }
            </div>
            <div className="cart">
             <h3>Order Summary</h3>
            {cart.map(cart => <Cart
            cart = {cart}
            >
            </Cart>
        )}
        <button className='' onClick={randomItem}>
        <h4>Choice for me</h4>
        </button> <br />
        <button onClick={remove}>
            <p>Remove</p>
        </button>
            </div>
        </div>
    );
};

export default Shop;