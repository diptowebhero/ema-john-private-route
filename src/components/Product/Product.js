import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, stock } = props.product
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{ "maxWidth": "540px","minHeight": "250px"}}>
                <div className="row g-0">
                    <div className="col-md-4 align-items-center">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">By: {seller}</p>
                            <p className="card-text"><small class="text-muted">{stock} left</small></p>
                            <h5 className="card-title">Price: {price}</h5>
                            <button className="btn btn-primary" onClick={()=>props.handleAddToCart(props.product)}>Add To cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;