import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop'
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <div className="w-75 mx-auto text-center">
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                <input onClick={handleGoogleLogin} type="submit" value="Sign In With Google" class="btn btn-primary mx-2" />
            </div>
            <p className="text-center">New User? <Link to="/register">Create Account</Link></p>
        </div>
    );
};

export default Login;