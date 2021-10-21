import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form className="w-75 mx-auto text-center">
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
                <button type="submit" class="btn btn-primary">Register</button>
                <button type="submit" class="btn btn-primary mx-2">Sign In With Google</button>
            </form>
            <p className="text-center">Already Sign In? <Link to="/login">Sign In</Link></p>
        </div>
    );
};

export default Register;