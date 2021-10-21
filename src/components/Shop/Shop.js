
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
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
    return (
        <div>
            <div className="row w-100">
                <div className="col-md-9">
                    <div className="row border p-3">
                        {products.map(product => <Product handleAddToCart={handleAddToCart} key={product.key} product={product}></Product>)}
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='btn btn-danger'>Oder Review</button>
                        </Link>
                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default Shop;