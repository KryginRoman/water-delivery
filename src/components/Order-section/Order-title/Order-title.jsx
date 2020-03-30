import React from 'react';
import CheckMark from './Chek-mark/Chek-mark';
import './Order-title.css';

export default ({titleText, showCheckMark}) => {
    return(
        <div className="order-title">
            <h2>{titleText}</h2>
            {showCheckMark ? <CheckMark />: false}
        </div>
    )
}