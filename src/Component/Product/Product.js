import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,seller,price,ratings,img}=props.product;
    const {handleAddToCart}=props;
    const clickHandler=()=>handleAddToCart(props.product);
    
  
    return (
        
            <div className='product mt-5 ms-3'>
                <div className='p-2'>
                    <img  className='photo' src={img} alt="" />
                </div>
                <div className='d-flex flex-column align-items-start p-2'>
                    <p className='fs-3 fw-bolder name'>{name.slice(0,10)}</p>
                    <p className='fs-4 fw-bold'>Price:{price}</p>
                </div>
                <div className='d-flex flex-column align-items-start p-2'>
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratings}<i class="fa-solid fa-star ps-2"></i></p>
                    
                </div>
                
                <div className='btn-container'>
                    <button onClick={clickHandler}  className='btn'>Add to Cart<i class="fa-solid fa-cart-shopping ps-2"></i></button>
                </div>
                
            </div>
        
    );
};

export default Product;