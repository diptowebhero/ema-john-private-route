import React from 'react';

const RivewItem = (props) => {
    const { name, price, quantity, img ,key} = props.product;
    const { handleClick } = props
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{ "maxWidth": "540px", "minHeight": "250px" }}>
                <div className="row g-0">
                    <div className="col-md-4 align-items-center">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small class="text-muted">Quantity: {quantity}</small></p>
                            <h5 className="card-title">Price: {price}</h5>
                            <button onClick={()=>handleClick(key)} className="btn btn-danger">remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RivewItem;