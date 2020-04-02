import React from 'react';
import './Time-interval.css';

export default ({ from, to, checked, onChange }) => {
    return(
        <label className="time-interval">
            <input type="radio" name="timeInterval" checked={checked} onChange={onChange}/>
            <div className="time-interval__body">
                <span className="time-interval__text">{`${from} - ${to}`}</span>
            </div>
        </label>
    )
}