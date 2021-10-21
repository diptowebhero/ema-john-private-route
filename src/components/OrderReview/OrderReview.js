import React from 'react';
import { useHistory } from 'react-router';
import UseCart from '../../hooks/UseCart';
import UseProduct from '../../hooks/UseProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RivewItem from '../ReviewItem/RivewItem';

const OrderReview = () => {
    const [products] = UseProduct();
    const [carts,setCart] = UseCart(products);
    const history = useHistory()
    const handleClick = key => {
        const newCart = carts.filter(cart => cart.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const handlePlaceOder = ()=>{
        history.push('/placeoder');
        clearTheCart()
    }
    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {
                        carts.map(cart => <RivewItem handleClick={handleClick} product={cart}></RivewItem>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={carts}>
                    <button onClick={handlePlaceOder} className='btn btn-danger'>Place oder</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;