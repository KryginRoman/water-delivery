import React from 'react';
import './Time-interval.css';

export default ({ from, to, id, checked, onChange }) => {
    const onChangeHandler = e => {
        const intervalId = Number(e.target.value);
        onChange(intervalId);
    }

    return(
        <label className="time-interval">
            <input type="radio" name="timeInterval" value={id} checked={checked} onChange={onChangeHandler}/>
            <div className="time-interval__body">
                <span className="time-interval__text">{`${from} - ${to}`}</span>
            </div>
        </label>
    )
}