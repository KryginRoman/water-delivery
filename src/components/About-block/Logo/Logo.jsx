import React from 'react';
import './Logo.css';
import logo from './water_logo.svg';

export default () => {
    return(
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    )
}