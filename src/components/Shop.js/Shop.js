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
         <h4>Choice for me</h4>
            </div>
        </div>
    );
};

export default Shop;