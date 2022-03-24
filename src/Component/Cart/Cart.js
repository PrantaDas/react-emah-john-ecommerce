import React from 'react';
import './Cart.css'

const Cart = ({items}) => {
    console.log(items);

    let total=0;
    let shipping=0;
    let quantity=0;

    for(const item of items){
        total=total+item.price * item.quantity;
        quantity=quantity+item.quantity;
        shipping=shipping+item.shipping;
    }
    const tax=(total*0.1).toFixed(2);
    const grandTotal=total+shipping+parseFloat(tax);
    return (
        <div className=' cart'>
                <h2 className='cart-title mt-3'>Order Summary </h2>

                <div className='cart-details d-flex flex-column align-items-start mt-5 p-4'>
                    <p className='fw-bold'>Selected Items:{quantity}</p>
                    <p className='fw-bold'>Total Price: ${total}</p>
                    <p className='fw-bold'>Total Shipping Charge: ${shipping}</p>
                    <p className='fw-bold'>Tax: ${tax}</p>
                    <h4>Grand Total: ${grandTotal}</h4>
                </div>
        </div>
    );
};

export default Cart;