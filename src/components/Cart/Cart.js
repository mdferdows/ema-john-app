import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = product.price * product.quantity + total;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
        // console.log(total);
        // console.log(shipping);
    }
    const taxCount = (total * .1).toFixed(2);
    const tax = parseFloat(taxCount);
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items- : {quantity}</p>
            <p>Total Price:{total} </p>
            <p>Total Shipping Charge:{shipping} </p>
            <p>Tax:{tax} </p>
            <h4>Grand Total:{grandTotal}</h4>
        </div>
    );
};

export default Cart;