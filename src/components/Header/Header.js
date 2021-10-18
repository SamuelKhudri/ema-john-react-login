import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
// import useFirebase from '../useFirebase/useFirebase';
import useAuth from '../hooks/useAuth'
import './Header.css';

const Header = () => {
    // const { user, logOut } = useFirebase();
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <div>
                </div>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {/* step 16 user name show  */}
                {
                    user.email && <span style={{ color: 'white' }}>Hi"{user.displayName}"</span>
                }
                {/* step-04 log in declare */}
                {/* step 12 condition add and import log out */}
                {
                    user.email ?
                        <button onClick={logOut}>LogOut</button>

                        : <NavLink to="/login">Log in</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;