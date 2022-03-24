import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className='icon'>
                <img src={logo} alt="" />
            </div>
            <div className='option'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;