import React from 'react';
import './Cart.css'

const Cart = ({items}) => {
    return (
        <div className='mt-4'>
                <div>
                    <h2 className='cart-title'>Order Summary </h2>
                    <p className='fw-bold'>Selected Items:{items.length}</p>
                </div>
        </div>
    );
};

export default Cart;