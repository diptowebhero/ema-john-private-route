import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const UseCart = (products) => {
    const [carts, setCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = []
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products])
    return [carts,setCart]
};

export default UseCart;