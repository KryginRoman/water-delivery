import React from 'react';
import './Button.css';

export default ({textButton, onClick, type, disabled}) => {
    return(
        <button type={type} className="button" onClick={onClick} disabled={disabled}>{textButton}</button>
    )
}