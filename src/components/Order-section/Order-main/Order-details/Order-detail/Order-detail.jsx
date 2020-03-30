import React from 'react';
import './Order-detail.css';

export default ({ leftSide, rightSide }) => {
    return(
        <div className="order-detail">
            <div className="order-detail__left-side">{leftSide}</div>
            <div className="order-detail__right-side">{rightSide}</div>
        </div>
    )
}