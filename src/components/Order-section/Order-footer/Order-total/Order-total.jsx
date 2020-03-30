import React from 'react';
import './Order-total.css';

export default ({ value }) => {
    return(
        <div className="total">
            <span className="total__text">Итого</span>
            <span className="total__count">{`${value},`}<span>{" 00 Р"}</span></span>
        </div>
    )
}