import React, { useEffect, useState } from 'react';
import { addToDb, gerStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const [items,setItems]=useState([]);
    useEffect(()=>{
        console.log('product load before fetch');
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        console.log('local storage first line');
        const storedCart=gerStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
            
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setItems(savedCart);
    },[products])

    const handleAddToCart=(selectedProduct)=>{
        console.log('clicked',selectedProduct);
        let newCart=[];
        const exist=items.find(product=>product.id===selectedProduct.id);
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...items,selectedProduct];
        }
        else{
            const rest=items.filter(product=>product.id!==selectedProduct.id); 
            exist.quantity=exist.quantity+1;
            newCart=[...rest,exist];
        }
        
        setItems(newCart);
        addToDb(selectedProduct.id);
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