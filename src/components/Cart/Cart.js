import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity
    }
    let shiping = total > 0 ? 15 : 0;
    let tax = (total + shiping) * .10;
    let grandTotal = total + shiping + tax
    return (
        <div className="border p-4">
            <h4>Items Odered: {totalQuantity}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shping: {shiping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand-Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;