import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Ema-Jhon</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/shop"><a class="nav-link" href="/">Shop</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/review"><a class="nav-link" href="/">Order Review</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/inventory"><a class="nav-link" href="/">Inventory</a></Link>
                            </li>

                            <li class="nav-item">
                                {user.email ? <button onClick={logOut} className="btn btn-danger">Log Out</button> : <Link to="/login"> <a class="nav-link" href="t">Login</a></Link>}
                            </li>
                        </ul>
                        <form class="d-flex flex-fill mx-5">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;