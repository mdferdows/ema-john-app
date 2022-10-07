import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="logo" />
                <div className='link'>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;