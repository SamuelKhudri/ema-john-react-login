import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import useFirebase from '../useFirebase/useFirebase';

const Register = () => {
    // const { signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="register-item">
            <div >
                <h2>Register here: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account? <Link to="/login">Go login page</Link></p>
                <div>-------or------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Login with Google</button>
                {/* step 6 go to see in app.js here finish step07 create log in google link btn */}
            </div>
            {/* step 5 completed step six create register route */}
        </div>
    );
};

export default Register;