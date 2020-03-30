import React from 'react';
import './Data-item.css';

export default ({ dataNumber, dayName, isHoliday, toggleDataDay, toggleIsHoliday, checked }) => {
    const onChangeHandler = e => {
        const dataNumber = Number(e.target.value);
        toggleIsHoliday(isHoliday);
        toggleDataDay(dataNumber);
    }

    return(
        <label className="data-item">
            <input type="radio" name="monthDay" value={dataNumber} onChange={onChangeHandler} checked={checked} />
            <div className="data-item__body">
                <span className="data-item__data-number">{dataNumber}</span>
                <span className={`data-item__day-name${isHoliday ? " holiday": ""}`}>{dayName}</span>
            </div>
        </label>
    )
}