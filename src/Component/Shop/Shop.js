import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        console.log('clicked',product);
        const newItems=[...items,product];
        setItems(newItems);
    }
    return (
        <div className='shop'>
            <div className='product-container '>
                <div className='products'>
                {
                    products.map(product=><Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
                </div>
            </div>
            <div className='cart-container'>
            <Cart items={items}></Cart>
            </div>
        </div>
    );
};

export default Shop;